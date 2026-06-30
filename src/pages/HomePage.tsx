import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedProjects, getFeaturedServices, getAvailableForSale } from '@/utils/data'
import {
  testimonials,
  business,
  whyItems,
  philosophyItems,
  homepageIntroParagraphs,
  homepageIntroStats,
  homepageFaq,
  homepageBeforeAfter,
} from '@/data/siteContent'
import { ProjectCard } from '@/components/ProjectCard'
import { ForSaleCard } from '@/components/ForSaleCard'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { CinematicHero } from '@/components/CinematicHero'
import { useInView } from '@/hooks/useInView'
import { Seo } from '@/components/Seo'
import { pageSeo } from '@/data/seo'
import { buildGraph, businessNode, webSiteNode, webPageNode, faqNode } from '@/data/schema'

// ─── Utility: Scroll-triggered fade-in wrapper ───────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

// ─── Section label ────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-5 h-px bg-red-600 shrink-0" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">{children}</p>
    </div>
  )
}

// ─── FAQ accordion item ───────────────────────────────────────────────────────

function FaqItem({ question, answer, delay = 0 }: { question: string; answer: string; delay?: number }) {
  const [open, setOpen] = useState(false)
  return (
    <FadeIn delay={delay}>
      <div className="group">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="w-full py-6 sm:py-7 flex items-start justify-between gap-6 text-left hover:text-white transition-colors"
        >
          <span className="text-base sm:text-lg font-medium text-white leading-snug">{question}</span>
          <span
            className={`shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full ring-1 transition-all duration-300 ${open ? 'rotate-45 ring-red-800 bg-red-950' : 'ring-zinc-800 bg-zinc-900'}`}
            aria-hidden="true"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-zinc-400" />
            </svg>
          </span>
        </button>
        {open && (
          <div className="pb-7 pr-10">
            <p className="text-base text-zinc-400 leading-relaxed">{answer}</p>
          </div>
        )}
      </div>
    </FadeIn>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────

export function HomePage() {
  const featuredBuilds = getFeaturedProjects().slice(0, 3)
  const featuredServices = getFeaturedServices().slice(0, 4)
  const availableForSale = getAvailableForSale().slice(0, 3)

  // Use the first featured build's before/after images for the showcase
  const showcaseBuild = getFeaturedProjects()[0]

  const seo = pageSeo.home

  return (
    <main className="min-h-screen bg-zinc-950">

      <Seo
        title={seo.title}
        description={seo.metaDescription}
        canonical="https://langrestorations.com.au/"
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        jsonLd={buildGraph([
          businessNode,
          webSiteNode,
          webPageNode({
            url: 'https://langrestorations.com.au/',
            name: seo.title,
            description: seo.metaDescription,
            image: 'https://langrestorations.com.au/images/hero.jpg',
          }),
          faqNode(homepageFaq),
        ])}
      />

      {/* ─── 1. Cinematic Hero ──────────────────────────────────────────────── */}
      <CinematicHero src="/images/hero.jpg" />

      {/* ─── 2. Introduction ────────────────────────────────────────────────── */}
      <section className="py-28 sm:py-36 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeIn>
              <Label>Established {business.established}</Label>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Every build treated with precision, patience and respect for the machine.
              </h2>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="space-y-5 pt-2 lg:pt-10">
                {homepageIntroParagraphs.map((para, i) => (
                  <p key={i} className="text-lg text-zinc-400 leading-relaxed">
                    {para}
                  </p>
                ))}
                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    About the workshop
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Stats bar */}
          <FadeIn delay={200} className="mt-20 pt-10 border-t border-zinc-900">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {homepageIntroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl sm:text-5xl font-bold text-red-400 tracking-tight mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-500 uppercase tracking-widest font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 3. Featured Builds Preview ──────────────────────────────────────── */}
      <section className="py-28 sm:py-36 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <FadeIn>
              <Label>Featured Builds</Label>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Recent Projects.
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <Link
                to="/builds"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors shrink-0"
              >
                View all builds
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </FadeIn>
          </div>

          {featuredBuilds.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredBuilds.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 80} className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                  <ProjectCard project={project} featured={i === 0} className="h-full" />
                </FadeIn>
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 text-center py-16">Projects coming soon.</p>
          )}

          <FadeIn delay={300} className="mt-10 text-center">
            <Link
              to="/builds"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl ring-1 ring-zinc-700 text-white text-sm font-semibold hover:ring-zinc-500 hover:bg-zinc-900 transition-all"
            >
              View All Builds
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── 4. Why Lang Restorations ────────────────────────────────────────── */}
      <section className="py-28 sm:py-36 bg-zinc-900/20 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <Label>Why Us</Label>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
              The standard that separates a real restoration from a good-looking problem.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-7 h-full hover:ring-red-900/60 transition-colors">
                  <span className="text-4xl font-bold text-red-950 block mb-5 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Services Preview ─────────────────────────────────────────────── */}
      <section className="py-28 sm:py-36 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <FadeIn>
              <Label>Capabilities</Label>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                What We Do.
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors shrink-0"
              >
                View all services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredServices.map((service, i) => (
              <FadeIn key={service.id} delay={i * 80}>
                <Link
                  to="/services"
                  className="group block rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-7 h-full hover:ring-red-900/60 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-white leading-tight group-hover:text-zinc-100 transition-colors">
                      {service.name}
                    </h3>
                    <span className="shrink-0 text-xs font-medium text-zinc-500 bg-zinc-800 px-2.5 py-1 rounded-full ring-1 ring-zinc-700 mt-0.5">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-5">{service.shortDescription}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-zinc-500 group-hover:text-red-400 transition-colors">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Before & After Showcase ──────────────────────────────────────── */}
      {showcaseBuild && (
        <section className="py-28 sm:py-36 bg-zinc-900/20 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="mb-12">
              <Label>{homepageBeforeAfter.label}</Label>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                {homepageBeforeAfter.headline}
              </h2>
              <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed">
                {homepageBeforeAfter.body}
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <BeforeAfterSlider
                before={showcaseBuild.beforeImage}
                after={showcaseBuild.afterImage}
                className="max-w-5xl"
              />
              <div className="mt-6 flex items-center justify-between max-w-5xl">
                <p className="text-sm text-zinc-600">
                  {showcaseBuild.year} {showcaseBuild.brand} {showcaseBuild.model}
                </p>
                <Link
                  to={`/builds/${showcaseBuild.slug}`}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  View full build
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ─── 7. Workshop Philosophy ──────────────────────────────────────────── */}
      <section className="py-28 sm:py-36 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <Label>The Standard</Label>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Built on five principles.
            </h2>
          </FadeIn>

          <div className="space-y-0 divide-y divide-zinc-900">
            {philosophyItems.map((item, i) => (
              <FadeIn key={item.word} delay={i * 60}>
                <div className="group py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 items-start hover:bg-zinc-900/30 -mx-4 px-4 transition-colors rounded-xl">
                  <div className="flex items-baseline gap-5">
                    <span className="text-sm font-medium text-red-800 w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {item.word}.
                    </h3>
                  </div>
                  <p className="sm:col-span-2 text-lg text-zinc-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. Motorcycles For Sale ─────────────────────────────────────────── */}
      <section className="py-28 sm:py-36 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <FadeIn>
              <Label>For Sale</Label>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Bikes Available Now.
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <Link
                to="/for-sale"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors shrink-0"
              >
                View all listings
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </FadeIn>
          </div>

          {availableForSale.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableForSale.map((bike, i) => (
                  <FadeIn key={bike.slug} delay={i * 80}>
                    <ForSaleCard bike={bike} className="h-full" />
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={300} className="mt-10 text-center">
                <Link
                  to="/for-sale"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl ring-1 ring-zinc-700 text-white text-sm font-semibold hover:ring-zinc-500 hover:bg-zinc-900 transition-all"
                >
                  View Full Showroom
                </Link>
              </FadeIn>
            </>
          ) : (
            <FadeIn>
              <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-12 text-center">
                <p className="text-zinc-500 text-lg mb-4">No motorcycles currently listed for sale.</p>
                <Link
                  to="/contact"
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  Enquire about upcoming availability →
                </Link>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ─── 9. Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-28 sm:py-36 bg-zinc-900/20 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <Label>Word of Mouth</Label>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              From Riders & Collectors.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 120}>
                <blockquote className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-8 sm:p-10 h-full flex flex-col justify-between">
                  <div>
                    <svg
                      width="36"
                      height="26"
                      viewBox="0 0 36 26"
                      fill="none"
                      aria-hidden="true"
                      className="mb-6 text-red-900"
                    >
                      <path
                        d="M0 26V15.636C0 13.394 0.395833 11.2576 1.1875 9.22727C1.97917 7.19697 3.0625 5.37879 4.4375 3.77273C5.8125 2.16667 7.41667 0.848485 9.25 -0.181818L13.5 3.63636C12.0417 4.57576 10.7604 5.78788 9.65625 7.27273C8.55208 8.75758 7.875 10.4545 7.625 12.3636H14V26H0ZM22 26V15.636C22 13.394 22.3958 11.2576 23.1875 9.22727C23.9792 7.19697 25.0625 5.37879 26.4375 3.77273C27.8125 2.16667 29.4167 0.848485 31.25 -0.181818L35.5 3.63636C34.0417 4.57576 32.7604 5.78788 31.6563 7.27273C30.5521 8.75758 29.875 10.4545 29.625 12.3636H36V26H22Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="text-xl sm:text-2xl text-white font-light leading-relaxed mb-8">
                      {t.quote}
                    </p>
                  </div>
                  <footer>
                    <p className="text-base font-semibold text-white">{t.author}</p>
                    <p className="text-sm text-zinc-500">{t.role}</p>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-28 sm:py-36 border-b border-zinc-900" aria-label="Frequently Asked Questions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <Label>Common Questions</Label>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-2xl">
              Frequently Asked Questions.
            </h2>
          </FadeIn>

          <div className="max-w-4xl space-y-0 divide-y divide-zinc-900">
            {homepageFaq.map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} delay={i * 40} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. Final CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-36 sm:py-48 overflow-hidden">
        {/* Red ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-red-950/40 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-red-950/20 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Label>Get in Touch</Label>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none mb-8 max-w-3xl">
              Ready to Restore Something Special?
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed mb-12">
              Tell us about your motorcycle. What it is, what condition it's in, and what you want to
              achieve. We'll come back to you with an honest assessment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors"
              >
                Start Your Restoration
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/for-sale"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-transparent text-white text-sm font-semibold ring-1 ring-zinc-700 hover:ring-zinc-500 hover:bg-zinc-900 transition-all"
              >
                View Current Motorcycles
              </Link>
            </div>

            <div className="mt-16 pt-10 border-t border-zinc-900 flex flex-wrap items-center gap-8">
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                <span className="text-zinc-700 mr-2">Phone</span>
                {business.phone}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                <span className="text-zinc-700 mr-2">Email</span>
                {business.email}
              </a>
              <span className="text-sm text-zinc-700">{business.location}</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
