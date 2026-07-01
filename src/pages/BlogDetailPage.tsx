import { useParams, Link, Navigate } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Picture } from '@/components/Picture'
import { ReadingProgress } from '@/components/blog/ReadingProgress'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { ContentRenderer } from '@/components/blog/ContentRenderer'
import { BlogFaq } from '@/components/blog/BlogFaq'
import { BlogCta } from '@/components/blog/BlogCta'
import { AuthorCard } from '@/components/blog/AuthorCard'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { ShareButtons } from '@/components/blog/ShareButtons'
import { getBlogPostBySlug, getRelatedBlogPosts } from '@/data/blog'
import {
  buildGraph,
  businessNode,
  webPageNode,
  breadcrumbNode,
  blogArticleNode,
  articleFaqNode,
} from '@/data/schema'

const BASE_URL = 'https://langrestorations.com.au'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) return <Navigate to="/blog" replace />

  const url = `${BASE_URL}/blog/${post.slug}`
  const heroImageUrl = `${BASE_URL}${post.heroImage.src}`
  const related = getRelatedBlogPosts(post, 3)

  const jsonLd = buildGraph([
    businessNode,
    webPageNode({
      type: 'Article',
      url,
      name: post.metaTitle,
      description: post.metaDescription,
      image: heroImageUrl,
    }),
    blogArticleNode({
      url,
      headline: post.title,
      description: post.metaDescription,
      image: heroImageUrl,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      keywords: post.tags,
    }),
    ...(post.faqs.length > 0 ? [articleFaqNode(url, post.faqs)] : []),
    breadcrumbNode([
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: post.title, url },
    ]),
  ])

  return (
    <>
      <ReadingProgress />

      <main className="min-h-screen bg-zinc-950">
        <Seo
          title={post.metaTitle}
          description={post.metaDescription}
          canonical={url}
          ogType="article"
          ogTitle={post.title}
          ogDescription={post.metaDescription}
          ogImage={heroImageUrl}
          jsonLd={jsonLd}
        />

        {/* ── Hero Image ─────────────────────────────────────────────────── */}
        <div className="relative w-full aspect-[16/7] sm:aspect-[21/8] overflow-hidden bg-zinc-900">
          <Picture
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            width={post.heroImage.width}
            height={post.heroImage.height}
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        </div>

        {/* ── Article Container ──────────────────────────────────────────── */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Breadcrumb + meta strip */}
            <div className="py-8 border-b border-zinc-900">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Blog', href: '/blog' },
                  { label: post.title },
                ]}
                className="mb-5"
              />

              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                <span className="px-2.5 py-1 rounded-md bg-red-950/60 text-red-400 font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
                <span>·</span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                {post.updatedAt !== post.publishedAt && (
                  <>
                    <span>·</span>
                    <span>Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time></span>
                  </>
                )}
                <span>·</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mt-10 mb-6 max-w-4xl">
              {post.title}
            </h1>

            {/* Excerpt lead */}
            <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl mb-10 border-l-2 border-red-600 pl-5">
              {post.excerpt}
            </p>

            {/* Share strip (top) */}
            <ShareButtons slug={post.slug} title={post.title} />

            {/* ── Two-column layout: content + sidebar ─────────────────── */}
            <div className="mt-12 lg:grid lg:grid-cols-[1fr_280px] lg:gap-16 xl:gap-20">

              {/* Main content */}
              <article>
                <ContentRenderer blocks={post.content} />

                {/* Share strip (bottom) */}
                <div className="mt-12 pt-8 border-t border-zinc-800">
                  <ShareButtons slug={post.slug} title={post.title} />
                </div>
              </article>

              {/* Sidebar — sticky on lg+ */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">

                  {/* TOC */}
                  {post.toc.length > 0 && (
                    <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                        In This Article
                      </p>
                      <TableOfContents items={post.toc} />
                    </div>
                  )}

                  {/* Sidebar CTA card */}
                  <div className="rounded-2xl bg-red-950/30 ring-1 ring-red-900/40 p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">
                      Lang Restorations
                    </p>
                    <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                      Vintage &amp; classic motorcycle restoration specialists in Traralgon,
                      Gippsland since 2004.
                    </p>
                    <div className="space-y-2">
                      <a
                        href="tel:+61439744632"
                        className="flex items-center gap-2.5 text-sm text-zinc-300 hover:text-white transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M2 2.5C2 1.67 2.67 1 3.5 1h2l1 3-1.5 1.5c.878 1.854 2.147 3.123 4 4L10.5 8l3 1v2c0 .83-.67 1.5-1.5 1.5A12.5 12.5 0 012 2.5z" />
                        </svg>
                        0439 744 632
                      </a>
                      <a
                        href="mailto:info@langrestorations.com.au"
                        className="flex items-center gap-2.5 text-sm text-zinc-300 hover:text-white transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="1" y="3" width="14" height="10" rx="1.5" />
                          <path d="M1 4l7 5 7-5" />
                        </svg>
                        info@langrestorations.com.au
                      </a>
                    </div>
                    <Link
                      to="/contact"
                      className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors"
                    >
                      Enquire About Your Project
                    </Link>
                  </div>

                  {/* Quick links */}
                  <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-800 p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
                      Explore
                    </p>
                    <ul className="space-y-2 text-sm">
                      {[
                        { to: '/services', label: 'Restoration Services' },
                        { to: '/builds', label: 'Featured Builds' },
                        { to: '/for-sale', label: 'Bikes For Sale' },
                        { to: '/about', label: 'About the Workshop' },
                      ].map(({ to, label }) => (
                        <li key={to}>
                          <Link
                            to={to}
                            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                          >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                              <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>

            {/* ── Post-article sections ─────────────────────────────────── */}
            <div className="max-w-4xl">

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-zinc-900 ring-1 ring-zinc-800 text-xs text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* FAQ */}
              {post.faqs.length > 0 && <BlogFaq faqs={post.faqs} />}

              {/* Full CTA */}
              <BlogCta variant="full" />

              {/* Author */}
              <AuthorCard />
            </div>

          </div>
        </div>

        {/* ── Related Posts ─────────────────────────────────────────────── */}
        {related.length > 0 && (
          <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div className="max-w-7xl mx-auto">
              <RelatedPosts posts={related} currentCategory={post.category} />
            </div>
          </div>
        )}

        {/* Spacer when no related */}
        {related.length === 0 && <div className="pb-24" />}
      </main>
    </>
  )
}
