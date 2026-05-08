import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import { tier1Cases } from '../data/cases'
import Footer from '../components/Footer'
import CaseCard from '../components/CaseCard'
import { media, hasMedia } from '../utils/assets'
import { C, PAGE, NARROW } from '../theme'

const PROFILE_IMG = 'about/profile.jpg'  // optional — drop a profile photo here

export default function About() {
  const { lang } = useLang()
  const t = useT(lang)
  const a = t.about
  const featured = tier1Cases.slice(0, 3)

  return (
    <main style={{ overflowX: 'hidden', width: '100%', background: C.bg }}>

      {/* ───────── Page Header ───────── */}
      <section style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ ...PAGE, padding: '160px 24px 60px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: C.accent, fontWeight: 700,
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
            fontSize: 18, lineHeight: 1.6, color: C.textSub,
            maxWidth: 640, letterSpacing: '-0.005em',
          }}>
            {a.intro}
          </p>
        </div>
      </section>

      {/* ───────── Profile Card + Bio ───────── */}
      <section style={{ background: C.bg }}>
        <div style={{ ...PAGE, padding: '80px 24px 60px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 40,
            alignItems: 'start',
          }}>
            {/* Bio paragraphs */}
            <div>
              {a.bio.map((para, i) => (
                <p key={i} style={{
                  fontSize: 15, lineHeight: 1.85, color: C.text,
                  marginBottom: 20,
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Profile card with photo + facts */}
            <aside style={{
              padding: 0,
              background: C.bgAlt,
              border: `1px solid ${C.border}`,
              overflow: 'hidden',
            }}>
              {/* Photo area */}
              <ProfilePhoto src={PROFILE_IMG} />

              {/* Facts */}
              <div style={{ padding: '20px 24px 24px' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  letterSpacing: '0.3em', textTransform: 'uppercase',
                  color: C.accent, fontWeight: 700, marginBottom: 16,
                }}>
                  Profile
                </p>
                {a.facts.map((f, i) => (
                  <div key={f.label} style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'baseline', padding: '10px 0',
                    borderBottom: i < a.facts.length - 1 ? `1px solid ${C.border}` : 'none',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      color: C.textMuted, letterSpacing: '0.05em',
                    }}>
                      {f.label}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-headline)', fontSize: 13,
                      fontWeight: 600, color: C.text, textAlign: 'right',
                    }}>
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ───────── Experience ───────── */}
      <section style={{ background: C.bgGray, borderTop: `1px solid ${C.border}` }}>
        <div style={{ ...NARROW, padding: '100px 24px' }}>
          <SectionHeader index="01" title={a.experienceHeading} />
          <div style={{ position: 'relative', paddingLeft: 24, marginTop: 40 }}>
            <div style={{
              position: 'absolute', left: 4, top: 8, bottom: 8,
              width: 1, background: C.border,
            }} />

            {a.experience.map((exp, i) => (
              <div key={i} style={{
                position: 'relative',
                marginBottom: i < a.experience.length - 1 ? 40 : 0,
              }}>
                <div style={{
                  position: 'absolute', left: -24, top: 8,
                  width: 9, height: 9,
                  background: i === 0 ? C.accent : C.text,
                  border: `2px solid ${C.bgGray}`,
                  borderRadius: '50%',
                  boxShadow: `0 0 0 1px ${i === 0 ? C.accent : C.text}`,
                }} />

                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '0.15em',
                  color: i === 0 ? C.accent : C.textSub,
                  fontWeight: 600, marginBottom: 6,
                }}>
                  {exp.period}
                </p>
                <h3 style={{
                  fontFamily: 'var(--font-headline)', fontSize: 18,
                  fontWeight: 700, color: C.text, marginBottom: 4,
                  letterSpacing: '-0.01em',
                }}>
                  {exp.role}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: 12,
                  color: C.textSub, marginBottom: 10,
                }}>
                  {exp.org}
                </p>
                <p style={{
                  fontSize: 14, lineHeight: 1.7, color: C.textSub,
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
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: C.accent, fontWeight: 700,
                  marginBottom: 16, paddingBottom: 8,
                  borderBottom: `1px solid ${C.border}`,
                }}>
                  {group.category}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {group.items.map(item => (
                    <li key={item} style={{
                      fontFamily: 'var(--font-headline)', fontSize: 13.5,
                      fontWeight: 500, color: C.text, padding: '6px 0',
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

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
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: C.accent, fontWeight: 700,
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

      {/* ───────── Featured Cases ───────── */}
      <section style={{ background: C.bgGray, borderTop: `1px solid ${C.border}` }}>
        <div style={{ ...PAGE, padding: '100px 24px' }}>
          <SectionHeader index="03" title={lang === 'ko' ? '주요 케이스' : 'Featured Cases'} />
          <p style={{
            fontSize: 14, lineHeight: 1.7, color: C.textSub,
            marginTop: 16, marginBottom: 40, maxWidth: 640,
          }}>
            {lang === 'ko'
              ? '직접 설계하고 구현한 시스템 / 도구 / 파이프라인. 5개 케이스 전체는 케이스 목록에서 확인할 수 있습니다.'
              : 'Systems, tools, and pipelines I designed and built. See all five in the case list.'}
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}>
            {featured.map(c => <CaseCard key={c.id} c={c} lang={lang} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/cases" style={{
              display: 'inline-flex', alignItems: 'center',
              fontFamily: 'var(--font-mono)', fontSize: 12,
              letterSpacing: '0.1em', color: C.text,
              textDecoration: 'none',
              padding: '12px 28px',
              border: `1px solid ${C.text}`,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = C.text
                e.currentTarget.style.color = C.bg
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = C.text
              }}>
              {lang === 'ko' ? '전체 케이스 보기' : 'View all cases'} <span style={{ marginLeft: 8 }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────── Contact CTA ───────── */}
      <section style={{ background: C.text, color: C.bg }}>
        <div style={{ ...NARROW, padding: '100px 24px', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 11,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: C.accent, fontWeight: 700, marginBottom: 16,
          }}>
            / Contact
          </p>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(28px, 3.4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: C.bg,
            marginBottom: 16,
            lineHeight: 1.1,
          }}>
            {a.contactHeading}
          </h2>
          <p style={{
            fontSize: 16, color: 'rgba(255,255,255,0.7)',
            marginBottom: 40, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto',
          }}>
            {a.contactDesc}
          </p>
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12,
          }}>
            <ContactBtn href="mailto:dohan.rnd@gmail.com" primary>
              dohan.rnd@gmail.com
            </ContactBtn>
            <ContactBtn href="https://github.com/bbuggu-ldh">GitHub</ContactBtn>
            <ContactBtn href="https://linkedin.com">LinkedIn</ContactBtn>
            <ContactBtn href="https://www.kobis.or.kr/kobis/business/mast/peop/searchPeopleList.do?option=peopleNm&searchText=%EC%9D%B4%EB%8F%84%ED%95%9C">KOBIS 영화진흥위원회</ContactBtn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* ───────── components ───────── */

function ProfilePhoto({ src }) {
  const url = hasMedia(src) ? media(src) : null
  if (url) {
    return (
      <div style={{
        width: '100%',
        aspectRatio: '4 / 5',
        background: C.bgGray,
        overflow: 'hidden',
      }}>
        <img
          src={url}
          alt="Lee Dohan"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    )
  }
  // Placeholder when no photo provided
  return (
    <div style={{
      width: '100%',
      aspectRatio: '4 / 5',
      background: `linear-gradient(135deg, ${C.bgGray} 0%, ${C.bgAlt} 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `1px solid ${C.border}`,
    }}>
      <div style={{ textAlign: 'center', opacity: 0.5 }}>
        <div style={{
          width: 64, height: 64,
          margin: '0 auto 12px',
          borderRadius: '50%',
          background: C.bg,
          border: `1px solid ${C.border}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-headline)',
          fontSize: 22,
          fontWeight: 700,
          color: C.text,
        }}>
          LD
        </div>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: C.textMuted,
        }}>
          drop photo at
        </p>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: C.textMuted,
          marginTop: 2,
        }}>
          public/media/about/profile.jpg
        </p>
      </div>
    </div>
  )
}

function SectionHeader({ index, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.2em', color: C.accent, fontWeight: 700,
      }}>
        / {index}
      </span>
      <h2 style={{
        fontFamily: 'var(--font-headline)', fontSize: 24,
        fontWeight: 700, letterSpacing: '-0.02em', color: C.text,
      }}>
        {title}
      </h2>
      <div style={{ flex: 1, borderBottom: `1px solid ${C.border}` }} />
    </div>
  )
}

function ContactBtn({ href, primary, children }) {
  const base = {
    display: 'inline-flex', alignItems: 'center',
    fontFamily: 'var(--font-headline)', fontSize: 14,
    fontWeight: 600, padding: '14px 28px',
    textDecoration: 'none', border: '1px solid',
    background: primary ? C.bg : 'transparent',
    color: primary ? C.text : C.bg,
    borderColor: primary ? C.bg : 'rgba(255,255,255,0.3)',
    transition: 'all 0.2s',
  }
  return (
    <a href={href}
       target={href.startsWith('http') ? '_blank' : undefined}
       rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
       style={base}
       onMouseEnter={e => {
         if (primary) {
           e.currentTarget.style.background = C.accent
           e.currentTarget.style.borderColor = C.accent
           e.currentTarget.style.color = C.bg
         } else {
           e.currentTarget.style.borderColor = C.bg
           e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
         }
       }}
       onMouseLeave={e => {
         if (primary) {
           e.currentTarget.style.background = C.bg
           e.currentTarget.style.borderColor = C.bg
           e.currentTarget.style.color = C.text
         } else {
           e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
           e.currentTarget.style.background = 'transparent'
         }
       }}>
      {children}
    </a>
  )
}
