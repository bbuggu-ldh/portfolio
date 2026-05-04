import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'
import LangToggle from './LangToggle'

const navItems = [
  { to: '/work',  key: 'work' },
  { to: '/code',  key: 'code' },
  { to: '/about', key: 'about' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const { lang } = useLang()
  const t = useT(lang)
  const isActive = (to) => pathname === to || pathname.startsWith(to + '/')

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-[#131313]/40 backdrop-blur-xl border-b border-[#353534]/20">
      <Link to="/" className="font-headline text-xl font-bold tracking-tighter text-[#E5E2E1]">
        LEE DOHAN
      </Link>

      <nav className="hidden md:flex items-center space-x-10">
        {navItems.map(({ to, key }) => (
          <Link key={to} to={to}
            className={`font-headline text-sm tracking-[0.1em] transition-colors duration-300 ${
              isActive(to)
                ? 'text-[#00D1FF] font-bold border-b-2 border-[#00D1FF] pb-1'
                : 'text-[#BAC9CD] hover:text-[#E5E2E1]'
            }`}>
            {t.nav[key]}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <LangToggle />
        <Link to="/about"
          className="bg-primary-container text-on-primary px-6 py-2 font-headline text-sm tracking-widest font-bold scale-95 active:scale-90 transition-transform">
          {t.nav.contact}
        </Link>
      </div>
    </header>
  )
}
