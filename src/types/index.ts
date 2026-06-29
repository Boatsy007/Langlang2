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

export type ProjectCategory =
  | 'Cafe Racer'
  | 'Scrambler'
  | 'Tracker'
  | 'Bobber'
  | 'Chopper'
  | 'Brat Style'
  | 'Street Fighter'
  | 'Classic Restoration'
  | 'Custom'

export interface Project {
  slug: Slug
  name: string
  year: number
  brand: string
  model: string
  category: ProjectCategory
  completionYear: number
  featured: boolean

  shortDescription: string
  story: string

  heroImage: GalleryImage
  galleryImages: GalleryImage[]
  beforeImage: GalleryImage
  afterImage: GalleryImage

  specifications: Specification[]
  workCompleted: string[]
}

// ─── For Sale Listings ────────────────────────────────────────────────────────

export type AvailabilityStatus = 'Available' | 'On Hold' | 'Sold'

export interface ForSaleBike {
  slug: Slug
  name: string
  year: number
  brand: string
  model: string
  price: number
  status: AvailabilityStatus

  shortDescription: string
  fullDescription: string

  heroImage: GalleryImage
  galleryImages: GalleryImage[]

  specifications: Specification[]

  enquiryCta: string
}

// ─── Services ────────────────────────────────────────────────────────────────

export type ServiceCategory =
  | 'Restoration'
  | 'Custom Build'
  | 'Mechanical'
  | 'Fabrication'
  | 'Paint & Finish'
  | 'Electrical'
  | 'Consultation'

export interface Service {
  id: string
  name: string
  category: ServiceCategory
  shortDescription: string
  fullDescription: string
  includes: string[]
  priceFrom?: number
  priceLabel?: string
  featured: boolean
  image?: GalleryImage
}

// ─── Filter helpers ───────────────────────────────────────────────────────────

export type FilterOption<T extends string = string> = {
  label: string
  value: T | 'all'
}
