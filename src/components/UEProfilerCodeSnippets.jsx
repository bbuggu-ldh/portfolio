import CodeSnippet from './CodeSnippet'
import { C, NARROW } from './../theme'

/* Tokenized code rendering — converts marker syntax to colored spans.
   Markers: %k{...} keyword  %s{...} string  %n{...} number
            %f{...} func     %c{...} comment %h{...} heading */
const COLORS = {
  k: '#c4b5fd',  // keyword
  s: '#86efac',  // string
  n: '#fcd34d',  // number / value
  f: '#a4e6ff',  // function / category
  c: '#6b7280',  // comment
  h: '#fda4af',  // heading
}

function renderTokens(line, keyPrefix) {
  const out = []
  const re = /%([ksnfch])\{([^}]*)\}/g
  let last = 0
  let i = 0
  let m
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) out.push(line.slice(last, m.index))
    const [, kind, val] = m
    out.push(
      <span
        key={`${keyPrefix}-${i++}`}
        style={{
          color: COLORS[kind],
          fontStyle: kind === 'c' ? 'italic' : 'normal',
          fontWeight: kind === 'h' ? 700 : 400,
        }}
      >
        {val}
      </span>,
    )
    last = m.index + m[0].length
  }
  if (last < line.length) out.push(line.slice(last))
  return out
}

function CodeLines({ lines }) {
  return (
    <>
      {lines.map((ln, i) => (
        <div key={i}>{renderTokens(ln, `l${i}`) || ' '}</div>
      ))}
    </>
  )
}

const agentProtocolLines = [
  '%c{# ★ AI 에이전트 — 리포트 생성 프로토콜}',
  '%c{# (이 플러그인을 구동하는 LLM에게 본인이 작성한 시스템 프롬프트)}',
  '',
  '%h{## 1. 소스 파일 선택}',
  '%c{# 가장 최신 *.utrace 와 가장 가까운 타임스탬프의}',
  '%c{# UEProfiler_Full_*.json 을 매칭한다 (수 초 차이 허용).}',
  '',
  '%h{## 2. 파이프라인 실행}',
  '%k{$} python Plugins/UEProfiler/Resources/parse_utrace.py \\',
  '    %s{"Saved/Profiling/<latest>.utrace"} \\',
  '    --report \\',
  '    --scene %s{"Saved/Profiling/UEProfiler_Full_<latest>.json"}',
  '',
  '%h{## 3. 출력 해석}',
  '%c{# 분석 요청이 들어오면 아래 JSON 경로를 순서대로 읽는다:}',
  '  stat_data.frame_timing_avg   →  %f{프레임 타이밍} (FPS, Game/Draw/GPU ms)',
  '  ai_analysis                  →  %f{병목 판정 + 이슈 목록}',
  '  stat_data.all_stats          →  %f{CPU stat 체인 추적}',
  '  scene_profiler.actors        →  %f{인스턴싱 / 메모리 분석}',
  '',
  '%h{## ❌ 절대 하지 말 것}',
  '  • viewer.html 무시하고 새 HTML/Markdown 리포트를 처음부터 쓰는 것',
  '  • UEProfiler_*.json (Full 없는 것) 을 --scene 에 전달',
  '  • FPS / 프레임 타이밍 값을 HTML 에 하드코딩',
  '  • 이전 레벨 분석 결과를 다른 레벨 리포트에 복사-붙여넣기',
]

const bottleneckLines = [
  '%c{# 병목 자동 분류 — 본인이 설계한 분류 체계}',
  '%c{# (C++ 수집기의 GenerateAIAnalysis() 함수에서 사용)}',
  '',
  '%f{game_thread_bound}    : Game > Render  %k{그리고}  Game > GPU',
  '%f{render_thread_bound}  : Render > GPU',
  '%f{draw_call_bound}      : Render > GPU   %k{그리고}  MeshDrawCalls > %n{2000}',
  '%f{gpu_bound}            : GPU 가 가장 큼',
  '%f{balanced}             : MaxMs ≤ %n{0}  %c{(측정 가능한 병목 없음)}',
  '',
  '%c{# ── 교차 데이터 이슈 감지 (stat × scene × GPU) ──}',
  '%f{draw_calls}        : MeshDrawCalls > %n{2000}',
  '%f{gpu_basepass}      : BasePass GPU > %n{3}ms       %c{교차: non-Nanite + 드로우콜}',
  '%f{gpu_shadows}       : Shadow GPU > %n{2}ms        %c{교차: movable 라이트 + 캐스터}',
  '%f{gpu_lumen}         : Lumen GPU > %n{3}ms         %c{교차: HW RT 설정}',
  '%f{game_thread_ticks} : GameMs > %n{16.67}ms        %c{교차: ticking 액터 수}',
  '%f{shadow_casters}    : casters > %n{5000}',
  '%f{nanite_conversion} : non-Nanite high-poly > %n{0}  %c{교차: 50k+ 메시 이름}',
]

export default function UEProfilerCodeSnippets({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    section: 'Prompt & Logic',
    intro: '구현은 Claude Code 활용한 AI-assisted 개발 — 본인 기여는 시스템 아키텍처 설계, LLM 에이전트 지시 프롬프트, 병목 진단 휴리스틱 설계.',
    cap1: 'LLM 에이전트가 따르도록 본인이 작성한 리포트 생성 프로토콜',
    cap2: '병목 자동 분류 + 교차 데이터 이슈 감지 — 본인이 설계한 휴리스틱',
  } : {
    section: 'Prompt & Logic',
    intro: 'Implementation was AI-assisted (Claude Code). My contribution was system architecture, the LLM agent instructions, and the bottleneck-diagnosis heuristics.',
    cap1: 'Report-generation protocol I authored for the LLM agent to follow',
    cap2: 'Auto-classification + cross-data issue detection — heuristics I designed',
  }

  return (
    <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div style={{ ...NARROW, padding: '60px 24px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 24 }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.2em',
            color: C.accent,
            fontWeight: 700,
          }}>/ Logic</span>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '-0.015em',
            color: C.text,
          }}>{t.section}</h2>
          <div style={{ flex: 1, borderBottom: `1px solid ${C.border}` }} />
        </div>

        <p style={{
          fontSize: 14,
          lineHeight: 1.75,
          color: C.text,
          marginBottom: 28,
          maxWidth: 720,
        }}>
          {t.intro}
        </p>

        <div style={{ marginBottom: 28 }}>
          <CodeSnippet filePath="agent-protocol.md" language="Prompt" caption={t.cap1}>
            <CodeLines lines={agentProtocolLines} />
          </CodeSnippet>
        </div>

        <CodeSnippet filePath="bottleneck-rules.md" language="Heuristics" caption={t.cap2}>
          <CodeLines lines={bottleneckLines} />
        </CodeSnippet>
      </div>
    </section>
  )
}
