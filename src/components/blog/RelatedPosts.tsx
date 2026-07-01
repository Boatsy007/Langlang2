import type { BlogPost } from '@/types'
import { BlogCard } from './BlogCard'

interface RelatedPostsProps {
  posts: BlogPost[]
  currentCategory: string
}

export function RelatedPosts({ posts, currentCategory }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-20 pt-14 border-t border-zinc-800">
      <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
        More {currentCategory}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
