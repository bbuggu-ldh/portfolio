// Production gallery — projects shipped to clients/broadcast.
// Used by /productions and the home page Selected Works strip.
// publicRefs: official trailer / making-of / press URLs (NDA-safe).
//   Fill in real URLs over time; empty array hides the section.

export const productions = [
  // ─── 2025–2026 ───
  {
    id: 'daejeon-asset',
    year: '2026',
    client: '대전에셋사업',
    title: { ko: '대전 에셋사업 — VP 환경 5종', en: 'Daejeon Asset Project — 5 VP environments' },
    role: { ko: '환경 5종 제작 · PCG · AI 활용 에셋 · 디테일 / 라이팅 / 데모 렌더', en: 'Built 5 environments · PCG · AI-assisted assets · detailing / lighting / demo render' },
    tags: ['Virtual Production', 'PCG', 'AI Assets', 'Environment'],
    thumb: null,
    cover: null,
    gallery: [],
    description: {
      ko: '대전 에셋사업 — VP(Virtual Production) 촬영용 환경 5종 제작. 한국 역사 건축물부터 가상 풍경까지 폭넓게 커버.\n\n주요 환경: 경복궁(한옥/기와 PCG), 국회의사당(AI 활용 에셋 제작), 아포칼립스(풀숲 테마 리메이크) 외 2종. 각 환경마다 PCG 활용, 라이팅, 카메라 뷰 잡기, 데모 렌더까지 담당.',
      en: 'Daejeon Asset Project — five VP (Virtual Production) shoot environments. Range covers Korean historical architecture through to fully virtual landscapes.\n\nKey builds: Gyeongbokgung (hanok / tile PCG), National Assembly (AI-assisted assets), Apocalypse (grass-theme remake), and two more. Each environment included PCG setup, lighting, camera framing, and demo render.',
    },
    publicRefs: [],
  },
  {
    id: 'imok-rest-stop',
    year: '2026',
    client: '한국도로공사',
    title: { ko: '이목 졸음쉼터 디지털트윈', en: 'Imok Rest Area Digital Twin' },
    role: { ko: '데칼 · 식생 · 보도/방음벽 · PCG', en: 'Decals · vegetation · sidewalk/sound barriers · PCG' },
    tags: ['Digital Twin', 'PCG', 'Vegetation'],
    thumb: null,        // card thumbnail
    cover: null,        // detail page Hero
    gallery: [],        // detail page additional images
    description: { ko: '', en: '' },  // detail page longer text
    publicRefs: [],
  },
  {
    id: 'dongtan-tunnel',
    year: '2025',
    client: '한국도로공사',
    title: { ko: '동탄터널관리동 디지털트윈', en: 'Dongtan Tunnel Digital Twin' },
    role: { ko: '소나무 3DGS · 식생/축광석 PCG (spline/alpha/distance) · 자재 소개 영상', en: 'Pine 3DGS · vegetation & glowstone PCG · materials reel' },
    tags: ['3DGS', 'Digital Twin', 'PCG'],
    thumb: 'productions/dongtan-tunnel/thumb.jpg',
    cover: 'productions/dongtan-tunnel/thumb.jpg',
    relatedCase: '3dgs-pipeline',
    gallery: [
      'productions/dongtan-tunnel/01.jpg',
      ['productions/dongtan-tunnel/03.jpg', 'productions/dongtan-tunnel/04.jpg'],
      ['productions/dongtan-tunnel/05.jpg', 'productions/dongtan-tunnel/07.jpg'],
      'productions/dongtan-tunnel/06.jpg',
      ['productions/dongtan-tunnel/08.jpg', 'productions/dongtan-tunnel/09.jpg'],
    ],
    description: {
      ko: '한국도로공사 동탄터널관리동 디지털트윈 환경 제작.\n\n소나무를 비롯한 식생을 3DGS 트레이닝 파이프라인으로 처리해 디지털트윈에 통합. 식생/축광석 PCG는 spline/alpha/distance 기반으로 자동 배치, 자재 소개 영상도 함께 제작.',
      en: 'Korea Expressway Corp. Dongtan Tunnel digital twin.\n\nProcessed pine trees and other vegetation through my own 3DGS training pipeline and integrated them into the twin. Vegetation and glowstone PCG were auto-placed via spline / alpha / distance rules; also produced the materials introduction reel.',
    },
    publicRefs: [],
  },
  {
    id: 'gwaeundang',
    year: '2025',
    client: 'NETFLIX',
    title: { ko: '괸당 — 드라이빙 씬 VP 환경', en: 'NETFLIX Gwaeundang — Driving Scene VP' },
    role: { ko: '드라이빙 plate 제작 · 3DGS 파이프라인 적용 · 에셋/PCG/라이팅', en: 'Driving plate build · 3DGS pipeline applied · assets / PCG / lighting' },
    tags: ['Virtual Production', '3DGS', 'PCG', 'Driving Plate'],
    thumb: 'productions/gwaeundang/placeholder.jpg',
    cover: 'productions/gwaeundang/placeholder.jpg',
    relatedCase: '3dgs-pipeline',
    gallery: [],
    description: {
      ko: 'NETFLIX 시리즈 괸당(2027 상반기 공개 예정)의 드라이빙 씬 VP 환경 제작. 제주 배경의 드라이빙 plate가 차창 밖으로 송출되는 LED Wall 셋업.\n\n핵심: 본인이 자체 설계한 3DGS 트레이닝 파이프라인으로 제주 실사 스캔 데이터를 처리해 드라이빙 배경에 활용. 그 위에 에셋 모델링·텍스처링, 환경 라이팅, Road/Snow PCG, 데칼 작업까지 담당.\n\n현장에서는 차량 내부 4분할 카메라 시점(앞/뒤/좌/우)에 맞춰 LED Wall에 송출되는 plate 영상을 동기화.',
      en: 'Driving-scene VP environment for the NETFLIX series Gwaeundang (releasing first half of 2027). A Jeju-island driving plate is pushed to the LED Wall to fill the car windows.\n\nCore: my own 3DGS training pipeline processed photogrammetry scans of Jeju locations and fed them into the driving plate. On top of that I handled asset modeling / texturing, environment lighting, Road / Snow PCG, and decals.\n\nOn set, the four-quadrant camera setup (front / rear / left / right) was synchronized with the LED-wall plate output.',
    },
    publicRefs: [],
  },
  {
    id: 'slow-intense',
    year: '2025',
    client: 'NETFLIX',
    title: { ko: '천천히 강렬하게 (Show Business) — 90년대 무대 환경', en: 'NETFLIX Show Business — 90s Stage Environment' },
    role: { ko: '90년대 무대 배경 · Emissive 머티리얼 기반 음악 동기화 애니메이션 · VP 촬영', en: '90s stage backdrop · emissive-material music-synced animation · VP shoot' },
    tags: ['Stage', 'Virtual Production', 'Emissive Material', 'Animation'],
    thumb: 'productions/slow-intense/thumb.jpg',
    cover: 'productions/slow-intense/thumb.jpg',
    gallery: [],
    description: {
      ko: 'NETFLIX 시리즈 천천히 강렬하게(Show Business) — 1960~80년대 한국 음악산업 배경 드라마 (제작 중, 미공개).\n\n90년대 무대 환경 제작. VP(Virtual Production) 촬영 환경이었기 때문에 현장에서 시퀀서 키프레임을 직접 수정하기엔 부담이 컸음 — 그래서 음악에 맞춰 움직이는 무대 애니메이션을 Emissive 머티리얼 파라미터만으로 동작하도록 설계.\n\nEmissive 머티리얼에 시간 기반 패턴/펄스/스윕을 넣고 노출된 파라미터로 BPM·강도·색상을 즉석 조정. 시퀀서는 큐별 타이밍 미세조정에만 사용. 현장에서 PD·아티스트가 슬라이더 한두 개로 빠르게 변화 줄 수 있도록 설계.',
      en: 'NETFLIX series Show Business — a drama set in the 1960s–80s Korean music industry (in production, unreleased).\n\nBuilt the 1990s-era stage environment. Because this was a VP (Virtual Production) shoot, editing Sequencer keyframes on set is risky — so the music-synced stage animation was driven entirely by emissive material parameters instead.\n\nTime-based patterns / pulses / sweeps live inside the emissive material; the exposed parameters let BPM, intensity, and color be tweaked on the fly. Sequencer is used only for fine-grained per-cue timing. The result is a setup where the on-set crew can change the look with one or two sliders, no shader edits required.',
    },
    publicRefs: [
      { label: 'NETFLIX 공식 — 제작 확정 발표', url: 'https://about.netflix.com/ko/news/show-business-wt-production' },
    ],
  },

  // ─── 2024 ───
  {
    id: 'mbc-election',
    year: '2024 – 2025',
    client: 'MBC',
    title: { ko: 'MBC 선거방송 — 실시간 개표 영상 환경', en: 'MBC Election Broadcast — Live Tally Environment' },
    role: { ko: '국회 + 17개 지역 환경 · 아나몰픽 효과 · 4면 LED 송출 설계', en: 'National Assembly + 17 regional environments · anamorphic VFX · 4-sided LED layout design' },
    tags: ['Broadcast', 'Real-time', 'Unreal', 'LED Wall', 'Anamorphic'],
    thumb: 'productions/mbc-election/thumb.jpg',
    cover: 'productions/mbc-election/thumb.jpg',
    gallery: [],
    description: {
      ko: 'MBC 제22대 국회의원 선거 (2024.04.10) 개표방송의 실시간 영상 환경 제작.\n\n국회의사당 + 17개 지역(서울/경기/인천/강원/충청/전라/경상/제주 등) 환경을 Unreal Engine으로 구축.\n\n핵심 도전 — 카메라는 픽스(고정) 상태에서 4면 LED Wall을 어떻게 활용할지 RnD. 아나몰픽 원근법을 적용해 풍경이 LED 면 밖으로 튀어나오는 듯한 입체감을 고정 시점에서 구현. 4면(전·후·좌·우)에 어떤 컷/환경을 어떤 타이밍으로 띄울지의 송출 시퀀스를 본인이 사전 설계.',
      en: 'Real-time Unreal Engine environments for MBC\'s 2024 South Korean general election broadcast (Apr 10).\n\nBuilt the National Assembly plus 17 regional environments (Seoul / Gyeonggi / Incheon / Gangwon / Chungcheong / Jeolla / Gyeongsang / Jeju, etc.).\n\nCore challenge — the camera was fixed, so the R&D was how to use a 4-sided LED wall from a single viewpoint. Applied anamorphic perspective so the landscapes appear to pop out of the LED faces from that fixed view. Also designed the on-air sequence: which content appears on which face (front/back/left/right) and when.',
    },
    publicRefs: [
      { label: 'MBC 선거방송 LIVE (4:36:03 부터)', url: 'https://www.youtube.com/live/HwC8hHYUL0w?t=16563' },
    ],
  },

  // ─── 2023 ───
  {
    id: 'dp2',
    year: '2023',
    client: 'NETFLIX',
    title: { ko: 'D.P. 시즌 2 — 터널 제작 및 촬영', en: 'NETFLIX D.P. Season 2 — Tunnel Build & Shoot' },
    role: { ko: 'VP Unreal 터널 환경 · KTX 실촬 푸티지 스티칭 · DMX 라이팅 매칭 적용', en: 'VP Unreal tunnel environment · KTX footage stitching · DMX lighting match applied' },
    tags: ['Virtual Production', 'NETFLIX'],
    thumb: 'productions/dp2/thumb.jpg',
    cover: 'productions/dp2/work1.webp',
    gallery: [
      'productions/dp2/work1.webp',
      'productions/dp2/work2.webp',
    ],
    description: {
      ko: 'D.P. 시즌 2 무궁화호 기차 액션 씬을 위한 LED Wall 환경.\n\n터널 내부는 Unreal Engine으로 환경을 직접 제작했고, 차창 밖 야외 배경은 실제 KTX 운행 중 창문에서 촬영한 푸티지를 스티칭하여 끊김 없는 plate로 가공. 두 소스를 Unreal에서 통합한 뒤 nDisplay 클러스터로 LED Wall에 실시간 송출.',
      en: 'LED Wall environment for the Mugunghwa train action sequence.\n\nThe tunnel interior was built in Unreal Engine, while exterior backgrounds were captured from KTX windows on a real train ride and stitched into seamless plates. Both sources were composited in Unreal and pushed to the LED Wall via nDisplay in real time.',
    },
    publicRefs: [
      { label: '리플레이 포인트 (NETFLIX 공식)', url: 'https://www.youtube.com/watch?v=bHBqLoI8XmQ&t=29s' },
      { label: '공식 예고편',                     url: 'https://www.youtube.com/watch?v=SxnY2E_uMtY' },
      { label: 'NETFLIX 작품 페이지',             url: 'https://www.netflix.com/title/81280917' },
    ],
  },
  {
    id: 'black-knight',
    year: '2023',
    client: 'NETFLIX',
    title: { ko: '택배기사 (Black Knight) — VP Unreal 환경', en: 'NETFLIX Black Knight — VP Unreal Environment' },
    role: { ko: '환경 담당 · DMX 라이팅 매칭 적용', en: 'Environment lead · DMX lighting match applied' },
    tags: ['Virtual Production', 'NETFLIX'],
    thumb: 'productions/black-knight/thumb.jpg',
    cover: 'productions/black-knight/thumb.jpg',
    gallery: [],
    description: {
      ko: '디스토피아 미래 한반도가 배경인 김우빈 주연 시리즈. LED Wall 기반 차량 주행 / 폐허 환경 등의 VP 촬영을 위한 Unreal Engine 환경 제작 및 환경 라이팅 담당. DMX 라이팅 매칭 시스템 적용으로 황사/먼지 환경의 동적 색온도가 현장 조명과 동기화.',
      en: 'Kim Woo-bin–led dystopian series set on a polluted Korean peninsula. Built Unreal environments for VP shoots — driving plates and ruined cityscapes — and led environment lighting. The DMX lighting-match system kept dynamic dust/sand color temperatures in sync with practical fixtures.',
    },
    publicRefs: [
      { label: '공식 예고편 [ENG SUB]', url: 'https://www.youtube.com/watch?v=Z6UIKAcddes' },
      { label: 'Official Trailer',     url: 'https://www.youtube.com/watch?v=Se26Op9sEC8' },
      { label: '티저 예고편',           url: 'https://www.youtube.com/watch?v=p8hBRAAY8Uc' },
      { label: 'NETFLIX 작품 페이지',   url: 'https://www.netflix.com/title/81195027' },
    ],
  },
  {
    id: 'on-the-blues',
    year: '2023',
    client: '리치맨과 그루브나이스',
    title: { ko: 'On the Blues — 뮤직비디오 (Unreal)', en: 'On the Blues — Music Video (Unreal)' },
    role: { ko: 'Post-process Volume 머티리얼 효과 · 지글거리는 텍스쳐 셰이더 · 카메라 워크', en: 'Post-process volume material effects · noisy texture shader · cinematography' },
    tags: ['Music Video', 'Post-process', 'Shader'],
    thumb: 'productions/on-the-blues/thumb.jpg',
    cover: 'productions/on-the-blues/thumb.jpg',
    gallery: [],
    description: {
      ko: '리치맨과 그루브나이스 \'On the Blues\' 싱글 뮤직비디오. Unreal Engine으로 전체 영상 제작.\n\n핵심 작업: Post-process Volume에 머티리얼을 연결해 다양한 시각 효과 (글리치/왜곡/CRT-style 노이즈 등) 구현, 지글거리는 텍스쳐 셰이더 직접 작성, 시퀀서로 카메라 워크 디자인.',
      en: 'Music video for the single "On the Blues" by Richman & GrooveNice. Built end-to-end in Unreal Engine.\n\nMy work: post-process volume materials for the various visual effects (glitch / distortion / CRT-style noise), a custom noisy texture shader, and the camera work in Sequencer.',
    },
    publicRefs: [
      { label: '뮤직비디오 (YouTube)', url: 'https://youtu.be/ahVlIFblmhs' },
    ],
  },

  // ─── 2022 ───
  {
    id: 'jtbc-tte-chum',
    year: '2022',
    client: 'JTBC',
    title: { ko: '떼춤 — Unreal 환경 및 모션그래픽', en: 'JTBC Tte-Chum — Unreal Environment & Motion Graphics' },
    role: { ko: '환경 / 모션그래픽 / VFX 효과 제작', en: 'Environment / motion graphics / VFX effects' },
    tags: ['Broadcast', 'VFX', 'Motion Graphics'],
    thumb: 'productions/jtbc-tte-chum/thumb.jpg',
    cover: 'productions/jtbc-tte-chum/thumb.jpg',
    gallery: [],
    description: {
      ko: 'JTBC 떼춤 (B-Boy & Battle) 무대 영상의 Unreal Engine 기반 환경 및 VFX 효과 제작. 본인 담당 효과는 영상 2:18부터 시작하는 무대 백그라운드 — 네온 시티 환경, 워프 포털, 동적 모션그래픽 등.',
      en: 'Built the Unreal Engine environments and VFX for JTBC\'s "Tte-Chum" (B-Boy & Battle) stage videos. My effects start at 2:18 — neon-city backgrounds, warp portals, and dynamic motion graphics behind the dancers.',
    },
    publicRefs: [
      { label: '떼춤 무대 영상 (2:18 부터)', url: 'https://youtu.be/E0l9OQgnxo0?t=138' },
    ],
  },
]

// Lecturing / teaching — separate track from production
export const lectures = [
  { year: '2025', title: { ko: '동국대학교 대학원 — Unreal Engine ICVFX 환경 제작', en: 'Dongguk Univ. Graduate — Unreal Engine ICVFX Environment' }, role: '강사' },
  { year: '2025', title: { ko: '부산영상위원회 — 버추얼프로덕션 Unreal Basic', en: 'Busan Film Commission — Virtual Production Unreal Basic' }, role: '강사' },
  { year: '2024', title: { ko: 'GCC 사관학교 — ICVFX를 위한 언리얼엔진 5 (온라인)', en: 'GCC Academy — Unreal Engine 5 for ICVFX (Online)' }, role: '강사' },
  { year: '2024', title: { ko: '부산영상위원회 — 버추얼프로덕션 디자인 전문 인력양성 워크숍', en: 'Busan Film Commission — VP Design Specialist Workshop' }, role: '보조강사' },
  { year: '2023', title: { ko: '고양시 — 버추얼프로덕션(VP) 기본교육 언리얼엔진', en: 'Goyang City — Virtual Production Unreal Engine Basics' }, role: '강사' },
]
