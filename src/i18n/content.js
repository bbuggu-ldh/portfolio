// Centralized i18n content. Add a key under both `ko` and `en`.
// Long copy lives here; data records (cases, productions) live in src/data/

export const content = {
  ko: {
    nav: {
      work: '작업',
      cases: '케이스',
      code: '코드',
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

    about: {
      title: '소개',
      // Full About copy goes here in Phase 2
    },

    footer: {
      copyright: '© 2026 LEE DOHAN — ALL RIGHTS RESERVED.',
    },
  },

  en: {
    nav: {
      work: 'WORK',
      cases: 'CASES',
      code: 'CODE',
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

    about: {
      title: 'About',
    },

    footer: {
      copyright: '© 2026 LEE DOHAN — ALL RIGHTS RESERVED.',
    },
  },
}

export function useT(lang) {
  return content[lang] ?? content.ko
}
