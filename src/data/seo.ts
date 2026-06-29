// ─── SEO Metadata — All Pages ─────────────────────────────────────────────────
//
// Complete SEO configuration for every page on the site.
// Used to generate <title>, <meta>, Open Graph, and schema markup.
// ─────────────────────────────────────────────────────────────────────────────

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

const BASE_URL = 'https://www.langrestorations.com'

export const pageSeo: Record<string, PageSeo> = {

  // ─── Homepage ──────────────────────────────────────────────────────────────
  home: {
    title: 'Lang Restorations | Motorcycle Restoration Specialists — Traralgon, Victoria',
    metaDescription:
      'Lang Restorations is Traralgon\'s specialist motorcycle restoration workshop. Vintage and classic motorcycle restorations, engine rebuilds, vapour blasting, zinc plating and aluminium repairs across Victoria and Australia.',
    ogTitle: 'Lang Restorations — Motorcycle Restoration Specialists, Traralgon VIC',
    ogDescription:
      'Vintage and classic motorcycle restoration specialists in Traralgon, Victoria. Honda, Yamaha, Kawasaki and Suzuki specialists. Engine rebuilds, vapour blasting, aluminium repairs.',
    slug: '/',
    canonicalUrl: `${BASE_URL}/`,
    primaryKeyword: 'Motorcycle Restoration Traralgon',
    secondaryKeywords: [
      'Motorcycle Restoration Victoria',
      'Classic Motorcycle Restoration Australia',
      'Vintage Motorcycle Restoration',
      'Motocross Restoration Victoria',
      'Motorcycle Engine Rebuilds',
      'Vapour Blasting Motorcycle',
      'Honda Restoration Victoria',
      'Yamaha Restoration Victoria',
    ],
    schemaType: ['LocalBusiness', 'AutoRepair'],
    imageAlt: 'Lang Restorations workshop — vintage motorcycle restoration specialists, Traralgon Victoria',
    internalLinks: [
      { anchor: 'Featured Restorations', href: '/builds' },
      { anchor: 'Our Services', href: '/services' },
      { anchor: 'About the Workshop', href: '/about' },
      { anchor: 'Motorcycles For Sale', href: '/for-sale' },
      { anchor: 'Contact Us', href: '/contact' },
    ],
  },

  // ─── Builds / Projects ─────────────────────────────────────────────────────
  builds: {
    title: 'Restoration Projects | Lang Restorations — Traralgon, Victoria',
    metaDescription:
      'Browse completed motorcycle restoration projects from Lang Restorations in Traralgon, Victoria. Vintage and classic Japanese motorcycle restorations — Honda, Yamaha, Kawasaki and Suzuki.',
    ogTitle: 'Restoration Projects — Lang Restorations, Traralgon VIC',
    ogDescription:
      'Completed motorcycle restoration projects from Lang Restorations. Vintage motocross, classic road bikes, trail bikes — all restored in our Traralgon, Victoria workshop.',
    slug: '/builds',
    canonicalUrl: `${BASE_URL}/builds`,
    primaryKeyword: 'Vintage Motorcycle Restoration Victoria',
    secondaryKeywords: [
      'Classic Motorcycle Restoration Australia',
      'Vintage Motocross Restoration',
      'Honda Restoration',
      'Yamaha Restoration',
      'Kawasaki Restoration',
      'Suzuki Restoration',
      'Motocross Restoration Australia',
      'Motorcycle Restoration Projects',
    ],
    schemaType: ['CollectionPage', 'ItemList'],
    imageAlt: 'Vintage motorcycle restoration projects — Lang Restorations, Traralgon Victoria',
    internalLinks: [
      { anchor: 'Our Services', href: '/services' },
      { anchor: 'About the Workshop', href: '/about' },
      { anchor: 'Contact Us', href: '/contact' },
    ],
  },

  // ─── For Sale ──────────────────────────────────────────────────────────────
  forSale: {
    title: 'Motorcycles For Sale | Lang Restorations — Traralgon, Victoria',
    metaDescription:
      'Restored vintage and classic motorcycles for sale from Lang Restorations in Traralgon, Victoria. Honda, Yamaha, Kawasaki and Suzuki — all professionally restored and ready to ride or collect.',
    ogTitle: 'Motorcycles For Sale — Lang Restorations, Traralgon VIC',
    ogDescription:
      'Professionally restored vintage motorcycles for sale from Lang Restorations. Every bike fully restored, documented and ready. Located in Traralgon, Victoria.',
    slug: '/for-sale',
    canonicalUrl: `${BASE_URL}/for-sale`,
    primaryKeyword: 'Vintage Motorcycles For Sale Victoria',
    secondaryKeywords: [
      'Classic Motorcycles For Sale Australia',
      'Restored Motocross Bikes For Sale',
      'Honda CR For Sale',
      'Yamaha YZ For Sale',
      'Kawasaki KX For Sale',
      'Vintage Dirt Bikes For Sale Victoria',
      'Restored Classic Motorcycles Australia',
    ],
    schemaType: ['CollectionPage', 'ItemList'],
    imageAlt: 'Restored vintage motorcycles for sale — Lang Restorations, Traralgon Victoria',
    internalLinks: [
      { anchor: 'Our Restoration Work', href: '/builds' },
      { anchor: 'Our Services', href: '/services' },
      { anchor: 'Contact Us', href: '/contact' },
    ],
  },

  // ─── Services ──────────────────────────────────────────────────────────────
  services: {
    title: 'Motorcycle Restoration Services | Lang Restorations — Traralgon, Victoria',
    metaDescription:
      'Complete motorcycle restoration services in Traralgon, Victoria. Vintage motorcycle restoration, engine rebuilds, vapour blasting, aluminium repairs, zinc plating and frame repairs. Serving Victoria and Australia.',
    ogTitle: 'Motorcycle Restoration Services — Lang Restorations, Traralgon VIC',
    ogDescription:
      'Full motorcycle restoration services from Lang Restorations, Traralgon. Engine rebuilds, vapour blasting, aluminium TIG welding, zinc plating, frame repairs and complete ground-up restorations.',
    slug: '/services',
    canonicalUrl: `${BASE_URL}/services`,
    primaryKeyword: 'Motorcycle Restoration Services Victoria',
    secondaryKeywords: [
      'Motorcycle Engine Rebuilds Victoria',
      'Motorcycle Vapour Blasting Victoria',
      'Motorcycle Aluminium Repairs Victoria',
      'Motorcycle Zinc Plating Victoria',
      'Motorcycle Frame Repairs Victoria',
      'Parts Restoration Motorcycle Victoria',
      'Vapour Blasting Traralgon',
      'Engine Rebuild Traralgon',
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
    title: 'About Lang Restorations | Motorcycle Restoration Workshop — Traralgon VIC',
    metaDescription:
      'Lang Restorations is a specialist motorcycle restoration workshop in Traralgon, Victoria. Learn about our capabilities, approach, and the standard we hold our work to.',
    ogTitle: 'About Lang Restorations — Traralgon, Victoria',
    ogDescription:
      'Specialist motorcycle restoration workshop based in Traralgon, Victoria. Vintage and classic Japanese motorcycle specialists. Learn about our approach and capabilities.',
    slug: '/about',
    canonicalUrl: `${BASE_URL}/about`,
    primaryKeyword: 'Motorcycle Restoration Specialist Victoria',
    secondaryKeywords: [
      'Motorcycle Restorer Traralgon',
      'Vintage Motorcycle Workshop Victoria',
      'Classic Motorcycle Restoration Workshop',
      'Motorcycle Restoration Gippsland',
    ],
    schemaType: ['LocalBusiness', 'AboutPage'],
    imageAlt: 'Lang Restorations workshop — motorcycle restoration specialists, Traralgon Victoria',
    internalLinks: [
      { anchor: 'Our Services', href: '/services' },
      { anchor: 'Completed Restorations', href: '/builds' },
      { anchor: 'Contact the Workshop', href: '/contact' },
    ],
  },

  // ─── Contact ───────────────────────────────────────────────────────────────
  contact: {
    title: 'Contact Lang Restorations | Motorcycle Restoration — Traralgon VIC',
    metaDescription:
      'Contact Lang Restorations in Traralgon, Victoria. Enquire about vintage motorcycle restoration, engine rebuilds, vapour blasting or parts restoration. Workshop serving Victoria and Australia.',
    ogTitle: 'Contact Lang Restorations — Traralgon, VIC',
    ogDescription:
      'Get in touch with Lang Restorations. Motorcycle restoration enquiries for Traralgon and across Victoria and Australia.',
    slug: '/contact',
    canonicalUrl: `${BASE_URL}/contact`,
    primaryKeyword: 'Motorcycle Restoration Traralgon Victoria Contact',
    secondaryKeywords: [
      'Lang Restorations Contact',
      'Motorcycle Restoration Enquiry Victoria',
      'Vapour Blasting Enquiry Traralgon',
    ],
    schemaType: ['ContactPage', 'LocalBusiness'],
    imageAlt: 'Contact Lang Restorations — motorcycle restoration workshop, Traralgon Victoria',
    internalLinks: [
      { anchor: 'Our Services', href: '/services' },
      { anchor: 'Our Work', href: '/builds' },
    ],
  },
}

// ─── Schema Markup Templates ──────────────────────────────────────────────────
//
// Use these as the basis for JSON-LD schema markup in your <head>.
// Fill in the placeholder values with your actual business details.

export const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'AutoRepair'],
  name: 'Lang Restorations',
  description:
    'Specialist motorcycle restoration workshop in Traralgon, Victoria. Vintage and classic motorcycle restorations, engine rebuilds, vapour blasting, aluminium repairs and zinc plating.',
  url: BASE_URL,
  image: `${BASE_URL}/images/og-default.jpg`, // Update with your actual OG image
  telephone: '', // Fill in: e.g. '(03) 5xxx xxxx'
  email: '', // Fill in: e.g. 'info@langrestorations.com'
  address: {
    '@type': 'PostalAddress',
    streetAddress: '', // Fill in
    addressLocality: 'Traralgon',
    addressRegion: 'VIC',
    postalCode: '', // Fill in
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '', // Fill in from Google Maps
    longitude: '', // Fill in from Google Maps
  },
  areaServed: [
    { '@type': 'State', name: 'Victoria' },
    { '@type': 'Country', name: 'Australia' },
  ],
  sameAs: [
    'https://www.facebook.com/langrestorations/',
    'https://www.instagram.com/langrestorations/',
  ],
  openingHoursSpecification: [
    // Fill in your actual hours, e.g.:
    // {
    //   '@type': 'OpeningHoursSpecification',
    //   dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    //   opens: '08:00',
    //   closes: '17:00',
    // },
  ],
  priceRange: '$$', // $ = budget, $$ = moderate, $$$ = premium
  currenciesAccepted: 'AUD',
  paymentAccepted: 'Cash, Bank Transfer, Credit Card',
}
