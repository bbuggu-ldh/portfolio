import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import Footer from '../components/Footer'
import { C, PAGE, NARROW } from '../theme'

export default function About() {
  const { lang } = useLang()
  const t = useT(lang)
  const a = t.about

  return (
    <main style={{ overflowX: 'hidden', width: '100%', background: C.bg }}>

      {/* ───────── Page Header ───────── */}
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
            / About
          </p>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 4.4vw, 56px)',
            letterSpacing: '-0.03em',
            color: C.text,
            marginBottom: 24,
            lineHeight: 1.1,
          }}>
            {a.title}
          </h1>
          <p style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: C.textSub,
            maxWidth: 640,
            letterSpacing: '-0.005em',
          }}>
            {a.intro}
          </p>
        </div>
      </section>

      {/* ───────── Bio + Facts ───────── */}
      <section style={{ background: C.bg }}>
        <div style={{ ...PAGE, padding: '80px 24px 60px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.6fr) minmax(0, 1fr)',
            gap: 60,
            alignItems: 'start',
          }}>
            {/* Bio paragraphs */}
            <div>
              {a.bio.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 15,
                    lineHeight: 1.85,
                    color: C.text,
                    marginBottom: 20,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Quick facts */}
            <aside style={{
              padding: '28px 28px',
              background: C.bgAlt,
              border: `1px solid ${C.border}`,
              position: 'sticky',
              top: 100,
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: C.accent,
                fontWeight: 700,
                marginBottom: 20,
              }}>
                Profile
              </p>
              {a.facts.map((f, i) => (
                <div
                  key={f.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '12px 0',
                    borderBottom: i < a.facts.length - 1 ? `1px solid ${C.border}` : 'none',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: C.textMuted,
                    letterSpacing: '0.05em',
                  }}>
                    {f.label}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.text,
                    textAlign: 'right',
                  }}>
                    {f.value}
                  </span>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* ───────── Experience ───────── */}
      <section style={{ background: C.bgGray, borderTop: `1px solid ${C.border}` }}>
        <div style={{ ...NARROW, padding: '100px 24px' }}>
          <SectionHeader index="01" title={a.experienceHeading} />
          <div style={{ position: 'relative', paddingLeft: 24, marginTop: 40 }}>
            {/* timeline line */}
            <div style={{
              position: 'absolute',
              left: 4,
              top: 8,
              bottom: 8,
              width: 1,
              background: C.border,
            }} />

            {a.experience.map((exp, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  marginBottom: i < a.experience.length - 1 ? 40 : 0,
                }}
              >
                {/* dot */}
                <div style={{
                  position: 'absolute',
                  left: -24,
                  top: 8,
                  width: 9,
                  height: 9,
                  background: i === 0 ? C.accent : C.text,
                  border: `2px solid ${C.bg}`,
                  borderRadius: '50%',
                  boxShadow: `0 0 0 1px ${i === 0 ? C.accent : C.text}`,
                }} />

                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  color: i === 0 ? C.accent : C.textSub,
                  fontWeight: 600,
                  marginBottom: 6,
                }}>
                  {exp.period}
                </p>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: C.text,
                  marginBottom: 4,
                  letterSpacing: '-0.01em',
                }}>
                  {exp.role}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: C.textSub,
                  marginBottom: 10,
                }}>
                  {exp.org}
                </p>
                <p style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: C.textSub,
                  maxWidth: 600,
                }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Tech Stack ───────── */}
      <section style={{ background: C.bg }}>
        <div style={{ ...PAGE, padding: '100px 24px' }}>
          <SectionHeader index="02" title={a.techStackHeading} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
            marginTop: 40,
          }}>
            {a.techStack.map(group => (
              <div key={group.category}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: C.accent,
                  fontWeight: 700,
                  marginBottom: 16,
                  paddingBottom: 8,
                  borderBottom: `1px solid ${C.border}`,
                }}>
                  {group.category}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {group.items.map(item => (
                    <li key={item} style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: 13.5,
                      fontWeight: 500,
                      color: C.text,
                      padding: '6px 0',
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Currently Learning band */}
          <div style={{
            marginTop: 48,
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
              {a.learningHeading}
            </span>
            <span style={{ color: C.textMuted }}>·</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: C.textSub }}>
              {a.learning.join('  ·  ')}
            </span>
          </div>
        </div>
      </section>

      {/* ───────── Contact CTA ───────── */}
      <section style={{ background: C.bgGray, borderTop: `1px solid ${C.border}` }}>
        <div style={{ ...NARROW, padding: '80px 24px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: C.text,
            marginBottom: 12,
          }}>
            {a.contactHeading}
          </h2>
          <p style={{
            fontSize: 15,
            color: C.textSub,
            marginBottom: 32,
          }}>
            {a.contactDesc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <ContactBtn href="mailto:dohan.rnd@gmail.com" primary>dohan.rnd@gmail.com</ContactBtn>
            <ContactBtn href="https://github.com/dohan824">GitHub</ContactBtn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ───────── components ───────── */

function SectionHeader({ index, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
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
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: C.text,
      }}>
        {title}
      </h2>
      <div style={{ flex: 1, borderBottom: `1px solid ${C.border}` }} />
    </div>
  )
}

function ContactBtn({ href, primary, children }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-headline)',
    fontSize: 14,
    fontWeight: 600,
    padding: '12px 24px',
    textDecoration: 'none',
    border: '1px solid',
    background: primary ? C.text : 'transparent',
    color: primary ? C.bg : C.text,
    borderColor: primary ? C.text : C.border,
    transition: 'all 0.2s',
  }
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={base}
      onMouseEnter={e => {
        if (primary) {
          e.currentTarget.style.background = C.accent
          e.currentTarget.style.borderColor = C.accent
        } else {
          e.currentTarget.style.borderColor = C.text
          e.currentTarget.style.background = C.bgAlt
        }
      }}
      onMouseLeave={e => {
        if (primary) {
          e.currentTarget.style.background = C.text
          e.currentTarget.style.borderColor = C.text
        } else {
          e.currentTarget.style.borderColor = C.border
          e.currentTarget.style.background = 'transparent'
        }
      }}
    >
      {children}
    </a>
  )
}
