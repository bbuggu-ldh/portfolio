import { useParams, Link, Navigate } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import { cases, findCaseBySlug } from '../data/cases'
import Footer from '../components/Footer'
import { C, PAGE, NARROW, thumbGradient } from '../theme'

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
        background: thumbGradient(c.badge),
        paddingTop: 120,
        paddingBottom: 80,
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{ ...NARROW, padding: '80px 24px 60px', position: 'relative', zIndex: 1 }}>
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
            color: C.textSub,
            marginBottom: 28,
          }}>
            {c.summary[lang]}
          </p>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.05em',
            color: C.textMuted,
          }}>
            {c.tags.join('  ·  ')}
          </div>
        </div>
      </section>

      {/* ───────── STAR sections ───────── */}
      <section style={{ background: C.bg }}>
        <div style={{ ...NARROW, padding: '100px 24px 80px' }}>
          <STARSection label={t.cases.sectionSituation} index="01" items={c.situation[lang]} />
          <STARSection label={t.cases.sectionTask}      index="02" items={c.task[lang]} />
          <STARSection label={t.cases.sectionAction}    index="03" items={c.action[lang]} />
          <STARSection label={t.cases.sectionResult}    index="04" items={c.result[lang]} last />
        </div>
      </section>

      {/* ───────── Public References ───────── */}
      {c.publicRefs && c.publicRefs.length > 0 && (
        <section style={{ background: C.bgGray, borderTop: `1px solid ${C.border}` }}>
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
              Public References
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {c.publicRefs.map((r, i) => (
                <a
                  key={i}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    color: C.text,
                    textDecoration: 'none',
                    padding: '10px 0',
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  {r.label} <span style={{ color: C.accent, marginLeft: 6 }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

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
