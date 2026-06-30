import { useState } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { FilterBar } from '@/components/FilterBar'
import { getProjectCategories } from '@/utils/data'
import { projects } from '@/data/projects'
import type { ProjectCategory } from '@/types'
import { Seo } from '@/components/Seo'
import { pageSeo } from '@/data/seo'
import { buildGraph, businessNode, collectionPageNode, breadcrumbNode } from '@/data/schema'

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all')
  const filterOptions = getProjectCategories()

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  const seo = pageSeo.builds

  return (
    <main className="min-h-screen bg-zinc-950 px-4 sm:px-6 lg:px-8">
      <Seo
        title={seo.title}
        description={seo.metaDescription}
        canonical="https://langrestorations.com.au/builds"
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        jsonLd={buildGraph([
          businessNode,
          collectionPageNode({
            url: 'https://langrestorations.com.au/builds',
            name: seo.title,
            description: seo.metaDescription,
          }),
          breadcrumbNode([
            { name: 'Home', url: 'https://langrestorations.com.au/' },
            { name: 'Featured Builds', url: 'https://langrestorations.com.au/builds' },
          ]),
        ])}
      />

      <div className="max-w-7xl mx-auto py-16 sm:py-24">

        {/* Header */}
        <header className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Our Work</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-5">
            Featured Builds
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Every motorcycle here was stripped to bare metal, rebuilt from the ground up, and finished to a standard
            we'd be happy to ride ourselves. No reskins. No shortcuts.
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
          <p className="text-zinc-500 text-center py-20">No builds in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={i === 0 && activeFilter === 'all'}
                className={i === 0 && activeFilter === 'all' ? 'sm:col-span-2' : ''}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
