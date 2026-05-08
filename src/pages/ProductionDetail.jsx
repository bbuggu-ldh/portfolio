import { useParams, Link, Navigate } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import { productions } from '../data/productions'
import { findCaseBySlug } from '../data/cases'
import Footer from '../components/Footer'
import VideoEmbed from '../components/VideoEmbed'
import PointCloudShader from '../components/PointCloudShader'
import { C, PAGE, NARROW } from '../theme'
import { media, hasMedia } from '../utils/assets'
import { isEmbeddable } from '../utils/embed'

export default function ProductionDetail() {
  const { id } = useParams()
  const { lang } = useLang()
  const t = useT(lang)
  const p = productions.find(x => x.id === id)
  if (!p) return <Navigate to="/productions" replace />

  const idx = productions.findIndex(x => x.id === id)
  const prev = idx > 0 ? productions[idx - 1] : null
  const next = idx < productions.length - 1 ? productions[idx + 1] : null

  const desc = p.description?.[lang] || p.role[lang]
  const videoRefs = (p.publicRefs || []).filter(r => isEmbeddable(r.url))
  const linkRefs  = (p.publicRefs || []).filter(r => !isEmbeddable(r.url))

  return (
    <main style={{ overflowX: 'hidden', width: '100%', background: C.bg }}>

      {/* ───────── Hero — point-cloud background + overlay text ───────── */}
      <section style={{
        position: 'relative',
        background: '#fafafa',
        paddingTop: 120,
        paddingBottom: 80,
        overflow: 'hidden',
        minHeight: '60vh',
      }}>
        {hasMedia(p.cover) && (
          <PointCloudShader src={media(p.cover)} />
        )}

        <div style={{
          ...PAGE,
          padding: '40px 24px 0',
          position: 'relative',
          zIndex: 1,
        }}>
          <Link to="/productions" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: C.textSub,
            textDecoration: 'none',
            marginBottom: 32,
          }}>
            ← {lang === 'ko' ? '작업 목록' : 'All Productions'}
          </Link>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
            <span style={{
              padding: '4px 10px',
              background: C.bg,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.2em',
              color: C.accent,
              fontWeight: 700,
              border: `1px solid ${C.border}`,
              textTransform: 'uppercase',
            }}>
              {p.client}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: C.textSub }}>
              {p.year}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: C.text,
            marginBottom: 16,
          }}>
            {p.title[lang]}
          </h1>
          <p style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: C.text,
            fontWeight: 500,
            marginBottom: 24,
            maxWidth: 720,
          }}>
            {p.role[lang]}
          </p>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.05em',
            color: C.text,
            fontWeight: 600,
          }}>
            {p.tags.join('  ·  ')}
          </div>
        </div>
      </section>

      {/* ───────── Description ───────── */}
      {desc && (
        <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
          <div style={{ ...NARROW, padding: '80px 24px' }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: C.accent,
              fontWeight: 700,
              marginBottom: 16,
            }}>
              About
            </p>
            <p style={{
              fontSize: 16,
              lineHeight: 1.85,
              color: C.text,
              whiteSpace: 'pre-line',
            }}>
              {desc}
            </p>

            {/* Related case button — links to a case study */}
            {p.relatedCase && findCaseBySlug(p.relatedCase) && (
              <div style={{ marginTop: 32 }}>
                <Link
                  to={`/cases/${p.relatedCase}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '14px 20px',
                    border: `1px solid ${C.border}`,
                    background: C.bg,
                    fontFamily: 'var(--font-headline)',
                    fontSize: 14,
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
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    letterSpacing: '0.2em',
                    color: C.accent,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}>
                    Related Case
                  </span>
                  <span>{findCaseBySlug(p.relatedCase).title[lang]}</span>
                  <span style={{ color: C.accent }}>→</span>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ───────── Gallery — full-width scroll-through ───────── */}
      {Array.isArray(p.gallery) && p.gallery.length > 0 && (
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
            {p.gallery.map((entry, i) => {
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
                  {items.map((src, j) => {
                    const url = media(src)
                    const isVideo = /\.(mp4|webm)$/i.test(src)
                    if (isVideo) {
                      return (
                        <div key={j} style={{ display: 'flex', justifyContent: 'center' }}>
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
                        key={j}
                        src={url}
                        alt={`${p.title.en ?? p.client} ${i + 1}-${j + 1}`}
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: 'auto',
                          background: C.bgGray,
                          display: 'block',
                        }}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* ───────── Videos (embedded) ───────── */}
      {videoRefs.length > 0 && (
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
              {videoRefs.map((ref, i) => (
                <VideoEmbed key={i} url={ref.url} label={ref.label} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── External links (non-embeddable) ───────── */}
      {linkRefs.length > 0 && (
        <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
          <div style={{ ...NARROW, padding: '60px 24px' }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: C.accent,
              fontWeight: 700,
              marginBottom: 16,
            }}>
              Links
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {linkRefs.map((ref, i) => (
                <a
                  key={i}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 0',
                    borderBottom: `1px solid ${C.borderSoft}`,
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: C.text,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.text)}
                >
                  <span>{ref.label}</span>
                  <span style={{ color: C.accent, fontFamily: 'var(--font-mono)', fontSize: 12 }}>
                    {ref.url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Prev / Next ───────── */}
      <section style={{ background: C.bgGray, borderTop: `1px solid ${C.border}` }}>
        <div style={{ ...PAGE, padding: '60px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <NavCard direction="prev" p={prev} lang={lang} />
            <NavCard direction="next" p={next} lang={lang} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function NavCard({ direction, p, lang }) {
  if (!p) return <div />
  const isPrev = direction === 'prev'
  return (
    <Link
      to={`/productions/${p.id}`}
      style={{
        display: 'block',
        textDecoration: 'none',
        padding: '20px 24px',
        background: C.bg,
        border: `1px solid ${C.border}`,
        textAlign: isPrev ? 'left' : 'right',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = C.text)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}
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
        {isPrev ? `← ${lang === 'ko' ? '이전' : 'Prev'}` : `${lang === 'ko' ? '다음' : 'Next'} →`}
      </p>
      <h3 style={{
        fontFamily: 'var(--font-headline)',
        fontSize: 14,
        fontWeight: 700,
        color: C.text,
        lineHeight: 1.4,
      }}>
        {p.title[lang]}
      </h3>
    </Link>
  )
}
