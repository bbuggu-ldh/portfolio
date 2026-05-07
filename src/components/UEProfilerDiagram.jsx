import { C } from '../theme'

/* System flow diagram for UEProfiler.
   Pure SVG — no dependencies, fully responsive. */
export default function UEProfilerDiagram({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    title:    'System Flow',
    src:      '소스',
    parse:    '파싱 / 수집',
    agg:      '통합 JSON',
    llm:      'AI 분석',
    out:      '보고서',
    s1: 'Editor Utility Widget',
    s2: 'utrace binary',
    s3: 'stat group data',
    s4: 'GPU pass timings',
    s5: 'scene data',
    p1: 'parse_utrace.py',
    p2: 'FLatestGameThread\nStatsData',
    p3: 'FRealtimeGPU\nProfiler',
    a1: 'aggregated trace',
    l1: 'LLM agent\n(prompt template)',
    o1: 'HTML 대시보드',
    o2: '병목 진단',
    o3: '액션 추천',
  } : {
    title:    'System Flow',
    src:      'Source',
    parse:    'Parse / Collect',
    agg:      'Aggregated JSON',
    llm:      'AI Analysis',
    out:      'Report',
    s1: 'Editor Utility Widget',
    s2: 'utrace binary',
    s3: 'stat group data',
    s4: 'GPU pass timings',
    s5: 'scene data',
    p1: 'parse_utrace.py',
    p2: 'FLatestGameThread\nStatsData',
    p3: 'FRealtimeGPU\nProfiler',
    a1: 'aggregated trace',
    l1: 'LLM agent\n(prompt template)',
    o1: 'HTML dashboard',
    o2: 'Bottleneck diagnosis',
    o3: 'Actionable insights',
  }

  return (
    <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1180, marginLeft: 'auto', marginRight: 'auto', padding: '60px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 32 }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.2em',
            color: C.accent,
            fontWeight: 700,
          }}>/ Diagram</span>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '-0.015em',
            color: C.text,
          }}>{t.title}</h2>
          <div style={{ flex: 1, borderBottom: `1px solid ${C.border}` }} />
        </div>

        <div style={{
          background: C.bgAlt,
          border: `1px solid ${C.border}`,
          padding: '28px 24px',
          overflowX: 'auto',
        }}>
          <svg
            viewBox="0 0 1100 360"
            style={{ width: '100%', height: 'auto', display: 'block', minWidth: 760 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5"
                      markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={C.accent} />
              </marker>
            </defs>

            {/* Column titles */}
            {[
              { x: 110,  label: t.src },
              { x: 360,  label: t.parse },
              { x: 600,  label: t.agg },
              { x: 800,  label: t.llm },
              { x: 990,  label: t.out },
            ].map((c, i) => (
              <text
                key={i}
                x={c.x} y={28}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="2"
                fill={C.accent}
                fontWeight={700}
              >
                {`/ 0${i + 1}  ${c.label.toUpperCase()}`}
              </text>
            ))}

            {/* SOURCES (col 1) */}
            <Box x={20}  y={60}  w={180} h={36} label={t.s1} variant="primary" />
            <Box x={20}  y={120} w={180} h={36} label={t.s2} />
            <Box x={20}  y={170} w={180} h={36} label={t.s3} />
            <Box x={20}  y={220} w={180} h={36} label={t.s4} />
            <Box x={20}  y={270} w={180} h={36} label={t.s5} />

            {/* PARSE (col 2) */}
            <Box x={270} y={120} w={180} h={36} label={t.p1} />
            <Box x={270} y={180} w={180} h={50} label={t.p2} multiline />
            <Box x={270} y={250} w={180} h={50} label={t.p3} multiline />

            {/* AGGREGATE (col 3) */}
            <Box x={510} y={180} w={180} h={50} label={t.a1} variant="accent" />

            {/* LLM (col 4) */}
            <Box x={710} y={170} w={180} h={70} label={t.l1} multiline variant="accent" />

            {/* OUTPUTS (col 5) */}
            <Box x={910} y={130} w={180} h={36} label={t.o1} variant="primary" />
            <Box x={910} y={185} w={180} h={36} label={t.o2} />
            <Box x={910} y={240} w={180} h={36} label={t.o3} />

            {/* arrows: source → parse */}
            <Arrow x1={200} y1={138} x2={270} y2={138} />
            <Arrow x1={200} y1={188} x2={270} y2={205} />
            <Arrow x1={200} y1={238} x2={270} y2={275} />

            {/* parse → aggregate */}
            <Arrow x1={450} y1={138} x2={510} y2={195} />
            <Arrow x1={450} y1={205} x2={510} y2={205} />
            <Arrow x1={450} y1={275} x2={510} y2={215} />

            {/* aggregate → LLM */}
            <Arrow x1={690} y1={205} x2={710} y2={205} />

            {/* LLM → outputs */}
            <Arrow x1={890} y1={195} x2={910} y2={148} />
            <Arrow x1={890} y1={205} x2={910} y2={203} />
            <Arrow x1={890} y1={215} x2={910} y2={258} />
          </svg>
        </div>

        {/* Compact legend */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 24,
          marginTop: 16,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: C.textSub,
        }}>
          <span><span style={{ display: 'inline-block', width: 12, height: 12, background: C.text, marginRight: 6, verticalAlign: 'middle' }} />{lang === 'ko' ? '진입점 / 출력' : 'Entry / Output'}</span>
          <span><span style={{ display: 'inline-block', width: 12, height: 12, background: C.accent, marginRight: 6, verticalAlign: 'middle' }} />{lang === 'ko' ? '핵심 단계' : 'Key step'}</span>
          <span><span style={{ display: 'inline-block', width: 12, height: 12, border: `1px solid ${C.border}`, marginRight: 6, verticalAlign: 'middle' }} />{lang === 'ko' ? '데이터 소스 / 모듈' : 'Data source / module'}</span>
        </div>
      </div>
    </section>
  )
}

function Box({ x, y, w, h, label, variant, multiline }) {
  let fill = '#ffffff'
  let stroke = C.border
  let textColor = C.text
  let weight = 500
  if (variant === 'primary') {
    fill = C.text
    stroke = C.text
    textColor = '#ffffff'
    weight = 700
  } else if (variant === 'accent') {
    fill = C.accent
    stroke = C.accent
    textColor = '#ffffff'
    weight = 700
  }

  const lines = label.split('\n')
  const lineH = 12
  const yStart = y + h / 2 - ((lines.length - 1) * lineH) / 2 + 4

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={2} ry={2} fill={fill} stroke={stroke} strokeWidth={1} />
      {lines.map((ln, i) => (
        <text
          key={i}
          x={x + w / 2}
          y={yStart + i * lineH}
          textAnchor="middle"
          fontFamily="var(--font-headline)"
          fontSize={multiline ? 11 : 12}
          fill={textColor}
          fontWeight={weight}
        >
          {ln}
        </text>
      ))}
    </g>
  )
}

function Arrow({ x1, y1, x2, y2 }) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={C.accent}
      strokeWidth={1.4}
      markerEnd="url(#arrow)"
      opacity={0.85}
    />
  )
}
