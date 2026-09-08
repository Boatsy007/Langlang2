import type { ForSaleBike } from '@/types'

// ─── For Sale Listings ────────────────────────────────────────────────────────
//
// Add motorcycles for sale here.
// Each listing automatically generates a card on /for-sale and a detail page at /for-sale/:slug
//
// STATUS OPTIONS: 'Available' | 'On Hold' | 'Sold'
// ─────────────────────────────────────────────────────────────────────────────

export const forSaleBikes: ForSaleBike[] = [

  // ── 2017 Honda Z50 Monkey 50th Anniversary Chrome ──────────────────────────
  {
    slug: '2017-honda-z50-monkey-50th-anniversary-chrome',
    name: '2017 Honda Z50 Monkey — 50th Anniversary Chrome',
    year: 2017,
    brand: 'Honda',
    model: 'Z50 Monkey 50th Anniversary Chrome',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      'Rare 50th Anniversary Chrome Edition Honda Monkey. A highly collectible modern classic in exceptional unrestored condition.',

    fullDescription: `The 2017 Honda Z50 Monkey 50th Anniversary Chrome Edition was produced in strictly limited numbers to mark half a century of the Monkey — one of the most iconic small motorcycles ever built. The Chrome Edition is the rarest variant in the anniversary range, finished in full chrome bodywork that Honda produced exclusively for this release.

This example presents in exceptional condition. The chrome finish retains its original lustre and the motorcycle has been carefully preserved rather than ridden hard. It represents a highly collectible piece for any serious Honda or miniature motorcycle collector.

The Z50 Monkey line spans from 1961 to the present day, and the 50th Anniversary models — produced in 2017 for the 1967 anniversary — occupy a particularly significant position in that history. The Chrome Edition was produced in far smaller quantities than the standard colour variants and is increasingly difficult to find in this condition.

Presented as a collector piece and ready for display or occasional light use. All original components, no modifications. Comes with documentation.`,

    heroImage: {
      src: '/images/for-sale/2017-honda-z50-monkey-50th-anniversary-chrome/hero.jpg',
      alt: '2017 Honda Z50 Monkey 50th Anniversary Chrome Edition — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/2017-honda-z50-monkey-50th-anniversary-chrome/left.jpg',
        alt: '2017 Honda Z50 Monkey Chrome — left side profile',
        caption: 'Chrome bodywork in original factory condition',
      },
      {
        src: '/images/for-sale/2017-honda-z50-monkey-50th-anniversary-chrome/right.jpg',
        alt: '2017 Honda Z50 Monkey Chrome — right side',
        caption: 'Right side detail',
      },
      {
        src: '/images/for-sale/2017-honda-z50-monkey-50th-anniversary-chrome/detail.jpg',
        alt: '2017 Honda Z50 Monkey Chrome — 50th Anniversary badging',
        caption: '50th Anniversary badging detail',
      },
    ],

    specifications: [
      { label: 'Year', value: '2017' },
      { label: 'Brand', value: 'Honda' },
      { label: 'Model', value: 'Z50 Monkey 50th Anniversary Chrome Edition' },
      { label: 'Engine', value: '49cc four-stroke single' },
      { label: 'Transmission', value: '4-speed' },
      { label: 'Condition', value: 'Excellent — original, unrestored' },
      { label: 'Colour', value: 'Chrome Edition' },
      { label: 'Edition', value: '50th Anniversary' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '2017 Honda Z50 Monkey 50th Anniversary Chrome For Sale | Lang Restorations',
    metaDescription:
      'Rare 2017 Honda Z50 Monkey 50th Anniversary Chrome Edition for sale from Lang Restorations, Traralgon Victoria. Highly collectible limited edition in exceptional condition.',
  },

  // ── 2017 Honda Z50 Monkey 50th Anniversary ─────────────────────────────────
  {
    slug: '2017-honda-z50-monkey-50th-anniversary',
    name: '2017 Honda Z50 Monkey — 50th Anniversary',
    year: 2017,
    brand: 'Honda',
    model: 'Z50 Monkey 50th Anniversary',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      '50th Anniversary Honda Monkey finished in factory colours. A modern collectible celebrating five decades of the iconic Z50.',

    fullDescription: `The 2017 Honda Z50 Monkey 50th Anniversary Edition marks five decades since the Monkey first appeared in its recognisable form in 1967. Honda produced these anniversary models in limited quantities across a small number of colour variants, each finished in period-correct styling that references the original Z50 colour palette.

This example presents in excellent condition, finished in factory anniversary colours. The Monkey is a machine that occupies a unique position in Honda's catalogue — a machine that has remained in continuous production longer than almost anything else Honda has built, beloved equally by collectors, casual riders, and long-term Honda enthusiasts.

The 50th Anniversary models differ from standard-run Monkeys in their badging, colour specification, and limited production status. This example is a complete, unmodified motorcycle with all original components intact.

Suitable for display, collection, or occasional use. A straightforward acquisition for anyone building a Honda Monkey collection or looking for a modern classic that will only appreciate in significance over time.`,

    heroImage: {
      src: '/images/for-sale/2017-honda-z50-monkey-50th-anniversary/hero.jpg',
      alt: '2017 Honda Z50 Monkey 50th Anniversary Edition — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/2017-honda-z50-monkey-50th-anniversary/left.jpg',
        alt: '2017 Honda Z50 Monkey 50th Anniversary — left side',
        caption: 'Factory anniversary colour scheme',
      },
      {
        src: '/images/for-sale/2017-honda-z50-monkey-50th-anniversary/right.jpg',
        alt: '2017 Honda Z50 Monkey 50th Anniversary — right side',
        caption: 'Right side profile',
      },
      {
        src: '/images/for-sale/2017-honda-z50-monkey-50th-anniversary/badge.jpg',
        alt: '2017 Honda Z50 Monkey — 50th Anniversary badge',
        caption: '50th Anniversary badging',
      },
    ],

    specifications: [
      { label: 'Year', value: '2017' },
      { label: 'Brand', value: 'Honda' },
      { label: 'Model', value: 'Z50 Monkey 50th Anniversary Edition' },
      { label: 'Engine', value: '49cc four-stroke single' },
      { label: 'Transmission', value: '4-speed' },
      { label: 'Condition', value: 'Excellent — original, unrestored' },
      { label: 'Edition', value: '50th Anniversary' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '2017 Honda Z50 Monkey 50th Anniversary For Sale | Lang Restorations',
    metaDescription:
      '2017 Honda Z50 Monkey 50th Anniversary Edition for sale from Lang Restorations, Traralgon Victoria. Limited edition modern classic in excellent original condition.',
  },

  // ── 2000 Yamaha YZ250 Vuillemin Tribute ────────────────────────────────────
  {
    slug: '2000-yamaha-yz250-vuillemin-tribute',
    name: '2000 Yamaha YZ250 — Vuillemin Tribute',
    year: 2000,
    brand: 'Yamaha',
    model: 'YZ250',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      'Built as a tribute to David Vuillemin\'s 2000 race bike. A fully restored YZ250 finished to factory race team specification.',

    fullDescription: `David Vuillemin's 2000 Yamaha YZ250 campaign is one of the benchmark references in the golden era of 250cc motocross. This tribute build has been constructed to replicate the look and specification of Vuillemin's factory race machine — the correct colour scheme, graphics, and period-correct details that defined the 2000 Yamaha factory effort.

The base machine is a genuine 2000 Yamaha YZ250, fully restored from the ground up at Lang Restorations. The engine has been rebuilt, the chassis addressed, and all components returned to a standard that does the tribute justice. This is a restoration built on a properly rebuilt motorcycle — not a cosmetic exercise over a tired machine.

Tribute builds of this kind require both mechanical competence and a thorough knowledge of the period's race history. The 2000 Yamaha factory colour scheme, the correct graphics package, and the period-correct component selection are all represented here as accurately as possible.

For the serious vintage motocross collector or display enthusiast who wants a piece that references one of the most recognisable machines of the 250 two-stroke era. Presented ready to ride or display.`,

    heroImage: {
      src: '/images/for-sale/2000-yamaha-yz250-vuillemin-tribute/hero.jpg',
      alt: '2000 Yamaha YZ250 Vuillemin Tribute — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/2000-yamaha-yz250-vuillemin-tribute/left.jpg',
        alt: '2000 Yamaha YZ250 Vuillemin Tribute — completed restoration, left side',
        caption: 'Completed — Vuillemin tribute livery, gold rims, number 334',
      },
      {
        src: '/images/for-sale/2000-yamaha-yz250-vuillemin-tribute/before.jpg',
        alt: '2000 Yamaha YZ250 — frame and components before restoration',
        caption: 'Before — frame and components as received',
      },
    ],

    specifications: [
      { label: 'Year', value: '2000' },
      { label: 'Brand', value: 'Yamaha' },
      { label: 'Model', value: 'YZ250' },
      { label: 'Engine', value: '249cc two-stroke single' },
      { label: 'Style', value: 'Tribute build — Vuillemin factory specification' },
      { label: 'Condition', value: 'Fully restored' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '2000 Yamaha YZ250 Vuillemin Tribute For Sale | Lang Restorations',
    metaDescription:
      '2000 Yamaha YZ250 Vuillemin Tribute build for sale from Lang Restorations, Traralgon Victoria. Fully restored to factory race team specification. Rare collector piece.',
  },

  // ── 1990 Yamaha YZ250WR ─────────────────────────────────────────────────────
  {
    slug: '1990-yamaha-yz250wr',
    name: '1990 Yamaha YZ250WR',
    year: 1990,
    brand: 'Yamaha',
    model: 'YZ250WR',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      'Classic Yamaha enduro machine, fully restored. The YZ250WR represents the crossover between Yamaha\'s motocross and enduro pedigree at the turn of the decade.',

    fullDescription: `The 1990 Yamaha YZ250WR occupies a specific and well-regarded position in Yamaha's off-road history. The WR designation — Works Replica — identifies a machine built on YZ motocross architecture but configured for enduro competition. These machines bridged the gap between Yamaha's dominant 250 motocross platform and the demands of timed enduro racing, and they were produced in limited numbers relative to the standard YZ250.

This example has been fully restored at Lang Restorations. The machine has been stripped, inspected, and rebuilt to the correct factory specification — engine rebuilt, chassis addressed, and all components returned to the standard the WR deserves. Period-correct details have been verified throughout.

The YZ250WR from this era is increasingly sought by collectors who understand what the WR designation represents — a machine produced for serious competition, not general trail riding, and built with the factory's full technical knowledge applied to the enduro format.

A genuine 1990 YZ250WR in restored condition is a difficult machine to find. Presented ready to ride or display.`,

    heroImage: {
      src: '/images/for-sale/1990-yamaha-yz250wr/hero.jpg',
      alt: '1990 Yamaha YZ250WR — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/1990-yamaha-yz250wr/left.jpg',
        alt: '1990 Yamaha YZ250WR — left side profile',
        caption: 'Fully restored left side',
      },
      {
        src: '/images/for-sale/1990-yamaha-yz250wr/engine.jpg',
        alt: '1990 Yamaha YZ250WR — engine detail',
        caption: 'Rebuilt engine',
      },
      {
        src: '/images/for-sale/1990-yamaha-yz250wr/right.jpg',
        alt: '1990 Yamaha YZ250WR — right side',
        caption: 'Right side detail',
      },
    ],

    specifications: [
      { label: 'Year', value: '1990' },
      { label: 'Brand', value: 'Yamaha' },
      { label: 'Model', value: 'YZ250WR' },
      { label: 'Engine', value: '249cc two-stroke single' },
      { label: 'Type', value: 'Works Replica Enduro' },
      { label: 'Condition', value: 'Fully restored' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '1990 Yamaha YZ250WR For Sale | Lang Restorations — Traralgon Victoria',
    metaDescription:
      '1990 Yamaha YZ250WR for sale from Lang Restorations, Traralgon Victoria. Rare Works Replica enduro machine, fully restored. Serious collector opportunity.',
  },

  // ── 1976 Honda Z50 J1 Parakeet Yellow ──────────────────────────────────────
  {
    slug: '1976-honda-z50-j1-parakeet-yellow',
    name: '1976 Honda Z50 J1 — Parakeet Yellow',
    year: 1976,
    brand: 'Honda',
    model: 'Z50 J1',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      'Fully restored back to original factory specifications in the iconic Parakeet Yellow colour scheme. A correct, documented restoration of the 1976 Z50 J1.',

    fullDescription: `The 1976 Honda Z50 J1 in Parakeet Yellow is one of the most recognisable colour specifications in the Z50 Mini Trail lineage. Parakeet Yellow — Honda's vivid factory colour for this period — is the correct, original specification for this machine, and it is the colour that most collectors seek when pursuing a correct 1976 J1.

This restoration has been completed to original factory specifications. The machine was fully disassembled, every component inspected and addressed, and reassembled to the correct standard. The Parakeet Yellow finish has been applied to the correct specification, matching the factory colour as closely as possible. Period-correct decals and hardware have been used throughout.

The Z50 J1 marks an important point in the Mini Trail story — a machine that had evolved from the original Z50 into a more refined package while retaining the essential character that made the Mini Trail line so enduring. This particular variant, with its correct colour, correct decals, and documented restoration, represents the kind of Z50 that serious collectors actively pursue.

Presented in fully restored condition, ready for display or collection.`,

    heroImage: {
      src: '/images/for-sale/1976-honda-z50-j1-parakeet-yellow/hero.jpg',
      alt: '1976 Honda Z50 J1 Parakeet Yellow — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/1976-honda-z50-j1-parakeet-yellow/left.jpg',
        alt: '1976 Honda Z50 J1 Parakeet Yellow — left side',
        caption: 'Correct Parakeet Yellow factory colour',
      },
      {
        src: '/images/for-sale/1976-honda-z50-j1-parakeet-yellow/right.jpg',
        alt: '1976 Honda Z50 J1 Parakeet Yellow — right side',
        caption: 'Right side detail',
      },
      {
        src: '/images/for-sale/1976-honda-z50-j1-parakeet-yellow/engine.jpg',
        alt: '1976 Honda Z50 J1 — engine detail',
        caption: 'Restored engine and chassis',
      },
    ],

    specifications: [
      { label: 'Year', value: '1976' },
      { label: 'Brand', value: 'Honda' },
      { label: 'Model', value: 'Z50 J1 Mini Trail' },
      { label: 'Engine', value: '49cc four-stroke single' },
      { label: 'Transmission', value: '3-speed semi-automatic' },
      { label: 'Colour', value: 'Parakeet Yellow — factory specification' },
      { label: 'Condition', value: 'Fully restored to original specification' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '1976 Honda Z50 J1 Parakeet Yellow For Sale | Lang Restorations',
    metaDescription:
      '1976 Honda Z50 J1 in Parakeet Yellow for sale from Lang Restorations, Traralgon Victoria. Fully restored to original factory specification. Serious Z50 collector piece.',
  },

  // ── 1972 Honda Z50 A U-Type Mex Yellow ─────────────────────────────────────
  {
    slug: '1972-honda-z50a-u-type-mex-yellow',
    name: '1972 Honda Z50 A U-Type — Mex Yellow',
    year: 1972,
    brand: 'Honda',
    model: 'Z50 A U-Type',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      'No-expense-spared restoration completed using predominantly genuine OEM parts. The 1972 Z50 A U-Type in Mex Yellow is a benchmark restoration.',

    fullDescription: `The 1972 Honda Z50 A U-Type represents a specific and important variant in the Z50 Mini Trail production history. The U-Type designation identifies a market-specific configuration, and the Mex Yellow — Honda's factory colour for this period and variant — is the correct, documented specification for this machine.

This restoration has been completed to the highest possible standard, using predominantly genuine Honda OEM parts sourced specifically for this project. The use of genuine parts is the defining characteristic of this restoration — not reproduction parts where originals could be found, but the correct Honda components that the factory originally fitted.

The work encompasses a complete disassembly and rebuild. Every component was inspected, and the decision was made at the outset to use original Honda parts wherever they could be sourced. That commitment to correct parts is what separates a restoration at this level from standard work, and it is reflected in the finished machine.

The Mex Yellow finish is correct to factory specification. The decals are period-appropriate. The machine presents as a correct, documented restoration of a 1972 Z50 A U-Type — a machine that is increasingly difficult to find in any condition, let alone restored to this standard.

For the serious Honda Mini Trail collector. Documentation available.`,

    heroImage: {
      src: '/images/for-sale/1972-honda-z50a-u-type-mex-yellow/hero.jpg',
      alt: '1972 Honda Z50 A U-Type Mex Yellow — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/1972-honda-z50a-u-type-mex-yellow/left.jpg',
        alt: '1972 Honda Z50 A U-Type — left side',
        caption: 'Factory Mex Yellow — correct OEM specification',
      },
      {
        src: '/images/for-sale/1972-honda-z50a-u-type-mex-yellow/right.jpg',
        alt: '1972 Honda Z50 A U-Type — right side',
        caption: 'Right side profile',
      },
      {
        src: '/images/for-sale/1972-honda-z50a-u-type-mex-yellow/engine.jpg',
        alt: '1972 Honda Z50 A — engine detail',
        caption: 'Engine rebuilt with OEM components',
      },
      {
        src: '/images/for-sale/1972-honda-z50a-u-type-mex-yellow/detail.jpg',
        alt: '1972 Honda Z50 A U-Type — decal and badge detail',
        caption: 'Period-correct decals and hardware',
      },
    ],

    specifications: [
      { label: 'Year', value: '1972' },
      { label: 'Brand', value: 'Honda' },
      { label: 'Model', value: 'Z50 A U-Type Mini Trail' },
      { label: 'Engine', value: '49cc four-stroke single' },
      { label: 'Transmission', value: '3-speed semi-automatic' },
      { label: 'Colour', value: 'Mex Yellow — factory specification' },
      { label: 'Parts', value: 'Predominantly genuine Honda OEM' },
      { label: 'Condition', value: 'No-expense-spared restoration' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '1972 Honda Z50 A U-Type Mex Yellow For Sale | Lang Restorations',
    metaDescription:
      '1972 Honda Z50 A U-Type in Mex Yellow for sale from Lang Restorations. No-expense-spared restoration with predominantly genuine OEM Honda parts. Premier Z50 collector piece.',
  },

  // ── 1970 Honda Z50 A K2 GE Yellow ──────────────────────────────────────────
  {
    slug: '1970-honda-z50a-k2-ge-yellow',
    name: '1970 Honda Z50 A K2 — GE Yellow',
    year: 1970,
    brand: 'Honda',
    model: 'Z50 A K2',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      'Factory-style restoration completed to a high standard. The 1970 Z50 A K2 in GE Yellow — a correct and desirable early Monkey specification.',

    fullDescription: `The 1970 Honda Z50 A K2 marks the second generation of the Z50 A production run and represents an early, highly collectible variant of the Mini Trail line. The K2 designation identifies the production series, and GE Yellow — Honda's factory colour for this specification — is the correct and desirable colour for this machine.

This restoration has been completed to a high standard with careful attention to factory-correct presentation. The K2 sits at an important point in Z50 history: early enough to carry the character of the original Mini Trail concept, but refined enough to represent the line in a developed, dependable form. In GE Yellow, the K2 presents exactly as Honda intended in 1970.

The restoration covers the complete machine — engine, chassis, bodywork, and all peripheral components addressed and returned to correct specification. Period-correct decals and hardware throughout.

The 1970 Z50 A K2 in any condition is an increasingly difficult machine to source. In restored condition with the correct colour, it is a genuine collector piece that attracts serious attention from Honda enthusiasts globally.

Presented ready for display or collection. Documentation available on enquiry.`,

    heroImage: {
      src: '/images/for-sale/1970-honda-z50a-k2-ge-yellow/hero.jpg',
      alt: '1970 Honda Z50 A K2 GE Yellow — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-yellow/left.jpg',
        alt: '1970 Honda Z50 A K2 GE Yellow — left side',
        caption: 'Factory GE Yellow — correct colour specification',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-yellow/right.jpg',
        alt: '1970 Honda Z50 A K2 — right side',
        caption: 'Right side profile',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-yellow/engine.jpg',
        alt: '1970 Honda Z50 A K2 — engine',
        caption: 'Engine detail',
      },
    ],

    specifications: [
      { label: 'Year', value: '1970' },
      { label: 'Brand', value: 'Honda' },
      { label: 'Model', value: 'Z50 A K2 Mini Trail' },
      { label: 'Engine', value: '49cc four-stroke single' },
      { label: 'Transmission', value: '3-speed semi-automatic' },
      { label: 'Colour', value: 'GE Yellow — factory specification' },
      { label: 'Condition', value: 'High-standard restoration' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '1970 Honda Z50 A K2 GE Yellow For Sale | Lang Restorations',
    metaDescription:
      '1970 Honda Z50 A K2 in GE Yellow for sale from Lang Restorations, Traralgon Victoria. Factory-correct restoration of an early, highly collectible Z50 Mini Trail.',
  },

  // ── 1970 Honda Z50 A K2 GE Mexican Yellow / White (Resto Mod) ──────────────
  {
    slug: '1970-honda-z50a-k2-ge-mexican-yellow',
    name: '1970 Honda Z50 A K2 — GE Mexican Yellow / White',
    year: 1970,
    brand: 'Honda',
    model: 'Z50 A K2',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      'A 1970 Z50 A K2 General Export in Mexican Yellow with white side panel, restored in 2020 as a resto mod with chrome wheels and painted hubs. An early, highly collectible Mini Trail finished to a high standard.',

    fullDescription: `The 1970 Honda Z50 A K2 in Mexican Yellow is an early General Export (GE) Mini Trail restored in 2020. Rather than a strictly factory-correct rebuild, this example was completed as a resto mod — retaining the character and proportions of the original K2 while incorporating chrome wheels and painted hubs for a distinctive, elevated finish.

The K2 generation represents the second iteration of the Z50 A, a machine that had already established the Mini Trail formula that would remain in continuous production for over five decades. The vivid Mexican Yellow paintwork is presented over the correct K2 bodywork, complete with the white side stripe, chrome "Honda Mini Trail" tank badge, and polished alloy that define the period.

Finished throughout to a high standard, the bike presents beautifully — bright yellow paint, chrome cycle parts, polished forks and yokes, and a correct black tuck-and-roll seat. Every detail has been considered, from the restored cockpit and speedometer through to the exhaust, controls, and running gear.

The 1970 Z50 A K2 in any condition is an increasingly difficult machine to source. Restored as a resto mod in this specification, it is a genuine collector piece and a striking addition to any Honda Mini Trail collection. Suitable for display, collection, or occasional use.`,

    heroImage: {
      src: '/images/for-sale/1970-honda-z50a-k2-ge-mexican-yellow/hero.jpg',
      alt: '1970 Honda Z50 A K2 Mexican Yellow resto mod — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-mexican-yellow/left.jpg',
        alt: '1970 Honda Z50 A K2 Mexican Yellow — left side profile',
        caption: 'Left side profile — Mexican Yellow with chrome wheels',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-mexican-yellow/front.jpg',
        alt: '1970 Honda Z50 A K2 Mexican Yellow — front end and tank detail',
        caption: 'Front end, forks and "Honda Mini Trail" tank badge',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-mexican-yellow/cockpit.jpg',
        alt: '1970 Honda Z50 A K2 Mexican Yellow — cockpit and speedometer',
        caption: 'Restored cockpit and speedometer',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-mexican-yellow/seat.jpg',
        alt: '1970 Honda Z50 A K2 Mexican Yellow — Honda tuck-and-roll seat',
        caption: 'Correct black tuck-and-roll Honda seat',
      },
    ],

    specifications: [
      { label: 'Year', value: '1970' },
      { label: 'Brand', value: 'Honda' },
      { label: 'Model', value: 'Z50 A K2 Mini Trail (General Export)' },
      { label: 'Engine', value: '49cc four-stroke single' },
      { label: 'Transmission', value: '3-speed semi-automatic' },
      { label: 'Colour', value: 'Mexican Yellow with white side panel' },
      { label: 'Style', value: 'Resto mod — chrome wheels, painted hubs' },
      { label: 'Condition', value: 'Restored (2020)' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '1970 Honda Z50 A K2 GE Mexican Yellow For Sale | Lang Restorations',
    metaDescription:
      '1970 Honda Z50 A K2 General Export in Mexican Yellow for sale from Lang Restorations, Traralgon Victoria. Restored 2020 as a resto mod with chrome wheels and painted hubs.',
  },

  // ── 1970 Honda Z50 A K2 GE Red ─────────────────────────────────────────────
  {
    slug: '1970-honda-z50a-k2-ge-red',
    name: '1970 Honda Z50 A K2 — GE Red',
    year: 1970,
    brand: 'Honda',
    model: 'Z50 A K2',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      'Fully restored Honda Z50 A K2 finished in factory GE Red. An early and highly collectible Mini Trail variant in a desirable original colour.',

    fullDescription: `The 1970 Honda Z50 A K2 in GE Red is one of the most sought-after colour specifications in the early Z50 collection. GE Red — Honda's factory colour for this production run — presents the K2 in its boldest, most visually striking original specification, and it is a colour that consistently commands attention from serious Z50 collectors.

This machine has been fully restored at Lang Restorations. The process involved a complete disassembly, component inspection, and rebuild to factory specification. The GE Red finish has been applied to the correct standard for this model year, with period-correct decals and hardware throughout.

The K2 generation represents the second iteration of the Z50 A — a machine already establishing the Mini Trail formula that would remain in continuous production for over five decades. Finding a 1970 K2 in any colour is a challenge; finding one in GE Red in restored condition is a genuine opportunity.

This example presents as a correct, high-quality restoration of one of Honda's most enduring and beloved miniature motorcycles. Suitable for serious display, competition judging, or collection.`,

    heroImage: {
      src: '/images/for-sale/1970-honda-z50a-k2-ge-red/hero.jpg',
      alt: '1970 Honda Z50 A K2 GE Red — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-red/left.jpg',
        alt: '1970 Honda Z50 A K2 GE Red — left side',
        caption: 'Factory GE Red finish — correct to 1970 K2 specification',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-red/right.jpg',
        alt: '1970 Honda Z50 A K2 GE Red — right side',
        caption: 'Right side profile',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-red/engine.jpg',
        alt: '1970 Honda Z50 A K2 — engine',
        caption: 'Restored engine detail',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-red/detail.jpg',
        alt: '1970 Honda Z50 A K2 — decal detail',
        caption: 'Period-correct decals',
      },
    ],

    specifications: [
      { label: 'Year', value: '1970' },
      { label: 'Brand', value: 'Honda' },
      { label: 'Model', value: 'Z50 A K2 Mini Trail' },
      { label: 'Engine', value: '49cc four-stroke single' },
      { label: 'Transmission', value: '3-speed semi-automatic' },
      { label: 'Colour', value: 'GE Red — factory specification' },
      { label: 'Condition', value: 'Fully restored' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '1970 Honda Z50 A K2 GE Red For Sale | Lang Restorations',
    metaDescription:
      '1970 Honda Z50 A K2 in GE Red for sale from Lang Restorations, Traralgon Victoria. Fully restored early Mini Trail in a desirable original factory colour.',
  },

  // ── 1970 Honda Z50 A K2 GE Candy Ruby Red (Resto Mod) ──────────────────────
  {
    slug: '1970-honda-z50a-k2-ge-candy-ruby-red',
    name: '1970 Honda Z50 A K2 — GE Candy Ruby Red',
    year: 1970,
    brand: 'Honda',
    model: 'Z50 A K2',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      'A 1970 Z50 A K2 General Export in Candy Ruby Red, restored in 2021 as a resto mod with chrome wheels and painted hubs. An early, highly collectible Mini Trail finished to a high standard.',

    fullDescription: `The 1970 Honda Z50 A K2 in Candy Ruby Red is an early General Export (GE) Mini Trail restored in 2021. Rather than a strictly factory-correct rebuild, this example was completed as a resto mod — retaining the character and proportions of the original K2 while incorporating chrome wheels and painted hubs for a distinctive, elevated finish.

The K2 generation represents the second iteration of the Z50 A, a machine that had already established the Mini Trail formula that would remain in continuous production for over five decades. The Candy Ruby Red paintwork is presented over the correct K2 bodywork, complete with the chrome tank badge and white side panel that define the period.

Finished throughout to a high standard, the bike presents beautifully — deep candy paint, polished alloy, chrome cycle parts, and a correct black tuck-and-roll seat. Every detail has been considered, from the restored cockpit and speedometer through to the exhaust, controls, and running gear.

The 1970 Z50 A K2 in any condition is an increasingly difficult machine to source. Restored as a resto mod in this specification, it is a genuine collector piece and an eye-catching addition to any Honda Mini Trail collection. Suitable for display, collection, or occasional use.`,

    heroImage: {
      src: '/images/for-sale/1970-honda-z50a-k2-ge-candy-ruby-red/hero.jpg',
      alt: '1970 Honda Z50 A K2 Candy Ruby Red resto mod — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-candy-ruby-red/left.jpg',
        alt: '1970 Honda Z50 A K2 Candy Ruby Red — left side profile',
        caption: 'Left side profile — Candy Ruby Red with chrome wheels',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-candy-ruby-red/front.jpg',
        alt: '1970 Honda Z50 A K2 Candy Ruby Red — front view',
        caption: 'Front view — chrome handlebars and headlight',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-candy-ruby-red/cockpit.jpg',
        alt: '1970 Honda Z50 A K2 Candy Ruby Red — cockpit and speedometer',
        caption: 'Restored cockpit and speedometer',
      },
      {
        src: '/images/for-sale/1970-honda-z50a-k2-ge-candy-ruby-red/seat.jpg',
        alt: '1970 Honda Z50 A K2 Candy Ruby Red — Honda tuck-and-roll seat',
        caption: 'Correct black tuck-and-roll Honda seat',
      },
    ],

    specifications: [
      { label: 'Year', value: '1970' },
      { label: 'Brand', value: 'Honda' },
      { label: 'Model', value: 'Z50 A K2 Mini Trail (General Export)' },
      { label: 'Engine', value: '49cc four-stroke single' },
      { label: 'Transmission', value: '3-speed semi-automatic' },
      { label: 'Colour', value: 'Candy Ruby Red' },
      { label: 'Style', value: 'Resto mod — chrome wheels, painted hubs' },
      { label: 'Condition', value: 'Restored (2021)' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '1970 Honda Z50 A K2 GE Candy Ruby Red For Sale | Lang Restorations',
    metaDescription:
      '1970 Honda Z50 A K2 General Export in Candy Ruby Red for sale from Lang Restorations, Traralgon Victoria. Restored 2021 as a resto mod with chrome wheels and painted hubs.',
  },

  // ── 1997/99 Honda CR250 Lusk Tribute ───────────────────────────────────────
  {
    slug: '1997-99-honda-cr250-lusk-tribute',
    name: "1997/99 Honda CR250 — Lusk Tribute",
    year: '1997/99',
    brand: 'Honda',
    model: 'CR250',
    priceLabel: 'Contact for Price',
    status: 'Available',
    condition: 'Restored',

    shortDescription:
      "A collaboration build inspired by Ezra Lusk's legendary CR250 race bikes. A thoroughly researched tribute to one of the most celebrated machines of the late 1990s Honda factory effort.",

    fullDescription: `Ezra Lusk's Honda CR250 machines from the late 1990s represent some of the most recognisable and admired factory motocross builds of that era. Lusk's riding during this period — his aggression, his style, and his results — made him and his Honda factory machines the subject of enduring collector attention. This tribute build was constructed as a collaboration to reference that legacy correctly.

The base machine is a genuine Honda CR250 from the 1997/99 production period. The motorcycle has been fully restored — engine rebuilt, chassis addressed, and all mechanical components returned to a working standard before the tribute specification was applied. The build represents the correct colour scheme, graphics, and period-correct details associated with Lusk's race machines from this era.

Tribute builds of this calibre require thorough research and a willingness to source correct components rather than approximations. The result here is a machine that stands up to scrutiny from anyone familiar with the late 1990s Honda factory effort — not a loose interpretation, but a correctly referenced tribute.

The CR250 from this period is already a highly regarded machine on its own merits — the engine architecture, the chassis development, and the performance envelope of the late 1990s Honda 250 two-stroke are well documented and well regarded. As a tribute to one of the era's most prominent riders and machines, this build occupies a specific and valuable position in any serious motocross collection.

Presented ready to ride or display. One of the more considered tribute builds from the Lang Restorations workshop.`,

    heroImage: {
      src: '/images/for-sale/1997-99-honda-cr250-lusk-tribute/hero.jpg',
      alt: '1997/99 Honda CR250 Lusk Tribute — for sale, Lang Restorations',
    },
    galleryImages: [
      {
        src: '/images/for-sale/1997-99-honda-cr250-lusk-tribute/hero.jpg',
        alt: '1997/99 Honda CR250 Lusk Tribute — tribute livery and plastics',
        caption: 'In progress — Lusk tribute livery, number 95, Honda Racing plastics',
      },
      {
        src: '/images/for-sale/1997-99-honda-cr250-lusk-tribute/engine.jpg',
        alt: '1997/99 Honda CR250 — rebuilt engine back in frame',
        caption: 'Rebuilt CR250R engine in frame — Honda Racing cover',
      },
    ],

    specifications: [
      { label: 'Year', value: '1997/99' },
      { label: 'Brand', value: 'Honda' },
      { label: 'Model', value: 'CR250' },
      { label: 'Engine', value: '249cc two-stroke single' },
      { label: 'Style', value: 'Tribute build — Lusk factory specification' },
      { label: 'Condition', value: 'Fully restored' },
      { label: 'Location', value: 'Traralgon, Victoria' },
    ],

    enquiryCta: 'Enquire About This Motorcycle',

    metaTitle: '1997/99 Honda CR250 Lusk Tribute For Sale | Lang Restorations',
    metaDescription:
      '1997/99 Honda CR250 Lusk Tribute build for sale from Lang Restorations, Traralgon Victoria. Collaboration build referencing Ezra Lusk\'s factory CR250. Fully restored.',
  },
]
