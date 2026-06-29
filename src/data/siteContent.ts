import type { ProcessStep, Testimonial } from '@/types'

// ─── Site-Wide Content ────────────────────────────────────────────────────────
//
// Edit the values in this file to update text across the entire site.
// No other files need to change for copy updates.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Business Identity ────────────────────────────────────────────────────────

export const business = {
  name: 'Lang Restorations',
  tagline: 'Motocross. Classic. Vintage.',
  location: 'Traralgon, Victoria, Australia',
  suburb: 'Traralgon',
  state: 'VIC',
  country: 'Australia',
  established: 2004,
  yearsExperience: '20+',
  phone: '0439 744 632',
  email: 'info@langrestorations.com',
  instagram: 'https://www.instagram.com/langrestorations/',
  facebook: 'https://www.facebook.com/langrestorations/',
  website: 'https://www.langrestorations.com',
}

// ─── Homepage ────────────────────────────────────────────────────────────────

export const homepage = {
  hero: {
    line1: 'Restore.',
    line2: 'Revive.',
    line3: 'Ride.',
    subheading: 'Motocross. Classic. Vintage. Built properly for over 20 years — no shortcuts, no cheap work, just quality restorations that last.',
    ctaPrimary: { label: 'View Projects', href: '/builds' },
    ctaSecondary: { label: 'For Sale', href: '/for-sale' },
    ctaTertiary: { label: 'Get in Touch', href: '/contact' },
  },

  about: {
    label: 'Established 2004',
    headline: 'Every build treated with precision, patience and respect for the machine.',
    ownerQuote: `I've been bringing old bikes back to life for over 20 years, and I still get just as excited about every build that rolls into the workshop. Whether it's a vintage motocross weapon, a classic road bike, or something with a bit of family history behind it, I treat every project as if it were my own.`,
    body: `This isn't a production shop pumping out quick jobs. Every restoration is treated as a piece of history — rebuilt with the right techniques, the right tools, and the right attitude.`,
    values: ['No Cheap Work', 'Australian Owned', 'True Quality'],
    stats: [{ value: '20+', label: 'Years Experience' }],
  },

  services: {
    label: 'Capabilities',
    headline: 'What We Do',
    body: 'Complete restoration capabilities under one roof — from individual component work to full ground-up builds.',
    cta: { label: 'View All Services', href: '/services' },
  },

  builds: {
    label: 'Featured Builds',
    headline: 'Recent Projects',
    body: 'A selection of completed restorations from the Lang Restorations workshop.',
    cta: { label: 'View All Projects', href: '/builds' },
  },

  forSale: {
    label: 'For Sale',
    headline: 'Bikes Available Now',
    body: 'Professionally restored motorcycles ready for a new owner. Every bike fully rebuilt, documented, and presented.',
    cta: { label: 'View All Listings', href: '/for-sale' },
  },

  finalCta: {
    label: 'Book a Build',
    headline: 'Have a Motorcycle That Needs Restoring?',
    body: 'Get in touch to discuss your project. Whether it\'s a complete ground-up restoration, a single component that needs attention, or a bike you\'d like assessed — the conversation starts here.',
    ctaPrimary: { label: 'Contact the Workshop', href: '/contact' },
  },
}

// ─── Process Steps ────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    name: 'Consult',
    description:
      'Every build begins with a direct conversation. We look at the motorcycle, discuss your goals, and give you an honest assessment of what the restoration involves and what it will cost.',
  },
  {
    number: 2,
    name: 'Inspect',
    description:
      'The bike is fully disassembled. Every component is inspected, measured and photographed. Nothing is assumed — the condition report informs everything that follows.',
  },
  {
    number: 3,
    name: 'Restore',
    description:
      'Each component is addressed: vapour blasted, rebuilt, repaired, zinc plated, or replaced. Engine cases, cylinder heads, carburettors, hubs, hardware — all returned to the correct standard.',
  },
  {
    number: 4,
    name: 'Build',
    description:
      'Assembly is carried out with factory torque specifications, correct lubricants, and new seals and gaskets throughout. Period-correct details are verified before each stage is signed off.',
  },
  {
    number: 5,
    name: 'Ride',
    description:
      'The completed motorcycle is inspected, started, and gone over before it leaves the workshop. The restoration is documented and handed to the owner ready to ride or display.',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nick's work is next level. The attention to detail is unreal — best vintage bike restoration work I've seen in years.",
    author: 'Dave',
    role: 'Vintage MX Rider',
  },
  {
    quote:
      "Straight shooter, knows his stuff. My Husqvarna came back looking better than it did on the showroom floor in '74.",
    author: 'Mick',
    role: 'Classic Collector',
  },
]

// ─── About Page ──────────────────────────────────────────────────────────────

export const about = {
  seo: {
    title: 'About Nick Lang | Motorcycle Restoration Specialist — Traralgon, Victoria',
    metaDescription:
      'Nick Lang has been restoring vintage and classic motorcycles from his Traralgon workshop since 2004. Learn about the Lang Restorations approach — and why riders and collectors across Victoria trust us with their most valued machines.',
  },

  hero: {
    headline: 'The Workshop.',
    subheading: 'Traralgon, Victoria. Established 2004.',
  },

  sections: [
    {
      heading: '20 Years. One Standard.',
      body: `Nick Lang has been restoring motorcycles from his Traralgon workshop since 2004. Over two decades, the business has built a reputation across Victoria and interstate for restoration work that holds up under scrutiny — bikes that are correct in the details, sound in the engineering, and finished to a standard that lasts.

The focus has always been on vintage and classic Japanese motorcycles — motocross machines from Honda, Yamaha and Kawasaki, mini bikes and trail bikes from Honda's Mini Trail and Monkey ranges, and the occasional British classic that arrives with a story attached.

Lang Restorations is not a volume shop. We take on a small number of projects each year and give each one the time and attention it demands. That approach is not a marketing position — it is simply the only way to produce work we are proud of.`,
    },
    {
      heading: 'What We Restore',
      body: `The machines that come through the workshop span seven decades of motorcycle production. At one end, a 1954 BSA Bantam D3 Plunger — a machine that predates most of our customers. At the other, a 2017 Honda Monkey, a modern collectable that demands a different kind of care.

Between those two points: vintage and classic motocross bikes from the golden era of two-stroke racing — Honda CR, Kawasaki KX, Yamaha YZ and similar machines from the late 1970s through to the late 1990s. Honda Z50 and Monkey mini bikes spanning five decades of production. BSA and other British classics.

What these machines have in common is that their owners care about them. They are brought to us because the owner wants the job done properly, and because they understand the difference between a bike that has been polished and a bike that has been restored.`,
    },
    {
      heading: 'The Standard',
      body: `Every restoration at Lang Restorations begins with a full disassembly and photographic inspection. We document the condition of each component before work begins — so the owner knows exactly what was found, and we know exactly what needs to be done.

From there, the work follows a consistent process: vapour blasting for alloy components, engine rebuilds to factory clearances, zinc plating for steel hardware, aluminium TIG welding for any cracked or damaged components, frame inspection and repair, and correct assembly with factory torque specifications and new seals and gaskets throughout.

We do not cut corners on hidden work. The details that cannot be seen when the bike is assembled matter as much as the finish that can. A restoration built on compromised foundations is not a restoration — it is a problem waiting to surface.`,
    },
    {
      heading: 'Working With Us',
      body: `The process starts with a consultation. Bring the bike or send us photos and a description. We will tell you what it needs, what it will cost, and how long it will take — honestly, before any work is committed.

We work with customers from across Victoria and interstate. Bikes are freighted to the workshop regularly, and we assist with transport logistics for customers who are not local to Traralgon.

If you have a motorcycle that deserves proper attention, get in touch.`,
    },
  ],
}

// ─── Contact Page ─────────────────────────────────────────────────────────────

export const contact = {
  seo: {
    title: 'Contact Lang Restorations | Traralgon, Victoria',
    metaDescription:
      'Contact Lang Restorations in Traralgon, Victoria. Enquire about motorcycle restoration, engine rebuilds, vapour blasting, zinc plating, or a bike you\'d like assessed. Phone: 0439 744 632.',
  },
  headline: 'Get in Touch.',
  body: `Tell us about your motorcycle. What it is, what condition it's in, and what you want to achieve with it. We'll come back to you with an honest assessment.`,
  note: 'We work with customers from across Victoria and interstate. Bikes can be freighted to the Traralgon workshop — ask us about logistics.',
}
