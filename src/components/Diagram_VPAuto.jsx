import { C } from '../theme'

/* VP Pipeline Automation — 3 sub-systems stacked vertically.
   Each row is an independent automation; together they cover the
   common friction points of a Virtual Production set. */
export default function Diagram_VPAuto({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    title: 'System Flow',
    a: {
      label: 'A — nDisplay Config 자동 생성',
      sub: '문경 스튜디오 12대 클러스터 셋업에 사용',
      n1: 'Windows UI 앱',
      n2: 'IP / 해상도\n풀스크린 / failover',
      n3: 'JSON 생성',
      n4: 'Unreal\nnDisplay (NDC)\nconfig import',
    },
    b: {
      label: 'B — Pixera ↔ Unreal OSC 브리지',
      sub: '이동 이벤트마다 XYZ 델타를 OSC로 송출',
      n1: 'Unreal\n이동 감지',
      n2: 'XYZ delta\n계산',
      n3: 'OSC 송출',
      n4: 'Pixera\n위치 갱신',
    },
    c: {
      label: 'C — Take Recorder 동기화 (영화 호프)',
      sub: '마스터 PC 1대가 4개 시스템에 동시 트리거',
      master: '마스터 PC',
      msg: 'OSC: start / stop\n+ sequence name',
      tr: ['Switchboard TR', 'Unreal TR', 'Optitrack', 'Facial Capture'],
      sync: '옵티트랙 타임코드\n+ genlock (frame-accurate)',
    },
  } : {
    title: 'System Flow',
    a: {
      label: 'A — nDisplay Config Auto-Generator',
      sub: 'Used to set up the 12-PC cluster at the Mungyeong studio',
      n1: 'Windows UI app',
      n2: 'IP / resolution\nfullscreen / failover',
      n3: 'generate JSON',
      n4: 'Unreal\nnDisplay (NDC)\nconfig import',
    },
    b: {
      label: 'B — Pixera ↔ Unreal OSC bridge',
      sub: 'Sends XYZ delta over OSC on each movement event',
      n1: 'Unreal\nmove detected',
      n2: 'XYZ delta\ncomputed',
      n3: 'OSC send',
      n4: 'Pixera\nposition updated',
    },
    c: {
      label: 'C — Take Recorder sync (film "Hope")',
      sub: 'One master PC triggers four systems simultaneously',
      master: 'Master PC',
      msg: 'OSC: start / stop\n+ sequence name',
      tr: ['Switchboard TR', 'Unreal TR', 'Optitrack', 'Facial Capture'],
      sync: 'Optitrack timecode\n+ genlock (frame-accurate)',
    },
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

        {/* Sub-system A */}
        <SubBlock title={t.a.label} subtitle={t.a.sub}>
          <svg viewBox="0 0 1100 130" style={{ width: '100%', height: 'auto', display: 'block', minWidth: 760 }}>
            <defs><Marker id="aMk" /></defs>
            <Box x={50}  y={45} w={200} h={50} label={t.a.n1} variant="primary" />
            <Box x={310} y={35} w={200} h={66} label={t.a.n2} multiline />
            <Box x={570} y={45} w={200} h={50} label={t.a.n3} variant="accent" />
            <Box x={830} y={35} w={220} h={66} label={t.a.n4} multiline variant="primary" />
            <Arr x1={250} y1={70} x2={310} y2={68} marker="aMk" />
            <Arr x1={510} y1={68} x2={570} y2={70} marker="aMk" />
            <Arr x1={770} y1={70} x2={830} y2={68} marker="aMk" />
          </svg>
        </SubBlock>

        {/* Sub-system B */}
        <SubBlock title={t.b.label} subtitle={t.b.sub}>
          <svg viewBox="0 0 1100 130" style={{ width: '100%', height: 'auto', display: 'block', minWidth: 760 }}>
            <defs><Marker id="bMk" /></defs>
            <Box x={50}  y={45} w={180} h={50} label={t.b.n1} multiline variant="primary" />
            <Box x={290} y={45} w={180} h={50} label={t.b.n2} multiline variant="accent" />
            <Box x={530} y={45} w={180} h={50} label={t.b.n3} />
            <Box x={770} y={45} w={200} h={50} label={t.b.n4} multiline variant="primary" />
            <Arr x1={230} y1={70} x2={290} y2={70} marker="bMk" />
            <Arr x1={470} y1={70} x2={530} y2={70} marker="bMk" />
            <Arr x1={710} y1={70} x2={770} y2={70} marker="bMk" />
          </svg>
        </SubBlock>

        {/* Sub-system C */}
        <SubBlock title={t.c.label} subtitle={t.c.sub} last>
          <svg viewBox="0 0 1100 240" style={{ width: '100%', height: 'auto', display: 'block', minWidth: 760 }}>
            <defs><Marker id="cMk" /></defs>
            {/* Master + OSC message */}
            <Box x={50}  y={20}  w={180} h={50} label={t.c.master} variant="primary" />
            <Box x={280} y={10}  w={220} h={70} label={t.c.msg} multiline variant="accent" />
            {/* 4 receivers */}
            {t.c.tr.map((label, i) => (
              <Box
                key={i}
                x={550} y={10 + i * 50}
                w={220} h={36}
                label={label}
              />
            ))}
            {/* Sync band */}
            <Box x={820} y={75} w={240} h={70} label={t.c.sync} multiline variant="accent" />

            {/* Arrows */}
            <Arr x1={230} y1={45} x2={280} y2={45} marker="cMk" />
            {/* OSC msg → 4 receivers (fan-out) */}
            <Arr x1={500} y1={28} x2={550} y2={28} marker="cMk" />
            <Arr x1={500} y1={50} x2={550} y2={78} marker="cMk" />
            <Arr x1={500} y1={62} x2={550} y2={128} marker="cMk" />
            <Arr x1={500} y1={75} x2={550} y2={178} marker="cMk" />
            {/* receivers → sync */}
            <Arr x1={770} y1={28}  x2={820} y2={100} marker="cMk" />
            <Arr x1={770} y1={78}  x2={820} y2={108} marker="cMk" />
            <Arr x1={770} y1={128} x2={820} y2={115} marker="cMk" />
            <Arr x1={770} y1={178} x2={820} y2={120} marker="cMk" />
          </svg>
        </SubBlock>
      </div>
    </section>
  )
}

function SubBlock({ title, subtitle, last, children }) {
  return (
    <div style={{
      background: C.bgAlt,
      border: `1px solid ${C.border}`,
      padding: '20px 24px',
      marginBottom: last ? 0 : 16,
    }}>
      <div style={{ marginBottom: 12 }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.2em',
          color: C.accent,
          fontWeight: 700,
          marginBottom: 4,
        }}>
          {title}
        </p>
        <p style={{ fontSize: 12, color: C.textSub }}>{subtitle}</p>
      </div>
      {children}
    </div>
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

function Arr({ x1, y1, x2, y2, marker }) {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={C.accent} strokeWidth={1.4} markerEnd={`url(#${marker})`} opacity={0.85} />
  )
}

function Marker({ id }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill={C.accent} />
    </marker>
  )
}
