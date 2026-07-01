import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { BlogCard } from '@/components/blog/BlogCard'
import { buildGraph, businessNode, collectionPageNode, breadcrumbNode } from '@/data/schema'
import { blogPosts, blogCategories } from '@/data/blog'
import type { BlogCategory } from '@/types'

const BASE_URL = 'https://langrestorations.com.au'

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All'>('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    let posts = blogPosts
    if (activeCategory !== 'All') {
      posts = posts.filter((p) => p.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      )
    }
    return posts
  }, [activeCategory, searchQuery])

  const featured = blogPosts[0]
  const rest = filtered.filter((p) => p.slug !== featured?.slug)

  const pageTitle = 'Motorcycle Restoration Blog | Guides, Tips & Workshop Notes | Lang Restorations'
  const pageDesc =
    'Expert motorcycle restoration guides, engine rebuild tips, vapour blasting advice and workshop notes from Lang Restorations — Traralgon, Gippsland since 2004.'

  return (
    <main className="min-h-screen bg-zinc-950">
      <Seo
        title={pageTitle}
        description={pageDesc}
        canonical={`${BASE_URL}/blog`}
        ogTitle="From the Workshop — Motorcycle Restoration Blog | Lang Restorations"
        ogDescription={pageDesc}
        jsonLd={buildGraph([
          businessNode,
          collectionPageNode({
            url: `${BASE_URL}/blog`,
            name: pageTitle,
            description: pageDesc,
            hasPart: blogPosts.map((p) => ({
              url: `${BASE_URL}/blog/${p.slug}`,
              name: p.title,
            })),
          }),
          breadcrumbNode([
            { name: 'Home', url: `${BASE_URL}/` },
            { name: 'Blog', url: `${BASE_URL}/blog` },
          ]),
        ])}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-16 sm:pt-24 pb-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-600 mb-10">
            <Link to="/" className="hover:text-zinc-400 transition-colors">Home</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span aria-current="page" className="text-zinc-500">Blog</span>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
            From the Workshop
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none mb-6">
            Restoration
            <br />
            <span className="text-zinc-500">Guides &amp; Notes</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Practical knowledge from two decades of restoring vintage and classic motorcycles.
            Engine rebuilds, vapour blasting, factory-correct finishing and everything in between.
          </p>
        </div>
      </div>

      {/* ── Featured Article ─────────────────────────────────────────────── */}
      {featured && (
        <div className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-5">
              Featured
            </p>
            <BlogCard post={featured} featured />
          </div>
        </div>
      )}

      {/* ── Search + Filters ─────────────────────────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-8 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCategory === 'All'
                    ? 'bg-red-600 text-white'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white ring-1 ring-zinc-800'
                }`}
              >
                All
              </button>
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                    activeCategory === cat
                      ? 'bg-red-600 text-white'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white ring-1 ring-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64 shrink-0">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="6.5" cy="6.5" r="4.5" />
                <path d="M10.5 10.5L14 14" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-4 py-2 rounded-lg bg-zinc-900 ring-1 ring-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-red-600/60 transition-shadow"
                aria-label="Search blog articles"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Article Grid ─────────────────────────────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {rest.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : filtered.length === 1 && filtered[0].slug === featured?.slug ? (
            <p className="text-zinc-500 text-sm">Only the featured article matches your filter.</p>
          ) : filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-zinc-500 mb-2">No articles found.</p>
              <button
                type="button"
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                className="text-sm text-red-400 hover:text-red-300 underline underline-offset-2"
              >
                Clear filters
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <div className="border-t border-zinc-900 bg-zinc-950 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-4">
            Ready to Restore?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Talk to the workshop
          </h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Every restoration starts with a conversation. Reach out to discuss your project — engine
            rebuild, full ground-up, vapour blasting or anything in between.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 ring-1 ring-zinc-800 text-zinc-300 font-semibold text-sm transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
