import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { Picture } from '@/components/Picture'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  expanded?: boolean
  className?: string
}

export function ServiceCard({ service, expanded = false, className }: ServiceCardProps) {
  return (
    <article
      className={clsx(
        'rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-zinc-800',
        !expanded && 'hover:ring-red-900/60 transition-all',
        className,
      )}
    >
      {service.image && (
        <div className="aspect-video overflow-hidden bg-zinc-800">
          <Picture
            src={service.image.src}
            alt={service.image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="text-xl font-semibold text-white leading-tight">{service.name}</h3>
          <span className="shrink-0 text-xs font-medium text-zinc-500 bg-zinc-800 px-2.5 py-1 rounded-full ring-1 ring-zinc-700 mt-0.5">
            {service.category}
          </span>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {expanded && service.includes.length > 0 && (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-zinc-300 mb-2">What's included</h4>
            <ul className="space-y-1.5">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5 text-red-500">
                    <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {service.priceLabel && (
          <p className="text-sm font-medium text-zinc-300 border-t border-zinc-800 pt-4 mb-4">
            {service.priceLabel}
          </p>
        )}

        {!expanded && (
          <Link
            to={`/services/${service.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
          >
            Learn more
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>
    </article>
  )
}
