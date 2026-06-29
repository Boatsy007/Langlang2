import type { Service } from '@/types'

// ─── Services ────────────────────────────────────────────────────────────────
//
// To add a new service: copy one object below and fill in your details.
// The services page automatically generates cards and listings from this data.
//
// Required: id (unique, URL-safe string)
// ─────────────────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 'full-custom-build',
    name: 'Full Custom Build',
    category: 'Custom Build',
    featured: true,
    shortDescription:
      'From concept to completed motorcycle — we take care of every step. Bring us a donor bike or tell us what you have in mind and we\'ll source it.',
    fullDescription:
      'A full custom build is our signature service. Starting with a brief conversation about how you want the bike to look, feel, and sound, we develop a concept and quote before a single bolt is turned. The process covers sourcing, fabrication, mechanical rebuild, bodywork, paint, electrics, and final assembly. We project-manage everything and keep you updated throughout. The result is a motorcycle built specifically for you — not a kit from a catalogue.',
    includes: [
      'Initial concept consultation (in-person or video)',
      'Concept renders and written brief',
      'Donor bike sourcing (if required)',
      'Full mechanical rebuild and safety check',
      'Frame fabrication and modification',
      'Custom bodywork design and build',
      'Paint — PPG or custom mixed',
      'Wiring loom rebuild (Motogadget m.unit)',
      'Final assembly and quality check',
      'Road registration assistance',
      'Build photo documentation',
      'Two-year mechanical warranty',
    ],
    priceFrom: 18000,
    priceLabel: 'from $18,000 AUD depending on scope',
    image: {
      src: '/images/services/full-custom-build.jpg',
      alt: 'Full custom motorcycle build — Langlang workshop',
    },
  },

  {
    id: 'ground-up-restoration',
    name: 'Ground-Up Restoration',
    category: 'Restoration',
    featured: true,
    shortDescription:
      'Complete disassembly to last nut and bolt, rebuild to original or improved specification. For the bike that deserves to be done properly.',
    fullDescription:
      'A ground-up restoration means exactly that: every component is disassembled, assessed, and either rebuilt, rechromed, repainted, or replaced. We document every step with photography and work to a specification agreed with you at the start. Restorations can be to factory original condition or to a slightly improved specification — better suspension, brakes, or electrics hidden behind period-correct aesthetics.',
    includes: [
      'Complete disassembly and component audit',
      'Photography of all components before work begins',
      'Engine rebuild to factory spec or better',
      'Gearbox and primary drive rebuild',
      'Frame and swing arm strip, repair and powder coat',
      'Suspension rebuild — forks and rear units',
      'Brake system rebuild — drums or disc conversion',
      'Wheel rebuild with new rims and stainless spokes',
      'Chrome restoration or re-chrome of brightwork',
      'Tank, guard and bodywork repair and respray',
      'Complete wiring loom rebuild',
      'Final assembly, alignment and road test',
    ],
    priceFrom: 12000,
    priceLabel: 'from $12,000 AUD — varies significantly by model and condition',
    image: {
      src: '/images/services/restoration.jpg',
      alt: 'Classic motorcycle ground-up restoration',
    },
  },

  {
    id: 'engine-rebuild',
    name: 'Engine Rebuild',
    category: 'Mechanical',
    featured: false,
    shortDescription:
      'Full engine disassembly, measurement, machining and reassembly. We work on pre-1990 Japanese, British and European motors.',
    fullDescription:
      'Engine rebuilds are carried out in-house on all pre-1990 Japanese, British and European motorcycles. We disassemble completely, measure all components against factory specifications, and report back before any machining or parts ordering begins. We use quality parts — Hepolite pistons where available, JE and Wiseco where not — and assemble with correct torque and clearances. Every engine is run-in on the bench before it goes back in the frame.',
    includes: [
      'Complete disassembly',
      'Component measurement and condition report',
      'Bore measurement and machining (if required)',
      'New pistons and rings to suit bore',
      'Crank inspection and rebalancing (if required)',
      'Head rebuild — valves, guides, seats',
      'Timing components — chain, tensioner, guides',
      'Oil system — pump, filter, seals',
      'Reassembly to factory spec',
      'Bench run-in and oil change',
      'Return to frame and dyno tune (if carburetted)',
    ],
    priceFrom: 3500,
    priceLabel: 'from $3,500 AUD — singles. From $5,500 — twins. From $7,500 — fours.',
    image: {
      src: '/images/services/engine-rebuild.jpg',
      alt: 'Classic motorcycle engine rebuild',
    },
  },

  {
    id: 'custom-fabrication',
    name: 'Custom Fabrication',
    category: 'Fabrication',
    featured: true,
    shortDescription:
      'One-off parts made in our workshop — seats, subframes, exhaust systems, bracketry, fuel tanks, guards. If it can be welded, formed or machined, we can build it.',
    fullDescription:
      'Our workshop is equipped for TIG welding, MIG welding, tube bending, sheet metal forming, and CNC-assisted machining. We build custom exhaust systems, seat pans, subframes, handlebars, top clamps, and anything else a build requires. All fabrication work is checked for fit and finish before leaving the workshop.',
    includes: [
      'Initial design consultation and sketch',
      'Material selection guidance',
      'TIG or MIG welding as required',
      'Fitment check on the bike',
      'Surface preparation — polish, bead blast or powder coat',
      'Compliance advice for road-registered bikes',
    ],
    priceLabel: 'Quoted per project — call or email with details',
    image: {
      src: '/images/services/fabrication.jpg',
      alt: 'Custom motorcycle fabrication — TIG welding exhaust',
    },
  },

  {
    id: 'paint-and-finish',
    name: 'Paint & Finish',
    category: 'Paint & Finish',
    featured: false,
    shortDescription:
      'Tank, guards and bodywork — stripped, filled, blocked and painted to a finish that photographs and holds up in the real world.',
    fullDescription:
      'All paint work is carried out in our climate-controlled spray booth using PPG two-stage urethane. We can match original factory colours, mix custom colours from period photographs, or create something entirely new. Every job starts with epoxy primer over bare metal, multiple applications of high-build filler primer, wet-sanding, and finally colour and clear. Pinstripes and custom graphics by negotiation.',
    includes: [
      'Strip to bare metal',
      'Etch and epoxy primer',
      'High-build filler primer (multiple coats)',
      'Block sanding — 80 through 800 grit',
      'Base coat (solid or metallic)',
      'Clear coat — 3 coats, 600/1500 cut and polish',
      'Pinstripes available on request',
    ],
    priceFrom: 1200,
    priceLabel: 'from $1,200 AUD for tank only. From $2,400 for tank and guards.',
    image: {
      src: '/images/services/paint.jpg',
      alt: 'Motorcycle paint — PPG two-stage urethane',
    },
  },

  {
    id: 'electrical-rewire',
    name: 'Electrical Rewire',
    category: 'Electrical',
    featured: false,
    shortDescription:
      'Full wiring loom replacement using Motogadget m.unit or traditional looms for period-correct builds. Tidy, reliable, and engineered to last.',
    fullDescription:
      'Old motorcycle electrics are the number one reliability killer. We replace tired or hacked looms with purpose-built wiring using high-quality automotive cable, waterproof connectors, and correct-spec fuses. For modern builds we specify the Motogadget m.unit — the industry standard for clean, solid-state control of all motorcycle electrics. For period-correct restorations we wire using Lucas-spec cable colours with correct connectors.',
    includes: [
      'Full loom removal',
      'New cable run and routing',
      'Motogadget m.unit installation (custom builds)',
      'LED lighting conversion (if required)',
      'Switch gear installation and wiring',
      'Battery and charging system check',
      'Indicator relay and brake light logic',
      'Final test — all circuits verified',
    ],
    priceFrom: 1800,
    priceLabel: 'from $1,800 AUD depending on complexity',
    image: {
      src: '/images/services/electrical.jpg',
      alt: 'Motorcycle electrical rewire — Motogadget m.unit',
    },
  },

  {
    id: 'consultation',
    name: 'Build Consultation',
    category: 'Consultation',
    featured: false,
    shortDescription:
      'Not sure where to start? One hour with us will give you a clear brief, a realistic budget, and an honest assessment of what\'s possible.',
    fullDescription:
      'A build consultation is one hour with one of our builders — in person at the workshop or via video call. Bring your bike, your photos, and your ideas. We\'ll tell you what\'s achievable, what isn\'t, what order to do things in, and what it will realistically cost. No obligation. If you decide to proceed, the consultation fee is credited against your build.',
    includes: [
      '1-hour in-person or video consultation',
      'Honest assessment of your donor bike',
      'Concept direction based on your brief',
      'Outline specification and budget range',
      'Priority recommendation list',
      'Written summary emailed after the session',
      'Fee credited if you proceed with a build',
    ],
    priceFrom: 250,
    priceLabel: '$250 AUD — credited against any subsequent build',
    image: {
      src: '/images/services/consultation.jpg',
      alt: 'Motorcycle build consultation at Langlang workshop',
    },
  },
]

// ─── Derived helpers ──────────────────────────────────────────────────────────

export const featuredServices = services.filter((s) => s.featured)
