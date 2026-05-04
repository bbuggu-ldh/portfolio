import { useLang } from '../i18n/LanguageContext'
import { useT } from '../i18n/content'

const links = [
  { label: 'EMAIL',    href: 'mailto:dohan.rnd@gmail.com', highlight: true },
  { label: 'GITHUB',   href: 'https://github.com/dohan824' },
  { label: 'LINKEDIN', href: '#' }, // TODO: fill in LinkedIn URL
]

export default function Footer() {
  const { lang } = useLang()
  const t = useT(lang)
  return (
    <footer className="w-full py-6 px-8 flex flex-col md:flex-row justify-between items-center border-t border-[#353534]/10 bg-[#131313] gap-4">
      <div className="font-headline text-xs font-medium text-[#BAC9CD] tracking-widest">
        {t.footer.copyright}
      </div>
      <div className="flex space-x-8">
        {links.map(({ label, href, highlight }) => (
          <a key={label} href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`font-label text-[10px] uppercase tracking-widest transition-colors duration-200 hover:text-[#A4E6FF] ${
              highlight ? 'text-[#00D1FF]' : 'text-[#BAC9CD]'
            }`}>
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
