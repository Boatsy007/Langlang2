import { useParams, Link, Navigate } from 'react-router-dom'
import { getServiceById } from '@/utils/data'
import { services } from '@/data/services'
import { Seo } from '@/components/Seo'
import { buildGraph, businessNode, webPageNode, serviceNode, breadcrumbNode } from '@/data/schema'

const BASE = 'https://langrestorations.com.au'

function renderDescription(text: string) {
  return text.split('\n\n').map((para, i) => {
    const parts = para.split(/\*\*(.*?)\*\*/g)
    return (
      <p key={i} className="text-zinc-300 leading-relaxed text-lg">
        {parts.map((part, j) =>
          j % 2 === 1
            ? <strong key={j} className="text-white font-semibold">{part}</strong>
            : part
        )}
      </p>
    )
  })
}

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>()
  const service = id ? getServiceById(id) : undefined

  if (!service) return <Navigate to="/services" replace />

  const others = services.filter((s) => s.id !== service.id).slice(0, 3)
  const canonical = `${BASE}/services/${service.id}`

  return (
    <main className="min-h-screen bg-zinc-950">

      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={canonical}
        ogImage={service.image ? `${BASE}${service.image.src}` : undefined}
        jsonLd={buildGraph([
          businessNode,
          webPageNode({
            url: canonical,
            name: service.metaTitle,
            description: service.metaDescription,
            image: service.image ? `${BASE}${service.image.src}` : undefined,
          }),
          serviceNode(service),
          breadcrumbNode([
            { name: 'Home', url: `${BASE}/` },
            { name: 'Services', url: `${BASE}/services` },
            { name: service.name, url: canonical },
          ]),
        ])}
      />

      {/* Hero */}
      <div className={`relative overflow-hidden bg-zinc-900 ${service.image ? 'aspect-[21/9]' : 'py-32'}`}>
        {service.image && (
          <img
            src={service.image.src}
            alt={service.image.alt}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-12 max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">{service.category}</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">{service.name}</h1>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">

        {/* Back */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {renderDescription(service.fullDescription)}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">

            {/* What's included */}
            {service.includes.length > 0 && (
              <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-6">
                <h2 className="text-base font-semibold text-white mb-4">What's included</h2>
                <ul className="space-y-2.5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-400">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5 text-red-500">
                        <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pricing */}
            {service.priceLabel && (
              <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-6">
                <h2 className="text-base font-semibold text-white mb-2">Pricing</h2>
                <p className="text-sm text-zinc-400">{service.priceLabel}</p>
              </div>
            )}

            {/* Enquiry CTA */}
            <div className="rounded-2xl bg-red-950/40 ring-1 ring-red-900/50 p-6">
              <h2 className="text-base font-semibold text-white mb-2">Interested in this service?</h2>
              <p className="text-sm text-zinc-400 mb-4">Get in touch with details about your motorcycle and we'll come back to you with an honest assessment.</p>
              <a
                href="mailto:hello@langlang.com.au?subject=Service Enquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-500 transition-colors w-full justify-center"
              >
                Enquire Now
              </a>
            </div>

          </aside>
        </div>

        {/* Other services */}
        {others.length > 0 && (
          <section className="mt-20 pt-16 border-t border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-8">Other Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map((s) => (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 hover:ring-red-900/60 p-6 transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">{s.category}</p>
                  <h3 className="text-base font-semibold text-white group-hover:text-red-400 transition-colors mb-2">{s.name}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{s.shortDescription}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  )
}
