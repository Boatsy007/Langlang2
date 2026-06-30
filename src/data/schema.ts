// ─── Shared JSON-LD schema builders ──────────────────────────────────────────

const BASE_URL = 'https://langrestorations.com.au'

// ── LocalBusiness — injected on every page ─────────────────────────────────

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoRepair'],
  '@id': `${BASE_URL}/#business`,
  name: 'Lang Restorations',
  description:
    'Specialist vintage and classic motorcycle restoration workshop in Traralgon, Gippsland, Victoria. Engine rebuilds, vapour blasting, aluminium TIG welding, zinc plating, frame repairs and ground-up restorations. Serving Victoria and Australia since 2004.',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/images/hero.jpg`,
  telephone: '+61439744632',
  email: 'info@langrestorations.com.au',
  foundingDate: '2004',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Traralgon',
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vintage Motorcycle Restoration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motorcycle Engine Rebuilds' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motorcycle Vapour Blasting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aluminium TIG Welding and Repairs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zinc Plating' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Frame Repairs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parts Restoration' } },
    ],
  },
}

// ── WebSite — homepage only ────────────────────────────────────────────────

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Lang Restorations',
  url: BASE_URL,
  description: 'Specialist vintage and classic motorcycle restoration — Traralgon, Gippsland, Victoria',
  publisher: { '@id': `${BASE_URL}/#business` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/builds?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

// ── Breadcrumb builder ─────────────────────────────────────────────────────

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// ── Service schema builder ─────────────────────────────────────────────────

export function serviceSchema(opts: {
  name: string
  description: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: { '@type': 'Country', name: 'Australia' },
  }
}

// ── FAQ schema builder ─────────────────────────────────────────────────────

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

// ── Product / listing schema builder ──────────────────────────────────────

export function listingSchema(opts: {
  name: string
  description: string
  url: string
  image: string
  price?: string
  availability: 'InStock' | 'SoldOut' | 'PreOrder'
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    brand: { '@type': 'Brand', name: 'Lang Restorations' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'AUD',
      price: opts.price ?? undefined,
      availability: `https://schema.org/${opts.availability}`,
      seller: { '@id': `${BASE_URL}/#business` },
      url: opts.url,
    },
  }
}
