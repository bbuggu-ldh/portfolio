import { C, NARROW } from './../theme'

export default function Features_DMX({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    section: 'Features',
    title: '시스템이 하는 일',
    intro: '"컨트롤러 UI 만들자"는 일반적 접근에서 벗어나, 언리얼 화면 자체를 진실값으로 사용해 SceneCapture 텍스처를 DMX 입력으로 직결한 워크플로. NETFLIX 본 촬영에 검증.',
    groups: [
      {
        label: 'Capture',
        items: [
          '카메라 주변 100×100 바운더리 SceneCapture — 피사체가 받는 환경광 측정',
          '매 프레임 render target 갱신 — 동적 라이팅(emissive, light function) 즉각 추적',
          '단순 평균값이 아닌 텍스처 그대로 전달 — 색역과 광원 분포 보존',
        ],
      },
      {
        label: 'Color Pipeline (★ 핵심)',
        items: [
          '작업 색공간: ACES CG (linear, wide gamut, HDR 표준)',
          '출력 색공간: PQ / ST.2084 (HDR 디스플레이 transfer function)',
          'ACES CG → PQ 변환을 명시적으로 처리 — LED Wall 출력 매칭의 핵심',
          '현장 조명감독과 색공간 캘리브레이션 동행',
        ],
      },
      {
        label: 'Transport',
        items: [
          'Unreal DMX 플러그인 활용 — 프로토콜 직접 구현 안 함, 플러그인의 텍스처 입력 인터페이스 사용',
          '텍스처 → DMX 채널 매핑 — 자동 처리',
          '단방향 송출 (Unreal → ARRI) — 양방향 sync 불필요',
        ],
      },
      {
        label: 'Hardware Sync',
        items: [
          'ARRI 조명 장비 컨트롤 — 색온도/intensity 즉시 반영',
          'genlock 24fps — 영상 / DMX / 카메라 프레임 정확 동기화',
          '레이턴시 정량 측정은 미진행 — 본 촬영에서 시각적 어색함 없이 사용 가능 수준으로 검증',
        ],
      },
      {
        label: 'Applications',
        items: [
          'NETFLIX D.P. 시즌 2 (2023) 본 촬영',
          'NETFLIX 택배기사 / Black Knight (2023) 본 촬영',
          '기타 VP 촬영 전반 — 라이팅 셋업 시간 약 50% 단축',
          '조명감독은 색공간 캘리브레이션 + 디테일 fine-tuning에만 집중하면 됨',
        ],
      },
    ],
  } : {
    section: 'Features',
    title: 'What the system does',
    intro: 'Instead of building yet another controller UI, the system uses the Unreal frame itself as the source of truth — piping a SceneCapture texture straight into the DMX plugin. Validated on NETFLIX shoots.',
    groups: [
      {
        label: 'Capture',
        items: [
          '100×100 SceneCapture around the camera — measures the actual light hitting the subject',
          'Per-frame render target update — tracks dynamic lighting (emissive, light functions) instantly',
          'Texture passed verbatim, not an averaged value — preserves color gamut and light distribution',
        ],
      },
      {
        label: 'Color Pipeline (★ key)',
        items: [
          'Working space: ACES CG (linear, wide gamut, HDR standard)',
          'Output space: PQ / ST.2084 (HDR transfer function)',
          'Explicit ACES CG → PQ conversion — central to accurate LED-wall matching',
          'Color-space calibration done on-set with the gaffer',
        ],
      },
      {
        label: 'Transport',
        items: [
          'Used Unreal\'s built-in DMX plugin — no protocol implementation from scratch, used its texture-input interface',
          'Texture → DMX channels — handled automatically',
          'One-way send (Unreal → ARRI) — no bidirectional sync needed',
        ],
      },
      {
        label: 'Hardware Sync',
        items: [
          'ARRI fixtures driven over DMX — color temp / intensity update in real time',
          'Hardware genlock at 24fps — frame-accurate sync between video / DMX / camera',
          'Latency was not formally measured — visually clean on set, usable across NETFLIX shoots',
        ],
      },
      {
        label: 'Applications',
        items: [
          'NETFLIX D.P. Season 2 (2023) — main shoot',
          'NETFLIX Black Knight (2023) — main shoot',
          'Routine use across other VP shoots — ~50% reduction in lighting setup time',
          'Gaffers now focus only on color calibration + detail fine-tuning',
        ],
      },
    ],
  }

  return (
    <section style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
      <div style={{ ...NARROW, padding: '60px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 16 }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.2em',
            color: C.accent,
            fontWeight: 700,
          }}>/ Features</span>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '-0.015em',
            color: C.text,
          }}>{t.title}</h2>
          <div style={{ flex: 1, borderBottom: `1px solid ${C.border}` }} />
        </div>

        <p style={{
          fontSize: 14,
          lineHeight: 1.75,
          color: C.text,
          marginBottom: 32,
          maxWidth: 720,
        }}>
          {t.intro}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {t.groups.map((g, i) => (
            <div key={i} style={{
              background: C.bg,
              border: `1px solid ${C.border}`,
              padding: '20px 22px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.25em',
                color: C.accent,
                fontWeight: 700,
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 12,
              }}>
                / 0{i + 1}  {g.label}
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {g.items.map((item, j) => (
                  <li key={j} style={{
                    fontSize: 13.5,
                    lineHeight: 1.7,
                    color: C.text,
                    padding: '6px 0',
                    paddingLeft: 16,
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0, top: 6,
                      color: C.accent,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
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
