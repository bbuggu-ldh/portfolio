import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

/* ─── PointCloudShader ───
   Sparse point cloud sampled from a source image. Particles flow with
   FBM noise (same feel as the home hero) and respond to mouse warp. */

const vertexShader = /* glsl */ `
uniform float uTime;
uniform vec2  uMouse;
uniform float uPointSize;

attribute vec3  aColor;
attribute float aSeed;

varying vec3  vColor;
varying float vAlpha;

// 2D value noise + fbm — matches the home hero shader feel
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1,0)), u.x),
    mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec3 pos = position;
  vec2 p2 = pos.xy;

  // FBM-driven flow (slow, smooth)
  vec2 q  = p2 * 1.0 + vec2(uTime * 0.04, uTime * 0.03);
  float n1 = fbm(q);
  float n2 = fbm(q * 1.6 + 5.7);

  vec2 flow = vec2(n1 - 0.5, n2 - 0.5) * 0.10;

  // Mouse warp — pulls particles toward cursor with falloff
  vec2 fromMouse = p2 - uMouse;
  float md = length(fromMouse);
  float warp = smoothstep(0.9, 0.0, md);

  pos.xy += flow;
  pos.xy += (uMouse - p2) * warp * 0.18;
  pos.z  += warp * 0.08;

  // Center fade — particles fade out toward the middle so text on top stays readable
  float distFromCenter = length(p2);
  float centerFade = smoothstep(0.0, 1.0, distFromCenter);

  vColor = aColor;
  vAlpha = mix(0.30, 0.85, warp) * centerFade;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  // Smaller base size so points don't smear into blobs
  gl_PointSize = uPointSize * (0.6 + warp * 1.0) * (240.0 / -mvPosition.z);
  gl_Position  = projectionMatrix * mvPosition;
}
`

const fragmentShader = /* glsl */ `
varying vec3  vColor;
varying float vAlpha;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.05, d);
  gl_FragColor = vec4(vColor, a * vAlpha);
}
`

function Particles({ src, density = 90 }) {
  const texture = useLoader(THREE.TextureLoader, src)
  const mouse = useRef(new THREE.Vector2())
  const target = useRef(new THREE.Vector2())

  // Sample image into sparse particles — colors driven entirely by source pixels
  const buffers = useMemo(() => {
    if (!texture.image) return null
    const img = texture.image
    const aspect = img.width / img.height
    const w = density
    const h = Math.max(1, Math.round(density / aspect))

    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    ctx.drawImage(img, 0, 0, w, h)
    const data = ctx.getImageData(0, 0, w, h).data

    const positions = []
    const colors = []
    const seeds = []

    // Cover-fit: cloud overflows the visible camera frustum so it always fills
    const baseSize = 3.2
    const layoutW = aspect >= 1 ? baseSize : baseSize * aspect
    const layoutH = aspect >= 1 ? baseSize / aspect : baseSize

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4
        const r = data[i] / 255
        const g = data[i + 1] / 255
        const b = data[i + 2] / 255
        const lum = 0.299 * r + 0.587 * g + 0.114 * b
        if (lum > 0.92) continue                        // skip near-white
        if (lum < 0.18) continue                        // skip near-black background
        positions.push(
          (x / (w - 1) - 0.5) * layoutW,
          -(y / (h - 1) - 0.5) * layoutH,
          0,
        )
        colors.push(r, g, b)
        seeds.push(Math.random())
      }
    }

    return {
      positions: new Float32Array(positions),
      colors:    new Float32Array(colors),
      seeds:     new Float32Array(seeds),
      count:     seeds.length,
    }
  }, [texture, density])

  const uniforms = useMemo(() => ({
    uTime:      { value: 0 },
    uMouse:     { value: new THREE.Vector2() },
    uPointSize: { value: 1.4 },
  }), [])

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -((e.clientY / window.innerHeight) * 2 - 1) * 0.6
      target.current.set(x * 0.85, y * 0.85)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime
    mouse.current.lerp(target.current, 0.06)
    uniforms.uMouse.value.copy(mouse.current)
  })

  if (!buffers) return null

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={buffers.count}
          array={buffers.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aColor"
          count={buffers.count}
          array={buffers.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSeed"
          count={buffers.count}
          array={buffers.seeds}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthTest={false}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  )
}

export default function PointCloudShader({ src, density }) {
  return (
    <Canvas
      gl={{ antialias: true, alpha: false, powerPreference: 'low-power' }}
      camera={{ position: [0, 0, 1.2], fov: 55 }}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      dpr={[1, 1.25]}
      frameloop="always"
    >
      <color attach="background" args={['#fafafa']} />
      <Particles src={src} density={density} />
    </Canvas>
  )
}
