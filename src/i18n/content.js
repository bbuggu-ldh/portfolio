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
        desc: 'NETFLIX 촬영 현장에 들어가는\n플러그인 · 파이프라인 · 셰이더 시스템을 만듭니다',
        tags: ['Unreal', 'C++', 'HLSL', 'nDisplay', '3DGS', 'DMX'],
      },
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
        desc: 'Building plugins, pipelines, and shader systems\nthat ship to NETFLIX sets.',
        tags: ['Unreal', 'C++', 'HLSL', 'nDisplay', '3DGS', 'DMX'],
      },
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
