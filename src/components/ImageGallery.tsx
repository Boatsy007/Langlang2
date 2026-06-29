import { useState } from 'react'
import { clsx } from 'clsx'
import type { GalleryImage } from '@/types'

interface ImageGalleryProps {
  images: GalleryImage[]
  className?: string
}

export function ImageGallery({ images, className }: ImageGalleryProps) {
  const [active, setActive] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (images.length === 0) return null

  const current = images[active]

  return (
    <>
      <div className={clsx('space-y-3', className)}>
        {/* Main image */}
        <button
          className="block w-full aspect-video overflow-hidden rounded-xl bg-zinc-900 cursor-zoom-in group"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Open ${current.alt} in fullscreen`}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </button>

        {/* Caption */}
        {current.caption && (
          <p className="text-sm text-zinc-500 text-center">{current.caption}</p>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={clsx(
                  'aspect-square rounded-lg overflow-hidden transition-all duration-200',
                  i === active
                    ? 'ring-2 ring-white opacity-100'
                    : 'opacity-50 hover:opacity-80',
                )}
                aria-label={img.alt}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-light leading-none"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-4 text-white/70 hover:text-white text-4xl font-light"
              onClick={(e) => { e.stopPropagation(); setActive((a) => (a - 1 + images.length) % images.length) }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-4 text-white/70 hover:text-white text-4xl font-light"
              onClick={(e) => { e.stopPropagation(); setActive((a) => (a + 1) % images.length) }}
              aria-label="Next image"
            >
              ›
            </button>
          )}

          {current.caption && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60 text-center max-w-sm">
              {current.caption}
            </p>
          )}
        </div>
      )}
    </>
  )
}
