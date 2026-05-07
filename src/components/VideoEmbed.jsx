import { parseYouTube, buildEmbedUrl } from '../utils/embed'
import { C } from '../theme'

export default function VideoEmbed({ url, label }) {
  const yt = parseYouTube(url)
  if (!yt) return null

  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        position: 'relative',
        aspectRatio: '16 / 9',
        background: '#000',
        overflow: 'hidden',
      }}>
        <iframe
          src={buildEmbedUrl(yt)}
          title={label || 'YouTube video'}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
        />
      </div>
      {label && (
        <figcaption style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: C.textMuted,
          letterSpacing: '0.05em',
          marginTop: 8,
        }}>
          ▶ {label}
        </figcaption>
      )}
    </figure>
  )
}
