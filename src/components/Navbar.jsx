import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
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
  const isActive = (to) => pathname === to || pathname.startsWith(to + '/')

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
        padding: '14px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 32,
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: '-0.01em',
          color: '#18181b',
          textDecoration: 'none',
        }}
      >
        LEE DOHAN
      </Link>

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

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <LangToggle />
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
      </div>
    </header>
  )
}
