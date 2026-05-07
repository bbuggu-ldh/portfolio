import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

/* ─── ImageWarpShader ───
   Uses a provided image as a texture and applies FBM noise + mouse warp
   to its UV coordinates. Same flow / interaction feel as the home Hero
   shader but reveals an actual image instead of a procedural gradient. */
const fragment = /* glsl */ `
precision highp float;

uniform float     uTime;
uniform vec2      uMouse;
uniform vec2      uResolution;
uniform vec2      uTexResolution;
uniform sampler2D uTexture;
varying vec2      vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1,0)), u.x),
    mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

// "Cover" fit: scale the texture so it fills the canvas without distortion
vec2 coverUv(vec2 uv) {
  vec2 cs = uResolution;
  vec2 ts = uTexResolution;
  if (ts.x <= 0.0 || ts.y <= 0.0) return uv;
  float canvasAspect = cs.x / cs.y;
  float texAspect    = ts.x / ts.y;
  vec2 scale = vec2(1.0);
  vec2 offset = vec2(0.0);
  if (canvasAspect > texAspect) {
    scale.y = texAspect / canvasAspect;
    offset.y = (1.0 - scale.y) * 0.5;
  } else {
    scale.x = canvasAspect / texAspect;
    offset.x = (1.0 - scale.x) * 0.5;
  }
  return offset + uv * scale;
}

void main() {
  vec2 uv = vUv;
  vec2 p  = uv * 2.0 - 1.0;
  float aspect = uResolution.x / uResolution.y;
  p.x *= aspect;

  vec2 m = uMouse * vec2(aspect, 1.0);

  // Mouse warp — bigger near cursor, falls off with distance
  float md = length(p - m);
  float warp = smoothstep(1.6, 0.0, md) * 0.06;

  // FBM noise field (same flow style as home hero)
  vec2 q = p * 1.1 + vec2(uTime * 0.04);
  q += warp * (m - p);
  float n  = fbm(q);
  float n2 = fbm(q * 2.2 + 5.0);

  // Distort UV with the noise field (small displacement)
  vec2 distort = vec2(n - 0.5, n2 - 0.5) * 0.04;
  // Stronger distortion near the cursor — pulls / drags the texture
  distort += (m - p) * warp * 0.5;

  // Cover-fit + distortion
  vec2 sampleUv = coverUv(uv) + distort;
  vec4 tex = texture2D(uTexture, clamp(sampleUv, vec2(0.001), vec2(0.999)));

  // Soft white-mix base — keeps edges readable, color subdued
  vec3 baseCol = vec3(0.97, 0.98, 1.00);

  // Brighter color where mouse hovers (acts like a focus highlight)
  float focus = smoothstep(0.9, 0.0, md);
  float mix1  = 0.30 + focus * 0.55;          // 0.30 default opacity, up to 0.85 near mouse
  vec3 col = mix(baseCol, tex.rgb, mix1);

  // Subtle vignette
  float v = 1.0 - smoothstep(0.4, 1.7, length(p));
  col = mix(baseCol, col, v * 0.85 + 0.15);

  gl_FragColor = vec4(col, 1.0);
}
`

const vertex = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`

function ShaderPlane({ src }) {
  const { size } = useThree()
  const texture = useLoader(THREE.TextureLoader, src)
  const mouse = useRef(new THREE.Vector2(0, 0))
  const target = useRef(new THREE.Vector2(0, 0))

  const uniforms = useMemo(() => ({
    uTime:          { value: 0 },
    uMouse:         { value: new THREE.Vector2(0, 0) },
    uResolution:    { value: new THREE.Vector2(size.width, size.height) },
    uTexResolution: { value: new THREE.Vector2(1, 1) },
    uTexture:       { value: null },
  }), [size.width, size.height])

  useEffect(() => {
    if (texture && texture.image) {
      uniforms.uTexture.value = texture
      uniforms.uTexResolution.value.set(texture.image.width, texture.image.height)
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
      texture.wrapS = THREE.ClampToEdgeWrapping
      texture.wrapT = THREE.ClampToEdgeWrapping
      texture.needsUpdate = true
    }
  }, [texture, uniforms])

  useEffect(() => {
    const onMove = (e) => {
      target.current.set(
        (e.clientX / window.innerWidth)  * 2 - 1,
        -((e.clientY / window.innerHeight) * 2 - 1) * 0.6,
      )
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime
    mouse.current.lerp(target.current, 0.06)
    uniforms.uMouse.value.copy(mouse.current)
    uniforms.uResolution.value.set(size.width, size.height)
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function ImageWarpShader({ src }) {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false, powerPreference: 'low-power' }}
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      dpr={[1, 1.5]}
    >
      <ShaderPlane src={src} />
    </Canvas>
  )
}
