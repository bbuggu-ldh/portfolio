import { C, NARROW } from './../theme'

export default function Features_VPAuto({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    section: 'Features',
    title: '시스템이 하는 일',
    intro: '하나의 큰 시스템이 아니라, 각각 다른 마찰점을 자동화한 세 개의 독립 도구. 공통점은 모두 OSC / Python / Editor 기반의 가벼운 도구로, 현장에서 필요한 시점에 따로 또는 함께 사용 가능.',
    groups: [
      {
        label: 'A — nDisplay Config 자동 생성',
        items: [
          '입력: IP / 해상도 / 풀스크린 / failover — 핵심 옵션 4가지만',
          '실행 환경: Windows UI 앱 (별도 도구) — Unreal 외부에서 실행',
          '출력: nDisplay (NDC) config JSON — Unreal에서 그대로 import',
          '실증: 문경 스튜디오 12대 클러스터 셋업에 사용 — 휴먼 에러 사실상 제거',
        ],
      },
      {
        label: 'B — Pixera ↔ Unreal OSC 브리지',
        items: [
          '문제: Pixera는 LED 오브젝트의 로컬 축으로만 동작 — 회전된 상태에서 직관적 이동 불가',
          '트리거: Unreal 측 이동 이벤트 (변경 시에만 송출, 매 프레임 X)',
          '동작: Unreal에서 XYZ 델타 계산 → OSC 송출 → Pixera에 동일한 델타 적용',
          '효과: LED 오브젝트가 회전된 상태에서도 언리얼에서 작업한 그대로 직관적인 움직임 재현',
        ],
      },
      {
        label: 'C — Take Recorder 동기화 (영화 호프)',
        items: [
          '구성: 마스터 PC 1대 + 4개 레코딩 시스템 (Switchboard TR / Unreal TR / Optitrack / Facial)',
          '마스터 OSC 메시지: start / stop + sequence name — 트리거 외엔 각자 자기 레코딩 메커니즘 사용',
          '시간 동기화: 옵티트랙 타임코드 마스터 + 하드웨어 genlock 24fps — frame-accurate',
          '효과: 현장에서 4개 시스템 결과를 즉시 합쳐서 재생 가능 → 감독이 테이크 직후 의사결정',
        ],
      },
      {
        label: 'Applications',
        items: [
          '문경 스튜디오 — 12대 클러스터 셋업 (A 적용)',
          'Pixera 기반 LED Wall 송출 환경 — 다수 VP 촬영 (B 적용)',
          '곧 개봉 예정 영화 "호프" 본 촬영 — 모션캡처 + 카메라 + 페이셜 통합 (C 적용)',
        ],
      },
    ],
  } : {
    section: 'Features',
    title: 'What the systems do',
    intro: 'Not one big system — three independent tools that each automate a different friction point on a VP set. All are lightweight (OSC / Python / Editor-based) and can be used separately or together.',
    groups: [
      {
        label: 'A — nDisplay Config Auto-Generator',
        items: [
          'Inputs: IP / resolution / fullscreen / failover — only the four key options',
          'Runs as a standalone Windows UI app — outside of Unreal',
          'Outputs an nDisplay (NDC) config JSON — imported straight into Unreal',
          'Field-tested on the Mungyeong studio\'s 12-PC cluster — human error effectively eliminated',
        ],
      },
      {
        label: 'B — Pixera ↔ Unreal OSC bridge',
        items: [
          'Problem: Pixera operates only on the LED object\'s local axis, so rotated stages broke directional input',
          'Trigger: a movement event on the Unreal side (sent on change, not every frame)',
          'Flow: Unreal computes XYZ delta → OSC send → Pixera applies the same delta',
          'Result: rotated LED stages still feel intuitive — what you move in Unreal is what you see',
        ],
      },
      {
        label: 'C — Take Recorder sync (film "Hope")',
        items: [
          'Setup: one master PC + four recording systems (Switchboard TR / Unreal TR / Optitrack / Facial)',
          'Master OSC messages: start / stop + sequence name — beyond the trigger, each device records via its own mechanism',
          'Time sync: Optitrack as the timecode master + hardware genlock at 24fps — frame-accurate',
          'Result: the four streams play back as one take immediately on set — the director can decide between takes without waiting',
        ],
      },
      {
        label: 'Applications',
        items: [
          'Mungyeong studio — 12-PC cluster setup (A)',
          'Pixera-driven LED Wall shoots — applied across multiple VP productions (B)',
          'Upcoming film "Hope" — integrated mocap + virtual camera + facial capture (C)',
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
