import { useLang } from '../i18n/LanguageContext'

export default function LangToggle({ className = '' }) {
  const { lang, toggle } = useLang()
  const next = lang === 'ko' ? 'EN' : 'KR'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch language to ${next}`}
      className={`font-label text-[10px] tracking-[0.2em] text-[#BAC9CD] hover:text-[#A4E6FF] transition-colors px-2 py-1 border border-[#3c494e]/40 hover:border-[#A4E6FF]/60 ${className}`}
    >
      {lang === 'ko' ? 'KO' : 'EN'} <span className="text-[#3c494e]">/</span> {next}
    </button>
  )
}
