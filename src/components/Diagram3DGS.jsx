import { C } from '../theme'

/* 3DGS pipeline diagram — 5 stages with per-source preprocessing,
   then merged through SAM3 → SfM → 3DGS. */
export default function Diagram3DGS({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    title: 'System Flow',
    cols: ['소스', '소스별 전처리', 'SAM3 통합', 'SfM', '3DGS'],
    src1: '360 카메라 ×2',
    src2: '드론 + GPS',
    src3: 'DSLR 아이레벨',
    pre1: '스태빌라이저 +\n9뷰 분할 (45° 오버랩)',
    pre2: 'GPS 고도 필터링\n(아이레벨만, ★)',
    pre3: 'passthrough',
    sam: 'SAM3\n인물 / 동적 객체\n제거',
    sfm: 'feature 추출\nmatching\n삼각측량\npoint cloud 초기화',
    out: '3DGS 학습\n(MCMC/ADC)\n→ .ply',
  } : {
    title: 'System Flow',
    cols: ['Source', 'Per-source preprocess', 'SAM3 merge', 'SfM', '3DGS'],
    src1: '360 cameras ×2',
    src2: 'Drone + GPS',
    src3: 'DSLR eye-level',
    pre1: 'Stabilizer +\n9-view split (45° overlap)',
    pre2: 'GPS-altitude filter\n(eye-level only, ★)',
    pre3: 'passthrough',
    sam: 'SAM3\nperson / dynamic\nobject removal',
    sfm: 'feature extract\nmatching\ntriangulation\npoint-cloud init',
    out: '3DGS training\n(MCMC/ADC)\n→ .ply',
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
          <svg viewBox="0 0 1100 320" style={{ width: '100%', height: 'auto', display: 'block', minWidth: 820 }}
               xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arr3g" viewBox="0 0 10 10" refX="9" refY="5"
                      markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={C.accent} />
              </marker>
            </defs>

            {/* Column titles */}
            {[110, 360, 600, 800, 1000].map((x, i) => (
              <text key={i} x={x} y={28} textAnchor="middle"
                    fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2"
                    fill={C.accent} fontWeight={700}>
                {`/ 0${i + 1}  ${t.cols[i].toUpperCase()}`}
              </text>
            ))}

            {/* SOURCES (col 1) — 3 stacked */}
            <Box x={20}  y={70}  w={180} h={42} label={t.src1} />
            <Box x={20}  y={140} w={180} h={42} label={t.src2} variant="primary" />
            <Box x={20}  y={210} w={180} h={42} label={t.src3} />

            {/* PER-SOURCE PREPROCESS (col 2) — 3 boxes aligned with sources */}
            <Box x={270} y={62}  w={200} h={58} label={t.pre1} multiline />
            <Box x={270} y={132} w={200} h={58} label={t.pre2} multiline variant="accent" />
            <Box x={270} y={210} w={200} h={42} label={t.pre3} />

            {/* SAM3 MERGE (col 3) — single box, centered */}
            <Box x={520} y={120} w={180} h={84} label={t.sam} multiline variant="primary" />

            {/* SfM (col 4) */}
            <Box x={730} y={108} w={180} h={108} label={t.sfm} multiline />

            {/* 3DGS OUTPUT (col 5) */}
            <Box x={940} y={108} w={140} h={108} label={t.out} multiline variant="accent" />

            {/* Arrows: source → its preprocess */}
            <Arrow x1={200} y1={91}  x2={270} y2={91}  />
            <Arrow x1={200} y1={161} x2={270} y2={161} />
            <Arrow x1={200} y1={231} x2={270} y2={231} />

            {/* Arrows: preprocess → SAM3 (converging) */}
            <Arrow x1={470} y1={91}  x2={520} y2={140} />
            <Arrow x1={470} y1={161} x2={520} y2={162} />
            <Arrow x1={470} y1={231} x2={520} y2={184} />

            {/* SAM3 → SfM */}
            <Arrow x1={700} y1={162} x2={730} y2={162} />

            {/* SfM → 3DGS */}
            <Arrow x1={910} y1={162} x2={940} y2={162} />
          </svg>
        </div>

        <p style={{
          marginTop: 14,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: C.textSub,
        }}>
          ★ {lang === 'ko'
            ? '드론 GPS 고도 필터링 — 트레이닝 시간 단축의 핵심 레버 (7일 → 3일)'
            : 'Drone GPS-altitude filtering — key lever cutting training time 7d → 3d'}
        </p>
      </div>
    </section>
  )
}

function Box({ x, y, w, h, label, variant, multiline }) {
  let fill = '#ffffff', stroke = C.border, textColor = C.text, weight = 500
  if (variant === 'primary') { fill = C.text; stroke = C.text; textColor = '#fff'; weight = 700 }
  else if (variant === 'accent') { fill = C.accent; stroke = C.accent; textColor = '#fff'; weight = 700 }

  const lines = label.split('\n')
  const lineH = 13
  const yStart = y + h / 2 - ((lines.length - 1) * lineH) / 2 + 4

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={2} fill={fill} stroke={stroke} strokeWidth={1} />
      {lines.map((ln, i) => (
        <text key={i} x={x + w / 2} y={yStart + i * lineH} textAnchor="middle"
              fontFamily="var(--font-headline)" fontSize={multiline ? 11 : 12}
              fill={textColor} fontWeight={weight}>
          {ln}
        </text>
      ))}
    </g>
  )
}

function Arrow({ x1, y1, x2, y2 }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={C.accent} strokeWidth={1.4} markerEnd="url(#arr3g)" opacity={0.85} />
  )
}
