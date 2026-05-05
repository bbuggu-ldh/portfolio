import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/* ─── Fragment shader ───
   Light theme — subtle FBM noise gradient with mouse-driven warp.
   Reads on white bg as a soft cool-toned ambient. */
const fragment = /* glsl */ `
precision highp float;

uniform float uTime;
uniform vec2  uMouse;
uniform vec2  uResolution;
varying vec2  vUv;

// 2D hash + noise
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0,0)), hash(i + vec2(1,0)), u.x),
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

void main() {
  vec2 uv = vUv;
  vec2 p  = uv * 2.0 - 1.0;
  float aspect = uResolution.x / uResolution.y;
  p.x *= aspect;

  vec2 m = uMouse * vec2(aspect, 1.0);

  // Mouse warp — distance-falloff
  float md = length(p - m);
  float warp = smoothstep(1.6, 0.0, md) * 0.45;

  // Layered FBM
  vec2 q = p * 1.1 + vec2(uTime * 0.03, uTime * 0.02);
  q += warp * (m - p);
  float n = fbm(q);
  float n2 = fbm(q * 2.2 + 5.0);

  // Visible pastel palette (more saturation than v1)
  vec3 white  = vec3(1.0);
  vec3 paleC  = vec3(0.78, 0.92, 1.00);
  vec3 cyan   = vec3(0.42, 0.74, 0.98);
  vec3 violet = vec3(0.74, 0.72, 1.00);
  vec3 peach  = vec3(1.00, 0.86, 0.84);

  vec3 col = white;
  col = mix(col, paleC,  smoothstep(0.20, 0.55, n));
  col = mix(col, cyan,   smoothstep(0.45, 0.80, n + warp * 0.8));
  col = mix(col, violet, smoothstep(0.55, 0.90, n2 * 0.85));
  col = mix(col, peach,  smoothstep(0.70, 0.95, n2 + warp * 0.4));

  // Soft vignette — keep center readable but visible everywhere
  float v = 1.0 - smoothstep(0.6, 1.5, length(p));
  col = mix(white, col, v * 0.7 + 0.3);

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

function ShaderPlane() {
  const { size } = useThree()
  const mesh = useRef()
  const mouse = useRef(new THREE.Vector2(0.0, 0.0))
  const target = useRef(new THREE.Vector2(0.0, 0.0))

  const uniforms = useMemo(() => ({
    uTime:       { value: 0 },
    uMouse:      { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
  }), [size.width, size.height])

  // Mouse follow
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
    mouse.current.lerp(target.current, 0.05)
    uniforms.uMouse.value.copy(mouse.current)
    uniforms.uResolution.value.set(size.width, size.height)
  })

  return (
    <mesh ref={mesh}>
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

export default function HeroShader() {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false, powerPreference: 'low-power' }}
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
      dpr={[1, 1.5]}
    >
      <ShaderPlane />
    </Canvas>
  )
}
