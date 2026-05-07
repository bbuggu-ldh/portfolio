import { useParams, Link, Navigate } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import { cases, findCaseBySlug } from '../data/cases'
import Footer from '../components/Footer'
import VideoEmbed from '../components/VideoEmbed'
import HeroShader from '../components/HeroShader'
import PointCloudShader from '../components/PointCloudShader'
import UEProfilerDiagram from '../components/UEProfilerDiagram'
import UEProfilerFeatures from '../components/UEProfilerFeatures'
import UEProfilerCodeSnippets from '../components/UEProfilerCodeSnippets'
import Diagram3DGS from '../components/Diagram3DGS'
import Features3DGS from '../components/Features3DGS'
import Diagram_DMX from '../components/Diagram_DMX'
import Features_DMX from '../components/Features_DMX'
import Diagram_VPAuto from '../components/Diagram_VPAuto'
import Features_VPAuto from '../components/Features_VPAuto'
import Diagram_Shaders from '../components/Diagram_Shaders'
import Features_Shaders from '../components/Features_Shaders'
import { C, PAGE, NARROW, thumbGradient } from '../theme'
import { media, hasMedia } from '../utils/assets'
import { isEmbeddable } from '../utils/embed'

export default function CaseDetail() {
  const { slug } = useParams()
  const { lang } = useLang()
  const t = useT(lang)
  const c = findCaseBySlug(slug)

  if (!c) return <Navigate to="/cases" replace />

  const idx = cases.findIndex(x => x.slug === slug)
  const prev = idx > 0 ? cases[idx - 1] : null
  const next = idx < cases.length - 1 ? cases[idx + 1] : null

  return (
    <main style={{ overflowX: 'hidden', width: '100%', background: C.bg }}>

      {/* ───────── Hero ───────── */}
      <section style={{
        position: 'relative',
        background: hasMedia(c.cover) ? thumbGradient(c.badge) : C.bg,
        paddingTop: 120,
        paddingBottom: 80,
        borderBottom: `1px solid ${C.border}`,
        overflow: 'hidden',
        minHeight: '60vh',
      }}>
        {hasMedia(c.cover) ? (
          <img
            src={media(c.cover)}
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.85,
            }}
          />
        ) : hasMedia(c.heroOverlay) ? (
          /* Image sampled into a point cloud — 3DGS-style splat */
          <PointCloudShader src={media(c.heroOverlay)} />
        ) : (
          /* Default abstract shader background */
          <HeroShader />
        )}
        <div style={{
          ...NARROW,
          padding: '80px 24px 60px',
          position: 'relative',
          zIndex: 1,
          ...(hasMedia(c.cover) ? {
            background: 'rgba(255,255,255,0.92)',
            padding: '40px 32px 32px',
            border: `1px solid ${C.border}`,
            marginTop: 80,
            marginBottom: 0,
          } : {}),
        }}>
          <Link to="/cases" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: C.textSub,
            textDecoration: 'none',
            marginBottom: 32,
          }}>
            {t.cases.backToCases}
          </Link>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
            <span style={{
              padding: '5px 12px',
              background: C.bg,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.2em',
              color: C.accent,
              fontWeight: 700,
              border: `1px solid ${C.border}`,
            }}>
              {c.badge}
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: C.textSub,
            }}>
              {c.year}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: C.text,
            marginBottom: 24,
          }}>
            {c.title[lang]}
          </h1>

          <p style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: C.text,
            fontWeight: 500,
            marginBottom: 28,
          }}>
            {c.summary[lang]}
          </p>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.05em',
            color: C.text,
            fontWeight: 600,
          }}>
            {c.tags.join('  ·  ')}
          </div>
        </div>
      </section>

      {/* ───────── Resources (top — moved up for readability) ───────── */}
      {c.publicRefs && c.publicRefs.length > 0 && (
        <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
          <div style={{ ...PAGE, padding: '40px 24px' }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              alignItems: 'center',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: C.accent,
                fontWeight: 700,
                marginRight: 8,
              }}>
                Resources
              </p>
              {c.publicRefs.map((r, i) => {
                const isVideo = isEmbeddable(r.url)
                return (
                  <a
                    key={i}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '10px 16px',
                      border: `1px solid ${C.border}`,
                      background: C.bg,
                      fontFamily: 'var(--font-headline)',
                      fontSize: 13,
                      fontWeight: 600,
                      color: C.text,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = C.text
                      e.currentTarget.style.background = C.text
                      e.currentTarget.style.color = C.bg
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = C.border
                      e.currentTarget.style.background = C.bg
                      e.currentTarget.style.color = C.text
                    }}
                  >
                    <span style={{ fontSize: 11, color: C.accent }}>
                      {isVideo ? '▶' : '↗'}
                    </span>
                    <span>{r.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ───────── STAR sections ───────── */}
      <section style={{ background: C.bg }}>
        <div style={{ ...NARROW, padding: '80px 24px 80px' }}>
          <STARSection label={t.cases.sectionSituation} index="01" items={c.situation[lang]} />
          <STARSection label={t.cases.sectionTask}      index="02" items={c.task[lang]} />
          <STARSection label={t.cases.sectionAction}    index="03" items={c.action[lang]} />
          <STARSection label={t.cases.sectionResult}    index="04" items={c.result[lang]} last />
        </div>
      </section>

      {/* ───────── Diagram (case-specific) — system overview ───────── */}
      {c.slug === 'ueprofiler'         && <UEProfilerDiagram lang={lang} />}
      {c.slug === '3dgs-pipeline'      && <Diagram3DGS lang={lang} />}
      {c.slug === 'dmx-lighting-match' && <Diagram_DMX lang={lang} />}
      {c.slug === 'vp-automation'      && <Diagram_VPAuto lang={lang} />}
      {c.slug === 'modular-shaders'    && <Diagram_Shaders lang={lang} />}

      {/* ───────── Features (case-specific) — concrete capabilities ───────── */}
      {c.slug === 'ueprofiler'         && <UEProfilerFeatures lang={lang} />}
      {c.slug === '3dgs-pipeline'      && <Features3DGS lang={lang} />}
      {c.slug === 'dmx-lighting-match' && <Features_DMX lang={lang} />}
      {c.slug === 'vp-automation'      && <Features_VPAuto lang={lang} />}
      {c.slug === 'modular-shaders'    && <Features_Shaders lang={lang} />}


      {/* ───────── Code (case-specific) — implementation IP ───────── */}
      {c.slug === 'ueprofiler' && <UEProfilerCodeSnippets lang={lang} />}

      {/* ───────── Gallery — full-width scroll-through ─────────
          gallery items are strings (single full-width row) OR
          arrays of strings (multi-column row with equal width) */}
      {Array.isArray(c.gallery) && c.gallery.length > 0 && (
        <section style={{ background: C.bgAlt, borderTop: `1px solid ${C.border}` }}>
          <div style={{
            maxWidth: 1400,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '40px 24px 80px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}>
            {c.gallery.map((entry, i) => {
              const items = Array.isArray(entry) ? entry : [entry]
              return (
                <div
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
                    gap: 12,
                  }}
                >
                  {items.map((src, j) => <GalleryItem key={j} src={src} alt={`${c.badge} ${i + 1}-${j + 1}`} />)}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* ───────── Videos (embedded) ───────── */}
      {(() => {
        const videoRefs = (c.publicRefs || []).filter(r => isEmbeddable(r.url))
        if (videoRefs.length === 0) return null
        return (
          <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
            <div style={{ ...PAGE, padding: '60px 24px' }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: C.accent,
                fontWeight: 700,
                marginBottom: 24,
              }}>
                Videos
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: videoRefs.length === 1
                  ? 'minmax(0, 1fr)'
                  : 'repeat(auto-fit, minmax(420px, 1fr))',
                gap: 24,
              }}>
                {videoRefs.map((r, i) => (
                  <VideoEmbed key={i} url={r.url} label={r.label} />
                ))}
              </div>
            </div>
          </section>
        )
      })()}

      {/* External links — moved to top "Resources" pills */}

      {/* ───────── Prev / Next ───────── */}
      <section style={{ background: C.bgGray, borderTop: `1px solid ${C.border}` }}>
        <div style={{ ...PAGE, padding: '60px 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}>
            <NavCard direction="prev" c={prev} t={t} lang={lang} />
            <NavCard direction="next" c={next} t={t} lang={lang} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ───────────── components ───────────── */

function STARSection({ label, index, items, last }) {
  return (
    <div style={{ marginBottom: last ? 0 : 64 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 24 }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.2em',
          color: C.accent,
          fontWeight: 700,
        }}>
          / {index}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: C.text,
        }}>
          {label}
        </h2>
        <div style={{ flex: 1, borderBottom: `1px solid ${C.border}` }} />
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: C.text,
              padding: '12px 0',
              borderBottom: i < items.length - 1 ? `1px solid ${C.borderSoft}` : 'none',
              display: 'flex',
              gap: 14,
            }}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: C.textMuted,
              marginTop: 6,
              flexShrink: 0,
              minWidth: 22,
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span style={{ color: C.text }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function GalleryItem({ src, alt }) {
  const url = media(src)
  const isVideo = /\.(mp4|webm)$/i.test(src)
  if (isVideo) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <video
          src={url}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            width: '100%',
            maxWidth: 960,
            height: 'auto',
            background: '#000',
            display: 'block',
          }}
        />
      </div>
    )
  }
  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      style={{
        width: '100%',
        height: 'auto',
        background: C.bgGray,
        display: 'block',
      }}
    />
  )
}

function NavCard({ direction, c, t, lang }) {
  if (!c) {
    return <div />
  }
  const isPrev = direction === 'prev'
  return (
    <Link
      to={`/cases/${c.slug}`}
      style={{
        display: 'block',
        textDecoration: 'none',
        padding: '20px 24px',
        background: C.bg,
        border: `1px solid ${C.border}`,
        textAlign: isPrev ? 'left' : 'right',
        transition: 'all 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = C.text }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border }}
    >
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.2em',
        color: C.accent,
        fontWeight: 700,
        marginBottom: 8,
        textTransform: 'uppercase',
      }}>
        {isPrev ? `← ${t.cases.prev}` : `${t.cases.next} →`}
      </p>
      <h3 style={{
        fontFamily: 'var(--font-headline)',
        fontSize: 14,
        fontWeight: 700,
        color: C.text,
        lineHeight: 1.4,
      }}>
        {c.title[lang]}
      </h3>
    </Link>
  )
}
