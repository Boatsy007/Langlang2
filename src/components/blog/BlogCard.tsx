import { Link } from 'react-router-dom'
import type { BlogPost } from '@/types'
import { Picture } from '@/components/Picture'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-zinc-800 hover:ring-red-900/50 transition-all duration-300"
      >
        <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
          <Picture
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="eager"
            fetchPriority="high"
            width={post.heroImage.width}
            height={post.heroImage.height}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/40" />
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-950/60 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className="text-xs text-zinc-600">Featured</span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight mb-4 group-hover:text-red-400 transition-colors duration-200">
            {post.title}
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-red-400 transition-colors duration-200">
            Read article
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-zinc-800 hover:ring-red-900/50 transition-all duration-300"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Picture
          src={post.heroImage.src}
          alt={post.heroImage.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          width={post.heroImage.width}
          height={post.heroImage.height}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-950/80 backdrop-blur-sm px-2.5 py-1 rounded-md">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-red-400 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-800 text-xs text-zinc-600">
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>
      </div>
    </Link>
  )
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
