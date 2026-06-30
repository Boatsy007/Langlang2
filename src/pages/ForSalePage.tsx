import { useState } from 'react'
import { ForSaleCard } from '@/components/ForSaleCard'
import { FilterBar } from '@/components/FilterBar'
import { getForSaleStatusOptions } from '@/utils/data'
import { forSaleBikes } from '@/data/forSale'
import type { AvailabilityStatus } from '@/types'
import { Seo } from '@/components/Seo'
import { pageSeo } from '@/data/seo'
import { buildGraph, businessNode, collectionPageNode, breadcrumbNode } from '@/data/schema'

export function ForSalePage() {
  const [activeFilter, setActiveFilter] = useState<AvailabilityStatus | 'all'>('all')
  const filterOptions = getForSaleStatusOptions()

  const filtered = activeFilter === 'all'
    ? forSaleBikes
    : forSaleBikes.filter((b) => b.status === activeFilter)

  const seo = pageSeo.forSale

  return (
    <main className="min-h-screen bg-zinc-950 px-4 sm:px-6 lg:px-8">
      <Seo
        title={seo.title}
        description={seo.metaDescription}
        canonical="https://langrestorations.com.au/for-sale"
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        jsonLd={buildGraph([
          businessNode,
          collectionPageNode({
            url: 'https://langrestorations.com.au/for-sale',
            name: seo.title,
            description: seo.metaDescription,
          }),
          breadcrumbNode([
            { name: 'Home', url: 'https://langrestorations.com.au/' },
            { name: 'Motorcycles For Sale', url: 'https://langrestorations.com.au/for-sale' },
          ]),
        ])}
      />

      <div className="max-w-7xl mx-auto py-16 sm:py-24">

        {/* Header */}
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">For Sale</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-5">
            Available Motorcycles
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Every bike we sell has been built or rebuilt in this workshop. We don't flip project bikes.
            What you see is what was delivered to us, fully documented, and finished to our own standard.
          </p>
        </header>

        {/* Filters */}
        <FilterBar
          options={filterOptions}
          active={activeFilter}
          onChange={setActiveFilter}
          className="mb-10"
        />

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-zinc-500 text-lg mb-2">Nothing in this category right now.</p>
            <p className="text-zinc-600 text-sm">Check back soon or get in touch to discuss a build.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((bike) => (
              <ForSaleCard key={bike.slug} bike={bike} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
