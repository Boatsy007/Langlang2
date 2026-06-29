import type { Specification } from '@/types'

interface SpecTableProps {
  specs: Specification[]
  title?: string
}

export function SpecTable({ specs, title = 'Specifications' }: SpecTableProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">{title}</h2>
      <dl className="divide-y divide-zinc-800 rounded-xl overflow-hidden border border-zinc-800">
        {specs.map((spec) => (
          <div key={spec.label} className="grid grid-cols-2 gap-4 px-5 py-3.5 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
            <dt className="text-sm text-zinc-500 font-medium">{spec.label}</dt>
            <dd className="text-sm text-zinc-200">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
