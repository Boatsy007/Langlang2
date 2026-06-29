import { projects } from '@/data/projects'
import { forSaleBikes } from '@/data/forSale'
import { services } from '@/data/services'
import type { Project, ForSaleBike, Service, ProjectCategory, ServiceCategory, AvailabilityStatus, FilterOption } from '@/types'

// ─── Project helpers ──────────────────────────────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectCategories(): FilterOption<ProjectCategory>[] {
  const counts = new Map<ProjectCategory, number>()
  for (const p of projects) {
    counts.set(p.category, (counts.get(p.category) ?? 0) + 1)
  }
  const categories: FilterOption<ProjectCategory>[] = [
    { label: `All Builds (${projects.length})`, value: 'all' },
  ]
  for (const [cat, count] of counts.entries()) {
    categories.push({ label: `${cat} (${count})`, value: cat })
  }
  return categories
}

export function getRelatedProjects(current: Project, limit = 3): Project[] {
  return projects
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, limit)
}

// ─── For Sale helpers ─────────────────────────────────────────────────────────

export function getForSaleBikeBySlug(slug: string): ForSaleBike | undefined {
  return forSaleBikes.find((b) => b.slug === slug)
}

export function getAvailableForSale(): ForSaleBike[] {
  return forSaleBikes.filter((b) => b.status === 'Available')
}

export function getForSaleByStatus(status: AvailabilityStatus): ForSaleBike[] {
  return forSaleBikes.filter((b) => b.status === status)
}

export function getForSaleStatusOptions(): FilterOption<AvailabilityStatus>[] {
  return [
    { label: `All Listings (${forSaleBikes.length})`, value: 'all' },
    { label: `Available (${getForSaleByStatus('Available').length})`, value: 'Available' },
    { label: `On Hold (${getForSaleByStatus('On Hold').length})`, value: 'On Hold' },
    { label: `Sold (${getForSaleByStatus('Sold').length})`, value: 'Sold' },
  ]
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 }).format(price)
}

// ─── Service helpers ──────────────────────────────────────────────────────────

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category)
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured)
}

export function getServiceCategories(): FilterOption<ServiceCategory>[] {
  const seen = new Set<ServiceCategory>()
  const cats: FilterOption<ServiceCategory>[] = [{ label: 'All Services', value: 'all' }]
  for (const s of services) {
    if (!seen.has(s.category)) {
      seen.add(s.category)
      cats.push({ label: s.category, value: s.category })
    }
  }
  return cats
}
