# Media Assets

이 폴더에 포트폴리오에 사용할 이미지/영상을 넣으세요.
사이트에서는 `/portfolio/media/...` 경로로 자동 참조됩니다.

## 폴더 구조

```
public/media/
├── cases/             # 케이스 스터디 자료
│   └── {slug}/        # 예: ueprofiler/, 3dgs-pipeline/, dmx-lighting-match/, vp-automation/, modular-shaders/
│       ├── cover.jpg     # 디테일 페이지 Hero (16:9 권장, 1600x900)
│       ├── thumb.jpg     # 카드 썸네일 (16:10, 800x500)
│       └── gallery/      # 인라인 추가 이미지들
│           ├── 01.jpg
│           ├── 02.jpg
│           └── ...
│
├── productions/       # 프로덕션 자료
│   └── {id}/          # 예: gwaeundang/, dp2/, the-bequeathed/...
│       ├── thumb.jpg     # 카드 썸네일 (16:9, 800x450)
│       └── gallery/
│
└── about/             # 프로필
    └── profile.jpg       # 본인 사진 (정사각 또는 4:5, 800x1000)
```

## 자료가 없을 때

데이터 파일(`src/data/cases.js`, `src/data/productions.js`)의 `cover`, `thumb`, `gallery` 필드를 비워두면(`null` 또는 빈 배열), 사이트에서 자동으로 그라디언트 placeholder가 나옵니다. 시각자료 없이도 사이트는 정상 작동합니다.

## NDA-safe 전략

**공개 가능한 것**:
- 본인 작업 + NDA 만료 + 작품 공개 후
- 자체 도구 스크린샷 (UEProfiler 등)
- 개인 학습/연구 캡처
- 환경 컨셉 (스토리/스크립트 노출 없음)

**NDA-risky → 공개 불가**:
- 미공개 작품의 set/씬 캡처
- 대본/스토리 정보가 보이는 컷
- 클라이언트 내부 자료

→ NDA 위험할 때는 **이미지 대신 `publicRefs`(공개 트레일러/기사 URL)** 활용하세요.
