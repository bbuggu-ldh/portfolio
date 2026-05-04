import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export const projects = [
  { id: 1, title: 'LED STAGE — TRAIN SCENE', badge: 'UE5', category: 'ICVFX / ENV', desc: 'Real LED stage shoot with Unreal Engine integration. Multi-environment stitching and camera-synced scene composition.', thumb: '', youtubeId: '' },
  { id: 2, title: 'RUNTIME TOOL SYSTEM',     badge: 'C++', category: 'TOOLS / CODE', desc: 'Mode-based UI system with skeletal mesh control, video playback, and procedural geometry. Runs as standalone .exe.', thumb: '', youtubeId: '' },
  { id: 3, title: 'MASTER MATERIAL SYSTEM',  badge: 'UE5', category: 'SHADERS / ENV', desc: 'Scalable master material architecture for environment production. RVT blending and pixel cost optimization.', thumb: '', youtubeId: '' },
  { id: 4, title: 'ASSET LIBRARY SYSTEM',    badge: 'PY',  category: 'PIPELINE / TOOLS', desc: 'Full-stack asset management with upload/download, version control, thumbnail generation, Docker backend.', thumb: '', youtubeId: '' },
  { id: 5, title: 'IMAGE → GEOMETRY GEN',   badge: 'C++', category: 'TOOLS / CODE', desc: 'PNG pixel reader that procedurally generates StaticMesh room/wall structures inside Unreal Engine.', thumb: '', youtubeId: '' },
  { id: 6, title: 'NDISPLAY AUTO PLUGIN',    badge: 'C++', category: 'ICVFX / TOOLS', desc: 'Unreal Engine plugin automating cluster node configuration — IP, resolution, fullscreen, canvas.', thumb: '', youtubeId: '' },
]

const filters = ['ALL', 'SHADERS', 'TOOLS', 'ENV', 'VFX']

export default function Work() {
  return (
    <main className="pt-32 pb-24 px-8 min-h-screen">
      {/* ── Header & Filter ── */}
      <header className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <span className="font-label text-primary text-[10px] tracking-[0.3em] uppercase mb-4 block">PORTFOLIO INDEX</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-background leading-none">
            TECHNICAL <br /> ARTISTRY.
          </h1>
        </div>
        <div className="flex items-center gap-6 pb-2">
          {filters.map((f, i) => (
            <button key={f}
              className={`font-label text-[10px] tracking-widest transition-colors ${
                i === 0
                  ? 'text-primary border-b border-primary pb-1'
                  : 'text-secondary hover:text-on-surface'
              }`}>
              {f}
            </button>
          ))}
        </div>
      </header>

      {/* ── Museum Grid ── */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ffffff10] border border-[#ffffff10]">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </section>

      {/* ── Stats ── */}
      <section className="max-w-7xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-[#ffffff10]">
        {[
          { label: 'PROJECTS SHIPPED', val: '10+' },
          { label: 'LED STAGE SHOOTS', val: '5+' },
          { label: 'TOOLS BUILT',      val: '8+' },
          { label: 'ENGINE',           val: 'UE5' },
        ].map(({ label, val }) => (
          <div key={label}>
            <span className="font-label text-[10px] text-secondary tracking-widest uppercase block mb-2">{label}</span>
            <span className="font-headline text-4xl font-bold text-on-background">{val}</span>
          </div>
        ))}
      </section>

      <div className="mt-24"><Footer /></div>
    </main>
  )
}

function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.id}`}
      className="group bg-surface hover:bg-surface-container transition-all duration-500 p-8 flex flex-col justify-between aspect-square">
      <div>
        {/* Thumbnail */}
        <div className="overflow-hidden mb-6 aspect-video bg-surface-container-low">
          {project.youtubeId ? (
            <iframe src={`https://www.youtube.com/embed/${project.youtubeId}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          ) : project.thumb ? (
            <img src={project.thumb} alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-label text-[10px] tracking-widest text-outline-variant">NO PREVIEW</span>
            </div>
          )}
        </div>
        {/* Title + Badge */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline text-xl font-bold text-on-background group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="font-label text-[10px] text-secondary border border-outline-variant px-2 py-0.5 rounded-sm">
            {project.badge}
          </span>
        </div>
        <p className="font-body text-sm text-secondary leading-relaxed max-w-xs">{project.desc}</p>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between mt-8">
        <span className="font-label text-[10px] tracking-widest text-secondary-fixed-dim uppercase">{project.category}</span>
        <span className="material-symbols-outlined text-secondary text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </div>
    </Link>
  )
}
