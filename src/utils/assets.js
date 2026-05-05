// Asset path helper. Vite serves public/ at import.meta.env.BASE_URL.
// Use for any media reference: media('cases/ueprofiler/cover.jpg')

const BASE = import.meta.env.BASE_URL ?? '/'

export function media(path) {
  if (!path) return null
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const clean = path.replace(/^\//, '')
  return `${BASE}media/${clean}`
}

// True if the given media value is renderable (non-empty string)
export function hasMedia(value) {
  return typeof value === 'string' && value.length > 0
}
