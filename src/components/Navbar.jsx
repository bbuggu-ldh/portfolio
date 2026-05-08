import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import { useIsMobile } from '../hooks/useMediaQuery'
import LangToggle from './LangToggle'

const navItems = [
  { to: '/cases',       key: 'cases' },
  { to: '/productions', key: 'productions' },
  { to: '/about',       key: 'about' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const { lang } = useLang()
  const t = useT(lang)
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)
  const isActive = (to) => pathname === to || pathname.startsWith(to + '/')

  // Close menu on navigation
  const closeMenu = () => setOpen(false)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(14px) saturate(140%)',
        WebkitBackdropFilter: 'blur(14px) saturate(140%)',
        borderBottom: 'none',
        padding: isMobile ? '12px 18px' : '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? 12 : 32,
      }}
    >
      <Link
        to="/"
        onClick={closeMenu}
        style={{
          fontFamily: 'var(--font-headline)',
          fontSize: isMobile ? 14 : 16,
          fontWeight: 700,
          letterSpacing: '-0.01em',
          color: '#18181b',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        LEE DOHAN
      </Link>

      {/* Desktop: inline nav. Mobile: hidden (toggled menu instead) */}
      {!isMobile && (
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {navItems.map(({ to, key }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 13,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                color: isActive(to) ? '#2563eb' : '#52525b',
                fontWeight: isActive(to) ? 600 : 500,
                transition: 'color 0.2s',
              }}
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 16 }}>
        <LangToggle />
        {!isMobile && (
          <Link
            to="/about"
            style={{
              background: '#18181b',
              color: '#ffffff',
              padding: '9px 20px',
              fontFamily: 'var(--font-headline)',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              borderRadius: 2,
            }}
          >
            {t.nav.contact}
          </Link>
        )}
        {isMobile && (
          <button
            type="button"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: '#18181b',
              color: '#ffffff',
              padding: '8px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              minWidth: 44,
            }}
          >
            {open ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Mobile dropdown menu */}
      {isMobile && open && (
        <div style={{
          position: 'fixed',
          top: 56,
          left: 0,
          right: 0,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid #e5e5e5',
          borderBottom: '1px solid #e5e5e5',
          padding: '12px 0',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {navItems.map(({ to, key }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenu}
              style={{
                padding: '14px 24px',
                fontFamily: 'var(--font-headline)',
                fontSize: 16,
                color: isActive(to) ? '#2563eb' : '#18181b',
                fontWeight: isActive(to) ? 700 : 500,
                textDecoration: 'none',
                borderBottom: '1px solid #f0f0f0',
              }}
            >
              {t.nav[key]}
            </Link>
          ))}
          <Link
            to="/about"
            onClick={closeMenu}
            style={{
              margin: '12px 24px 8px',
              padding: '12px',
              background: '#18181b',
              color: '#ffffff',
              fontFamily: 'var(--font-headline)',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            {t.nav.contact}
          </Link>
        </div>
      )}
    </header>
  )
}
