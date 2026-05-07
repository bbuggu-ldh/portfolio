import { Link } from 'react-router-dom'
import { C, thumbGradient } from '../theme'
import { media, hasMedia } from '../utils/assets'

export default function CaseCard({ c, lang }) {
  const thumbUrl = hasMedia(c.thumb) ? media(c.thumb) : null
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
      <div style={{
        position: 'relative',
        aspectRatio: '16 / 10',
        overflow: 'hidden',
        background: C.bgAlt,
      }}>
        {thumbUrl ? (
          <img
            data-thumb
            src={thumbUrl}
            alt={c.title?.en ?? c.badge}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: thumbGradient(c.badge),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
        )}
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
