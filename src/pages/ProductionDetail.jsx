import { useParams, Link, Navigate } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import { productions } from '../data/productions'
import Footer from '../components/Footer'
import VideoEmbed from '../components/VideoEmbed'
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

      {/* ───────── Hero ───────── */}
      <section style={{
        position: 'relative',
        background: C.bgGray,
        paddingTop: 120,
        paddingBottom: 0,
        overflow: 'hidden',
      }}>
        <div style={{ ...PAGE, padding: '40px 24px 0' }}>
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
            color: C.textSub,
            marginBottom: 24,
            maxWidth: 720,
          }}>
            {p.role[lang]}
          </p>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.05em',
            color: C.textMuted,
            marginBottom: 48,
          }}>
            {p.tags.join('  ·  ')}
          </div>
        </div>

        {/* Hero image */}
        {hasMedia(p.cover) && (
          <div style={{
            ...PAGE,
            padding: '0 24px',
            marginBottom: -1,
          }}>
            <div style={{
              aspectRatio: '16 / 9',
              background: '#000',
              overflow: 'hidden',
            }}>
              <img
                src={media(p.cover)}
                alt={p.title[lang]}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        )}
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
          </div>
        </section>
      )}

      {/* ───────── Gallery ───────── */}
      {Array.isArray(p.gallery) && p.gallery.length > 0 && (
        <section style={{ background: C.bgGray, borderTop: `1px solid ${C.border}` }}>
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
              Gallery
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: 12,
            }}>
              {p.gallery.map((src, i) => (
                <img
                  key={i}
                  src={media(src)}
                  alt={`${p.title.en ?? p.client} ${i + 1}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 10',
                    objectFit: 'cover',
                    background: C.bg,
                  }}
                />
              ))}
            </div>
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
