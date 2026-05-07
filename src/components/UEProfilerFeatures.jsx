import { C, NARROW } from './../theme'

/* Concrete feature breakdown — what the plugin actually does. */
export default function UEProfilerFeatures({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    section: 'Features',
    title: '플러그인이 하는 일',
    intro: '단일 콘솔 명령(UEProfiler.CaptureAll)으로 수집부터 보고서까지 한 번에. Editor Utility Widget UI도 제공.',
    groups: [
      {
        label: 'Capture',
        kor: '수집',
        items: [
          'CaptureAll 단일 명령 — 프레임 타이밍(1초) + stat 축적(1초) + utrace(N초) + 분석 + 리포트',
          'utrace 바이너리 — UE5 Protocol v7 (TidPacketSync) + LZ4 압축 해제 + aux data 디코딩',
          'Stat 그룹 5종 — SceneRendering · InitViews · Game · Engine · Anim (FLatestGameThreadStatsData)',
          'GPU 패스 타이밍 — FRealtimeGPUProfiler 로 패스별 시간 수집',
          '씬 메타데이터 — 액터/머티리얼/텍스처/라이트/CVar/PPV/Nanite/스케일러빌리티',
        ],
      },
      {
        label: 'Analyze',
        kor: '분석',
        items: [
          '병목 자동 분류 5종 — game_thread / render_thread / draw_call / gpu / balanced',
          'C++ 교차 분석 13개 카테고리 — stat × 씬 × GPU 데이터 교차로 원인 자동 추론',
          'JS 규칙 기반 분석 43개 — severity 정렬(red→yellow→green)',
          'LLM 분석 레이어 — 사전 프롬프트로 보고서 자동 생성',
          '인스턴싱 후보 자동 감지 — 동일 메시 반복 배치 → ISM 전환 추천',
        ],
      },
      {
        label: 'Output',
        kor: '출력',
        items: [
          '단일 HTML 리포트 — 인터넷 없이 동작 (Chart.js · Pretendard 폰트 base64 인라인)',
          '10개 탭 — 종합 분석 / GPU / CPU / I/O / 씬 / 렌더링 설정 / VSM / 레이트레이싱 / 프로파일링 / 텍스처 통계',
          '이미지/데이터 이중 fallback — stat 캡처 이미지 우선, 없으면 stat_data 자동 표시',
          'AI 이슈 카드 — 관련 액터/메시 이름 펼침 목록',
          '최적화 로드맵 — severity 뱃지(critical/high/info)와 함께 자동 생성',
        ],
      },
      {
        label: 'Utility',
        kor: '유틸리티',
        items: [
          'UEProfiler.ConvertToHISM — ProInstance SM → HISM 일괄 변환',
          'UEProfiler.SetCurbThreshold — CurbActor ISM 임계값 일괄 변경',
          'UEProfiler.DisableRoadDecalShadows — 데칼 그림자 일괄 OFF',
          'UEProfiler.ComparePresets — CVar 프리셋 A/B 비교 캡처',
        ],
      },
    ],
  } : {
    section: 'Features',
    title: 'What the plugin does',
    intro: 'A single console command (UEProfiler.CaptureAll) takes you from capture to report. Editor Utility Widget UI is also provided.',
    groups: [
      {
        label: 'Capture',
        kor: 'Capture',
        items: [
          'CaptureAll — single command: frame timing (1s) + stat accumulation (1s) + utrace (Ns) + analysis + report',
          'utrace binary — UE5 Protocol v7 (TidPacketSync), LZ4 decompression, aux data decoding',
          '5 stat groups — SceneRendering / InitViews / Game / Engine / Anim (FLatestGameThreadStatsData)',
          'GPU pass timings — collected via FRealtimeGPUProfiler',
          'Scene metadata — actors / materials / textures / lights / CVars / PPV / Nanite / scalability',
        ],
      },
      {
        label: 'Analyze',
        kor: 'Analyze',
        items: [
          '5 bottleneck classes — game_thread / render_thread / draw_call / gpu / balanced',
          '13 C++ cross-analysis categories — stat × scene × GPU triangulation auto-diagnoses root cause',
          '43 JS rule-based checks — severity-sorted (red → yellow → green)',
          'LLM analysis layer — pre-engineered prompts auto-generate the report',
          'Instancing candidate detection — finds repeated mesh placements and recommends ISM conversion',
        ],
      },
      {
        label: 'Output',
        kor: 'Output',
        items: [
          'Single HTML report — works offline (Chart.js + Pretendard fonts inlined as base64)',
          '10 tabs — AI Report / GPU / CPU / I/O / Scene / Settings / VSM / Ray Tracing / Profiling / Textures',
          'Image/data dual fallback — stat capture image preferred, otherwise auto-renders from stat_data',
          'AI issue cards — expandable lists of related actors/meshes',
          'Optimization roadmap — auto-generated with severity badges (critical/high/info)',
        ],
      },
      {
        label: 'Utility',
        kor: 'Utility',
        items: [
          'UEProfiler.ConvertToHISM — bulk-convert ProInstance SM → HISM',
          'UEProfiler.SetCurbThreshold — bulk-change CurbActor ISM thresholds',
          'UEProfiler.DisableRoadDecalShadows — bulk-disable decal shadows',
          'UEProfiler.ComparePresets — A/B capture across CVar presets',
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
            <div
              key={i}
              style={{
                background: C.bg,
                border: `1px solid ${C.border}`,
                padding: '20px 22px',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 12,
                marginBottom: 12,
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.25em',
                  color: C.accent,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  minWidth: 90,
                }}>
                  / 0{i + 1}  {g.label}
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {g.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.7,
                      color: C.text,
                      padding: '6px 0',
                      paddingLeft: 16,
                      position: 'relative',
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: 6,
                      color: C.accent,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
                    }}>
                      ▸
                    </span>
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
