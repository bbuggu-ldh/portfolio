import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/work',  label: 'WORK' },
  { to: '/code',  label: 'CODE' },
  { to: '/about', label: 'ABOUT' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isActive = (to) => pathname === to || pathname.startsWith(to + '/')

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-[#131313]/40 backdrop-blur-xl border-b border-[#353534]/20">
      <Link to="/" className="font-headline text-xl font-bold tracking-tighter text-[#E5E2E1]">
        DOHAN.TA
      </Link>

      <nav className="hidden md:flex items-center space-x-10">
        {links.map(({ to, label }) => (
          <Link key={to} to={to}
            className={`font-headline text-sm tracking-[0.1em] transition-colors duration-300 ${
              isActive(to)
                ? 'text-[#00D1FF] font-bold border-b-2 border-[#00D1FF] pb-1'
                : 'text-[#BAC9CD] hover:text-[#E5E2E1]'
            }`}>
            {label}
          </Link>
        ))}
      </nav>

      <Link to="/about"
        className="bg-primary-container text-on-primary px-6 py-2 font-headline text-sm tracking-widest font-bold scale-95 active:scale-90 transition-transform">
        CONTACT
      </Link>
    </header>
  )
}
