import { useState, useEffect } from 'react'
import { LanguageContext } from './LanguageContext'

const STORAGE_KEY = 'lang'
const SUPPORTED = ['ko', 'en']

function detectInitial() {
  if (typeof window === 'undefined') return 'ko'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && SUPPORTED.includes(stored)) return stored
  const browser = window.navigator.language?.toLowerCase() ?? ''
  return browser.startsWith('ko') ? 'ko' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitial)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang(prev => (prev === 'ko' ? 'en' : 'ko'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}
