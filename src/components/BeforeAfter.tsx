import { useState, useRef, useCallback } from 'react'
import type { GalleryImage } from '@/types'

interface BeforeAfterProps {
  before: GalleryImage
  after: GalleryImage
  className?: string
}

export function BeforeAfter({ before, after, className }: BeforeAfterProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    setPosition(pct)
  }, [])

  const onMouseDown = () => {
    isDragging.current = true
    const onMove = (e: MouseEvent) => { if (isDragging.current) updatePosition(e.clientX) }
    const onUp = () => { isDragging.current = false; document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp) }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  const onTouchMove = (e: React.TouchEvent) => updatePosition(e.touches[0].clientX)

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900 cursor-col-resize select-none"
        onMouseDown={onMouseDown}
        onTouchMove={onTouchMove}
        role="slider"
        aria-label="Before and after comparison"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* After (bottom layer — full width) */}
        <img src={after.src} alt={after.alt} className="absolute inset-0 w-full h-full object-cover" draggable={false} />

        {/* Before (top layer — clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={before.src} alt={before.alt} className="absolute inset-0 h-full object-cover" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }} draggable={false} />
        </div>

        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M6 10H14M6 10L9 7M6 10L9 13M14 10L11 7M14 10L11 13" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-widest text-white/80 bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">Before</span>
        <span className="absolute bottom-3 right-3 text-xs font-semibold uppercase tracking-widest text-white/80 bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">After</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-2 text-xs text-zinc-500 text-center">
        <p>{before.caption}</p>
        <p>{after.caption}</p>
      </div>
    </div>
  )
}
