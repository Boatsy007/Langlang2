import { useState } from 'react'
import { Picture } from '@/components/Picture'
import type { GalleryImage } from '@/types'

interface BeforeAfterSliderProps {
  before: GalleryImage
  after: GalleryImage
  className?: string
}

export function BeforeAfterSlider({ before, after, className = '' }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(48)

  return (
    <div
      className={`relative select-none overflow-hidden rounded-2xl bg-zinc-800 aspect-[16/9] ${className}`}
      style={{ cursor: 'ew-resize' }}
    >
      {/* Before image */}
      <Picture
        src={before.src}
        alt={before.alt}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* After image — clipped to reveal from left */}
      <Picture
        src={after.src}
        alt={after.alt}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        loading="lazy"
      />

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-px bg-white/80 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-xl pointer-events-none z-10"
        style={{ left: `${position}%` }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M7 6L3 10L7 14M13 6L17 10L13 14" stroke="#09090b" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest text-white/80 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm pointer-events-none">
        Before
      </span>
      <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-widest text-white/80 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-sm pointer-events-none">
        After
      </span>

      {/* Range input — invisible, covers entire container */}
      <input
        type="range"
        min={5}
        max={95}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label="Drag to compare before and after restoration"
      />
    </div>
  )
}
