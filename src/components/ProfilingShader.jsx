import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/* ─── Profiling-themed fragment shader ───
   Oscilloscope / frame-time graph aesthetic — animated traces,
   grid background, color-zoned (green/amber/red).
   Reads as a "performance dashboard" without being heavy. */
const fragment = /* glsl */ `
precision highp float;

uniform float uTime;
uniform vec2  uMouse;
uniform vec2  uResolution;
varying vec2  vUv;

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
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.1;
    a *= 0.5;
  }
  return v;
}

// Render a 1px line at y = lineY with given thickness, returns intensity
float line(float y, float lineY, float thickness) {
  return smoothstep(thickness, 0.0, abs(y - lineY));
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;

  // Background — very light, slightly cool
  vec3 bg = vec3(0.985, 0.99, 1.0);

  // Subtle grid (vertical bars every X pixels — like profiler timeline)
  vec2 gridUv = vUv * vec2(40.0, 18.0);
  vec2 gridFract = abs(fract(gridUv) - 0.5);
  float vert = smoothstep(0.49, 0.495, gridFract.x);
  float horiz = smoothstep(0.49, 0.495, gridFract.y);
  float grid = max(vert, horiz);
  vec3 gridCol = vec3(0.86, 0.90, 0.95);
  vec3 col = mix(bg, gridCol, grid * 0.5);

  // Mouse-driven scroll offset
  vec2 m = uMouse * 0.3;
  float scroll = uTime * 0.18 + m.x * 0.5;

  // ── Trace 1: smooth low-frequency wave (frame time, scrolling) ──
  float x = uv.x * 8.0 - scroll;
  float t1Wave = sin(x * 1.4) * 0.10 + sin(x * 3.1 + 1.2) * 0.06 + fbm(vec2(x, uTime * 0.3)) * 0.18;
  float trace1Y = 0.55 + t1Wave;

  // ── Trace 2: faster, lower amplitude (GPU time) ──
  float t2Wave = sin(x * 2.7 + 2.3) * 0.07 + cos(x * 5.0 + uTime * 0.4) * 0.05;
  float trace2Y = 0.42 + t2Wave;

  // ── Trace 3: quick spikes (draw calls / events) ──
  float spikes = step(0.92, fract(sin(floor(x * 12.0)) * 91.7)) * 0.18;
  float trace3Y = 0.30 + spikes;

  // Compute distance from current pixel to each trace line
  float t1 = line(uv.y, trace1Y, 0.012);
  float t2 = line(uv.y, trace2Y, 0.010);
  float t3 = line(uv.y, trace3Y, 0.014);

  // Color zones based on Y position (green=fast, amber=mid, red=slow)
  vec3 green = vec3(0.21, 0.78, 0.45);
  vec3 amber = vec3(0.95, 0.62, 0.18);
  vec3 red   = vec3(0.92, 0.32, 0.34);

  // trace 1: dynamic color by current Y (higher = warmer)
  vec3 t1Col = mix(green, amber, smoothstep(0.45, 0.65, trace1Y));
  t1Col = mix(t1Col, red, smoothstep(0.62, 0.75, trace1Y));

  // trace 2: cyan/blue (engine GPU)
  vec3 t2Col = vec3(0.15, 0.55, 0.95);
  // trace 3: violet (events)
  vec3 t3Col = vec3(0.55, 0.30, 0.85);

  // Compose (additive over background)
  col = mix(col, t1Col, t1 * 0.85);
  col = mix(col, t2Col, t2 * 0.75);
  col = mix(col, t3Col, t3 * 0.65);

  // Soft area fill under trace 1 (low alpha gradient)
  float fillBelow = smoothstep(trace1Y, trace1Y - 0.4, uv.y);
  col = mix(col, t1Col, fillBelow * 0.06);

  // Mouse hover spotlight
  vec2 mouseUv = vec2((uMouse.x + 1.0) * 0.5, (uMouse.y + 0.6) * 0.5);
  float md = distance(uv * vec2(aspect, 1.0), mouseUv * vec2(aspect, 1.0));
  float spot = smoothstep(0.4, 0.0, md) * 0.22;
  col += vec3(0.0, 0.15, 0.4) * spot;

  // Edge fade (so content stays readable)
  float edge = 1.0 - smoothstep(0.0, 0.15, min(min(uv.x, uv.y), min(1.0 - uv.x, 1.0 - uv.y)));
  col = mix(col, bg, edge * 0.4);

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
  const mouse = useRef(new THREE.Vector2(0, 0))
  const target = useRef(new THREE.Vector2(0, 0))

  const uniforms = useMemo(() => ({
    uTime:       { value: 0 },
    uMouse:      { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
  }), [size.width, size.height])

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
    mouse.current.lerp(target.current, 0.07)
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

export default function ProfilingShader() {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false, powerPreference: 'low-power' }}
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      dpr={[1, 1.5]}
    >
      <ShaderPlane />
    </Canvas>
  )
}
