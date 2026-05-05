// Centralized i18n content. Add a key under both `ko` and `en`.
// Long copy lives here; data records (cases, productions) live in src/data/

export const content = {
  ko: {
    nav: {
      cases: '케이스',
      productions: '작업',
      about: '소개',
      contact: '연락',
    },

    home: {
      hero: {
        name: 'Lee Dohan · 이도한',
        title: 'Unreal Engine Developer',
        subtitle: 'with Virtual Production experience',
        ctaPrimary: '케이스 보기',
        ctaSecondary: '연락하기',
        tags: ['Unreal', 'C++', 'HLSL', 'nDisplay', '3DGS', 'DMX'],
      },
      stats: [
        { num: '4+',  label: 'NETFLIX 작품' },
        { num: '15+', label: '프로덕션' },
        { num: '5+',  label: '강의 / 워크숍' },
        { num: '2022', label: '커리어 시작' },
      ],
      focusHeading: 'What I Build on Unreal Engine',
      focusAreas: [
        {
          icon: 'extension',
          title: 'Plugin & Editor Tools',
          desc: 'UEProfiler · nDisplay 자동화 · Material Function 라이브러리. 한 번 만든 도구를 여러 프로젝트에서 재사용할 수 있도록 플러그인으로 패키징합니다.',
          tags: ['Unreal Plugin', 'C++', 'Editor Utility'],
        },
        {
          icon: 'monitoring',
          title: 'Real-time Profiling',
          desc: 'Unreal Insights trace 분석을 자동화하고, GPU 병목을 빠르게 진단할 수 있는 워크플로를 구축합니다.',
          tags: ['Unreal Insights', 'GPU Profiling'],
        },
        {
          icon: 'hub',
          title: 'Cross-system Integration',
          desc: 'nDisplay · Pixera · DMX · Optitrack · Take Recorder 등 이종 시스템을 OSC/타임코드/genlock 기반으로 동기화합니다.',
          tags: ['OSC', 'DMX', 'nDisplay'],
        },
        {
          icon: 'palette',
          title: 'HDR Color Pipelines',
          desc: 'ACES CG → PQ 변환을 포함한 LED Wall 컬러 매칭. SceneCapture를 DMX로 흘려 가상-실제 라이팅을 실시간 동기화합니다.',
          tags: ['ACES', 'PQ', 'DMX'],
        },
        {
          icon: 'photo_camera',
          title: '3DGS Production Pipeline',
          desc: '카메라 동선 데이터 기반으로 트레이닝 데이터를 큐레이션해 3DGS 학습 시간을 단축합니다.',
          tags: ['3DGS', 'SfM', 'Python'],
        },
      ],
      currentlyLearning: {
        label: 'Currently Learning',
        items: ['C++', 'DirectX11 / HLSL', 'Rendering Math', 'Engine Internals'],
      },
      worksHeading: 'Selected Cases',
      worksLink: '전체 보기',
    },

    cases: {
      title: 'Cases',
      intro: 'Virtual Production 현장에서 만든 시스템과 도구. 각 케이스는 실제 문제와 그 해결 방식을 STAR 구조로 정리했습니다.',
      filterAll: '전체',
      filterTier1: '주요',
      filterTier2: '추가',
      sectionSituation: 'Situation',
      sectionTask: 'Task',
      sectionAction: 'Action',
      sectionResult: 'Result',
      backToCases: '← 케이스 목록',
      prev: '이전',
      next: '다음',
    },

    productions: {
      title: 'Productions',
      intro: '참여한 영화·드라마·방송·디지털트윈 프로젝트. NETFLIX, 한국도로공사, 대전에셋사업, JTBC 등 다양한 클라이언트.',
      filterAll: '전체',
      lecturesHeading: '강의 / 워크숍',
    },

    about: {
      title: 'About',
      intro: 'TA에서 시작해 GPU 병목 앞에서 엔진 안쪽으로 파고드는 사람.',
      bio: [
        '2022년부터 Virtual Production 환경 제작과 RND를 담당하고 있습니다. NETFLIX DP2·택배기사·괸당, 한국도로공사 디지털트윈, 영화 호프 등의 프로덕션에서 LED Wall·ICVFX·nDisplay 파이프라인을 다뤄왔습니다.',
        '현장에서 반복적으로 마주친 문제는 늘 GPU 병목과 이종 시스템 통합이었습니다. 이를 해결하기 위해 자체 프로파일링 플러그인, DMX 라이팅 매칭 시스템, nDisplay 자동화, 3DGS 트레이닝 파이프라인, 모듈식 머티리얼 라이브러리를 직접 설계하고 만들어왔습니다. 결과물들은 1회용 도구가 아니라 재사용 가능한 시스템과 플러그인으로 패키징하는 데 집중했습니다.',
        '이 과정에서 가장 깊이 다루고 싶어진 영역은 렌더링 파이프라인, 셰이더, 좌표 변환, 색공간 — 즉 엔진 안쪽이었습니다. 지금은 C++과 그래픽스 수학을 학습하며, Unreal Engine 개발자에서 그래픽스 프로그래머로 다음 커리어를 준비하고 있습니다.',
      ],
      facts: [
        { label: '위치',     value: '서울, 대한민국' },
        { label: '현재 직무', value: 'Unreal Engine Developer' },
        { label: '상태',     value: '이직 준비 중' },
        { label: '다음',     value: 'Graphics Programmer' },
      ],
      experienceHeading: 'Experience',
      experience: [
        {
          period: '2022.10 — 현재',
          role: 'Unreal Engine Developer',
          org: '기술연구소 UE Project Team',
          desc: 'VP Unreal 환경 제작, RND, 자동화 및 기능 개발. NETFLIX DP2/택배기사/괸당, 한국도로공사 디지털트윈, 영화 호프 등 다수 프로덕션 참여.',
        },
        {
          period: '2023 — 현재',
          role: 'ICVFX / Unreal Engine Lecturer',
          org: 'GCC 사관학교 · 부산영상위원회 · 동국대학교 대학원',
          desc: 'ICVFX/Virtual Production을 위한 Unreal Engine 환경 제작 강의 및 워크숍 진행.',
        },
      ],
      techStackHeading: 'Tech Stack',
      techStack: [
        { category: 'Engine',     items: ['Unreal Engine 5', 'DirectX 11', 'Three.js / R3F'] },
        { category: 'Languages',  items: ['C++', 'HLSL', 'Python', 'Blueprint', 'JavaScript'] },
        { category: 'Real-time Graphics', items: ['nDisplay', 'ICVFX', 'Niagara', 'Material System', '3DGS'] },
        { category: 'VP Pipeline', items: ['NDI', 'OSC', 'DMX', 'Pixera', 'Optitrack', 'Take Recorder', 'Genlock'] },
        { category: 'Tools',      items: ['Git', 'Docker', 'OpenCV', 'SAM', 'AI 워크플로'] },
      ],
      learningHeading: 'Currently Learning',
      learning: ['C++', 'DirectX 11 / HLSL', '렌더링 수학', '엔진 내부 구조'],
      contactHeading: '연락하기',
      contactDesc: '그래픽스 프로그래머 / 엔진 개발 포지션 검토 중입니다.',
    },

    footer: {
      copyright: '© 2026 LEE DOHAN — ALL RIGHTS RESERVED.',
    },
  },

  en: {
    nav: {
      cases: 'CASES',
      productions: 'PRODUCTIONS',
      about: 'ABOUT',
      contact: 'CONTACT',
    },

    home: {
      hero: {
        name: 'Lee Dohan · 이도한',
        title: 'Unreal Engine Developer',
        subtitle: 'with Virtual Production experience',
        ctaPrimary: 'View Cases',
        ctaSecondary: 'Get in touch',
        tags: ['Unreal', 'C++', 'HLSL', 'nDisplay', '3DGS', 'DMX'],
      },
      stats: [
        { num: '4+',  label: 'NETFLIX titles' },
        { num: '15+', label: 'Productions' },
        { num: '5+',  label: 'Lectures' },
        { num: '2022', label: 'Started' },
      ],
      focusHeading: 'What I Build on Unreal Engine',
      focusAreas: [
        {
          icon: 'extension',
          title: 'Plugin & Editor Tools',
          desc: 'UEProfiler, nDisplay automation, modular Material Function library — packaged as plugins so each tool ships across projects.',
          tags: ['Unreal Plugin', 'C++', 'Editor Utility'],
        },
        {
          icon: 'monitoring',
          title: 'Real-time Profiling',
          desc: 'Automated Unreal Insights trace analysis. Built workflows to diagnose GPU bottlenecks fast under shoot deadlines.',
          tags: ['Unreal Insights', 'GPU Profiling'],
        },
        {
          icon: 'hub',
          title: 'Cross-system Integration',
          desc: 'Syncing nDisplay, Pixera, DMX, Optitrack, and Take Recorder via OSC, timecode, and genlock.',
          tags: ['OSC', 'DMX', 'nDisplay'],
        },
        {
          icon: 'palette',
          title: 'HDR Color Pipelines',
          desc: 'ACES CG → PQ conversion for LED Wall color matching. SceneCapture-driven DMX for real-time virtual ↔ practical light sync.',
          tags: ['ACES', 'PQ', 'DMX'],
        },
        {
          icon: 'photo_camera',
          title: '3DGS Production Pipeline',
          desc: 'Camera-path-aware curation of training data — cuts 3DGS training time without losing the views that matter.',
          tags: ['3DGS', 'SfM', 'Python'],
        },
      ],
      currentlyLearning: {
        label: 'Currently Learning',
        items: ['C++', 'DirectX11 / HLSL', 'Rendering Math', 'Engine Internals'],
      },
      worksHeading: 'Selected Cases',
      worksLink: 'View all',
    },

    cases: {
      title: 'Cases',
      intro: 'Systems and tools built on Virtual Production sets. Each case is structured as STAR — situation, task, action, result.',
      filterAll: 'All',
      filterTier1: 'Featured',
      filterTier2: 'Additional',
      sectionSituation: 'Situation',
      sectionTask: 'Task',
      sectionAction: 'Action',
      sectionResult: 'Result',
      backToCases: '← All Cases',
      prev: 'Prev',
      next: 'Next',
    },

    productions: {
      title: 'Productions',
      intro: 'Films, drama, broadcast, and digital twin projects. Clients include NETFLIX, Korea Expressway, Daejeon Asset Office, JTBC, and others.',
      filterAll: 'All',
      lecturesHeading: 'Lectures & Workshops',
    },

    about: {
      title: 'About',
      intro: 'A Technical Artist diving into engine internals after hitting GPU walls.',
      bio: [
        'Working on Virtual Production environments and R&D since 2022. Shipped pipeline work for NETFLIX DP2, The Bequeathed, and Gwaeundang, Korea Expressway Corp. digital twins, and the upcoming film Hope — spanning LED Wall, ICVFX, and nDisplay workflows.',
        'The recurring problems on set were always the same: GPU bottlenecks and integrating heterogeneous systems. So I built the tools to solve them — a custom Unreal profiling plugin, a real-time DMX lighting-match system, nDisplay automation, a 3DGS training pipeline, and a modular material library. I focused on packaging these as reusable systems and plugins, not one-off tools.',
        'Through this work, the parts I want to go deeper into are rendering pipelines, shaders, coordinate transforms, and color spaces — engine internals. I am currently studying C++ and graphics math, preparing to move from Unreal Engine Developer to Graphics Programmer.',
      ],
      facts: [
        { label: 'Location', value: 'Seoul, South Korea' },
        { label: 'Role',     value: 'Unreal Engine Developer' },
        { label: 'Status',   value: 'Open to roles' },
        { label: 'Next',     value: 'Graphics Programmer' },
      ],
      experienceHeading: 'Experience',
      experience: [
        {
          period: '2022.10 — Present',
          role: 'Unreal Engine Developer',
          org: '기술연구소 UE Project Team',
          desc: 'VP Unreal environments, R&D, and pipeline automation. Shipped to NETFLIX DP2 / The Bequeathed / Gwaeundang, Korea Expressway digital twins, the upcoming film Hope, and others.',
        },
        {
          period: '2023 — Present',
          role: 'ICVFX / Unreal Engine Lecturer',
          org: 'GCC Academy · Busan Film Commission · Dongguk Univ. Graduate School',
          desc: 'Teaching Unreal Engine for ICVFX / Virtual Production through online and on-site workshops.',
        },
      ],
      techStackHeading: 'Tech Stack',
      techStack: [
        { category: 'Engine',     items: ['Unreal Engine 5', 'DirectX 11', 'Three.js / R3F'] },
        { category: 'Languages',  items: ['C++', 'HLSL', 'Python', 'Blueprint', 'JavaScript'] },
        { category: 'Real-time Graphics', items: ['nDisplay', 'ICVFX', 'Niagara', 'Material System', '3DGS'] },
        { category: 'VP Pipeline', items: ['NDI', 'OSC', 'DMX', 'Pixera', 'Optitrack', 'Take Recorder', 'Genlock'] },
        { category: 'Tools',      items: ['Git', 'Docker', 'OpenCV', 'SAM', 'AI workflow'] },
      ],
      learningHeading: 'Currently Learning',
      learning: ['C++', 'DirectX 11 / HLSL', 'Rendering Math', 'Engine Internals'],
      contactHeading: 'Get in touch',
      contactDesc: 'Open to graphics programmer / engine developer roles.',
    },

    footer: {
      copyright: '© 2026 LEE DOHAN — ALL RIGHTS RESERVED.',
    },
  },
}

export function useT(lang) {
  return content[lang] ?? content.ko
}
