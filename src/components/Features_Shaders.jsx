import { C, NARROW } from './../theme'

export default function Features_Shaders({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    section: 'Features',
    title: '시스템이 하는 일',
    intro: '매 프로젝트마다 다시 짜던 머티리얼 작업을 모듈식 라이브러리로 정리. 핵심은 (1) Triplanar 기반 다층 procedural, (2) MPC 전역 컨트롤, (3) 컴파일 타임 분기로 런타임 비용 0.',
    groups: [
      {
        label: 'Base Surface (Triplanar)',
        items: [
          '3축 (X/Y/Z) 투영으로 UV 작업 없이 텍스처 매핑 — 바닥은 Z만 enable, 벽은 X/Y',
          'World normal 절댓값 기반 가중치 블렌딩 — 자연스러운 면 전환',
          '가중치를 파라미터로 노출 → 아티스트가 컨트롤 가능',
        ],
      },
      {
        label: 'Layer Masking',
        items: [
          'Vertex Color B/C 레이어 — 메시 페인트로 수동 마스킹 영역 지정',
          '여러 텍스처 레이어를 위치별로 다르게 블렌드 가능',
        ],
      },
      {
        label: 'Procedural Detail',
        items: [
          '노이즈 (Perlin/Voronoi 등) 로 타일링 패턴 깨기',
          '메쉬 위치 기반 variation — 같은 머티리얼이어도 위치마다 다른 결과',
          'noise 종류 + 강도 모두 파라미터화',
        ],
      },
      {
        label: 'Effect Library (Material Function)',
        items: [
          'Stackable 효과 — Dirt / Liquid / Sand / Corrosion / Moss / Puddle',
          'Snow / Leaves accumulation — z 마스크 + 지형 normal 반응 + Height Blend',
          '각 효과는 별도 Material Function — 플러그인으로 패키징, 다음 프로젝트에서 즉시 재사용',
        ],
      },
      {
        label: 'Global Control (MPC + Master Actor)',
        items: [
          'MPC (Material Parameter Collection) — 계절 / 날씨 / 시간 / 눈 높이 / 윈디 강도',
          '마스터 컨트롤러 액터로 씬 전체 환경 일괄 조정',
          '식생도 동일 컨트롤러에서 관리',
          '다음 단계: UI Widget으로 빼서 오퍼레이터/아티스트가 직접 조작',
        ],
      },
      {
        label: 'Compile-time Optimization',
        items: [
          '효과 on/off는 주로 Static Switch Parameter — 컴파일 타임에 분기, 런타임 비용 0',
          '런타임 if 분기는 최소화 — 셰이더 variant로 처리',
          '머티리얼 인스턴스 수도 의식적으로 최소화',
        ],
      },
      {
        label: 'Limitations (honest)',
        items: [
          '셰이더 비용 정량 측정은 미진행 — instruction count, sampler 수, base pass cost 등',
          'VP 촬영에서 GPU 병목된 적은 없음 — 사후 대응 방식이라 정확한 cost 인지 부족',
          '다음 단계: Material Stats / RenderDoc / Unreal Insights GPU profiler로 효과별 cost 카탈로그 구축',
        ],
      },
      {
        label: 'Applications',
        items: [
          '여러 프로젝트의 마스터 머티리얼을 라이브러리로 통합',
          '플러그인 import 한 번으로 핵심 효과 즉시 사용 가능',
          '아티스트가 파라미터/MPC만으로 환경 변화 컨트롤 가능',
        ],
      },
    ],
  } : {
    section: 'Features',
    title: 'What the system does',
    intro: 'Stopped rewriting master materials project by project — collected the building blocks into a modular library. Three pillars: (1) Triplanar layered procedural, (2) MPC global control, (3) compile-time branching for zero runtime cost.',
    groups: [
      {
        label: 'Base Surface (Triplanar)',
        items: [
          'Three-axis (X/Y/Z) projection skips UV work — ground uses Z only, walls use X/Y',
          'World-normal abs blending — smooth transitions across faces',
          'Blend weights exposed as parameters → artists can override',
        ],
      },
      {
        label: 'Layer Masking',
        items: [
          'Vertex Color B/C layers — manual paint masks via Mesh Paint',
          'Different textures blended per region',
        ],
      },
      {
        label: 'Procedural Detail',
        items: [
          'Noise (Perlin / Voronoi) breaks tiling patterns',
          'Mesh-position-driven variation — same material yields different results per location',
          'Noise type and intensity exposed as parameters',
        ],
      },
      {
        label: 'Effect Library (Material Functions)',
        items: [
          'Stackable effects — Dirt / Liquid / Sand / Corrosion / Moss / Puddle',
          'Snow / Leaves accumulation — z mask + ground-normal response + height blend',
          'Each effect lives as its own Material Function and ships in a plugin for instant reuse',
        ],
      },
      {
        label: 'Global Control (MPC + Master Actor)',
        items: [
          'MPC drives season / weather / time / snow height / wind intensity',
          'Master controller actor adjusts the entire scene at once',
          'Vegetation routed through the same controller',
          'Next step: expose as a UI Widget so operators / artists can drive it directly',
        ],
      },
      {
        label: 'Compile-time Optimization',
        items: [
          'Effect on/off uses Static Switch Parameters — compile-time branch, zero runtime cost',
          'Runtime if branches kept to a minimum — handled via shader variants',
          'Material instance count kept intentionally low',
        ],
      },
      {
        label: 'Limitations (honest)',
        items: [
          'Did not formally measure shader cost (instruction count, sampler usage, base pass)',
          'Never became a GPU bottleneck on a VP shoot — but I know "no incidents" is not the same as "I know the cost"',
          'Next step: build a per-effect cost catalogue with Material Stats / RenderDoc / Unreal Insights GPU profiler',
        ],
      },
      {
        label: 'Applications',
        items: [
          'Merged the master materials of multiple projects into one library',
          'A single plugin import gets the core effects working',
          'Artists drive environment changes purely through parameters / MPC',
        ],
      },
    ],
  }

  return (
    <section style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
      <div style={{ ...NARROW, padding: '60px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 16 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em',
            color: C.accent, fontWeight: 700,
          }}>/ Features</span>
          <h2 style={{
            fontFamily: 'var(--font-headline)', fontSize: 22, fontWeight: 700,
            letterSpacing: '-0.015em', color: C.text,
          }}>{t.title}</h2>
          <div style={{ flex: 1, borderBottom: `1px solid ${C.border}` }} />
        </div>

        <p style={{
          fontSize: 14, lineHeight: 1.75, color: C.text,
          marginBottom: 32, maxWidth: 720,
        }}>
          {t.intro}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {t.groups.map((g, i) => (
            <div key={i} style={{
              background: C.bg, border: `1px solid ${C.border}`, padding: '20px 22px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.25em',
                color: C.accent, fontWeight: 700, textTransform: 'uppercase',
                display: 'block', marginBottom: 12,
              }}>
                / 0{i + 1}  {g.label}
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {g.items.map((item, j) => (
                  <li key={j} style={{
                    fontSize: 13.5, lineHeight: 1.7, color: C.text,
                    padding: '6px 0', paddingLeft: 16, position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute', left: 0, top: 6,
                      color: C.accent, fontFamily: 'var(--font-mono)', fontSize: 11,
                    }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
