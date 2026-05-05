// Production gallery — projects shipped to clients/broadcast.
// Used by /productions and the home page Selected Works strip.
// publicRefs: official trailer / making-of / press URLs (NDA-safe).
//   Fill in real URLs over time; empty array hides the section.

export const productions = [
  // ─── 2025–2026 ───
  {
    id: 'gyeongbokgung',
    year: '2026',
    client: '대전에셋사업',
    title: { ko: '경복궁 디지털 복원', en: 'Gyeongbokgung Digital Reconstruction' },
    role: { ko: 'PCG · 환경 제작 · 데모 영상 렌더', en: 'PCG · environment build · demo render' },
    tags: ['PCG', 'Hanok', 'Tile', 'Demo Render'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'national-assembly',
    year: '2026',
    client: '대전에셋사업',
    title: { ko: '국회의사당 환경 제작', en: 'National Assembly Environment' },
    role: { ko: 'PCG · AI 활용 에셋 제작 · 디테일 작업', en: 'PCG · AI-assisted assets · detailing' },
    tags: ['PCG', 'AI Assets'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'apocalypse-grass',
    year: '2026',
    client: '대전에셋사업',
    title: { ko: '아포칼립스 환경 (풀숲 테마 리메이크)', en: 'Apocalypse Environment (grass theme remake)' },
    role: { ko: '환경 제작', en: 'Environment build' },
    tags: ['Environment'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'imok-rest-stop',
    year: '2026',
    client: '한국도로공사',
    title: { ko: '이목 졸음쉼터 디지털트윈', en: 'Imok Rest Area Digital Twin' },
    role: { ko: '데칼 · 식생 · 보도/방음벽 · PCG', en: 'Decals · vegetation · sidewalk/sound barriers · PCG' },
    tags: ['Digital Twin', 'PCG', 'Vegetation'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'dongtan-tunnel-before',
    year: '2026',
    client: '한국도로공사',
    title: { ko: '동탄터널관리동 디지털트윈 (Before 환경)', en: 'Dongtan Tunnel Twin (Before)' },
    role: { ko: '환경 제작', en: 'Environment build' },
    tags: ['Digital Twin'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'solo-leveling-hapjeong',
    year: '2026',
    client: '나 혼자 레벨업',
    title: { ko: '합정역 지하 환경 라이팅', en: 'Hapjeong Underground — Lighting' },
    role: { ko: '라이팅 작업 (2 환경)', en: 'Lighting (2 environments)' },
    tags: ['Lighting'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'dongtan-tunnel',
    year: '2025',
    client: '한국도로공사',
    title: { ko: '동탄터널관리동 디지털트윈', en: 'Dongtan Tunnel Digital Twin' },
    role: { ko: '소나무 3DGS · 식생/축광석 PCG (spline/alpha/distance) · 자재 소개 영상', en: 'Pine 3DGS · vegetation & glowstone PCG · materials reel' },
    tags: ['3DGS', 'Digital Twin', 'PCG'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'gwaeundang',
    year: '2025',
    client: 'NETFLIX',
    title: { ko: '괸당 — 드라이빙 씬 VP 환경', en: 'NETFLIX Gwaeundang — Driving Scene VP' },
    role: { ko: '에셋 모델링/텍스처링 · 환경 라이팅 · Road/Snow PCG · Decal · 3DGS 이미지 필터링 코드', en: 'Asset modeling/texturing · environment lighting · Road/Snow PCG · decals · 3DGS image-filtering code' },
    tags: ['Virtual Production', '3DGS', 'PCG'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'genius',
    year: '2025',
    client: '지니어스',
    title: { ko: '지니어스 — 산맥/남산타워/주차장 환경', en: 'Genius — Mountains, Namsan Tower, Parking Lot' },
    role: { ko: '해피아워 라이팅 · 씬 레이아웃 · Gaea 산맥 제작', en: 'Happy-hour lighting · layout · Gaea mountain build' },
    tags: ['Environment', 'Lighting'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'slow-intense',
    year: '2025',
    client: 'NETFLIX',
    title: { ko: '천천히 강렬하게 — 무대 환경 애니메이션', en: 'NETFLIX Slow & Intense — Stage Environment Animation' },
    role: { ko: '3중 2무대 애니메이션', en: 'Triple/double stage animation' },
    tags: ['Stage', 'Animation'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'mbc-election-2025',
    year: '2025',
    client: 'MBC',
    title: { ko: 'MBC 선거방송 — 실시간 개표 영상 환경', en: 'MBC Election Broadcast — Live Tally Environment' },
    role: { ko: '환경 제작', en: 'Environment build' },
    tags: ['Broadcast', 'Real-time'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },

  // ─── 2024 ───
  {
    id: 'mbc-election-2024',
    year: '2024',
    client: 'MBC',
    title: { ko: 'MBC 선거방송 — 실시간 개표 영상 환경', en: 'MBC Election Broadcast — Live Tally Environment' },
    role: { ko: '환경 제작', en: 'Environment build' },
    tags: ['Broadcast', 'Real-time'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'cau-time-cosmos',
    year: '2024',
    client: '중앙대학교',
    title: { ko: '우주 속의 시간 교육 영상', en: 'Time in the Cosmos — Educational Film' },
    role: { ko: '영상 제작', en: 'Production' },
    tags: ['Education'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },

  // ─── 2023 ───
  {
    id: 'dp2',
    year: '2023',
    client: 'NETFLIX',
    title: { ko: 'D.P. 시즌 2 — 터널 제작 및 촬영', en: 'NETFLIX D.P. Season 2 — Tunnel Build & Shoot' },
    role: { ko: 'VP Unreal 환경 · DMX 라이팅 매칭 적용', en: 'VP Unreal environment · DMX lighting match applied' },
    tags: ['Virtual Production', 'NETFLIX'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'the-bequeathed',
    year: '2023',
    client: 'NETFLIX',
    title: { ko: '택배기사 — VP Unreal 환경', en: 'NETFLIX The Bequeathed — VP Unreal Environment' },
    role: { ko: '환경 담당 · DMX 라이팅 매칭 적용', en: 'Environment lead · DMX lighting match applied' },
    tags: ['Virtual Production', 'NETFLIX'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },
  {
    id: 'on-the-blues',
    year: '2023',
    client: '리치맨과 그루브나이스',
    title: { ko: 'On the Blues — 뮤직비디오 (Unreal)', en: 'On the Blues — Music Video (Unreal)' },
    role: { ko: 'Unreal Engine 제작', en: 'Built in Unreal Engine' },
    tags: ['Music Video'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
  },

  // ─── 2022 ───
  {
    id: 'jtbc-tte-chum',
    year: '2022',
    client: 'JTBC',
    title: { ko: '떼춤 — Unreal 환경 및 모션그래픽', en: 'JTBC Tte-Chum — Unreal Environment & Motion Graphics' },
    role: { ko: '환경/모션그래픽 제작', en: 'Environment & motion graphics' },
    tags: ['Broadcast'],
    thumb: null,        // e.g. 'productions/{id}/thumb.jpg'
    publicRefs: [],     // e.g. [{ label: 'Official trailer', url: 'https://...' }]
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
