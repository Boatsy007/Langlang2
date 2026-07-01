import { Link } from 'react-router-dom'

interface BlogCtaProps {
  variant?: 'inline' | 'full'
}

export function BlogCta({ variant = 'inline' }: BlogCtaProps) {
  if (variant === 'full') {
    return (
      <section className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-8 sm:p-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
          Lang Restorations · Traralgon, Gippsland
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
          Looking to restore your motorcycle?
        </h2>
        <p className="text-zinc-400 leading-relaxed max-w-lg mx-auto mb-8">
          Every restoration at Lang Restorations starts with an honest assessment.
          We'll tell you what the machine needs, what it will cost, and whether it's worth doing —
          before any work begins. Traralgon, Gippsland. Machines accepted from across Victoria and Australia.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:+61439744632"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors w-full sm:w-auto justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.773-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V13a1 1 0 01-1 1h-2C7.82 14 2 8.18 2 1V3z" fill="currentColor" />
            </svg>
            0439 744 632
          </a>
          <a
            href="mailto:info@langrestorations.com.au?subject=Restoration Enquiry"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 ring-1 ring-zinc-700 text-white text-sm font-semibold hover:bg-zinc-700 transition-colors w-full sm:w-auto justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H2a2 2 0 00-1.997 1.884z" fill="currentColor" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" fill="currentColor" />
            </svg>
            Email the workshop
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors w-full sm:w-auto justify-center"
          >
            Get a quote
          </Link>
        </div>
      </section>
    )
  }

  return (
    <div className="my-10 rounded-xl bg-red-950/30 ring-1 ring-red-900/40 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="flex-1">
          <p className="text-white font-semibold mb-1">Ready to start your restoration?</p>
          <p className="text-sm text-zinc-400">
            Get an honest assessment from Lang Restorations, Traralgon. We service Gippsland and accept bikes from across Australia.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+61439744632"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors"
          >
            Call now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  )
}
