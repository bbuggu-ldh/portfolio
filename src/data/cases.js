// Tier 1 + Tier 2 case studies. Each case has bilingual content.
// Consumed by /cases (list) and /cases/:slug (detail) pages.

export const cases = [
  // ────────────────────────────────────────────────────────────────
  {
    id: 'ueprofiler',
    slug: 'ueprofiler',
    badge: 'PLUGIN',
    year: '2025',
    tier: 1,
    tags: ['Unreal Plugin', 'C++', 'Python', 'LLM', 'GPU Profiling'],
    publicRefs: [],
    title: {
      ko: 'UEProfiler — VP 프로파일링 자동 분석 플러그인',
      en: 'UEProfiler — Automated VP Profiling Plugin',
    },
    summary: {
      ko: 'nDisplay 환경의 GPU 병목을 빠르게 파악하기 위해, Unreal trace 데이터를 LLM 기반으로 분석하는 자체 프로파일링 플러그인 개발',
      en: 'A custom Unreal plugin that pipes trace data into an LLM agent to diagnose nDisplay GPU bottlenecks under shoot deadlines.',
    },
    situation: {
      ko: [
        '에디터에서 40~50 FPS로 동작하던 씬이 nDisplay LED Wall로 출력되면 10~15 FPS까지 드랍.',
        'VP 촬영은 실시간 동기화가 핵심이라 이 프레임 드랍은 촬영 자체가 불가능한 수준.',
        'nDisplay 환경(NDC)은 단일 PC가 아닌 클러스터 렌더링 — 에디터 기준 최적화로는 한계.',
      ],
      en: [
        'Scenes running 40–50 FPS in the editor dropped to 10–15 FPS when output through nDisplay to the LED Wall.',
        'VP shoots depend on real-time sync, so this kind of drop kills the shoot.',
        'nDisplay (NDC) renders across clusters, not a single PC — editor-level tuning hits a wall.',
      ],
    },
    task: {
      ko: [
        '기존 도구: stat scenerendering / unit / gpu, Unreal Insights, GPU Profiler.',
        '문제점: trace 데이터의 용어/구조가 복잡해 렌더링 파이프라인을 완전히 이해하지 못한 상태에서는 어디부터 봐야 할지 막막.',
        '분석 1회당 시간 소모가 커서 촬영 일정 안에서 반복 사이클을 돌리기 어려움.',
      ],
      en: [
        'Existing tools: stat scenerendering / unit / gpu, Unreal Insights, GPU Profiler.',
        'Problem: raw trace data is dense — without a full grasp of the rendering pipeline you do not know where to start.',
        'Each pass took too long to fit inside a shoot day.',
      ],
    },
    action: {
      ko: [
        '아키텍처: 2단계 파이프라인 — (1) Editor Utility로 trace 추출 → (2) LLM 에이전트가 사전에 프롬프트 엔지니어링된 분석 템플릿으로 보고서 자동 생성.',
        '핵심 설계: 단순 시각화 도구가 아닌 분석 자동화 — 도메인 지식이 부족한 팀원도 보고서를 보고 즉시 액션 가능.',
        '플러그인 형태로 패키징하여 다른 프로젝트에서도 재사용 가능하게.',
      ],
      en: [
        'Two-stage pipeline: (1) Editor Utility extracts trace data → (2) LLM agent runs pre-engineered analysis templates and generates a structured report.',
        'Designed as analysis automation, not a viewer — even teammates without deep rendering knowledge can read the report and act on it.',
        'Shipped as a plugin so it carries forward to every new project.',
      ],
    },
    result: {
      ko: [
        '병목 메쉬/패스 파악 시간 단축 → 최적화 사이클 속도 향상.',
        '도메인 지식이 부족한 팀원도 분석 가능 → 최적화 작업의 bus factor 분산.',
        '한계 + 다음 목표: 현재는 단일 PC 기준. 실제 NDC는 마스터 1대 + 렌더 노드 8~12대 — 같은 네트워크 IP 자동 수집 + 마스터에서 일괄 프로파일링 + 노드별 데이터 통합 분석을 다음 단계로 개발 중.',
      ],
      en: [
        'Faster identification of bottleneck meshes/passes → tighter optimization loop.',
        'Less senior teammates can run their own analysis → optimization work no longer bottlenecked on one person.',
        'Limit + next step: today it covers a single PC. Real NDC runs 1 master + 8–12 render nodes — building IP discovery, master-side cluster-wide profiling, and per-node data merging next.',
      ],
    },
  },

  // ────────────────────────────────────────────────────────────────
  {
    id: '3dgs-pipeline',
    slug: '3dgs-pipeline',
    badge: '3DGS',
    year: '2025',
    tier: 1,
    tags: ['3DGS', 'SfM', 'Python', 'OpenCV', 'SAM'],
    publicRefs: [],
    title: {
      ko: '3DGS 트레이닝 파이프라인 — NETFLIX 괸당',
      en: '3DGS Training Pipeline — NETFLIX Gwaeundang',
    },
    summary: {
      ko: '1주일 제작 기한 안에 photorealistic 드라이빙 배경을 확보하기 위해, 3DGS 전처리 파이프라인을 자체 설계하여 트레이닝 시간을 7일 → 3일로 단축',
      en: 'To deliver a photoreal driving plate within a one-week deadline, designed a 3DGS preprocessing pipeline that cut training time from 7 days to 3.',
    },
    situation: {
      ko: [
        'NETFLIX 괸당 드라이빙 씬 VP 테스트 촬영 — LED Wall 중앙에 실제 자동차를 배치하고 차창 밖 배경을 LED로 송출.',
        '비/번개/눈 등 날씨 변화 표현이 필요 → 2D 영상이 아닌 3D 환경 필요.',
        '동시에 photorealistic 퀄리티 요구 — 일반 모델링/매트페인팅으로는 시간 부족.',
        '데드라인: 데이터 준비 + LED 송출까지 1주일.',
      ],
      en: [
        'NETFLIX Gwaeundang driving-scene VP test shoot — a real car on the LED stage with the outside view rendered to the LED Wall.',
        'Weather variation (rain, lightning, snow) ruled out 2D plates; needed a 3D environment.',
        'Required photoreal quality, but the schedule did not allow modeling or matte-painting.',
        'Deadline: data + LED output ready within one week.',
      ],
    },
    task: {
      ko: [
        '파이프라인 전체 설계 및 구현 책임.',
        '사전 R&D: 어떤 촬영 방식이 3DGS 학습에 효율적인지 테스트.',
        '촬영 가이드 수립 + 전처리 툴 개발 + 촬영 실행 계획(스팟별 순서, 시간 배분, 백업, 원격 분산 트레이닝).',
      ],
      en: [
        'Owned the end-to-end pipeline design.',
        'Pre-shoot R&D — tested which capture methods feed 3DGS training most efficiently.',
        'Wrote the on-set capture guide, built the preprocessing tool, and planned execution (per-spot order, time budget, backup, remote distributed training).',
      ],
    },
    action: {
      ko: [
        '데이터 수집: 오픈카 + 360 카메라 ×2 + DSLR 아이레벨 + 드론 (총 10,000장 이상).',
        '전처리 자동화 툴 (Python + OpenCV/numpy): SAM3 인물 제거 → 스태빌라이저 → 업스케일링 → 360° 9뷰 분할 (45° 오버랩) → SfM → 3DGS.',
        '핵심 레버 — GPS 기반 필터링: 드론 메타데이터의 위도/경도/고도를 활용해 아이레벨 ~ 약간 위까지만 트레이닝 데이터로 사용. 트레이닝 시간 단축의 결정적 요인.',
        '촬영 실행: 정해진 스팟별 백업 → 분할 → 원격 분산 트레이닝 스케줄 사전 설계.',
      ],
      en: [
        'Capture: open-top car + 2× 360 cameras + eye-level DSLR + drone — over 10,000 frames.',
        'Preprocessing tool (Python + OpenCV/numpy): SAM3 person removal → stabilization → upscaling → 360° split into 9 views with 45° overlap → SfM → 3DGS.',
        'Key lever — GPS-based filtering: used drone lat/lon/altitude metadata to keep only eye-level (and just above) frames for training. The biggest single contributor to the time win.',
        'Execution: per-spot backup → split → remote distributed training, all scheduled before the shoot.',
      ],
    },
    result: {
      ko: [
        '트레이닝 기간 7일 → 3일 (~57% 단축).',
        '데이터 수집 → 전처리 → 트레이닝까지 1주일 데드라인 내 완수.',
        '한계: 3DGS 알고리즘 자체(MCMC/ADC)는 미수정 — 개념 이해 수준에서 전처리만 다룸.',
        '본 촬영 미적용: 당시 Unreal Engine의 3DGS 플러그인 생태계가 미성숙해 LED 송출 통합이 안정적이지 않았음. 단, 파이프라인 자체는 검증되어 후속 3DGS 프로젝트(한국도로공사 동탄터널 소나무 3DGS 등)로 이어짐.',
      ],
      en: [
        'Training time: 7 days → 3 days (~57% reduction).',
        'Capture → preprocessing → training all completed within the one-week deadline.',
        'Limit: did not modify the 3DGS algorithm itself (MCMC/ADC) — only the preprocessing layer.',
        'Did not ship to the main shoot — at the time, the Unreal 3DGS plugin ecosystem was too immature for stable LED integration. The pipeline itself carried forward to later 3DGS work (Korea Expressway Dongtan tunnel pine forest, etc.).',
      ],
    },
  },

  // ────────────────────────────────────────────────────────────────
  {
    id: 'dmx-lighting-match',
    slug: 'dmx-lighting-match',
    badge: 'DMX',
    year: '2023',
    tier: 1,
    tags: ['DMX', 'SceneCapture', 'ACES', 'PQ', 'ARRI'],
    publicRefs: [],
    title: {
      ko: '현장 조명 실시간 매칭 시스템 (SceneCapture → DMX)',
      en: 'Real-time On-set Lighting Match (SceneCapture → DMX)',
    },
    summary: {
      ko: 'Unreal 가상 환경의 라이팅 변화를 실시간으로 캡처해 DMX로 송출, 현장 ARRI 조명을 자동 동기화하는 워크플로 제안 및 구현. NETFLIX DP2, 택배기사 등 본 촬영에 적용',
      en: 'Captures Unreal lighting in real time and pushes it through DMX to drive on-set ARRI fixtures. Proposed the design and built it. Shipped on NETFLIX DP2 and The Bequeathed.',
    },
    situation: {
      ko: [
        'VP 촬영의 핵심은 피사체와 LED 배경 라이팅 일치 — 안 맞으면 합성처럼 보이고 색온도 불일치로 카메라 화이트밸런스도 깨짐.',
        '특히 Unreal 내 emissive 머티리얼이나 라이트 펑션처럼 동적으로 변하는 광원은 현장 조명이 따라잡을 수 없어 어색함이 두드러짐.',
      ],
      en: [
        'On a VP shoot, subject and LED background lighting must match — otherwise the comp falls apart and the camera cannot lock white balance.',
        'Dynamic Unreal lights (emissive materials, light functions) shift faster than crew can chase manually, and the mismatch is immediately visible on camera.',
      ],
    },
    task: {
      ko: [
        '기존 워크플로: 조명감독이 언리얼 화면을 눈으로 보고 수동 조정 + 언리얼 쪽에서 역으로 맞추기.',
        '문제: 동적 변화에 즉각 대응 불가, 매번 수동 조정으로 셋업 시간 과다.',
        '팀 내에서 "DMX로 언리얼에서 컨트롤러를 만들어 즉각 조정"하자는 방향 논의 중이었음.',
      ],
      en: [
        'Old workflow: the gaffer watched the Unreal output and matched lighting by eye, with extra back-and-forth tweaks in-engine.',
        'Result: no response to dynamic changes, and setup time ballooned every time we changed a look.',
        'The team was discussing a UI controller in Unreal driving DMX as the next step.',
      ],
    },
    action: {
      ko: [
        '핵심 기여: 컨트롤러 UI 대신 "언리얼 화면 자체를 진실값으로 사용해 SceneCapture 텍스처를 DMX 입력으로 직결" 제안 및 구현.',
        '광원 샘플링: 카메라 주변 100×100 바운더리 SceneCapture로 피사체가 받는 환경광 측정.',
        '데이터 변환: SceneCapture render target 텍스처를 Unreal DMX 플러그인의 텍스처 입력으로 직접 연결.',
        '컬러 사이언스: 작업 색공간 ACES CG → LED 출력 PQ (ST.2084) 변환을 명시적으로 처리. 현장 조명감독과 색공간 캘리브레이션 동행.',
        '조명 장비: ARRI 시리즈를 DMX로 실시간 컨트롤. 구현은 Unreal 자체 DMX 플러그인 활용.',
      ],
      en: [
        'Core idea: instead of building a UI controller, treat the Unreal frame itself as the source of truth — pipe a SceneCapture texture straight into DMX.',
        'Light sampling: a 100×100 SceneCapture around the camera measures the actual lighting hitting the subject.',
        'Conversion: that render target feeds directly into the Unreal DMX plugin\'s texture input.',
        'Color science: handled ACES CG (working) → PQ / ST.2084 (LED output) explicitly, calibrating with the gaffer on set.',
        'Fixtures: ARRI series, driven over DMX in real time, using Unreal\'s built-in DMX plugin.',
      ],
    },
    result: {
      ko: [
        '라이팅 셋업 시간 약 50% 단축 — 조명감독은 색공간 캘리브레이션 + 디테일 fine-tuning에만 집중.',
        '매칭 정확도 큰 폭 향상 — 동적 라이팅 변화에 조명이 자동으로 따라감.',
        '실제 적용: NETFLIX DP2 (2023), 택배기사 (2023) 본 촬영 + 기타 VP 촬영 전반.',
        '한계: 정량 레이턴시 측정은 미진행. 본 촬영에서 시각적 어색함 없이 사용 가능 수준으로 검증되었으나, 다음 프로젝트에서는 Unreal Insights로 캡처→DMX 송출 타임스탬프 측정 예정.',
      ],
      en: [
        'On-set lighting setup time roughly halved — the gaffer now focuses on color calibration and fine detail.',
        'Big jump in match accuracy — lighting tracks dynamic changes automatically.',
        'Shipped on: NETFLIX DP2 (2023), The Bequeathed (2023), and routine use across other VP shoots.',
        'Limit: did not formally measure latency. Visually clean on set, but next project will use Unreal Insights to timestamp capture → DMX dispatch.',
      ],
    },
  },

  // ────────────────────────────────────────────────────────────────
  {
    id: 'vp-automation',
    slug: 'vp-automation',
    badge: 'AUTOMATION',
    year: '2024',
    tier: 1,
    tags: ['Python', 'OSC', 'nDisplay', 'Pixera', 'Optitrack', 'Take Recorder', 'Genlock'],
    publicRefs: [],
    title: {
      ko: 'VP 파이프라인 통합 자동화 (3 시스템)',
      en: 'VP Pipeline Automation (3 sub-systems)',
    },
    summary: {
      ko: 'nDisplay 셋업, 미디어 서버 연동, 멀티 디바이스 캡처 동기화 — VP 촬영의 세 가지 마찰점을 OSC/Python/Editor Utility 기반 자동화로 해결',
      en: 'Three friction points on VP shoots — nDisplay config, media-server bridging, and multi-device capture sync — automated with Python, OSC, and Editor Utility tooling.',
    },
    situation: {
      ko: [
        'VP 촬영 현장은 nDisplay, Pixera, 모션캡처, 페이셜, 카메라 트래킹 등 이종 시스템이 함께 돌아감.',
        '이들 사이 셋업·연동·동기화가 매번 수작업이라 휴먼 에러와 시간 손실 누적.',
      ],
      en: [
        'A VP set runs nDisplay, Pixera, mocap, facial capture, and camera tracking side by side.',
        'Doing the setup, bridging, and sync by hand each time leaks both time and reliability.',
      ],
    },
    task: {
      ko: [
        '본인이 식별한 3개 마찰점을 각각 자동화/통합으로 해결.',
      ],
      en: [
        'Identified three of those friction points and built dedicated automation for each.',
      ],
    },
    action: {
      ko: [
        'A) nDisplay Config 자동 생성: 클러스터별 IP, 해상도, 풀스크린, failover 옵션 수작업 → Python으로 JSON 생성 → UAsset import. 셋업 시간 20~30분 → 2~3분 (~90% 단축).',
        'B) Pixera ↔ Unreal OSC 브리지: Pixera는 LED 오브젝트 로컬 축 기반이라 회전 시 직관적 이동 불가 (왼쪽 입력이 대각선으로 움직임). 언리얼에서 월드 트랜스폼을 매 프레임 계산해 OSC로 송출 — 좌표 변환 책임을 송신측으로 이동.',
        'C) 멀티 디바이스 Take Recorder 동기화 (영화 호프): 스위치보드 TR + 언리얼 TR + 옵티트랙 + 페이셜 캡쳐 — 마스터 오퍼레이팅 PC가 OSC로 4개 동시 트리거. 옵티트랙 마스터 타임코드 + 하드웨어 genlock으로 frame-accurate 동기화.',
      ],
      en: [
        'A) Automated nDisplay config: cluster IPs, resolution, fullscreen, and failover used to be set by hand → Python generates the JSON → import as UAsset. 20–30 min → 2–3 min (~90% reduction).',
        'B) Pixera ↔ Unreal OSC bridge: Pixera operates on the LED object\'s local axis, so a rotated stage made "left" come out diagonal. Solved it by computing world-space transforms in Unreal every frame and sending those over OSC — moving the coordinate conversion to the sender.',
        'C) Multi-device Take Recorder sync (film "Hope"): Switchboard TR + Unreal TR + Optitrack + facial capture — a master operating PC fires all four over OSC. Optitrack supplies the master timecode and hardware genlock keeps it frame-accurate.',
      ],
    },
    result: {
      ko: [
        'A) 클러스터 셋업 시간 ~90% 단축 + IP 오타/해상도/failover 누락 같은 휴먼 에러 사실상 제거.',
        'B) LED 오브젝트가 회전된 상태에서도 언리얼에서 작업한 그대로 직관적인 움직임 재현.',
        'C) 현장에서 4개 시스템이 합쳐진 결과를 즉시 재생 가능 → 감독이 테이크 직후 의사결정 가능. 후처리 정렬 작업 제거. 곧 개봉 예정 영화 "호프" 본 촬영에 적용.',
      ],
      en: [
        'A) ~90% faster cluster setup + effectively eliminated typos / resolution / failover mistakes.',
        'B) Stage rotation no longer breaks the controls — what you move in Unreal is what you see on the LED.',
        'C) On set, all four systems play back as one take immediately, so the director can decide between takes without waiting on post sync. Shipped on the upcoming film "Hope".',
      ],
    },
  },

  // ────────────────────────────────────────────────────────────────
  {
    id: 'modular-shaders',
    slug: 'modular-shaders',
    badge: 'SHADERS',
    year: '2024',
    tier: 2,
    tags: ['Material Function', 'Triplanar', 'MPC', 'Unreal Plugin', 'HLSL'],
    publicRefs: [],
    title: {
      ko: '모듈식 마스터 머티리얼 시스템',
      en: 'Modular Master Material System',
    },
    summary: {
      ko: '매 프로젝트마다 마스터 머티리얼을 새로 짜던 비효율을 해결. 다층 procedural 효과를 Material Function 라이브러리로 분리하고 플러그인으로 패키징',
      en: 'Stopped rewriting master materials from scratch every project — split layered procedural effects into a Material Function library and shipped it as a plugin.',
    },
    situation: {
      ko: [
        '매 프로젝트마다 마스터 머티리얼을 처음부터 다시 짜고 있었음 — 학습엔 좋았으나 시간 효율이 떨어짐.',
        '아티스트는 타일링이 안 보이고 다채로운 표면을 원함 — 단순 텍스처 매핑으로는 부족.',
      ],
      en: [
        'I was rebuilding master materials from scratch every project — fine for learning, terrible for throughput.',
        'Artists wanted varied surfaces with no visible tiling — straight texture mapping was not going to cut it.',
      ],
    },
    task: {
      ko: [
        '다층 procedural 표면 효과 시스템 설계 (Triplanar + Vertex Color + Noise + Layered Dirt).',
        '한번 만든 기능을 다음 프로젝트에서 즉시 재사용할 수 있도록 라이브러리화.',
      ],
      en: [
        'Design a layered procedural surface system (Triplanar + Vertex Color + Noise + Layered Dirt).',
        'Package the building blocks so the next project starts where this one ended.',
      ],
    },
    action: {
      ko: [
        '레이어 구조: Triplanar 베이스 (필요한 축만 enable, 예: 바닥 = Z축) → Vertex Color 마스킹 B/C 레이어 → Noise 디테일 → Effect 레이어 (Dirt/Liquid/Sand/Corrosion/Moss/Puddle 스택).',
        'Triplanar 가중치는 World Normal 절댓값 기반이지만 파라미터로 노출해 아티스트가 컨트롤 가능.',
        'Snow/Leaves: Z 마스크 + 바닥 노말 반응 (미세한 파임/굴곡 반영) + Height Blend.',
        'MPC 전역 컨트롤: 계절 / 날씨 / 시간 / 눈 높이 / 윈디 강도. 마스터 컨트롤러 액터로 씬 전체 환경 일괄 조정. 향후 UI Widget으로 확장 예정.',
        '효과를 개별 Material Function으로 분리 → Function Library를 플러그인으로 패키징.',
        '분기는 주로 Static Switch Parameter 사용 (런타임 분기 비용 없이 컴파일 타임 결정).',
      ],
      en: [
        'Layer stack: Triplanar base (per-axis enable, e.g. ground uses Z only) → Vertex Color masked B/C layers → noise detail → effect layers (Dirt / Liquid / Sand / Corrosion / Moss / Puddle, all stackable).',
        'Triplanar weights default to abs(world normal) but are exposed as parameters so artists can override.',
        'Snow / Leaves accumulation: Z masking + ground-normal response (so accumulation hugs surface dents) + height blend.',
        'MPC drives global state: season, weather, time of day, snow height, wind intensity. A master controller actor adjusts the whole scene; the next step is exposing it as a UI widget.',
        'Each effect lives as its own Material Function; the function library ships as a plugin.',
        'Branching is mostly Static Switch Parameters — compile-time, so no runtime cost.',
      ],
    },
    result: {
      ko: [
        '매 프로젝트마다 머티리얼을 0부터 다시 짜는 비효율 제거.',
        '플러그인 import 한 번으로 핵심 효과 즉시 사용 가능.',
        'VP 촬영에서 이 머티리얼이 GPU 병목이 된 적은 없음.',
        '한계: 셰이더 비용을 정량적으로 측정하지 않음 (instruction count, sampler 수, base pass cost). 현재 한계 인지 — 다음 학습 영역.',
      ],
      en: [
        'No more rebuilding materials from zero on every project.',
        'A single plugin import gets the core effects working.',
        'Never became a GPU bottleneck on a VP shoot.',
        'Limit: did not formally measure shader cost (instruction count, sampler usage, base pass). Knowing the gap is a deliberate next focus.',
      ],
    },
  },
]

export const tier1Cases = cases.filter(c => c.tier === 1)
export const tier2Cases = cases.filter(c => c.tier === 2)

export function findCaseBySlug(slug) {
  return cases.find(c => c.slug === slug) ?? null
}
