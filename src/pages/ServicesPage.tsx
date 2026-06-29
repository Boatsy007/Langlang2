import { useState } from 'react'
import { ServiceCard } from '@/components/ServiceCard'
import { FilterBar } from '@/components/FilterBar'
import { getServiceCategories } from '@/utils/data'
import { services } from '@/data/services'
import type { ServiceCategory } from '@/types'

export function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory | 'all'>('all')
  const filterOptions = getServiceCategories()

  const filtered = activeFilter === 'all'
    ? services
    : services.filter((s) => s.category === activeFilter)

  return (
    <main className="min-h-screen bg-zinc-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-16 sm:py-24">

        {/* Header */}
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">What We Do</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-5">
            Services
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            From a single component to a complete ground-up build, every job that comes through the workshop
            gets the same level of attention. We only take on work we can do properly.
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
          <p className="text-zinc-500 text-center py-20">No services in this category.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} expanded />
            ))}
          </div>
        )}

        {/* Enquiry CTA */}
        <div className="mt-20 rounded-3xl bg-zinc-900 ring-1 ring-zinc-800 p-10 sm:p-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Not sure what you need?</h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Book a one-hour consultation. We'll tell you what's realistic, what order to do things in,
            and what it will cost — no obligation.
          </p>
          <a
            href="mailto:hello@langlang.com.au?subject=Service Enquiry"
            className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-black text-base font-semibold hover:bg-zinc-200 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </main>
  )
}
