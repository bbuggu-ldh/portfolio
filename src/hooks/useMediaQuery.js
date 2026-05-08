import { useState, useEffect } from 'react'

/* Lightweight matchMedia hook — returns true when the query matches.
   Usage: const isMobile = useMediaQuery('(max-width: 768px)') */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia(query)
    const onChange = (e) => setMatches(e.matches)
    setMatches(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])

  return matches
}

export const useIsMobile = () => useMediaQuery('(max-width: 768px)')
