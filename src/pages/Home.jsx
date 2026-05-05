import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import { tier1Cases } from '../data/cases'
import Footer from '../components/Footer'
import HeroShader from '../components/HeroShader'
import { C, PAGE } from '../theme'

export default function Home() {
  const { lang } = useLang()
  const t = useT(lang)
  const featured = tier1Cases.slice(0, 3)

  return (
    <main style={{ overflowX: 'hidden', width: '100%', background: C.bg }}>

      {/* ───────── HERO ───────── */}
      <section style={{
        position: 'relative',
        background: C.bg,
        padding: '180px 24px 120px',
        textAlign: 'center',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Interactive shader background */}
        <HeroShader />

        {/* Shader signature label */}
        <div style={{
          position: 'absolute',
          bottom: 24,
          left: 32,
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.2em',
          color: C.textMuted,
          zIndex: 2,
        }}>
          // hero.frag · fbm + mouse warp
        </div>

        <div style={{ ...PAGE, position: 'relative', zIndex: 1, width: '100%' }}>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 5.5vw, 76px)',
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            color: C.text,
            marginBottom: 16,
          }}>
            {t.home.hero.title}
          </h1>

          <p style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 400,
            fontSize: 'clamp(15px, 1.5vw, 22px)',
            color: C.textSub,
            marginBottom: 44,
            letterSpacing: '-0.01em',
          }}>
            {t.home.hero.subtitle}
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 56,
          }}>
            <CTAButton to="/cases" primary>
              {t.home.hero.ctaPrimary}
            </CTAButton>
            <CTAButton href="mailto:dohan.rnd@gmail.com">
              {t.home.hero.ctaSecondary}
            </CTAButton>
          </div>

          {/* Tags row */}
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: C.textMuted,
            letterSpacing: '0.08em',
          }}>
            {t.home.hero.tags.join('  ·  ')}
          </div>
        </div>
      </section>

      {/* ───────── FOCUS AREAS ───────── */}
      <section style={{ background: C.bg }}>
        <div style={{ ...PAGE, padding: '120px 24px' }}>
          <SectionHeader index="01" title={t.home.focusHeading} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}>
            {t.home.focusAreas.map((area, i) => (
              <FocusCard key={area.title} index={i} area={area} />
            ))}
          </div>

          {/* Currently Learning */}
          <div style={{
            marginTop: 40,
            padding: '20px 24px',
            border: `1px solid ${C.border}`,
            background: C.bgAlt,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 16,
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: C.accent,
              fontWeight: 700,
            }}>
              {t.home.currentlyLearning.label}
            </span>
            <span style={{ color: C.textMuted }}>·</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: C.textSub }}>
              {t.home.currentlyLearning.items.join('  ·  ')}
            </span>
          </div>
        </div>
      </section>

      {/* ───────── SELECTED CASES ───────── */}
      <section style={{ background: C.bgGray, borderTop: `1px solid ${C.border}` }}>
        <div style={{ ...PAGE, padding: '120px 24px' }}>
          <SectionHeader index="02" title={t.home.worksHeading} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {featured.map(c => <CaseCard key={c.id} c={c} lang={lang} />)}
          </div>

          <div style={{ textAlign: 'center', marginTop: 72 }}>
            <CTAButton to="/cases" primary>
              {t.home.worksLink} →
            </CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ─────────── shared components ─────────── */

function CTAButton({ to, href, primary, children }) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-headline)',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.02em',
    textDecoration: 'none',
    padding: '13px 28px',
    transition: 'all 0.2s',
    cursor: 'pointer',
    border: '1px solid',
    background: primary ? C.text : 'transparent',
    color: primary ? C.bg : C.text,
    borderColor: primary ? C.text : C.border,
  }
  const hoverIn = (e) => {
    if (primary) {
      e.currentTarget.style.background = C.accent
      e.currentTarget.style.borderColor = C.accent
    } else {
      e.currentTarget.style.borderColor = C.text
      e.currentTarget.style.background = C.bgAlt
    }
  }
  const hoverOut = (e) => {
    if (primary) {
      e.currentTarget.style.background = C.text
      e.currentTarget.style.borderColor = C.text
    } else {
      e.currentTarget.style.borderColor = C.border
      e.currentTarget.style.background = 'transparent'
    }
  }

  if (to) {
    return (
      <Link to={to} style={baseStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
        {children}
      </Link>
    )
  }
  return (
    <a href={href} style={baseStyle} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
      {children}
    </a>
  )
}

function SectionHeader({ index, title }) {
  return (
    <div style={{ marginBottom: 56, textAlign: 'center' }}>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.3em',
        color: C.accent,
        fontWeight: 700,
        marginBottom: 12,
        textTransform: 'uppercase',
      }}>
        / {index}
      </p>
      <h2 style={{
        fontFamily: 'var(--font-headline)',
        fontSize: 'clamp(24px, 3vw, 36px)',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: C.text,
      }}>
        {title}
      </h2>
    </div>
  )
}

function FocusCard({ index, area }) {
  return (
    <div
      style={{
        padding: '28px 24px',
        border: `1px solid ${C.border}`,
        background: C.bg,
        transition: 'all 0.25s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = C.text
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = C.border
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: C.textMuted,
        marginBottom: 14,
        fontWeight: 600,
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-headline)',
        fontSize: 16,
        fontWeight: 700,
        color: C.text,
        marginBottom: 12,
        letterSpacing: '-0.01em',
      }}>
        {area.title}
      </h3>
      <p style={{
        fontSize: 13,
        lineHeight: 1.7,
        color: C.textSub,
        marginBottom: 18,
      }}>
        {area.desc}
      </p>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: C.textMuted }}>
        {area.tags.join(' · ')}
      </div>
    </div>
  )
}

function CaseCard({ c, lang }) {
  return (
    <Link
      to={`/cases/${c.slug}`}
      style={{
        display: 'block',
        textDecoration: 'none',
        background: C.bg,
        border: `1px solid ${C.border}`,
        transition: 'all 0.3s',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = C.text
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
        const thumb = e.currentTarget.querySelector('[data-thumb]')
        if (thumb) thumb.style.transform = 'scale(1.04)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = C.border
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
        const thumb = e.currentTarget.querySelector('[data-thumb]')
        if (thumb) thumb.style.transform = 'scale(1)'
      }}
    >
      {/* Thumbnail */}
      <div style={{
        position: 'relative',
        aspectRatio: '16 / 10',
        overflow: 'hidden',
        background: C.bgAlt,
      }}>
        <div
          data-thumb
          style={{
            position: 'absolute',
            inset: 0,
            background: thumbGradient(c.badge),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.5s ease',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 4.5vw, 64px)',
            letterSpacing: '0.04em',
            color: 'rgba(0,0,0,0.06)',
          }}>
            {c.badge}
          </span>
        </div>
        <div style={{
          position: 'absolute',
          top: 14,
          left: 14,
          padding: '5px 10px',
          background: '#ffffff',
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.2em',
          color: C.accent,
          fontWeight: 700,
        }}>
          {c.badge}
        </div>
        <div style={{
          position: 'absolute',
          top: 16,
          right: 16,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: C.textSub,
          fontWeight: 500,
        }}>
          {c.year}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px 24px 26px' }}>
        <h3 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 17,
          fontWeight: 700,
          color: C.text,
          lineHeight: 1.35,
          marginBottom: 12,
          letterSpacing: '-0.01em',
          minHeight: 46,
        }}>
          {c.title[lang]}
        </h3>
        <p style={{
          fontSize: 13,
          lineHeight: 1.7,
          color: C.textSub,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          marginBottom: 18,
        }}>
          {c.summary[lang]}
        </p>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: C.textMuted, letterSpacing: '0.05em' }}>
          {c.tags.slice(0, 3).join(' · ')}
        </div>
      </div>
    </Link>
  )
}

function thumbGradient(badge) {
  const map = {
    PLUGIN:    'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
    '3DGS':    'linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)',
    DMX:       'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
    AUTOMATION:'linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)',
    SHADERS:   'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)',
  }
  return map[badge] || 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)'
}
