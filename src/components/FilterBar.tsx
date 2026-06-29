import { clsx } from 'clsx'
import type { FilterOption } from '@/types'

interface FilterBarProps<T extends string> {
  options: FilterOption<T>[]
  active: T | 'all'
  onChange: (value: T | 'all') => void
  className?: string
}

export function FilterBar<T extends string>({ options, active, onChange, className }: FilterBarProps<T>) {
  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={clsx(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            opt.value === active
              ? 'bg-white text-black'
              : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 ring-1 ring-zinc-800',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
