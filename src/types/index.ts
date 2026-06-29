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

export interface Project {
  slug: Slug
  name: string
  year: number
  brand: string
  model: string
  category: ProjectCategory
  completionYear?: number
  featured: boolean

  shortDescription: string
  story: string

  heroImage: GalleryImage
  galleryImages: GalleryImage[]
  beforeImage: GalleryImage
  afterImage: GalleryImage

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
