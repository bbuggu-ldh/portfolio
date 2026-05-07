import { C } from '../theme'

/* DMX Lighting Match — system flow:
   Unreal scene → SceneCapture → ACES→PQ color → DMX → ARRI fixtures */
export default function Diagram_DMX({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    title: 'System Flow',
    cols: ['소스', '샘플링', '컬러 변환', '송출', '수광'],
    s1: 'Unreal\nLED Wall 환경',
    s2: '동적 라이팅\n(emissive, light fn)',
    cap: 'SceneCapture\n카메라 주변\n100×100 바운더리',
    rt:  'render target\n(매 프레임)',
    c1:  'ACES CG\n(작업 색공간)',
    c2:  'PQ / ST.2084\n(LED 출력)',
    s3:  'Unreal DMX 플러그인\n텍스처 입력',
    s4:  'DMX 프로토콜\n(단방향)',
    o1:  'ARRI 조명',
    o2:  'genlock 24fps\n동기화',
  } : {
    title: 'System Flow',
    cols: ['Source', 'Sample', 'Color', 'Send', 'Receive'],
    s1: 'Unreal\nLED Wall env',
    s2: 'dynamic lighting\n(emissive, light fn)',
    cap: 'SceneCapture\n100×100 boundary\nnear camera',
    rt:  'render target\n(per frame)',
    c1:  'ACES CG\n(working)',
    c2:  'PQ / ST.2084\n(LED output)',
    s3:  'Unreal DMX plugin\ntexture input',
    s4:  'DMX protocol\n(one-way)',
    o1:  'ARRI fixtures',
    o2:  'genlock 24fps\nsync',
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
              <marker id="arrDmx" viewBox="0 0 10 10" refX="9" refY="5"
                      markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill={C.accent} />
              </marker>
            </defs>

            {[110, 360, 600, 800, 990].map((x, i) => (
              <text key={i} x={x} y={28} textAnchor="middle"
                    fontFamily="var(--font-mono)" fontSize="10" letterSpacing="2"
                    fill={C.accent} fontWeight={700}>
                {`/ 0${i + 1}  ${t.cols[i].toUpperCase()}`}
              </text>
            ))}

            {/* SOURCE */}
            <Box x={20}  y={100} w={180} h={50} label={t.s1} multiline variant="primary" />
            <Box x={20}  y={170} w={180} h={50} label={t.s2} multiline />

            {/* SAMPLE */}
            <Box x={270} y={90}  w={180} h={62} label={t.cap} multiline variant="accent" />
            <Box x={270} y={170} w={180} h={50} label={t.rt}  multiline />

            {/* COLOR */}
            <Box x={510} y={100} w={180} h={50} label={t.c1} multiline />
            <Box x={510} y={170} w={180} h={50} label={t.c2} multiline />

            {/* SEND */}
            <Box x={710} y={100} w={180} h={50} label={t.s3} multiline />
            <Box x={710} y={170} w={180} h={50} label={t.s4} multiline />

            {/* RECEIVE */}
            <Box x={910} y={100} w={140} h={50} label={t.o1} variant="primary" />
            <Box x={910} y={170} w={140} h={50} label={t.o2} multiline variant="accent" />

            {/* Arrows: source → sample (converging) */}
            <Arrow x1={200} y1={125} x2={270} y2={125} />
            <Arrow x1={200} y1={195} x2={270} y2={195} />

            {/* sample → color */}
            <Arrow x1={450} y1={125} x2={510} y2={125} />
            <Arrow x1={450} y1={195} x2={510} y2={195} />

            {/* color: ACES CG → PQ (transform within column) */}
            <Arrow x1={600} y1={150} x2={600} y2={170} />

            {/* color → send */}
            <Arrow x1={690} y1={195} x2={710} y2={195} />

            {/* send → receive */}
            <Arrow x1={890} y1={125} x2={910} y2={125} />
            <Arrow x1={890} y1={195} x2={910} y2={195} />
          </svg>
        </div>

        <p style={{
          marginTop: 14,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: C.textSub,
        }}>
          ★ {lang === 'ko'
            ? 'ACES CG → PQ(ST.2084) 컬러 변환을 명시적으로 처리 — LED Wall 출력 매칭의 핵심'
            : 'Explicit ACES CG → PQ (ST.2084) color conversion — the key to accurate LED-wall matching'}
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
          stroke={C.accent} strokeWidth={1.4} markerEnd="url(#arrDmx)" opacity={0.85} />
  )
}
