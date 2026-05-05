# Media Inventory — 채워야 할 자료 체크리스트

각 항목별로 **(1) 자료 폴더에 파일 추가** + **(2) 데이터 파일에서 필드 채우기** 두 단계.
모든 필드가 비어있어도 사이트는 정상 작동(그라디언트 placeholder).

데이터 파일:
- 케이스: `src/data/cases.js`
- 프로덕션: `src/data/productions.js`

자산 폴더: `public/media/`

---

## 🅐 Tier 1 케이스 (5개) — 가장 임팩트 큰 자료가 들어가야 함

각 케이스마다 다음 자료가 이상적:
- ✓ **thumb.jpg** (16:10, 800x500) — 카드 썸네일
- ✓ **cover.jpg** (16:9, 1600x900) — 디테일 페이지 Hero
- ✓ **gallery/01-N.jpg** — 디테일 페이지 인라인
- ✓ **publicRefs** — 외부 트레일러/기사 URL (NDA-safe)

### 1. UEProfiler — `cases/ueprofiler/`
- [ ] thumb: 플러그인 UI 캡처 / HTML 보고서 캡처
- [ ] cover: Trace 분석 화면 / Unreal Insights 화면
- [ ] gallery: 입력 → 분석 → 보고서 워크플로 4-5장
- [ ] publicRefs: (해당 없음 — 자체 도구)

### 2. 3DGS Pipeline (괸당) — `cases/3dgs-pipeline/`
- [ ] thumb: 3DGS 결과 렌더 (NDA 주의 — 일반 환경 컷)
- [ ] cover: 트레이닝 파이프라인 다이어그램 또는 결과 환경
- [ ] gallery: 입력 데이터 / 필터링 전후 / 결과 비교
- [ ] publicRefs:
  - 괸당 NETFLIX 공식 트레일러 (있다면)
  - 보도자료 (다운로드 가능)

### 3. DMX Lighting Match — `cases/dmx-lighting-match/`
- [ ] thumb: ARRI 조명 + LED Wall 합성 컷
- [ ] cover: 시스템 다이어그램 또는 현장 사진
- [ ] gallery: SceneCapture 화면 / DMX 노드 / ARRI 동기화 전후
- [ ] publicRefs:
  - DP2 메이킹 영상 / 보도
  - 택배기사 메이킹 / 보도

### 4. VP Automation — `cases/vp-automation/`
- [ ] thumb: nDisplay config UI / OSC flow 다이어그램
- [ ] cover: 클러스터 LED Wall 또는 자동화 UI
- [ ] gallery: A) nDisplay JSON / B) Pixera UI / C) Take Recorder 동시 트리거
- [ ] publicRefs:
  - 영화 호프 공식 자료 (개봉 후)

### 5. Modular Shaders — `cases/modular-shaders/`
- [ ] thumb: Triplanar dirt 또는 Snow accumulation 결과
- [ ] cover: 머티리얼 그래프 또는 효과 결과 컷
- [ ] gallery: Triplanar / Snow / Layered dirt 효과 4-5장
- [ ] publicRefs: (해당 없음 — 자체 시스템)

---

## 🅑 Productions (17개) — 카드 썸네일만 + 공개 링크

각 프로덕션은 단순 카드라 **썸네일 1장 + publicRefs 정도면 충분**.

### NETFLIX 작품 (NDA 만료 / 공개 후 OK)
- [ ] **dp2** (DP시즌2) — 터널 씬 캡처
- [ ] **the-bequeathed** (택배기사) — 환경 씬 캡처
- [ ] **gwaeundang** (괸당) — 드라이빙 씬
- [ ] **slow-intense** (천천히 강렬하게) — 무대 씬

### 한국도로공사
- [ ] **dongtan-tunnel** (동탄터널 2025)
- [ ] **dongtan-tunnel-before** (동탄터널 Before)
- [ ] **imok-rest-stop** (이목 졸음쉼터)

### 대전 에셋사업
- [ ] **gyeongbokgung** (경복궁 디지털 복원)
- [ ] **national-assembly** (국회의사당)
- [ ] **apocalypse-grass** (아포칼립스)

### 방송
- [ ] **mbc-election-2025** (MBC 선거방송 2025)
- [ ] **mbc-election-2024** (MBC 선거방송 2024)
- [ ] **jtbc-tte-chum** (JTBC 떼춤 2022)
- [ ] **genius** (지니어스 2025)

### 기타
- [ ] **on-the-blues** (뮤직비디오)
- [ ] **cau-time-cosmos** (중앙대 교육영상)
- [ ] **solo-leveling-hapjeong** (나혼자 레벨업 라이팅)

---

## 🅒 About 페이지

- [ ] **profile.jpg** — `public/media/about/profile.jpg` (정사각 또는 4:5, 800x1000) 본인 사진
  - 사진 추가 후 `src/pages/About.jsx`에서 placeholder 영역에 `<img>` 추가 필요 (현재는 placeholder 없음)

---

## 📝 데이터 채우는 방법 (예시)

### Case에 자료 추가 (cases.js)
```js
{
  id: 'ueprofiler',
  slug: 'ueprofiler',
  cover:   'cases/ueprofiler/cover.jpg',
  thumb:   'cases/ueprofiler/thumb.jpg',
  gallery: [
    'cases/ueprofiler/gallery/01.jpg',
    'cases/ueprofiler/gallery/02.jpg',
  ],
  publicRefs: [
    { label: 'GitHub Repo', url: 'https://github.com/dohan824/...' },
  ],
  // ... 나머지 그대로
}
```

### Production에 자료 추가 (productions.js)
```js
{
  id: 'dp2',
  thumb: 'productions/dp2/thumb.jpg',
  publicRefs: [
    { label: 'NETFLIX 공식 트레일러', url: 'https://www.youtube.com/watch?v=...' },
    { label: 'TechM 보도', url: 'https://www.techm.kr/news/articleView.html?idxno=...' },
  ],
  // ... 나머지 그대로
}
```

---

## 🎯 우선순위 추천

**1단계 (이번 주)**: Tier 1 케이스 5개의 **thumb + cover** (전체 사이트 첫인상 결정)
**2단계**: NETFLIX 작품 4개 thumbnails (가장 강한 신뢰 자산)
**3단계**: Public references — NETFLIX 트레일러/기사 URL 수집 (이미지 없어도 신뢰도 큰 폭 ↑)
**4단계**: 나머지 프로덕션 + 갤러리 + About 사진

자료 없으면 사이트는 그라디언트 placeholder로 정상 작동합니다 — 천천히 채워가도 OK.

---

## NDA 안전 체크리스트

각 자료 업로드 전 확인:
- [ ] 작품이 이미 공개/방송 됐는가?
- [ ] 클라이언트 내부 자료(설계도/대본/UI)가 보이는가? → 가리거나 제외
- [ ] 일반 환경/배경 컷인가? (안전)
- [ ] 회사/공식 채널이 이미 공개한 컷인가? (가장 안전)

→ 위험하면 **이미지 대신 publicRefs URL** 활용
