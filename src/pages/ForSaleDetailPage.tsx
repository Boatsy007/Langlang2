import { useParams, Link, Navigate } from 'react-router-dom'
import { getForSaleBikeBySlug } from '@/utils/data'
import { ImageGallery } from '@/components/ImageGallery'
import { SpecTable } from '@/components/SpecTable'
import { StatusBadge } from '@/components/Badge'
import { Seo } from '@/components/Seo'
import { localBusinessSchema, breadcrumbSchema, listingSchema } from '@/data/schema'

const BASE = 'https://langrestorations.com.au'

export function ForSaleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const bike = slug ? getForSaleBikeBySlug(slug) : undefined

  if (!bike) return <Navigate to="/for-sale" replace />

  const isAvailable = bike.status === 'Available'
  const enquirySubject = encodeURIComponent(`Enquiry — ${bike.name} (${bike.year} ${bike.brand} ${bike.model})`)
  const canonical = `${BASE}/for-sale/${bike.slug}`

  return (
    <main className="min-h-screen bg-zinc-950">

      <Seo
        title={bike.metaTitle}
        description={bike.metaDescription}
        canonical={canonical}
        ogImage={`${BASE}${bike.heroImage.src}`}
        ogType="article"
        jsonLd={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: `${BASE}/` },
            { name: 'Motorcycles For Sale', url: `${BASE}/for-sale` },
            { name: bike.name, url: canonical },
          ]),
          listingSchema({
            name: bike.name,
            description: bike.shortDescription,
            url: canonical,
            image: `${BASE}${bike.heroImage.src}`,
            availability: bike.status === 'Available' ? 'InStock' : 'SoldOut',
          }),
        ]}
      />

      {/* Hero */}
      <div className="relative aspect-[21/9] overflow-hidden bg-zinc-900">
        <img
          src={bike.heroImage.src}
          alt={bike.heroImage.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-10 max-w-7xl mx-auto">
          <StatusBadge status={bike.status} className="mb-3" />
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-2">
            {bike.name}
          </h1>
          <div className="flex items-center gap-4">
            <p className="text-lg text-zinc-400">
              {bike.year} {bike.brand} {bike.model}
            </p>
            <span className="text-2xl font-bold text-white">{bike.priceLabel}</span>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">

        {/* Back */}
        <Link
          to="/for-sale"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left — main content */}
          <div className="lg:col-span-2 space-y-14">

            <p className="text-xl text-zinc-300 leading-relaxed font-light">
              {bike.shortDescription}
            </p>

            {/* Gallery */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Gallery</h2>
              <ImageGallery images={bike.galleryImages} />
            </section>

            {/* Full description */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-5 tracking-tight">About This Bike</h2>
              <div className="space-y-4">
                {bike.fullDescription.split('\n\n').map((para, i) => (
                  <p key={i} className="text-zinc-400 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          </div>

          {/* Right — sidebar */}
          <aside className="space-y-8">

            {/* Price & CTA */}
            <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-6 sticky top-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-white">{bike.priceLabel}</p>
                  <p className="text-sm text-zinc-500 mt-0.5">AUD</p>
                </div>
                <StatusBadge status={bike.status} />
              </div>

              <a
                href={`mailto:info@langrestorations.com.au?subject=${enquirySubject}`}
                className={
                  isAvailable
                    ? 'inline-flex items-center justify-center w-full px-5 py-3.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors'
                    : 'inline-flex items-center justify-center w-full px-5 py-3.5 rounded-xl bg-zinc-800 text-zinc-400 text-sm font-semibold cursor-not-allowed'
                }
                aria-disabled={!isAvailable}
              >
                {bike.enquiryCta}
              </a>

              {bike.status === 'On Hold' && (
                <p className="text-xs text-zinc-500 text-center mt-3">
                  This bike is currently on hold. Contact us to join the waitlist.
                </p>
              )}
              {bike.status === 'Sold' && (
                <p className="text-xs text-zinc-500 text-center mt-3">
                  Sold. Enquire about our next available build.
                </p>
              )}

              <div className="mt-5 pt-5 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 text-center">
                  Questions? Call Nick on{' '}
                  <a href="tel:+61439744632" className="text-zinc-300 hover:text-white">
                    0439 744 632
                  </a>
                </p>
              </div>
            </div>

            {/* Specs */}
            <SpecTable specs={bike.specifications} />
          </aside>
        </div>
      </div>
    </main>
  )
}
