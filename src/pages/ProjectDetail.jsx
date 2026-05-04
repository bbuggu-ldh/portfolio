import { useParams, Link } from 'react-router-dom'
import { projects } from './Work'
import Footer from '../components/Footer'

const details = {
  1: {
    caseNum: '001',
    heroLabel: 'LED STAGE — TRAIN SCENE',
    heroSub: 'Advanced real-time ICVFX production with Unreal Engine nDisplay cluster.',
    challenge: 'Synchronizing multiple LED wall environments with camera tracking in real-time, while maintaining correct parallax and color accuracy across different lighting conditions and scene compositions.',
    solution: 'Implemented a multi-node nDisplay cluster with NDI video input and OSC-based camera sync. Built a custom runtime switching system allowing seamless A/B/C environment transitions without restarting the engine.',
    specs: [
      { label: 'ENGINE',      val: 'UNREAL ENGINE 5' },
      { label: 'PIPELINE',    val: 'NDISPLAY CLUSTER' },
      { label: 'SYNC',        val: 'NDI + OSC' },
      { label: 'LED PANELS',  val: 'CUSTOM PITCH' },
      { label: 'RUNTIME',     val: 'REAL-TIME' },
    ],
    stack: ['UNREAL ENGINE', 'NDISPLAY', 'NDI', 'OSC', 'BLUEPRINT'],
    images: ['', ''],
  },
  2: {
    caseNum: '002',
    heroLabel: 'RUNTIME TOOL SYSTEM',
    heroSub: 'Standalone .exe with mode-based UI, skeletal mesh control, and procedural geometry.',
    challenge: 'Building a full runtime interaction system without editor tools — spawning assets, controlling skeletal meshes, playing video, and generating procedural geometry all at runtime.',
    solution: 'Architected a mode-based UI state machine in C++ with Blueprint integration. Built custom gizmo system for runtime asset placement and procedural cube/room generation from user input.',
    specs: [
      { label: 'ENGINE',     val: 'UNREAL ENGINE 5' },
      { label: 'LANGUAGE',   val: 'C++ / BLUEPRINT' },
      { label: 'BUILD',      val: 'STANDALONE .EXE' },
      { label: 'UI SYSTEM',  val: 'RUNTIME UMG' },
      { label: 'GEOMETRY',   val: 'PROCEDURAL' },
    ],
    stack: ['C++', 'BLUEPRINT', 'UMG', 'UNREAL ENGINE'],
    images: ['', ''],
  },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id)) || projects[0]
  const detail = details[parseInt(id)] || details[1]
  const idx = projects.findIndex(p => p.id === parseInt(id))
  const prev = projects[idx - 1]
  const next = projects[idx + 1]

  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="relative h-[870px] w-full overflow-hidden bg-surface-container-lowest">
        {project.thumb
          ? <img src={project.thumb} alt={project.title} className="w-full h-full object-cover opacity-60" />
          : <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #0e0e0e 0%, #1c1b1b 50%, #131313 100%)' }} />
        }

        {/* HUD Overlay */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-12">
          <div className="flex justify-between items-start opacity-40">
            <div className="font-label text-[10px] tracking-[0.2em] space-y-1 text-[#E5E2E1]">
              <p>COORD_LAT: 37.5665° N</p>
              <p>COORD_LNG: 126.9780° E</p>
              <p>SYSTEM_STATUS: STABLE</p>
            </div>
            <div className="font-label text-[10px] tracking-[0.2em] text-right text-[#E5E2E1]">
              <p>RENDER_ENGINE: UNREAL_5</p>
              <p>FRAME_TIME: 16.6MS</p>
            </div>
          </div>

          <div className="max-w-4xl">
            <div className="inline-block bg-primary text-on-primary px-3 py-1 font-label text-[10px] tracking-[0.2em] mb-6">
              CASE STUDY // {detail.caseNum}
            </div>
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-4 uppercase text-[#E5E2E1]">
              {detail.heroLabel}
            </h1>
            <p className="font-body text-secondary max-w-xl text-lg leading-relaxed">{detail.heroSub}</p>
          </div>

          <div className="flex justify-between items-end">
            <div className="h-24 w-px bg-outline-variant/30" />
            <div className="font-label text-[10px] tracking-[0.2em] flex gap-8 text-[#E5E2E1] opacity-60">
              <span>SCANNING_SURFACE... 100%</span>
              <span>DEPTH_FIELD: ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Blueprint dots overlay */}
        <div className="absolute inset-0 blueprint-dots opacity-10 pointer-events-none" />
      </section>

      {/* ── Content Grid ── */}
      <section className="max-w-[1400px] mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Narrative */}
        <div className="lg:col-span-7 space-y-24">
          {/* Challenge */}
          <div className="space-y-8">
            <h2 className="font-headline text-sm tracking-[0.3em] text-primary border-l-2 border-primary pl-4 uppercase">The Challenge</h2>
            <div className="space-y-6 text-on-surface/80 leading-loose text-lg font-body">
              <p>{detail.challenge}</p>
            </div>
          </div>

          {/* Code block */}
          <div className="space-y-12">
            <h2 className="font-headline text-sm tracking-[0.3em] text-primary border-l-2 border-primary pl-4 uppercase">Technical Logic</h2>
            <div className="bg-surface-container-low p-6 font-mono text-xs overflow-x-auto hide-scrollbar border border-outline-variant/10">
              <div className="flex gap-2 mb-4 border-b border-outline-variant/10 pb-2">
                <span className="w-2 h-2 rounded-full bg-error" />
                <span className="w-2 h-2 rounded-full bg-tertiary" />
                <span className="w-2 h-2 rounded-full bg-primary-fixed-dim" />
              </div>
              <pre className="text-secondary/70 whitespace-pre overflow-x-auto">
{`// Runtime environment switch
void UEnvSwitcher::SwitchTo(EEnvironmentMode Mode) {
    CurrentMode = Mode;

    // Deactivate all, activate target
    for (auto& Env : Environments)
        Env->SetActive(false);

    Environments[static_cast<int>(Mode)]->SetActive(true);
    OnEnvironmentChanged.Broadcast(Mode);
}`}
              </pre>
            </div>

            {/* Wireframe comparison */}
            <div className="grid grid-cols-2 gap-4">
              {['SETUP_BEFORE', 'SETUP_AFTER'].map((label, i) => (
                <div key={label} className="space-y-4">
                  <div className="aspect-square bg-surface-container overflow-hidden flex items-center justify-center">
                    <span className="font-label text-[10px] tracking-widest text-outline-variant">{label}</span>
                  </div>
                  <span className="font-label text-[10px] tracking-widest text-secondary block">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <h2 className="font-headline text-sm tracking-[0.3em] text-primary border-l-2 border-primary pl-4 uppercase">The Solution</h2>
            <div className="space-y-6 text-on-surface/80 leading-loose text-lg font-body">
              <p>{detail.solution}</p>
            </div>
          </div>
        </div>

        {/* Right: Sticky Sidebar */}
        <aside className="lg:col-span-5 space-y-12">
          <div className="bg-surface-container-low p-8 border-l border-outline-variant/20 sticky top-32">
            <h3 className="font-headline text-xs tracking-[0.4em] text-secondary mb-12 uppercase">Technical Specs</h3>
            <div className="space-y-8">
              {detail.specs.map(({ label, val }) => (
                <div key={label} className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
                  <span className="font-label text-[10px] tracking-widest text-outline">{label}</span>
                  <span className="font-mono text-sm text-primary">{val}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 space-y-4">
              <p className="font-label text-[10px] tracking-[0.2em] text-outline uppercase">Stack Utilized</p>
              <div className="flex flex-wrap gap-2">
                {detail.stack.map(s => (
                  <span key={s} className="bg-surface-variant px-3 py-1 text-[10px] font-label tracking-widest text-secondary rounded-sm">{s}</span>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <button className="w-full border border-outline-variant/30 py-4 font-headline text-xs tracking-[0.3em] hover:bg-primary hover:text-on-primary transition-all duration-300 uppercase">
                Download Case PDF
              </button>
            </div>
          </div>

          {/* Secondary visual */}
          <div className="space-y-4 p-8">
            <p className="font-label text-[10px] tracking-[0.2em] text-outline uppercase">Material Analysis</p>
            <div className="aspect-video bg-surface-container overflow-hidden flex items-center justify-center">
              <span className="font-label text-[10px] tracking-widest text-outline-variant">VISUAL_PLACEHOLDER</span>
            </div>
          </div>
        </aside>
      </section>

      {/* ── Full Width Showcase ── */}
      <section className="w-full bg-surface-container-low py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10">
            {['ENV_SHOT_01 // ATMOSPHERIC_DENSITY_HIGH', 'ENV_SHOT_02 // REALTIME_RENDERING'].map(label => (
              <div key={label} className="aspect-video relative group overflow-hidden bg-background flex items-center justify-center">
                <span className="font-label text-[10px] tracking-widest text-outline-variant">{label.split(' //')[0]}</span>
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1">
                  <span className="font-label text-[9px] tracking-widest text-[#E5E2E1]">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Navigation ── */}
      <section className="py-24 px-8 max-w-[1400px] mx-auto flex justify-between items-center">
        {prev ? (
          <Link to={`/work/${prev.id}`} className="group cursor-pointer">
            <p className="font-label text-[10px] tracking-[0.3em] text-outline mb-2">PREVIOUS PROJECT</p>
            <h4 className="font-headline text-2xl group-hover:text-primary transition-colors">{prev.title}</h4>
          </Link>
        ) : <div />}

        {next ? (
          <Link to={`/work/${next.id}`} className="group cursor-pointer text-right">
            <p className="font-label text-[10px] tracking-[0.3em] text-outline mb-2">NEXT PROJECT</p>
            <h4 className="font-headline text-2xl group-hover:text-primary transition-colors">{next.title}</h4>
          </Link>
        ) : <div />}
      </section>

      <Footer />
    </main>
  )
}
