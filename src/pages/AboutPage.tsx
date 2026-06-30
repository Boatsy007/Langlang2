import { Link } from 'react-router-dom'
import { about, business, processSteps } from '@/data/siteContent'
import { useInView } from '@/hooks/useInView'
import { Seo } from '@/components/Seo'
import { pageSeo } from '@/data/seo'
import { buildGraph, businessNode, aboutPageNode, breadcrumbNode } from '@/data/schema'

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

export function AboutPage() {
  const seo = pageSeo.about
  return (
    <main className="min-h-screen bg-zinc-950">

      <Seo
        title={seo.title}
        description={seo.metaDescription}
        canonical="https://langrestorations.com.au/about"
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        jsonLd={buildGraph([
          businessNode,
          aboutPageNode(
            'https://langrestorations.com.au/about',
            seo.title,
            seo.metaDescription,
          ),
          breadcrumbNode([
            { name: 'Home', url: 'https://langrestorations.com.au/' },
            { name: 'About', url: 'https://langrestorations.com.au/about' },
          ]),
        ])}
      />

      {/* Hero */}
      <section className="relative py-32 sm:py-40 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
            {business.location} · Est. {business.established}
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-8">
            {about.hero.headline}
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
            {about.hero.subheading}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-20">
            {about.sections.map((section, i) => (
              <FadeIn key={i} delay={0}>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
                  {section.heading}
                </h2>
                <div className="space-y-5">
                  {section.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-zinc-400 leading-relaxed text-lg">
                      {para}
                    </p>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">How We Work</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-16">
              The Process.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 80}>
                <div className="relative">
                  <span className="text-7xl font-bold text-zinc-800 leading-none block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.name}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Have a motorcycle that deserves proper attention?
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-xl leading-relaxed">
              Get in touch to discuss your project. The conversation starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors"
              >
                Contact the Workshop
              </Link>
              <Link
                to="/builds"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-transparent text-white text-sm font-semibold ring-1 ring-zinc-700 hover:ring-zinc-500 hover:bg-zinc-900 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
