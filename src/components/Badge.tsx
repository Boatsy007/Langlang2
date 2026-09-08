import { clsx } from 'clsx'
import type { AvailabilityStatus, ProjectCategory } from '@/types'

interface StatusBadgeProps {
  status: AvailabilityStatus
  className?: string
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase',
        {
          'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30': status === 'Available',
          'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30': status === 'On Hold',
          'bg-zinc-500/15 text-zinc-400 ring-1 ring-zinc-500/30': status === 'Sold',
        },
        className,
      )}
    >
      <span
        className={clsx('w-1.5 h-1.5 rounded-full', {
          'bg-emerald-400': status === 'Available',
          'bg-amber-400': status === 'On Hold',
          'bg-zinc-400': status === 'Sold',
        })}
      />
      {status}
    </span>
  )
}

interface ProgressBadgeProps {
  className?: string
}

export function ProgressBadge({ className }: ProgressBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30',
        className,
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
      In Progress
    </span>
  )
}

interface CategoryBadgeProps {
  category: ProjectCategory
  className?: string
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase bg-zinc-800 text-zinc-400 ring-1 ring-zinc-700',
        className,
      )}
    >
      {category}
    </span>
  )
}
