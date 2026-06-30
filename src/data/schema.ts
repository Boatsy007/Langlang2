/**
 * Schema.org JSON-LD graph node builders.
 *
 * All builder functions return plain objects suitable for inclusion in a
 * JSON-LD @graph array.  The @context is added once at the top level by
 * buildGraph() — individual nodes must NOT include @context.
 *
 * Canonical domain: https://langrestorations.com.au
 */

import type { Project, ForSaleBike, Service, FaqItem } from '@/types'

const BASE = 'https://langrestorations.com.au'
const BUSINESS_ID = `${BASE}/#business`
const WEBSITE_ID = `${BASE}/#website`

// ─── Core: wrap nodes into a single @graph block ───────────────────────────

export function buildGraph(nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  }
}

// ─── Reusable entity references (no duplication) ──────────────────────────

const businessRef = { '@id': BUSINESS_ID }
const websiteRef = { '@id': WEBSITE_ID }

// ─── 1. AutoRepair (primary business entity) ──────────────────────────────
// AutoRepair inherits all LocalBusiness properties via schema.org hierarchy.
// Used on every page as the authority entity.

export const businessNode = {
  '@type': 'AutoRepair',
  '@id': BUSINESS_ID,
  name: 'Lang Restorations',
  alternateName: 'Lang Restorations Motorcycle Restoration',
  description:
    'Specialist vintage and classic motorcycle restoration workshop in Traralgon, Gippsland, Victoria. Engine rebuilds, vapour blasting, aluminium TIG welding, zinc plating, frame repairs and ground-up restorations. Serving Victoria and Australia since 2004.',
  url: BASE,
  logo: {
    '@type': 'ImageObject',
    '@id': `${BASE}/#logo`,
    url: `${BASE}/images/logo.png`,
    contentUrl: `${BASE}/images/logo.png`,
    caption: 'Lang Restorations',
  },
  image: {
    '@type': 'ImageObject',
    '@id': `${BASE}/#heroimage`,
    url: `${BASE}/images/hero.jpg`,
    contentUrl: `${BASE}/images/hero.jpg`,
    width: 1200,
    height: 800,
    caption:
      'Lang Restorations workshop — vintage and classic motorcycle restoration specialists, Traralgon, Gippsland Victoria',
  },
  telephone: '+61439744632',
  email: 'info@langrestorations.com.au',
  foundingDate: '2004',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Traralgon',
    addressRegion: 'VIC',
    postalCode: '3844',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -38.1955,
    longitude: 146.5378,
  },
  areaServed: [
    { '@type': 'City', name: 'Traralgon' },
    { '@type': 'AdministrativeArea', name: 'Gippsland' },
    { '@type': 'State', name: 'Victoria' },
    { '@type': 'Country', name: 'Australia' },
  ],
  sameAs: [
    'https://www.facebook.com/langrestorations/',
    'https://www.instagram.com/langrestorations/',
  ],
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  paymentAccepted: 'Cash, Bank Transfer',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Motorcycle Restoration Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vintage Motorcycle Restoration', provider: businessRef } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motorcycle Engine Rebuilds', provider: businessRef } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motorcycle Vapour Blasting', provider: businessRef } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aluminium TIG Welding and Repairs', provider: businessRef } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zinc Plating', provider: businessRef } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Frame Repairs', provider: businessRef } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parts Restoration', provider: businessRef } },
    ],
  },
}

// ─── 2. WebSite ────────────────────────────────────────────────────────────
// Homepage only. No SearchAction — site has no working search endpoint.

export const webSiteNode = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'Lang Restorations',
  url: BASE,
  description:
    'Specialist vintage and classic motorcycle restoration — Traralgon, Gippsland, Victoria',
  publisher: businessRef,
  inLanguage: 'en-AU',
}

// ─── 3. WebPage builders ───────────────────────────────────────────────────

export function webPageNode(opts: {
  type?: string
  url: string
  name: string
  description: string
  image?: string
}) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: websiteRef,
    about: businessRef,
    inLanguage: 'en-AU',
    ...(opts.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: opts.image } } : {}),
  }
}

// Specific subtypes
export const aboutPageNode = (url: string, name: string, description: string) =>
  webPageNode({ type: 'AboutPage', url, name, description })

export const contactPageNode = (url: string, name: string, description: string) =>
  webPageNode({ type: 'ContactPage', url, name, description })

export function collectionPageNode(opts: {
  url: string
  name: string
  description: string
  hasPart?: Array<{ url: string; name: string }>
}) {
  return {
    '@type': 'CollectionPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: websiteRef,
    about: businessRef,
    inLanguage: 'en-AU',
    ...(opts.hasPart
      ? {
          hasPart: opts.hasPart.map((p) => ({
            '@type': 'WebPage',
            url: p.url,
            name: p.name,
          })),
        }
      : {}),
  }
}

// ─── 4. ImageObject ────────────────────────────────────────────────────────

export function imageObjectNode(opts: {
  url: string
  contentUrl?: string
  caption: string
  width?: number
  height?: number
}) {
  return {
    '@type': 'ImageObject',
    url: opts.url,
    contentUrl: opts.contentUrl ?? opts.url,
    caption: opts.caption,
    ...(opts.width ? { width: opts.width } : {}),
    ...(opts.height ? { height: opts.height } : {}),
  }
}

// ─── 5. BreadcrumbList ─────────────────────────────────────────────────────

export function breadcrumbNode(items: Array<{ name: string; url: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// ─── 6. Article — for project/build detail pages ───────────────────────────

export function articleNode(project: Project) {
  const url = `${BASE}/builds/${project.slug}`
  const imageUrl = `${BASE}${project.heroImage.src}`
  const authorOrg = {
    '@type': 'Organization',
    name: 'Lang Restorations',
    url: BASE,
    logo: { '@type': 'ImageObject', url: `${BASE}/images/logo.png` },
  }

  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: project.name,
    description: project.shortDescription,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${url}#webpage` },
    image: imageObjectNode({
      url: imageUrl,
      caption: project.heroImage.alt,
    }),
    author: authorOrg,
    publisher: {
      ...authorOrg,
      '@id': BUSINESS_ID,
    },
    about: [
      { '@type': 'MotorizedBicycle', name: `${project.year} ${project.brand} ${project.model}` },
    ],
    keywords: [
      `${project.brand} ${project.model} restoration`,
      `${project.year} ${project.brand} ${project.model}`,
      'vintage motorcycle restoration',
      'motorcycle restoration Australia',
    ].join(', '),
    datePublished: `${project.year}-01-01`,
    inLanguage: 'en-AU',
  }
}

// ─── 7. Service — for service detail pages ────────────────────────────────

export function serviceNode(service: Service) {
  const url = `${BASE}/services/${service.id}`
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    description: service.shortDescription,
    url,
    provider: businessRef,
    serviceType: 'Motorcycle Restoration',
    areaServed: [
      { '@type': 'State', name: 'Victoria' },
      { '@type': 'Country', name: 'Australia' },
    ],
    ...(service.image
      ? {
          image: imageObjectNode({
            url: `${BASE}${service.image.src}`,
            caption: service.image.alt,
          }),
        }
      : {}),
  }
}

// ─── 8. Product — for for-sale motorcycle listings ─────────────────────────
// Price is intentionally omitted: all listings use "Contact for Price" (POA).
// Including a non-numeric price string would fail validator checks.

export function productNode(bike: ForSaleBike) {
  const url = `${BASE}/for-sale/${bike.slug}`
  const imageUrl = `${BASE}${bike.heroImage.src}`

  return {
    '@type': 'Product',
    '@id': `${url}#product`,
    name: bike.name,
    description: bike.shortDescription,
    url,
    image: imageObjectNode({
      url: imageUrl,
      caption: bike.heroImage.alt,
    }),
    brand: { '@type': 'Brand', name: bike.brand },
    model: bike.model,
    vehicleModelDate: String(bike.year),
    itemCondition: 'https://schema.org/RefurbishedCondition',
    offers: {
      '@type': 'Offer',
      availability:
        bike.status === 'Available'
          ? 'https://schema.org/InStock'
          : bike.status === 'On Hold'
          ? 'https://schema.org/LimitedAvailability'
          : 'https://schema.org/SoldOut',
      seller: businessRef,
      url,
      priceCurrency: 'AUD',
    },
  }
}

// ─── 9. FAQPage ────────────────────────────────────────────────────────────

export function faqNode(faqs: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${BASE}/#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}
