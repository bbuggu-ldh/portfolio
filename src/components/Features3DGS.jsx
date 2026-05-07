import { C, NARROW } from './../theme'

export default function Features3DGS({ lang = 'ko' }) {
  const t = lang === 'ko' ? {
    section: 'Features',
    title: '파이프라인이 하는 일',
    intro: '3DGS 알고리즘 자체는 수정하지 않고, 그 앞단의 데이터 큐레이션 / 전처리 / 분산 트레이닝 스케줄링을 자체 설계. 본인 기여는 시스템 설계와 핵심 휴리스틱.',
    groups: [
      {
        label: 'Capture',
        items: [
          '다중 소스 동시 촬영 — 오픈카 + 360 카메라 ×2 + DSLR 아이레벨 + 드론 (총 10,000장+)',
          '드론 GPS 메타데이터 보존 — 후속 필터링용 위도/경도/고도 기록',
          '스토리보드 여유 촬영 — 정해진 컷 위치보다 넓게 → 필터링 후 충분한 데이터 확보',
          '스팟별 촬영 가이드 사전 설계 — 각 위치/시간/순서 사전 결정',
        ],
      },
      {
        label: 'Preprocess (자체 개발)',
        items: [
          'SAM3 기반 인물 제거 — dynamic object 제거로 트레이닝 노이즈 감소',
          '영상 스태빌라이저 — 핸드헬드/주행 흔들림 보정',
          '업스케일링 — 해상도 증가로 디테일 보존',
          '360° → 9뷰 분할 (45° 오버랩) — SfM 처리 가능 형태 + 매칭 안정성',
          'GPS 기반 고도 필터링 (★ 핵심) — 드론 메타데이터 위도/경도 → 고도 환산 → 아이레벨 ~ 약간 위까지만 사용',
        ],
      },
      {
        label: 'Training',
        items: [
          'SfM (feature 추출 → matching → 삼각측량 → point cloud 초기화)',
          '3DGS 학습 (MCMC/ADC) — 알고리즘 미수정, 외부 트레이닝 모듈 사용',
          '원격 분산 트레이닝 스케줄 — 정해진 스팟별 백업 + 분할 → 1주일 내 완료',
        ],
      },
      {
        label: 'Output',
        items: [
          '.ply 파일 생성 — 후속 렌더링 파이프라인 통합 가능',
          'Unreal Engine 플러그인 통합 (대기) — 당시 UE 3DGS 플러그인 생태계 미성숙으로 본 촬영 미적용',
          '파이프라인 자체는 검증 — 후속 3DGS 프로젝트(한국도로공사 동탄터널 소나무 3DGS)로 이어짐',
        ],
      },
      {
        label: 'Applications',
        items: [
          'NETFLIX 괸당 드라이빙 씬 배경 데이터 (테스트 촬영) — VP 환경 prototype',
          '디지털트윈 검증 도구 — 실제 환경의 스케일감/배치/거리감을 photoreal하게 비교',
          '한국도로공사 동탄터널 소나무 3DGS — 후속 프로젝트로 노하우 이어짐',
        ],
      },
    ],
  } : {
    section: 'Features',
    title: 'What the pipeline does',
    intro: 'The 3DGS algorithm itself was not modified — my contribution was the data curation, preprocessing, and distributed-training scheduling that wraps it.',
    groups: [
      {
        label: 'Capture',
        items: [
          'Multi-source simultaneous capture — open-top car + 2× 360 cameras + eye-level DSLR + drone (10,000+ frames)',
          'Drone GPS metadata preserved — lat / lon / altitude kept for downstream filtering',
          'Wider-than-needed coverage — captured beyond storyboard cut positions to leave room for filtering',
          'Per-spot capture plan designed in advance — location, timing, and order locked before the shoot',
        ],
      },
      {
        label: 'Preprocess (custom-built)',
        items: [
          'SAM3-based person removal — dynamic-object removal to reduce training noise',
          'Video stabilizer — corrects handheld / driving shake',
          'Upscaling — preserves detail at higher resolution',
          '360° → 9-view split (45° overlap) — SfM-compatible format with stable matching',
          'GPS-altitude filtering (★ key lever) — drone lat/lon/alt → eye-level + slightly above only',
        ],
      },
      {
        label: 'Training',
        items: [
          'SfM (feature extraction → matching → triangulation → point-cloud init)',
          '3DGS training (MCMC/ADC) — algorithm unmodified, external module used',
          'Remote distributed scheduling — per-spot backup + split → finished within 1 week',
        ],
      },
      {
        label: 'Output',
        items: [
          '.ply file output — can integrate with downstream rendering pipelines',
          'Unreal Engine plugin integration (pending) — UE 3DGS plugin ecosystem was immature at the time, blocking main-shoot rollout',
          'Pipeline itself was validated — carried forward to subsequent 3DGS work (KEC Dongtan tunnel pine forest)',
        ],
      },
      {
        label: 'Applications',
        items: [
          'NETFLIX Gwaeundang driving-scene plates (test shoot) — VP environment prototype',
          'Digital twin validation — photorealistic comparison of scale, layout, and distances vs the real site',
          'KEC Dongtan tunnel pine-forest 3DGS — knowledge carried over to a follow-up project',
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
            <div key={i} style={{
              background: C.bg,
              border: `1px solid ${C.border}`,
              padding: '20px 22px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.25em',
                color: C.accent,
                fontWeight: 700,
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 12,
              }}>
                / 0{i + 1}  {g.label}
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {g.items.map((item, j) => (
                  <li key={j} style={{
                    fontSize: 13.5,
                    lineHeight: 1.7,
                    color: C.text,
                    padding: '6px 0',
                    paddingLeft: 16,
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0, top: 6,
                      color: C.accent,
                      fontFamily: 'var(--font-mono)',
                      fontSize: 11,
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
