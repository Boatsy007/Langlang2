// ─── Shared primitives ────────────────────────────────────────────────────────

export type Slug = string

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface Specification {
  label: string
  value: string
}

// ─── Projects / Featured Builds ───────────────────────────────────────────────

export type ProjectCategory = 'Motocross' | 'Classic' | 'Vintage'

// Builds default to 'Completed' when status is omitted.
export type ProjectStatus = 'Completed' | 'In Progress'

export interface Project {
  slug: Slug
  name: string
  year: number
  brand: string
  model: string
  category: ProjectCategory
  status?: ProjectStatus
  completionYear?: number
  featured: boolean

  shortDescription: string
  story: string

  heroImage: GalleryImage
  galleryImages: GalleryImage[]
  beforeImage?: GalleryImage
  afterImage?: GalleryImage

  specifications: Specification[]
  workCompleted: string[]

  metaTitle: string
  metaDescription: string
}

// ─── For Sale Listings ────────────────────────────────────────────────────────

export type AvailabilityStatus = 'Available' | 'On Hold' | 'Sold'

export interface ForSaleBike {
  slug: Slug
  name: string
  year: number | string
  brand: string
  model: string
  priceLabel: string
  status: AvailabilityStatus
  condition: 'Restored'

  shortDescription: string
  fullDescription: string

  heroImage: GalleryImage
  galleryImages: GalleryImage[]

  specifications: Specification[]
  enquiryCta: string

  metaTitle: string
  metaDescription: string
}

// ─── Services ────────────────────────────────────────────────────────────────

export type ServiceCategory =
  | 'Restoration'
  | 'Mechanical'
  | 'Fabrication'
  | 'Finishing'

export interface Service {
  id: string
  name: string
  category: ServiceCategory
  shortDescription: string
  fullDescription: string
  includes: string[]
  priceLabel?: string
  featured: boolean
  image?: GalleryImage

  metaTitle: string
  metaDescription: string
}

// ─── Filter helpers ───────────────────────────────────────────────────────────

export type FilterOption<T extends string = string> = {
  label: string
  value: T | 'all'
}

// ─── Process steps ────────────────────────────────────────────────────────────

export interface ProcessStep {
  number: number
  name: string
  description: string
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string
  author: string
  role: string
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string
  answer: string
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export type BlogCategory =
  | 'Restoration Guides'
  | 'Service Deep-Dives'
  | 'Workshop Notes'
  | 'Buying Advice'
  | 'Brand Spotlights'

export interface TocItem {
  id: string
  text: string
  level: 2 | 3
}

export type ContentBlock =
  | { type: 'p'; html: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; id: string; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; variant: 'tip' | 'insight' | 'warning'; title?: string; html: string }
  | { type: 'table'; caption?: string; rows: Array<{ label: string; value: string }> }
  | { type: 'cta' }
  | { type: 'divider' }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: ContentBlock[]
  category: BlogCategory
  tags: string[]
  publishedAt: string
  updatedAt: string
  readingTime: number
  heroImage: {
    src: string
    alt: string
    width: number
    height: number
    caption?: string
  }
  metaTitle: string
  metaDescription: string
  faqs: FaqItem[]
  toc: TocItem[]
}
