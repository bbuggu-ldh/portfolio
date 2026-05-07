import { C } from '../theme'

/* Modular Master Material — accurate composition model:
   Library of Material Functions feeds Master Material; MPC drives globals;
   Static Switch resolves compile-time variants. */
export default function Diagram_Shaders({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    title: 'System Flow',
    libLabel:    '/ 01  Material Function Library (플러그인)',
    libSub:      '재사용 가능한 효과 — 한 번 만들면 다음 프로젝트에서 즉시 import',
    libItems:    ['Dirt', 'Liquid', 'Sand', 'Corrosion', 'Moss', 'Puddle', 'Snow', 'Leaves'],
    mmLabel:     '/ 02  Master Material',
    mmSub:       'Library 함수들을 layer로 stack',
    base:        'Triplanar Base\n(X/Y/Z enable + world normal blend)',
    mask:        'Vertex Color B/C\n(Mesh Paint 마스킹)',
    noise:       'Noise Detail\n(타일링 깨기 + variation)',
    effects:     'Effect Stack\n(Library 함수 합성)',
    mpcLabel:    '/ 03  Global Control',
    mpcSub:      'MPC + 마스터 컨트롤러 액터',
    mpcItems:    ['계절', '날씨', '시간', '눈 높이', '윈디 강도'],
    swLabel:     '/ 04  Compile-time Branch',
    swSub:       'Static Switch Parameter — 런타임 비용 0',
    swDesc:      '효과 on/off는 컴파일 타임에 분기 → 셰이더 variant 생성',
  } : {
    title: 'System Flow',
    libLabel:    '/ 01  Material Function Library (plugin)',
    libSub:      'Reusable effects — write once, import in the next project',
    libItems:    ['Dirt', 'Liquid', 'Sand', 'Corrosion', 'Moss', 'Puddle', 'Snow', 'Leaves'],
    mmLabel:     '/ 02  Master Material',
    mmSub:       'Stacks library functions as layers',
    base:        'Triplanar Base\n(X/Y/Z enable + world-normal blend)',
    mask:        'Vertex Color B/C\n(Mesh Paint masks)',
    noise:       'Noise Detail\n(break tiling + variation)',
    effects:     'Effect Stack\n(library functions composited)',
    mpcLabel:    '/ 03  Global Control',
    mpcSub:      'MPC + master controller actor',
    mpcItems:    ['Season', 'Weather', 'Time', 'Snow height', 'Wind intensity'],
    swLabel:     '/ 04  Compile-time Branch',
    swSub:       'Static Switch Parameter — zero runtime cost',
    swDesc:      'Effect on/off branches at compile time → shader variants generated',
  }

  return (
    <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1180, marginLeft: 'auto', marginRight: 'auto', padding: '60px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 32 }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.2em',
            color: C.accent, fontWeight: 700,
          }}>/ Diagram</span>
          <h2 style={{
            fontFamily: 'var(--font-headline)', fontSize: 22, fontWeight: 700,
            letterSpacing: '-0.015em', color: C.text,
          }}>{t.title}</h2>
          <div style={{ flex: 1, borderBottom: `1px solid ${C.border}` }} />
        </div>

        {/* 01 — Material Function Library */}
        <Block title={t.libLabel} subtitle={t.libSub} variant="primary">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {t.libItems.map((item, i) => (
              <span key={i} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: '#fff',
                background: C.text,
                padding: '8px 14px',
                border: `1px solid ${C.text}`,
                letterSpacing: '0.05em',
              }}>
                {item}
              </span>
            ))}
          </div>
        </Block>

        {/* arrow down */}
        <Connector />

        {/* 02 — Master Material */}
        <Block title={t.mmLabel} subtitle={t.mmSub}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 8,
          }}>
            <LayerBox label={t.base} accent="primary" />
            <LayerBox label={t.mask} />
            <LayerBox label={t.noise} />
            <LayerBox label={t.effects} accent="accent" />
          </div>
        </Block>

        {/* Two-column: MPC + Static Switch */}
        <Connector />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 16,
        }}>
          {/* 03 — MPC Global */}
          <Block title={t.mpcLabel} subtitle={t.mpcSub} flush>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {t.mpcItems.map((item, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: C.text,
                  border: `1px solid ${C.border}`,
                  padding: '6px 12px',
                  background: C.bg,
                }}>
                  {item}
                </span>
              ))}
            </div>
          </Block>

          {/* 04 — Static Switch */}
          <Block title={t.swLabel} subtitle={t.swSub} flush variant="accent">
            <p style={{
              fontSize: 13,
              lineHeight: 1.65,
              color: C.text,
              margin: 0,
            }}>
              {t.swDesc}
            </p>
          </Block>
        </div>
      </div>
    </section>
  )
}

function Block({ title, subtitle, variant, flush, children }) {
  let bg = C.bgAlt
  let border = C.border
  if (variant === 'primary') { bg = '#fafafa'; border = C.text }
  else if (variant === 'accent') { bg = '#eff6ff'; border = C.accent }

  return (
    <div style={{
      background: bg,
      border: `1px solid ${border}`,
      padding: '20px 24px',
      marginBottom: flush ? 0 : 0,
    }}>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.2em',
        color: variant === 'accent' ? C.accent : (variant === 'primary' ? C.text : C.accent),
        fontWeight: 700,
        marginBottom: 4,
      }}>
        {title}
      </p>
      <p style={{
        fontSize: 12,
        color: C.textSub,
        marginBottom: 14,
      }}>{subtitle}</p>
      {children}
    </div>
  )
}

function LayerBox({ label, accent }) {
  let bg = '#ffffff', border = C.border, color = C.text
  if (accent === 'primary') { bg = C.text; border = C.text; color = '#fff' }
  else if (accent === 'accent') { bg = C.accent; border = C.accent; color = '#fff' }
  return (
    <div style={{
      padding: '14px 16px',
      background: bg,
      border: `1px solid ${border}`,
      color,
      fontFamily: 'var(--font-headline)',
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1.4,
      whiteSpace: 'pre-line',
    }}>
      {label}
    </div>
  )
}

function Connector() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}>
      <div style={{
        width: 1,
        height: 24,
        background: C.accent,
        position: 'relative',
      }}>
        <span style={{
          position: 'absolute',
          bottom: -6,
          left: -3,
          width: 0,
          height: 0,
          borderLeft: '4px solid transparent',
          borderRight: '4px solid transparent',
          borderTop: `6px solid ${C.accent}`,
        }} />
      </div>
    </div>
  )
}
