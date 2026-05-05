import { useState, useMemo } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import { productions, lectures } from '../data/productions'
import Footer from '../components/Footer'
import { C, PAGE } from '../theme'
import { media, hasMedia } from '../utils/assets'

export default function Productions() {
  const { lang } = useLang()
  const t = useT(lang)
  const [year, setYear] = useState('all')

  const years = useMemo(() => {
    const set = new Set(productions.map(p => p.year))
    return [...set].sort((a, b) => b.localeCompare(a))
  }, [])

  const filtered = year === 'all' ? productions : productions.filter(p => p.year === year)

  return (
    <main style={{ overflowX: 'hidden', width: '100%', background: C.bg }}>

      {/* ───────── Header ───────── */}
      <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ ...PAGE, padding: '160px 24px 80px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: C.accent,
            fontWeight: 700,
            marginBottom: 16,
          }}>
            / Productions
          </p>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 4.4vw, 56px)',
            letterSpacing: '-0.03em',
            color: C.text,
            marginBottom: 24,
          }}>
            {t.productions.title}
          </h1>
          <p style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: C.textSub,
            maxWidth: 640,
          }}>
            {t.productions.intro}
          </p>
        </div>
      </section>

      {/* ───────── Filter + Grid ───────── */}
      <section style={{ background: C.bgGray }}>
        <div style={{ ...PAGE, padding: '40px 24px 100px' }}>

          {/* Year filter chips */}
          <div style={{
            display: 'flex',
            gap: 8,
            marginBottom: 32,
            flexWrap: 'wrap',
          }}>
            <FilterChip active={year === 'all'} onClick={() => setYear('all')}>
              {t.productions.filterAll}
              <span style={{ opacity: 0.6, marginLeft: 4 }}>{productions.length}</span>
            </FilterChip>
            {years.map(y => (
              <FilterChip key={y} active={year === y} onClick={() => setYear(y)}>
                {y}
                <span style={{ opacity: 0.6, marginLeft: 4 }}>
                  {productions.filter(p => p.year === y).length}
                </span>
              </FilterChip>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {filtered.map(p => <ProductionCard key={p.id} p={p} lang={lang} />)}
          </div>
        </div>
      </section>

      {/* ───────── Lectures band ───────── */}
      <section style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
        <div style={{ ...PAGE, padding: '80px 24px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 32 }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.2em',
              color: C.accent,
              fontWeight: 700,
            }}>
              / Lectures
            </span>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '-0.015em',
              color: C.text,
            }}>
              {t.productions.lecturesHeading}
            </h2>
            <div style={{ flex: 1, borderBottom: `1px solid ${C.border}` }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {lectures.map((l, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 24,
                  padding: '14px 0',
                  borderBottom: i < lectures.length - 1 ? `1px solid ${C.borderSoft}` : 'none',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: C.textMuted,
                  minWidth: 50,
                }}>
                  {l.year}
                </span>
                <span style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 14,
                  fontWeight: 500,
                  color: C.text,
                  flex: 1,
                  lineHeight: 1.5,
                }}>
                  {l.title[lang]}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: C.textMuted,
                  letterSpacing: '0.05em',
                }}>
                  {l.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ───────── components ───────── */

function FilterChip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-headline)',
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: '0.02em',
        padding: '9px 16px',
        cursor: 'pointer',
        border: `1px solid ${active ? C.text : C.border}`,
        background: active ? C.text : C.bg,
        color: active ? C.bg : C.text,
        transition: 'all 0.15s',
      }}
      onMouseEnter={e => {
        if (!active) e.currentTarget.style.borderColor = C.text
      }}
      onMouseLeave={e => {
        if (!active) e.currentTarget.style.borderColor = C.border
      }}
    >
      {children}
    </button>
  )
}

function ProductionCard({ p, lang }) {
  const tint = clientTint(p.client)
  const thumbUrl = hasMedia(p.thumb) ? media(p.thumb) : null
  return (
    <div
      style={{
        background: C.bg,
        border: `1px solid ${C.border}`,
        transition: 'all 0.25s',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = C.text
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = C.border
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Thumbnail */}
      <div style={{
        position: 'relative',
        aspectRatio: '16 / 9',
        background: tint,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {thumbUrl ? (
          <img
            src={thumbUrl}
            alt={p.title?.en ?? p.client}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 800,
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            letterSpacing: '0.04em',
            color: 'rgba(0,0,0,0.1)',
            padding: '0 16px',
            textAlign: 'center',
          }}>
            {p.client}
          </span>
        )}
        <div style={{
          position: 'absolute',
          top: 12,
          right: 12,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: C.textSub,
          fontWeight: 500,
          padding: '2px 6px',
          background: 'rgba(255,255,255,0.85)',
        }}>
          {p.year}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '18px 18px 20px' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.18em',
          color: C.accent,
          fontWeight: 700,
          marginBottom: 8,
          textTransform: 'uppercase',
        }}>
          {p.client}
        </p>
        <h3 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 14,
          fontWeight: 700,
          color: C.text,
          lineHeight: 1.4,
          marginBottom: 8,
          letterSpacing: '-0.005em',
        }}>
          {p.title[lang]}
        </h3>
        <p style={{
          fontSize: 12.5,
          lineHeight: 1.6,
          color: C.textSub,
          marginBottom: 10,
        }}>
          {p.role[lang]}
        </p>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: C.textMuted }}>
          {p.tags.join(' · ')}
        </div>
      </div>
    </div>
  )
}

/* tint per client — pastel */
function clientTint(client) {
  const c = (client || '').toLowerCase()
  if (c.includes('netflix'))    return 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)'
  if (c.includes('도로공사'))   return 'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)'
  if (c.includes('mbc'))        return 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)'
  if (c.includes('jtbc'))       return 'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)'
  if (c.includes('대전'))       return 'linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)'
  if (c.includes('지니어스'))   return 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)'
  if (c.includes('레벨업'))     return 'linear-gradient(135deg, #f0f9ff 0%, #bae6fd 100%)'
  return 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)'
}
