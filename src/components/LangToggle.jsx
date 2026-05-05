import { useLang } from '../i18n/LanguageContext'

export default function LangToggle() {
  const { lang, toggle } = useLang()
  const next = lang === 'ko' ? 'EN' : 'KR'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch language to ${next}`}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.15em',
        color: '#52525b',
        padding: '6px 10px',
        border: '1px solid #e5e5e5',
        background: 'transparent',
        cursor: 'pointer',
        transition: 'all 0.15s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#18181b'
        e.currentTarget.style.color = '#18181b'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#e5e5e5'
        e.currentTarget.style.color = '#52525b'
      }}
    >
      {lang === 'ko' ? 'KO' : 'EN'} <span style={{ color: '#a1a1aa' }}>/</span> {next}
    </button>
  )
}
