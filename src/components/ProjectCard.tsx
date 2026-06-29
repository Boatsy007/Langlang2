import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { CategoryBadge } from '@/components/Badge'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  className?: string
}

export function ProjectCard({ project, featured = false, className }: ProjectCardProps) {
  return (
    <Link
      to={`/builds/${project.slug}`}
      className={clsx(
        'group block rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-zinc-800 hover:ring-zinc-600 transition-all duration-300',
        className,
      )}
    >
      {/* Image */}
      <div className={clsx('relative overflow-hidden bg-zinc-800', featured ? 'aspect-[16/10]' : 'aspect-[4/3]')}>
        <img
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Year badge */}
        <span className="absolute top-3 right-3 text-xs font-medium text-white/70 bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm">
          {project.year}
        </span>

        {project.featured && (
          <span className="absolute top-3 left-3 text-xs font-semibold text-black bg-white px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-zinc-100 leading-tight">
            {project.name}
          </h3>
          <CategoryBadge category={project.category} className="shrink-0 mt-0.5" />
        </div>

        <p className="text-sm text-zinc-500 mb-3">
          {project.year} {project.brand} {project.model}
        </p>

        <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
          View build
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
