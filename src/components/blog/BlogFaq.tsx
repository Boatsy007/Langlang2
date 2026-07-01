import { useState } from 'react'
import type { FaqItem } from '@/types'

interface BlogFaqProps {
  faqs: FaqItem[]
}

export function BlogFaq({ faqs }: BlogFaqProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="mt-16 pt-14 border-t border-zinc-800">
      <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
        Frequently Asked Questions
      </h2>
      <dl className="space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl bg-zinc-900 ring-1 ring-zinc-800 overflow-hidden"
          >
            <dt>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-white leading-snug pr-4">
                  {faq.question}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className={`shrink-0 text-zinc-500 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M4.5 6.75L9 11.25L13.5 6.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </dt>
            <dd
              className={`overflow-hidden transition-all duration-200 ease-in-out ${open === i ? 'max-h-96' : 'max-h-0'}`}
            >
              <p className="px-5 pb-5 text-sm text-zinc-400 leading-relaxed">
                {faq.answer}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
