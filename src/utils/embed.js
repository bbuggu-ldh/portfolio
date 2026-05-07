// Parse a URL into an embeddable video descriptor, or null if not embeddable.
// Currently supports YouTube (watch / shortlink / embed forms + ?t= start time).

export function parseYouTube(url) {
  if (typeof url !== 'string') return null
  const idMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^&?/#]+)/)
  if (!idMatch) return null
  const id = idMatch[1]
  // Extract ?t= or &t= start time (in seconds; supports 29s or 29 forms)
  const tMatch = url.match(/[?&]t=(\d+)s?/)
  const start = tMatch ? parseInt(tMatch[1], 10) : 0
  return { id, start }
}

export function isEmbeddable(url) {
  return parseYouTube(url) !== null
}

export function buildEmbedUrl({ id, start }) {
  const base = `https://www.youtube.com/embed/${id}`
  return start ? `${base}?start=${start}` : base
}
