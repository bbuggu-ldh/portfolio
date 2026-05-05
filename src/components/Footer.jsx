import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'

const links = [
  { label: 'EMAIL',    href: 'mailto:dohan.rnd@gmail.com', highlight: true },
  { label: 'GITHUB',   href: 'https://github.com/dohan824' },
  { label: 'LINKEDIN', href: '#' },
]

export default function Footer() {
  const { lang } = useLang()
  const t = useT(lang)
  return (
    <footer
      style={{
        width: '100%',
        padding: '32px',
        borderTop: '1px solid #e5e5e5',
        background: '#fafafa',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.1em',
        color: '#71717a',
      }}>
        © 2026 LEE DOHAN
      </div>
      <div style={{ display: 'flex', gap: 28 }}>
        {links.map(({ label, href, highlight }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: highlight ? '#18181b' : '#71717a',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#2563eb')}
            onMouseLeave={e => (e.currentTarget.style.color = highlight ? '#18181b' : '#71717a')}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
