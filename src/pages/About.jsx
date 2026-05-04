import Footer from '../components/Footer'

const skillGroups = [
  {
    title: 'ENGINEERING & ART', color: 'text-primary', barColor: 'bg-primary', border: 'border-primary/20',
    items: [
      { name: 'UNREAL ENGINE 5 (NANITE/LUMEN)', pct: 90 },
      { name: 'ICVFX / NDISPLAY', pct: 85 },
      { name: 'MATERIAL / HLSL', pct: 82 },
    ],
  },
  {
    title: 'PIPELINE & TOOLING', color: 'text-secondary', barColor: 'bg-secondary', border: 'border-outline-variant/20',
    items: [
      { name: 'PYTHON / C++', pct: 78 },
      { name: 'PIPELINE AUTOMATION', pct: 80 },
      { name: 'VERSION CONTROL (GIT)', pct: 88 },
    ],
  },
  {
    title: 'ANALYSIS & MATH', color: 'text-secondary', barColor: 'bg-secondary', border: 'border-outline-variant/20',
    items: [
      { name: 'LINEAR ALGEBRA', pct: 60 },
      { name: 'GPU PROFILING', pct: 72 },
      { name: 'RENDERING PIPELINE', pct: 65 },
    ],
  },
]

const timeline = [
  {
    period: '2023 — PRESENT', active: true,
    role: 'TECHNICAL ARTIST @ VFX STUDIO',
    desc: 'LED virtual production, ICVFX stage shoots, runtime tool development, and pipeline automation for film and broadcast.',
  },
  {
    period: '2022 — 2023', active: false,
    role: 'ENVIRONMENT ARTIST & TECHNICAL ARTIST',
    desc: 'Unreal Engine environment production, master material systems, and scene optimization for VFX projects.',
  },
  {
    period: '2021 — 2022', active: false,
    role: 'JUNIOR TECHNICAL ARTIST',
    desc: 'Asset management pipelines, Python scripting tools, and early Unreal Engine workflow integration.',
  },
]

export default function About() {
  return (
    <main className="pt-32 pb-24 px-8 md:px-24 blueprint-grid-about min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* ── Profile & Intro ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          {/* Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary/30 z-0" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-primary/30 z-0" />
              <div className="w-full aspect-[4/5] relative z-10 flex items-center justify-center bg-surface-container-low border border-outline-variant/20">
                <span className="font-label text-[10px] tracking-widest text-outline-variant">PHOTO_PLACEHOLDER</span>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="flex-1 h-px bg-outline-variant/30 self-center" />
                <span className="font-label text-[10px] tracking-[0.2em] text-secondary">ID_DOHAN.TA</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              TECHNICAL <br /> <span className="text-primary">PRECISION.</span>
            </h1>
            <div className="space-y-6 max-w-2xl">
              <p className="font-body text-lg text-on-surface leading-relaxed">
                Technical Artist at a VFX company in South Korea, specializing in Unreal Engine and real-time graphics.
                I bridge art production and technical development — building runtime tools, LED stage systems, and pipeline automation.
              </p>
              <p className="font-body text-md text-secondary leading-relaxed">
                Currently transitioning toward Graphics Programming and Engine Development.
                Actively studying C++, rendering pipelines, and the math behind real-time graphics.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-outline-variant/20 pt-12">
              {[
                { label: 'Location',     val: 'SOUTH KOREA',      highlight: false },
                { label: 'Availability', val: 'OPEN',             highlight: true },
                { label: 'Target Role',  val: 'GFX PROGRAMMER',   highlight: false },
                { label: 'Specialty',    val: 'UE5 / C++',        highlight: false },
              ].map(({ label, val, highlight }) => (
                <div key={label}>
                  <span className="block font-label text-[10px] text-secondary mb-2 tracking-widest uppercase">{label}</span>
                  <span className={`font-headline font-medium ${highlight ? 'text-primary' : 'text-on-surface'}`}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="mb-32">
          <div className="flex items-center gap-8 mb-16">
            <h2 className="font-headline text-2xl tracking-[0.2em] font-bold">CORE_SYSTEMS</h2>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {skillGroups.map(({ title, color, barColor, border, items }) => (
              <div key={title} className="space-y-8">
                <h3 className={`font-label text-xs tracking-widest ${color} border-b ${border} pb-4`}>{title}</h3>
                <div className="space-y-6">
                  {items.map(({ name, pct }) => (
                    <div key={name} className="group">
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-headline text-sm font-medium">{name}</span>
                        <span className="font-label text-[10px] text-secondary">{pct}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-surface-container overflow-hidden">
                        <div className={`h-full ${barColor}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="max-w-4xl">
          <div className="flex items-center gap-8 mb-16">
            <h2 className="font-headline text-2xl tracking-[0.2em] font-bold">LOG_SEQUENCE</h2>
            <div className="flex-1 h-[1px] bg-outline-variant/20" />
          </div>

          <div className="space-y-12 relative">
            <div className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-outline-variant/30" />
            {timeline.map(({ period, role, desc, active }) => (
              <div key={role} className="relative pl-12 group">
                <div className={`absolute left-0 top-1.5 w-2 h-2 transition-all duration-300 group-hover:scale-150 ${
                  active
                    ? 'bg-primary ring-4 ring-primary/10'
                    : 'bg-secondary ring-4 ring-secondary/5 group-hover:bg-primary'
                }`} />
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-2">
                  <span className={`font-label text-[10px] tracking-widest ${active ? 'text-primary' : 'text-secondary'}`}>
                    {period}
                  </span>
                  <h4 className="font-headline text-lg font-bold">{role}</h4>
                </div>
                <p className="font-body text-sm text-secondary max-w-2xl">{desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <div className="mt-24"><Footer /></div>
    </main>
  )
}
