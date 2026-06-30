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
    title: 'Vintage & Classic Motorcycle Restorations | Lang Restorations | Traralgon VIC',
    metaDescription:
      'Vintage & classic motorcycle restoration specialists in Traralgon, Latrobe Valley since 2004. Honda, Yamaha, Kawasaki & Suzuki — engine rebuilds, vapour blasting & ground-up restorations.',
    ogTitle: 'Lang Restorations — Vintage Motorcycle Restoration Specialists, Traralgon VIC',
    ogDescription:
      'Factory-correct vintage and classic motorcycle restorations from Traralgon, Gippsland. Honda, Yamaha, Kawasaki and Suzuki specialists. Engine rebuilds, vapour blasting, aluminium repairs and ground-up restorations.',
    slug: '/',
    canonicalUrl: `${BASE_URL}/`,
    primaryKeyword: 'Motorcycle Restoration Traralgon',
    secondaryKeywords: [
      'Vintage Motorcycle Restoration Victoria',
      'Classic Motorcycle Restoration Australia',
      'Motorcycle Restoration Gippsland',
      'Motorcycle Restoration Latrobe Valley',
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
    title: 'Motorcycle Restoration Projects | Vintage & Classic Builds | Lang Restorations',
    metaDescription:
      'Completed vintage motorcycle restorations from Lang Restorations, Traralgon. Honda CR, Yamaha YZ, Honda Z50 Monkey — fully documented, factory-correct builds from Gippsland, Victoria.',
    ogTitle: 'Motorcycle Restoration Projects — Lang Restorations, Traralgon Gippsland',
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
    title: 'Restored Vintage Motorcycles For Sale | Lang Restorations',
    metaDescription:
      'Restored vintage motorcycles for sale from Lang Restorations, Traralgon. Honda Z50, Monkey, CR250 & Yamaha YZ — factory-correct, documented restorations ready for collectors.',
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
    title: 'Motorcycle Restoration Services | Engine Rebuilds, Vapour Blasting & More | Lang Restorations',
    metaDescription:
      'Complete motorcycle restoration services in Traralgon, Gippsland. Engine rebuilds, vapour blasting, aluminium TIG welding, zinc plating & frame repairs. Serving Victoria & Australia.',
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
    title: 'About Lang Restorations | Motorcycle Restoration Specialists — Traralgon VIC',
    metaDescription:
      'Nick Lang — vintage motorcycle restoration specialist in Traralgon, Latrobe Valley since 2004. Over 20 years of factory-correct restorations for collectors across Victoria & Australia.',
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
      'Motorcycle Restoration Latrobe Valley',
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
    title: 'Contact Lang Restorations | Vintage Motorcycle Restoration Experts — Traralgon VIC',
    metaDescription:
      'Enquire about vintage motorcycle restoration, engine rebuilds or vapour blasting. Lang Restorations, Traralgon, Gippsland. Call 0439 744 632 or email us today.',
    ogTitle: 'Contact Lang Restorations — Traralgon, Gippsland VIC',
    ogDescription:
      'Get in touch with Lang Restorations. Motorcycle restoration enquiries for Traralgon, Latrobe Valley, Gippsland and across Victoria and Australia.',
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
