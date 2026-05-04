import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import * as THREE from 'three'
import Footer from '../components/Footer'

const focusItems = [
  {
    icon: 'blur_on',
    title: 'SHADERS',
    desc: 'High-performance HLSL/GLSL surface and post-process development. Mastering the interplay between light and mathematics to achieve photorealistic materials.',
    tags: ['Unreal Engine', 'HLSL'],
  },
  {
    icon: 'account_tree',
    title: 'PROCEDURAL',
    desc: 'Building non-destructive toolsets and environment generators. Runtime systems to scale creative output without compromising artistic control.',
    tags: ['C++', 'Python'],
  },
  {
    icon: 'memory',
    title: 'OPTIMIZATION',
    desc: 'Deep-dive profiling and draw call reduction. Ensuring cinematic fidelity maintains stable framerates on target hardware through rigorous technical audits.',
    tags: ['GPU Profiling', 'Draw Calls'],
  },
]

const previewProjects = [
  {
    id: 1,
    code: 'PROJECT // LED_STAGE',
    sub: 'ICVFX & Virtual Production',
    year: '2024',
    thumb: '',
  },
  {
    id: 2,
    code: 'SYSTEM // RUNTIME_TOOL',
    sub: 'Unreal Engine C++ Tool Development',
    year: '2024',
    thumb: '',
  },
]

export default function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 3.5, 7)
    camera.lookAt(0, 0, 0)

    const cols = 50, rows = 50, sp = 0.28
    const positions = new Float32Array(cols * rows * 3)
    for (let i = 0; i < cols; i++)
      for (let j = 0; j < rows; j++) {
        const k = (i * rows + j) * 3
        positions[k] = (i - cols / 2) * sp
        positions[k + 1] = 0
        positions[k + 2] = (j - rows / 2) * sp
      }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const mat = new THREE.PointsMaterial({ color: 0x4cd6ff, size: 0.02, transparent: true, opacity: 0.4 })
    scene.add(new THREE.Points(geo, mat))

    let id
    const clock = new THREE.Clock()
    const tick = () => {
      id = requestAnimationFrame(tick)
      const t = clock.getElapsedTime()
      const pos = geo.attributes.position
      for (let i = 0; i < cols; i++)
        for (let j = 0; j < rows; j++) {
          const x = (i - cols / 2) * sp, z = (j - rows / 2) * sp
          pos.setY(i * rows + j, Math.sin(x * 1.3 + t * 0.7) * 0.13 + Math.sin(z * 1.3 + t * 0.5) * 0.13)
        }
      pos.needsUpdate = true
      renderer.render(scene, camera)
    }
    tick()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', onResize); renderer.dispose() }
  }, [])

  return (
    <main className="relative">
      {/* ── Hero ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <canvas ref={canvasRef} className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
          <div className="absolute inset-0 blueprint-grid opacity-20" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-headline text-6xl md:text-9xl font-extrabold tracking-[-0.04em] mb-4 text-on-surface">
            DOHAN // STUDIO
          </h1>
          <p className="font-headline text-secondary tracking-[0.4em] uppercase text-sm md:text-lg">
            Technical Art &amp; Engineering Excellence
          </p>
          <div className="mt-12 flex justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent opacity-50" />
          </div>
        </div>
      </section>

      {/* ── Core Focus ── */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {focusItems.map(({ icon, title, desc, tags }) => (
            <div key={title} className="group">
              <div className="mb-6 flex items-center space-x-4">
                <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
                <h3 className="font-headline text-xl tracking-[0.1em] text-on-surface">{title}</h3>
              </div>
              <p className="text-secondary leading-relaxed mb-6 font-body text-sm">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="bg-surface-variant text-[10px] uppercase tracking-widest text-secondary px-2 py-1 font-label">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Work Sneak-Peek ── */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label text-primary text-[10px] tracking-[0.3em]">SELECTED WORKS</span>
              <h2 className="font-headline text-4xl mt-2 tracking-tight">ENGINEERING THE UNSEEN</h2>
            </div>
            <Link to="/work" className="font-label text-secondary text-[10px] tracking-[0.2em] hover:text-primary transition-colors">
              VIEW ALL ARCHIVE →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewProjects.map(p => (
              <Link key={p.id} to={`/work/${p.id}`} className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden bg-surface-container mb-6 border border-outline-variant/10">
                  {p.thumb
                    ? <img src={p.thumb} alt={p.code} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                    : <div className="w-full h-full flex items-center justify-center">
                        <span className="font-label text-[10px] tracking-widest text-outline-variant">NO PREVIEW</span>
                      </div>
                  }
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-headline text-lg tracking-widest mb-1">{p.code}</h4>
                    <p className="text-secondary font-body text-xs uppercase tracking-wider">{p.sub}</p>
                  </div>
                  <span className="font-label text-[10px] text-outline-variant">{p.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Specs ── */}
      <section className="py-24 px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-label text-[10px] text-outline-variant tracking-widest">ACTIVE ENVIRONMENTS</span>
            <div className="flex gap-4 items-center">
              <span className="font-headline text-2xl">UNREAL ENGINE 5</span>
              <span className="w-1 h-1 bg-primary rounded-full" />
              <span className="font-headline text-2xl">C++ / HLSL</span>
            </div>
          </div>
          <div className="h-px w-full md:w-24 bg-outline-variant/20 hidden md:block" />
          <div className="flex flex-col gap-2">
            <span className="font-label text-[10px] text-outline-variant tracking-widest">CURRENT FOCUS</span>
            <span className="font-headline text-2xl uppercase tracking-tighter">Graphics Programming</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
