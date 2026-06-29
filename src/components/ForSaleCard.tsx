import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { StatusBadge } from '@/components/Badge'
import type { ForSaleBike } from '@/types'

interface ForSaleCardProps {
  bike: ForSaleBike
  className?: string
}

export function ForSaleCard({ bike, className }: ForSaleCardProps) {
  return (
    <Link
      to={`/for-sale/${bike.slug}`}
      className={clsx(
        'group block rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-zinc-800 hover:ring-zinc-600 transition-all duration-300',
        className,
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
        <img
          src={bike.heroImage.src}
          alt={bike.heroImage.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-3 left-3">
          <StatusBadge status={bike.status} />
        </div>

        <span className="absolute bottom-3 right-3 text-base font-bold text-white bg-red-700/80 px-3 py-1.5 rounded-lg backdrop-blur-sm">
          {bike.priceLabel}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-zinc-100 leading-tight">
            {bike.name}
          </h3>
        </div>

        <p className="text-sm text-zinc-500 mb-3">
          {bike.year} {bike.brand} {bike.model}
        </p>

        <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {bike.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-zinc-400 group-hover:text-red-400 transition-colors">
          View listing
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
