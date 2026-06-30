import { useParams, Link, Navigate } from 'react-router-dom'
import { getProjectBySlug, getRelatedProjects } from '@/utils/data'
import { ImageGallery } from '@/components/ImageGallery'
import { BeforeAfter } from '@/components/BeforeAfter'
import { SpecTable } from '@/components/SpecTable'
import { ProjectCard } from '@/components/ProjectCard'
import { CategoryBadge } from '@/components/Badge'
import { Seo } from '@/components/Seo'
import { buildGraph, businessNode, webPageNode, articleNode, breadcrumbNode } from '@/data/schema'

const BASE = 'https://langrestorations.com.au'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) return <Navigate to="/builds" replace />

  const related = getRelatedProjects(project)
  const canonical = `${BASE}/builds/${project.slug}`

  return (
    <main className="min-h-screen bg-zinc-950">

      <Seo
        title={project.metaTitle}
        description={project.metaDescription}
        canonical={canonical}
        ogImage={`${BASE}${project.heroImage.src}`}
        ogType="article"
        jsonLd={buildGraph([
          businessNode,
          webPageNode({
            url: canonical,
            name: project.metaTitle,
            description: project.metaDescription,
            image: `${BASE}${project.heroImage.src}`,
          }),
          articleNode(project),
          breadcrumbNode([
            { name: 'Home', url: `${BASE}/` },
            { name: 'Featured Builds', url: `${BASE}/builds` },
            { name: project.name, url: canonical },
          ]),
        ])}
      />

      {/* Hero */}
      <div className="relative aspect-[21/9] overflow-hidden bg-zinc-900">
        <img
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-10 max-w-7xl mx-auto">
          <CategoryBadge category={project.category} className="mb-3" />
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-2">
            {project.name}
          </h1>
          <p className="text-lg text-zinc-400">
            {project.year} {project.brand} {project.model} · Completed {project.completionYear}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">

        {/* Back */}
        <Link
          to="/builds"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All builds
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left column — main content */}
          <div className="lg:col-span-2 space-y-14">

            {/* Short description */}
            <p className="text-xl text-zinc-300 leading-relaxed font-light">
              {project.shortDescription}
            </p>

            {/* Gallery */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Gallery</h2>
              <ImageGallery images={project.galleryImages} />
            </section>

            {/* Build story */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-5 tracking-tight">The Build</h2>
              <div className="prose-custom space-y-4">
                {project.story.split('\n\n').map((para, i) => (
                  <p key={i} className="text-zinc-400 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Before / After */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Before & After</h2>
              <BeforeAfter before={project.beforeImage} after={project.afterImage} />
            </section>

          </div>

          {/* Right column — sidebar */}
          <aside className="space-y-10">

            {/* Specs */}
            <SpecTable specs={project.specifications} />

            {/* Work completed */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Work Completed</h2>
              <ul className="space-y-2">
                {project.workCompleted.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5 text-emerald-500">
                      <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Enquiry CTA */}
            <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-6 text-center">
              <p className="text-white font-semibold mb-1">Interested in a similar build?</p>
              <p className="text-sm text-zinc-500 mb-4">We'd love to talk about your project.</p>
              <a
                href="mailto:hello@langlang.com.au"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </aside>
        </div>

        {/* Related builds */}
        {related.length > 0 && (
          <section className="mt-20 pt-14 border-t border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-8">More {project.category} builds</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
