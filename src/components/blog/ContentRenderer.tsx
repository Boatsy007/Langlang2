import type { ContentBlock } from '@/types'
import { BlogCta } from './BlogCta'
import { Link } from 'react-router-dom'

interface ContentRendererProps {
  blocks: ContentBlock[]
}

export function ContentRenderer({ blocks }: ContentRendererProps) {
  return (
    <div className="blog-content">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return (
              <p
                key={i}
                className="text-zinc-300 leading-[1.85] text-lg mb-6"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            )

          case 'h2':
            return (
              <h2
                key={i}
                id={block.id}
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mt-14 mb-5 scroll-mt-24"
              >
                {block.text}
              </h2>
            )

          case 'h3':
            return (
              <h3
                key={i}
                id={block.id}
                className="text-xl font-bold text-white tracking-tight mt-10 mb-4 scroll-mt-24"
              >
                {block.text}
              </h3>
            )

          case 'ul':
            return (
              <ul key={i} className="mb-6 space-y-2.5 ml-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                    <span className="shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full bg-red-500" aria-hidden="true" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            )

          case 'ol':
            return (
              <ol key={i} className="mb-6 space-y-3 ml-1 counter-reset-list">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-zinc-800 text-zinc-400 text-xs font-bold flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            )

          case 'callout':
            return (
              <Callout key={i} variant={block.variant} title={block.title} html={block.html} />
            )

          case 'table':
            return (
              <div key={i} className="mb-8 overflow-x-auto">
                {block.caption && (
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                    {block.caption}
                  </p>
                )}
                <table className="w-full text-sm">
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr
                        key={j}
                        className={`border-b border-zinc-800 ${j === 0 ? 'border-t' : ''}`}
                      >
                        <td className="py-3 pr-6 text-zinc-400 font-medium">{row.label}</td>
                        <td className="py-3 text-right text-white font-semibold whitespace-nowrap">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )

          case 'cta':
            return <BlogCta key={i} variant="inline" />

          case 'divider':
            return (
              <hr key={i} className="my-12 border-zinc-800" />
            )

          default:
            return null
        }
      })}

      <p className="mt-10 text-sm text-zinc-600 italic">
        Lang Restorations is based in Traralgon, Gippsland, Victoria — serving clients across
        Victoria and Australia since 2004.{' '}
        <Link to="/contact" className="text-zinc-500 hover:text-zinc-300 underline underline-offset-2">
          Contact the workshop
        </Link>{' '}
        to discuss your project.
      </p>
    </div>
  )
}

function Callout({
  variant,
  title,
  html,
}: {
  variant: 'tip' | 'insight' | 'warning'
  title?: string
  html: string
}) {
  const styles = {
    tip: {
      wrapper: 'bg-zinc-800/60 ring-zinc-700',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="8" stroke="#22c55e" strokeWidth="1.5" />
          <path d="M9 5.5v4M9 12h.01" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      labelColor: 'text-emerald-400',
    },
    insight: {
      wrapper: 'bg-red-950/30 ring-red-900/40',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="8" stroke="#f87171" strokeWidth="1.5" />
          <path d="M9 6v5M9 13h.01" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      labelColor: 'text-red-400',
    },
    warning: {
      wrapper: 'bg-amber-950/30 ring-amber-900/40',
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M9 2L16.5 15.5H1.5L9 2z" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 7v4M9 13h.01" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      labelColor: 'text-amber-400',
    },
  }

  const s = styles[variant]

  return (
    <div className={`my-8 rounded-xl ring-1 p-5 ${s.wrapper}`}>
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">{s.icon}</div>
        <div className="min-w-0">
          {title && (
            <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${s.labelColor}`}>
              {title}
            </p>
          )}
          <p
            className="text-sm text-zinc-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}
