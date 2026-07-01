import { useState, useEffect, useRef } from 'react'
import type { TocItem } from '@/types'

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const headingIds = items.map((i) => i.id)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 },
    )

    headingIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [items])

  return (
    <nav aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
        Contents
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(item.id)
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  window.history.replaceState(null, '', `#${item.id}`)
                }
              }}
              className={[
                'block text-sm leading-snug py-1 transition-colors duration-150',
                item.level === 3 ? 'pl-3 border-l border-zinc-800' : '',
                activeId === item.id
                  ? 'text-red-400 font-medium'
                  : 'text-zinc-500 hover:text-zinc-300',
              ].join(' ')}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
