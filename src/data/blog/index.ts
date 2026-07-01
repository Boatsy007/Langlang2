import type { BlogPost } from '@/types'
import { motorcycleRestorationCost } from './posts/motorcycle-restoration-cost'

// ─── All posts (newest first) ─────────────────────────────────────────────────
// To add a new post: import it here and add it to the array.

export const blogPosts: BlogPost[] = [
  motorcycleRestorationCost,
]

// ─── Utilities ────────────────────────────────────────────────────────────────

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category)
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit)
}

export const blogCategories = [
  'Restoration Guides',
  'Service Deep-Dives',
  'Workshop Notes',
  'Buying Advice',
  'Brand Spotlights',
] as const

export const BLOG_AUTHOR = {
  name: 'Lang Restorations',
  title: 'Vintage Motorcycle Restoration Specialists',
  bio: 'Lang Restorations has been restoring vintage and classic motorcycles from a specialist workshop in Traralgon, Gippsland since 2004. Over two decades of ground-up restorations, engine rebuilds, vapour blasting and factory-correct finishing for collectors and riders across Victoria and Australia. Honda, Yamaha, Kawasaki and Suzuki specialists.',
  image: '/images/logo.png',
  imageWebp: '/images/logo.webp',
  location: 'Traralgon, Gippsland, Victoria',
  established: 2004,
  expertise: [
    'Vintage Motocross Restoration',
    'Honda CR & Z50 Specialist',
    'Two-Stroke Engine Rebuilds',
    'Vapour Blasting',
    'Zinc Plating',
    'Aluminium TIG Welding',
    'Factory-Correct Finishing',
  ],
} as const
