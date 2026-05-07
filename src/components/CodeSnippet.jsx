import { C } from '../theme'

/* CodeSnippet — minimal monospace code block with file path + caption.
   No external highlighter; light tonal coloring via inline spans. */
export default function CodeSnippet({ filePath, language, caption, children }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{
        background: '#0e0e10',
        border: `1px solid ${C.border}`,
        overflow: 'hidden',
      }}>
        {/* Header bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 14px',
          borderBottom: '1px solid #2a2a2a',
          background: '#16181a',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ display: 'flex', gap: 4 }}>
              <span style={{ width: 9, height: 9, borderRadius: 9, background: '#ff5f57' }} />
              <span style={{ width: 9, height: 9, borderRadius: 9, background: '#febc2e' }} />
              <span style={{ width: 9, height: 9, borderRadius: 9, background: '#28c840' }} />
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: '#9aa3af',
              letterSpacing: '0.02em',
            }}>
              {filePath}
            </span>
          </div>
          {language && (
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#a4e6ff',
              fontWeight: 700,
            }}>
              {language}
            </span>
          )}
        </div>

        {/* Code */}
        <pre style={{
          margin: 0,
          padding: '18px 18px',
          fontFamily: 'var(--font-mono)',
          fontSize: 12.5,
          lineHeight: 1.7,
          color: '#e5e7eb',
          overflowX: 'auto',
          background: '#0e0e10',
        }}>
          {children}
        </pre>
      </div>

      {caption && (
        <figcaption style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: C.textMuted,
          letterSpacing: '0.05em',
          marginTop: 8,
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/* Color helpers for inline syntax tinting */
export const tok = {
  c: (s) => <span style={{ color: '#6b7280', fontStyle: 'italic' }}>{s}</span>,           // comment
  k: (s) => <span style={{ color: '#c4b5fd' }}>{s}</span>,                                 // keyword
  s: (s) => <span style={{ color: '#86efac' }}>{s}</span>,                                 // string
  n: (s) => <span style={{ color: '#fcd34d' }}>{s}</span>,                                 // number / literal
  f: (s) => <span style={{ color: '#a4e6ff' }}>{s}</span>,                                 // function name
  t: (s) => <span style={{ color: '#fda4af' }}>{s}</span>,                                 // type / class
}
