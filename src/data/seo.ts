// ─── SEO Metadata — All Pages ─────────────────────────────────────────────────

export interface PageSeo {
  title: string
  metaDescription: string
  ogTitle: string
  ogDescription: string
  slug: string
  canonicalUrl?: string
  primaryKeyword: string
  secondaryKeywords: string[]
  schemaType: string[]
  imageAlt?: string
  internalLinks: Array<{ anchor: string; href: string }>
}

const BASE_URL = 'https://langrestorations.com.au'

export const pageSeo: Record<string, PageSeo> = {

  // ─── Homepage ──────────────────────────────────────────────────────────────
  home: {
    title: 'Lang Restorations | Motorcycle Restoration Specialists — Traralgon, Victoria',
    metaDescription:
      'Specialist motorcycle restoration workshop in Traralgon, Gippsland. Vintage motocross, classic road bikes and Honda minibikes restored to factory standard. Serving Victoria and Australia since 2004.',
    ogTitle: 'Lang Restorations — Motorcycle Restoration Specialists, Traralgon VIC',
    ogDescription:
      'Factory-correct vintage and classic motorcycle restorations from Traralgon, Gippsland. Honda, Yamaha, Kawasaki and Suzuki specialists. Engine rebuilds, vapour blasting, aluminium repairs and ground-up restorations.',
    slug: '/',
    canonicalUrl: `${BASE_URL}/`,
    primaryKeyword: 'Motorcycle Restoration Traralgon',
    secondaryKeywords: [
      'Vintage Motorcycle Restoration Victoria',
      'Classic Motorcycle Restoration Australia',
      'Motorcycle Restoration Gippsland',
      'Vintage Motocross Restoration',
      'Honda Motorcycle Restoration',
      'Motorcycle Restoration Specialist',
      'Motorcycle Engine Rebuilds',
      'Motorcycle Vapour Blasting Victoria',
    ],
    schemaType: ['LocalBusiness', 'AutoRepair'],
    imageAlt: 'Lang Restorations workshop — vintage and classic motorcycle restoration specialists, Traralgon, Gippsland Victoria',
    internalLinks: [
      { anchor: 'Featured Restorations', href: '/builds' },
      { anchor: 'Restoration Services', href: '/services' },
      { anchor: 'About the Workshop', href: '/about' },
      { anchor: 'Motorcycles For Sale', href: '/for-sale' },
      { anchor: 'Contact the Workshop', href: '/contact' },
    ],
  },

  // ─── Builds / Projects ─────────────────────────────────────────────────────
  builds: {
    title: 'Restoration Projects | Lang Restorations — Traralgon Victoria',
    metaDescription:
      'Completed motorcycle restoration projects from Lang Restorations, Traralgon. Honda CR, Yamaha YZ, Kawasaki KX, Honda Z50 and classic road bikes — every build documented from disassembly to finish.',
    ogTitle: 'Restoration Projects — Lang Restorations, Traralgon Gippsland',
    ogDescription:
      'Completed motorcycle restorations from the Lang Restorations workshop. Vintage motocross, Honda minibikes, classic road bikes — built to factory standard in Traralgon, Victoria.',
    slug: '/builds',
    canonicalUrl: `${BASE_URL}/builds`,
    primaryKeyword: 'Vintage Motorcycle Restoration Victoria',
    secondaryKeywords: [
      'Classic Motorcycle Restoration Australia',
      'Vintage Motocross Restoration',
      'Honda CR Restoration',
      'Honda Z50 Restoration',
      'Yamaha YZ Restoration',
      'Kawasaki KX Restoration',
      'Collector Motorcycle Restoration',
      'Factory Correct Motorcycle Restoration',
    ],
    schemaType: ['CollectionPage', 'ItemList'],
    imageAlt: 'Vintage motorcycle restoration projects — Lang Restorations, Traralgon Victoria',
    internalLinks: [
      { anchor: 'Restoration Services', href: '/services' },
      { anchor: 'About the Workshop', href: '/about' },
      { anchor: 'Motorcycles For Sale', href: '/for-sale' },
      { anchor: 'Contact Us', href: '/contact' },
    ],
  },

  // ─── For Sale ──────────────────────────────────────────────────────────────
  forSale: {
    title: 'Restored Motorcycles For Sale | Lang Restorations — Traralgon VIC',
    metaDescription:
      'Professionally restored vintage and classic motorcycles for sale from Lang Restorations, Traralgon Victoria. Honda Z50, Monkey, CR250, Yamaha YZ — every bike documented and rebuilt to collector standard.',
    ogTitle: 'Restored Motorcycles For Sale — Lang Restorations, Traralgon VIC',
    ogDescription:
      'Factory-correct vintage motorcycle restorations for sale from Lang Restorations. Honda, Yamaha and classic machines — every bike fully rebuilt, documented and presented to collector standard.',
    slug: '/for-sale',
    canonicalUrl: `${BASE_URL}/for-sale`,
    primaryKeyword: 'Vintage Motorcycles For Sale Victoria',
    secondaryKeywords: [
      'Classic Motorcycles For Sale Australia',
      'Honda Z50 For Sale',
      'Honda Monkey For Sale',
      'Honda CR250 For Sale',
      'Yamaha YZ250 For Sale',
      'Restored Motocross Bikes For Sale',
      'Collector Motorcycles Australia',
    ],
    schemaType: ['CollectionPage', 'ItemList'],
    imageAlt: 'Restored vintage motorcycles for sale — Lang Restorations, Traralgon Victoria',
    internalLinks: [
      { anchor: 'Our Restoration Work', href: '/builds' },
      { anchor: 'Restoration Services', href: '/services' },
      { anchor: 'Contact to Enquire', href: '/contact' },
    ],
  },

  // ─── Services ──────────────────────────────────────────────────────────────
  services: {
    title: 'Motorcycle Restoration Services | Lang Restorations — Traralgon VIC',
    metaDescription:
      'Motorcycle restoration services in Traralgon, Victoria — engine rebuilds, vapour blasting, aluminium repairs, zinc plating, frame repairs and ground-up restorations. Serving Victoria and Australia.',
    ogTitle: 'Motorcycle Restoration Services — Lang Restorations, Traralgon',
    ogDescription:
      'Complete motorcycle restoration services from Lang Restorations, Traralgon. Engine rebuilds, vapour blasting, aluminium TIG welding, zinc plating, frame repairs and ground-up restorations.',
    slug: '/services',
    canonicalUrl: `${BASE_URL}/services`,
    primaryKeyword: 'Motorcycle Restoration Services Victoria',
    secondaryKeywords: [
      'Motorcycle Engine Rebuilds Victoria',
      'Motorcycle Vapour Blasting Traralgon',
      'Motorcycle Vapor Blasting Victoria',
      'Motorcycle Aluminium Repairs Victoria',
      'Motorcycle Zinc Plating Victoria',
      'Motorcycle Frame Repairs Victoria',
      'Motorcycle Parts Restoration Victoria',
      'Classic Motorcycle Restorer Victoria',
    ],
    schemaType: ['Service', 'LocalBusiness'],
    imageAlt: 'Motorcycle restoration services — vapour blasting, engine rebuild, aluminium repairs, Lang Restorations Traralgon',
    internalLinks: [
      { anchor: 'Featured Restorations', href: '/builds' },
      { anchor: 'About the Workshop', href: '/about' },
      { anchor: 'Get a Quote', href: '/contact' },
    ],
  },

  // ─── About ─────────────────────────────────────────────────────────────────
  about: {
    title: 'About Lang Restorations | Motorcycle Restoration Specialist — Traralgon VIC',
    metaDescription:
      'Nick Lang has restored vintage and classic motorcycles from his Traralgon, Gippsland workshop since 2004. Over 20 years of factory-correct restorations for collectors and riders across Victoria and Australia.',
    ogTitle: 'About Lang Restorations — Motorcycle Restoration Specialist, Traralgon VIC',
    ogDescription:
      'Specialist motorcycle restoration workshop in Traralgon, Gippsland since 2004. Honda, Yamaha, Kawasaki and Suzuki specialists. Factory-correct restorations for riders and collectors across Australia.',
    slug: '/about',
    canonicalUrl: `${BASE_URL}/about`,
    primaryKeyword: 'Motorcycle Restoration Specialist Victoria',
    secondaryKeywords: [
      'Classic Motorcycle Restorer Traralgon',
      'Vintage Motorcycle Workshop Victoria',
      'Motorcycle Restoration Gippsland',
      'Vintage Motorcycle Restorer Australia',
      'Honda Restoration Specialist Victoria',
      'Motorcycle Workshop Traralgon',
    ],
    schemaType: ['LocalBusiness', 'AboutPage'],
    imageAlt: 'Lang Restorations workshop — vintage motorcycle restoration specialists, Traralgon, Gippsland Victoria',
    internalLinks: [
      { anchor: 'Restoration Services', href: '/services' },
      { anchor: 'Completed Restorations', href: '/builds' },
      { anchor: 'Contact the Workshop', href: '/contact' },
    ],
  },

  // ─── Contact ───────────────────────────────────────────────────────────────
  contact: {
    title: 'Contact Lang Restorations | Motorcycle Restoration Enquiries — Traralgon VIC',
    metaDescription:
      'Enquire about vintage motorcycle restoration, engine rebuilds, vapour blasting or zinc plating. Lang Restorations, Traralgon, Gippsland. Call 0439 744 632 or email us.',
    ogTitle: 'Contact Lang Restorations — Traralgon, Gippsland VIC',
    ogDescription:
      'Get in touch with Lang Restorations. Motorcycle restoration enquiries for Traralgon, Gippsland and across Victoria and Australia.',
    slug: '/contact',
    canonicalUrl: `${BASE_URL}/contact`,
    primaryKeyword: 'Motorcycle Restoration Enquiry Traralgon Victoria',
    secondaryKeywords: [
      'Lang Restorations Contact',
      'Motorcycle Restoration Quote Victoria',
      'Vapour Blasting Enquiry Traralgon',
      'Vintage Motorcycle Restoration Enquiry Australia',
    ],
    schemaType: ['ContactPage', 'LocalBusiness'],
    imageAlt: 'Contact Lang Restorations — motorcycle restoration workshop, Traralgon, Gippsland Victoria',
    internalLinks: [
      { anchor: 'Our Services', href: '/services' },
      { anchor: 'Our Work', href: '/builds' },
    ],
  },
}

// ─── Schema Markup ─────────────────────────────────────────────────────────────

export const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoRepair'],
  name: 'Lang Restorations',
  description:
    'Specialist vintage and classic motorcycle restoration workshop in Traralgon, Gippsland, Victoria. Engine rebuilds, vapour blasting, aluminium repairs, zinc plating, frame repairs and ground-up restorations. Serving Victoria and Australia since 2004.',
  url: BASE_URL,
  image: `${BASE_URL}/images/hero.jpg`,
  telephone: '+61439744632',
  email: 'info@langrestorations.com.au',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Traralgon',
    addressRegion: 'VIC',
    postalCode: '3844',
    addressCountry: 'AU',
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
    'https://langrestorations.com.au',
  ],
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  paymentAccepted: 'Cash, Bank Transfer',
  openingHoursSpecification: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Motorcycle Restoration Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vintage Motorcycle Restoration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motorcycle Engine Rebuilds' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motorcycle Vapour Blasting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aluminium Repairs and TIG Welding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zinc Plating' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Frame Repairs' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Parts Restoration' } },
    ],
  },
}

export const schemaFaq = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.answer,
    },
  })),
})
