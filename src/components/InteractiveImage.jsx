import { useRef, useState, useEffect } from 'react'

/* InteractiveImage — image with a mouse-driven "flashlight" spotlight.
   Base layer shows image at low opacity; spotlight layer reveals
   it brightly under the cursor. */
export default function InteractiveImage({
  src,
  baseOpacity = 0.18,
  spotlightOpacity = 0.85,
  spotlightSize = 320,
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: -9999, y: -9999 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      setActive(true)
    }
    const onLeave = () => setActive(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  const maskGradient = `radial-gradient(circle ${spotlightSize}px at ${pos.x}px ${pos.y}px, black 0%, rgba(0,0,0,0.7) 35%, transparent 75%)`

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: '#fafafa',
      }}
    >
      {/* Base layer — faint image always visible */}
      <img
        src={src}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: baseOpacity,
        }}
      />
      {/* Spotlight layer — bright image revealed only near cursor */}
      <img
        src={src}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: active ? spotlightOpacity : 0,
          WebkitMaskImage: maskGradient,
          maskImage: maskGradient,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          transition: 'opacity 0.3s ease',
        }}
      />
    </div>
  )
}
