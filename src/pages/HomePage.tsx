import { Link } from 'react-router-dom'
import { getFeaturedProjects, getFeaturedServices, getAvailableForSale } from '@/utils/data'
import { testimonials, business } from '@/data/siteContent'
import { ProjectCard } from '@/components/ProjectCard'
import { ForSaleCard } from '@/components/ForSaleCard'
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { useInView } from '@/hooks/useInView'

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
    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
      {children}
    </p>
  )
}

// ─── Why Lang Restorations data ───────────────────────────────────────────────

const whyItems = [
  {
    title: 'Factory-Correct Restorations',
    body: 'Every specification — torque values, material finishes, hardware grades — is verified against factory documentation. The result is a machine rebuilt to the standard it left the factory.',
  },
  {
    title: 'Collector-Quality Finishes',
    body: 'Vapour blasting, zinc plating, period-correct paint and decals. The finishes used here are chosen for authenticity and longevity — not visual shortcuts.',
  },
  {
    title: 'Documented Process',
    body: 'Every restoration is photographed at every stage. You receive a documented record of what was found, what was done, and how it was resolved.',
  },
  {
    title: 'Traditional Craftsmanship',
    body: 'Two decades of hands-on experience with the machines that matter. Not a production shop. Every project receives the full attention it demands.',
  },
  {
    title: 'Premium Components',
    body: 'Genuine OEM parts where available. Quality aftermarket where not. No budget compromises on components that affect function, longevity or correctness.',
  },
  {
    title: '20+ Years Experience',
    body: 'Operating from Traralgon, Victoria since 2004. Built on a reputation for restoration work that holds up under scrutiny — from collectors and riders who know the difference.',
  },
]

// ─── Philosophy data ──────────────────────────────────────────────────────────

const philosophyItems = [
  {
    word: 'Passion',
    body: 'The machines that come through this workshop are not commodities. They are pieces of motorcycle history — and they are treated that way.',
  },
  {
    word: 'Precision',
    body: 'Factory torque specifications. Correct clearances. The right lubricant in the right location. Precision is not optional — it is the baseline.',
  },
  {
    word: 'Heritage',
    body: 'Vintage motorcycles carry the design decisions, engineering solutions and aesthetic choices of their era. A correct restoration preserves all of that.',
  },
  {
    word: 'Craftsmanship',
    body: 'There are no shortcuts here. The work that cannot be seen when the bike is assembled matters just as much as the finish that can.',
  },
  {
    word: 'Trust',
    body: 'An honest assessment before any work is committed. A complete account of what was found and what was done. That is the standard.',
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export function HomePage() {
  const featuredBuilds = getFeaturedProjects().slice(0, 3)
  const featuredServices = getFeaturedServices().slice(0, 4)
  const availableForSale = getAvailableForSale().slice(0, 3)

  // Use the first featured build's before/after images for the showcase
  const showcaseBuild = getFeaturedProjects()[0]

  return (
    <main className="min-h-screen bg-zinc-950">

      {/* ─── 1. Cinematic Hero ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-end pb-20 sm:pb-28"
        aria-label="Hero"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-zinc-900">
          <img
            src={showcaseBuild?.afterImage.src ?? '/images/hero.jpg'}
            alt="Lang Restorations — Traralgon motorcycle restoration workshop"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-zinc-950/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8">
            {business.name} · {business.suburb}, {business.state} · Est. {business.established}
          </p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight leading-none mb-8 max-w-5xl">
            Motorcycle
            <br />
            Restorations
            <br />
            <span className="text-zinc-400">Without Compromise.</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-12">
            Collector-quality restorations of vintage motocross, classic road motorcycles and iconic
            minibikes, meticulously rebuilt in Traralgon, Victoria.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/builds"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors"
            >
              View Featured Builds
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/for-sale"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent text-white text-sm font-semibold ring-1 ring-white/30 hover:ring-white/60 hover:bg-white/5 transition-all"
            >
              Motorcycles For Sale
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-zinc-600 uppercase tracking-widest font-medium">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 4v12M10 16L5 11M10 16L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600" />
          </svg>
        </div>
      </section>

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
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Lang Restorations has operated from Traralgon, Victoria since 2004. Over two decades, the
                  workshop has built a reputation across Victoria and interstate for restoration work that
                  holds up under scrutiny — machines rebuilt to factory standards, documented at every
                  stage, and finished with the kind of precision that collectors recognise immediately.
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  This is not a volume operation. Each project receives the full attention it demands — from
                  complete disassembly and inspection through to final assembly and documentation. The
                  result is a motorcycle restored properly, not polished to look right, but rebuilt to be right.
                </p>
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
              {[
                { value: '20+', label: 'Years operating' },
                { value: '100+', label: 'Restorations completed' },
                { value: '3', label: 'Restoration disciplines' },
                { value: 'VIC', label: 'Gippsland, Victoria' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-1">
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
                <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-7 h-full hover:ring-zinc-700 transition-colors">
                  <span className="text-4xl font-bold text-zinc-800 block mb-5 leading-none">
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
                  className="group block rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-7 h-full hover:ring-zinc-600 transition-all"
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
                  <div className="flex items-center gap-1 text-sm font-medium text-zinc-500 group-hover:text-white transition-colors">
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
              <Label>Restoration Quality</Label>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                Before & After.
              </h2>
              <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed">
                Drag the slider to see the transformation. Every machine that leaves this workshop has been through the same process — complete disassembly, full inspection, and a ground-up rebuild.
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
                    <span className="text-sm font-medium text-zinc-700 w-6 shrink-0">
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
                      className="mb-6 text-zinc-700"
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

      {/* ─── 10. Final CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-36 sm:py-48 overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 via-transparent to-transparent" />
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors"
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
