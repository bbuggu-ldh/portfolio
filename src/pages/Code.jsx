const projects = [
  {
    title: 'IMAGE → GEOMETRY GENERATOR',
    lang: 'C++ / UNREAL ENGINE',
    desc: 'Reads PNG pixel data and procedurally generates StaticMesh-based room/wall structures inside Unreal Engine.',
    tags: ['PROCEDURAL', 'UNREAL ENGINE', 'C++'],
    snippet: `// Pixel sampling & mesh generation
FColor Pixel = Bitmap[y * Width + x];
if (Pixel.R < Threshold) {
    FVector Location = GridToWorld(x, y);
    SpawnWallMesh(Location, WallMesh);
}`,
  },
  {
    title: 'NDISPLAY AUTOMATION PLUGIN',
    lang: 'C++ / UNREAL ENGINE',
    desc: 'Unreal Engine plugin automating cluster node configuration — IP, resolution, fullscreen, canvas.',
    tags: ['PLUGIN', 'NDISPLAY', 'ICVFX', 'C++'],
    snippet: `// Auto configure cluster node
UDisplayClusterConfigurationClusterNode* Node =
    NewObject<UDisplayClusterConfigurationClusterNode>();
Node->Host      = IPAddress;
Node->bIsPrimary = bPrimary;
Node->WindowRect = FDisplayClusterConfigurationRectangle(
    0, 0, ResX, ResY);`,
  },
]

export default function Code() {
  return (
    <main className="pt-32 pb-24 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="mb-20">
          <span className="font-label text-[10px] tracking-[0.3em] uppercase block mb-4" style={{ color: '#a4e6ff' }}>
            TECHNICAL
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none" style={{ color: '#E5E2E1' }}>
            CODE_BASE.
          </h1>
        </header>

        {/* Cards */}
        <div style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          {projects.map((p, i) => (
            <div key={p.title}
              className="group transition-all duration-500 p-8 md:p-10"
              style={{
                background: '#131313',
                borderBottom: i < projects.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1c1b1b'}
              onMouseLeave={e => e.currentTarget.style.background = '#131313'}>

              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left */}
                <div className="lg:w-1/3">
                  <span className="font-label text-[10px] tracking-widest block mb-2" style={{ color: '#a4e6ff' }}>{p.lang}</span>
                  <h2 className="font-headline text-2xl font-bold tracking-tight mb-3" style={{ color: '#E5E2E1' }}>{p.title}</h2>
                  <p className="font-body text-sm leading-relaxed mb-5" style={{ color: '#BAC9CD' }}>{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="font-label text-[10px] tracking-widest px-2 py-1"
                        style={{ background: '#353534', color: '#BAC9CD' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — code block (레퍼런스 스타일) */}
                <div className="lg:flex-1 overflow-x-auto"
                  style={{ background: '#0e0e0e', border: '1px solid rgba(60,73,78,0.3)' }}>
                  {/* Traffic lights */}
                  <div className="flex gap-2 px-5 py-3"
                    style={{ borderBottom: '1px solid rgba(60,73,78,0.2)' }}>
                    <span className="w-2 h-2 rounded-full" style={{ background: '#ffb4ab' }} />
                    <span className="w-2 h-2 rounded-full" style={{ background: '#ffd59c' }} />
                    <span className="w-2 h-2 rounded-full" style={{ background: '#4cd6ff' }} />
                  </div>
                  <pre className="p-5 font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre"
                    style={{ color: 'rgba(186,201,205,0.7)' }}>
                    {p.snippet}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
