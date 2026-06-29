import { useState } from 'react'
import { contact, business } from '@/data/siteContent'
import { useInView } from '@/hooks/useInView'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
    >
      {children}
    </div>
  )
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`Restoration Enquiry — ${data.get('motorcycle') || 'General'}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
      `Phone: ${data.get('phone') || 'Not provided'}\n\n` +
      `Motorcycle: ${data.get('motorcycle') || 'Not specified'}\n\n` +
      `Message:\n${data.get('message')}`,
    )
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-zinc-950">

      {/* Hero */}
      <section className="relative py-32 sm:py-40 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            {business.suburb}, {business.state}
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-8">
            {contact.headline}
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
            {contact.body}
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — info */}
            <div className="space-y-12">
              <FadeIn>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  {contact.note}
                </p>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="space-y-6">
                  <a
                    href={`tel:${business.phone.replace(/\s/g, '')}`}
                    className="group flex items-start gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 flex items-center justify-center shrink-0 group-hover:ring-zinc-600 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M3 4.5C3 3.67 3.67 3 4.5 3h2.29a.5.5 0 01.49.39l.74 3.32a.5.5 0 01-.14.48l-1.2 1.07A11.04 11.04 0 0012.74 14l1.07-1.2a.5.5 0 01.48-.14l3.32.74A.5.5 0 0118 14v2.5A1.5 1.5 0 0116.5 18C9.045 18 3 11.955 3 4.5z" fill="currentColor" className="text-zinc-400 group-hover:text-white transition-colors" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">Phone</p>
                      <p className="text-xl font-semibold text-white group-hover:text-zinc-200 transition-colors">
                        {business.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${business.email}`}
                    className="group flex items-start gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 flex items-center justify-center shrink-0 group-hover:ring-zinc-600 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v.5L10 10.5 3 5.5V5zm0 2.5V15a2 2 0 002 2h10a2 2 0 002-2V7.5L10 12.5 3 7.5z" fill="currentColor" className="text-zinc-400 group-hover:text-white transition-colors" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">Email</p>
                      <p className="text-xl font-semibold text-white group-hover:text-zinc-200 transition-colors">
                        {business.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 ring-1 ring-zinc-800 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" className="text-zinc-400" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">Location</p>
                      <p className="text-xl font-semibold text-white">{business.location}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex gap-4">
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                  <span className="text-zinc-700">·</span>
                  <a
                    href={business.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right — form */}
            <FadeIn delay={150}>
              {submitted ? (
                <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-10 text-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12L9.5 16.5L19 7" stroke="#09090b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">Message opening…</h2>
                  <p className="text-zinc-400">Your email client should have opened. If it didn't, send us a message directly at{' '}
                    <a href={`mailto:${business.email}`} className="text-white hover:text-zinc-300">{business.email}</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-8 space-y-6">
                  <h2 className="text-xl font-semibold text-white mb-2">Send an Enquiry</h2>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                        Name <span className="text-zinc-600">(required)</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl bg-zinc-800 ring-1 ring-zinc-700 px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:ring-zinc-500 transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">
                        Phone <span className="text-zinc-600">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="0400 000 000"
                        className="w-full rounded-xl bg-zinc-800 ring-1 ring-zinc-700 px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:ring-zinc-500 transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="motorcycle" className="block text-sm font-medium text-zinc-400 mb-2">
                        Motorcycle <span className="text-zinc-600">(year, make, model)</span>
                      </label>
                      <input
                        id="motorcycle"
                        name="motorcycle"
                        type="text"
                        placeholder="e.g. 1981 Honda CR250R"
                        className="w-full rounded-xl bg-zinc-800 ring-1 ring-zinc-700 px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:ring-zinc-500 transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                        Message <span className="text-zinc-600">(required)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your motorcycle and what you're hoping to achieve."
                        className="w-full rounded-xl bg-zinc-800 ring-1 ring-zinc-700 px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:ring-zinc-500 transition-shadow resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-white text-black text-sm font-semibold py-3.5 hover:bg-zinc-100 transition-colors"
                  >
                    Send Enquiry
                  </button>

                  <p className="text-xs text-zinc-600 text-center">
                    This will open your email client. Alternatively, call{' '}
                    <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="text-zinc-500 hover:text-zinc-300">
                      {business.phone}
                    </a>.
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
