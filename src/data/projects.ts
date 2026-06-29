import type { Project } from '@/types'

// ─── Featured Builds / Projects ───────────────────────────────────────────────
//
// Add or update restoration projects here.
// Each project automatically generates a card on /builds and a full page at /builds/:slug
//
// IMAGES: Place project images in /public/images/projects/[slug]/
// SLUG: Lowercase, hyphens only. e.g. '1996-honda-cr500-mcgrath-tribute'
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: '1996-honda-cr500-mcgrath-tribute',
    name: '1996 Honda CR500 — McGrath Tribute',
    year: 1996,
    brand: 'Honda',
    model: 'CR500R',
    category: 'Motocross',
    featured: true,

    metaTitle: '1996 Honda CR500 McGrath Tribute | Motocross Restoration — Lang Restorations, Traralgon VIC',
    metaDescription:
      'Ground-up restoration of a 1996 Honda CR500R built as a tribute to Jeremy McGrath. Rebuilt by Lang Restorations in Traralgon, Victoria — every component restored to the highest standard.',

    shortDescription:
      'A ground-up restoration of a 1996 Honda CR500R built as a tribute to Jeremy McGrath\'s iconic race bikes. Every component rebuilt or replaced to the highest standard.',

    story: `The Honda CR500R is one of the most formidable two-stroke motorcycles ever produced — a 491cc single with enough power to humble riders who approached it without respect, and a machine that defined an era of open-class motocross racing. The 1996 model was among the last of the CR500 lineage, and it arrived at the Lang Restorations workshop as a candidate for a tribute build in the style of Jeremy McGrath's Team Honda machines.

McGrath's connection to the CR500 represents a particular chapter in motocross history — a period when the open-class machine demanded not just skill but commitment, and when the Honda factory colours were synonymous with dominance. Building a tribute to that era required not just correct graphics and colour, but correct engineering beneath them.

The restoration began with complete disassembly. The engine was stripped to the last component, every measurement taken against factory specification. The 491cc reed-valve cylinder was inspected, the crankshaft assessed, and the engine rebuilt with new seals, gaskets, and components throughout. Engine cases and the cylinder were vapour blasted to restore the factory cast finish. The powervalve mechanism — a critical system on the CR500 — was thoroughly inspected and rebuilt.

Chassis work covered the frame, swingarm, and all suspension components. Forks were rebuilt with new seals and oil. The linkage was disassembled, cleaned, measured, and rebuilt with new bearings throughout. All hardware received the zinc plating treatment appropriate to the model.

The tribute livery was applied with reference to period photography and factory specifications. Every decal placement, every colour boundary, every graphic detail was verified before application.

The result is a CR500 that represents the 1996 model year at its absolute best — a machine that honours both the motorcycle and the rider it was built to reference.`,

    heroImage: {
      src: '/images/projects/1996-honda-cr500-mcgrath-tribute/hero.jpg',
      alt: '1996 Honda CR500R McGrath Tribute — ground-up motocross restoration by Lang Restorations, Traralgon Victoria',
    },
    galleryImages: [
      {
        src: '/images/projects/1996-honda-cr500-mcgrath-tribute/gallery-restored.jpg',
        alt: '1996 Honda CR500R McGrath Tribute — completed restoration by Lang Restorations',
        caption: 'Completed restoration — McGrath Tribute livery, Traralgon VIC',
      },
      {
        src: '/images/projects/1996-honda-cr500-mcgrath-tribute/gallery-showroom.jpg',
        alt: '1996 Honda CR500R McGrath Tribute on display',
        caption: 'On display after completion',
      },
    ],
    beforeImage: {
      src: '/images/projects/1996-honda-cr500-mcgrath-tribute/before.jpg',
      alt: '1996 Honda CR500R — condition on arrival at Lang Restorations',
      caption: 'As received',
    },
    afterImage: {
      src: '/images/projects/1996-honda-cr500-mcgrath-tribute/after.jpg',
      alt: '1996 Honda CR500R McGrath Tribute — completed restoration by Lang Restorations',
      caption: 'Completed — Lang Restorations, Traralgon',
    },

    specifications: [
      { label: 'Engine', value: '491cc reed-valve two-stroke single' },
      { label: 'Carburettor', value: 'Keihin PWK 38mm' },
      { label: 'Ignition', value: 'CDI' },
      { label: 'Gearbox', value: '5-speed' },
      { label: 'Front suspension', value: '43mm USD forks' },
      { label: 'Rear suspension', value: 'Pro-Link single shock' },
      { label: 'Front brake', value: 'Single disc' },
      { label: 'Rear brake', value: 'Single disc' },
      { label: 'Restoration scope', value: 'Ground-up restoration' },
    ],

    workCompleted: [
      'Full disassembly and component inspection',
      'Engine rebuild — cylinder, crankshaft, powervalve, seals and gaskets throughout',
      'Vapour blasting — engine cases, cylinder, cylinder head',
      'Fork rebuild — new seals, oil and internals',
      'Suspension linkage rebuild — all bearings replaced',
      'Swingarm bearing replacement',
      'Zinc plating — all applicable steel hardware',
      'Frame inspection and refinish',
      'Period-correct tribute graphics and livery',
      'New plastics, cables, and consumables throughout',
      'Final assembly and inspection',
    ],
  },

  {
    slug: '1993-kawasaki-kx250',
    name: '1993 Kawasaki KX250',
    year: 1993,
    brand: 'Kawasaki',
    model: 'KX250',
    category: 'Motocross',
    featured: true,

    metaTitle: '1993 Kawasaki KX250 Motocross Restoration | Lang Restorations — Traralgon VIC',
    metaDescription:
      'Ground-up restoration of a 1993 Kawasaki KX250 two-stroke motocross bike. Rebuilt by Lang Restorations in Traralgon, Victoria to factory specification.',

    shortDescription:
      'A ground-up restoration of a 1993 Kawasaki KX250 — one of the strongest two-stroke quarter-litre motocross bikes of its era, rebuilt to factory specification in Traralgon, Victoria.',

    story: `The 1993 Kawasaki KX250 arrived at a point in the machine's development when Kawasaki had refined the KX formula to something approaching its peak. Strong midrange power, a capable chassis, and factory-developed suspension made the '93 KX250 a genuine weapon in competition — and a machine that, three decades on, represents the two-stroke motocross era at its best.

This particular KX250 came to the workshop in well-used but fundamentally sound condition. The kind of bike that has been ridden properly and shows it — which is appropriate, given the machine it is.

The restoration approach was straightforward: rebuild everything to the standard it deserved. Engine cases were stripped and vapour blasted. The bottom end was assessed — crankshaft measured, bearings replaced. The top end was rebuilt with new piston, rings, and gaskets. The powervalve mechanism — KIPS, in Kawasaki's terminology — was inspected, cleaned, and rebuilt to ensure correct operation across the rev range.

Chassis work was equally thorough. Forks were rebuilt, linkage bearings replaced, frame inspected and refinished in correct Kawasaki green. All hardware was zinc plated. New plastics, cables, and consumables were fitted throughout, with period-correct replacements used wherever available.

The 1993 KX250 that left the Lang Restorations workshop is a machine that a factory rider could have lined up on in 1993 without modification. That is the point of a correct restoration.`,

    heroImage: {
      src: '/images/projects/1993-kawasaki-kx250/hero.jpg',
      alt: '1993 Kawasaki KX250 — ground-up motocross restoration by Lang Restorations, Traralgon Victoria',
    },
    galleryImages: [
      {
        src: '/images/projects/1993-kawasaki-kx250/hero.jpg',
        alt: '1993 Kawasaki KX250 — completed restoration by Lang Restorations',
        caption: 'Completed restoration — Lang Restorations, Traralgon',
      },
      {
        src: '/images/projects/1993-kawasaki-kx250/gallery-workshop.jpg',
        alt: '1993 Kawasaki KX250 in the workshop after restoration',
        caption: 'In the workshop — Pro Circuit forks, DID chain, rebuilt throughout',
      },
    ],
    beforeImage: {
      src: '/images/projects/1993-kawasaki-kx250/hero.jpg',
      alt: '1993 Kawasaki KX250 — completed restoration by Lang Restorations',
      caption: 'Completed — Lang Restorations, Traralgon',
    },
    afterImage: {
      src: '/images/projects/1993-kawasaki-kx250/hero.jpg',
      alt: '1993 Kawasaki KX250 — completed restoration by Lang Restorations',
      caption: 'Completed — Lang Restorations, Traralgon',
    },

    specifications: [
      { label: 'Engine', value: '249cc reed-valve two-stroke single' },
      { label: 'Powervalve', value: 'KIPS (Kawasaki Integrated Powervalve System)' },
      { label: 'Carburettor', value: 'Keihin PWK 36mm' },
      { label: 'Gearbox', value: '5-speed' },
      { label: 'Front suspension', value: '43mm USD Kayaba forks' },
      { label: 'Rear suspension', value: 'Kayaba single shock with Uni-Trak linkage' },
      { label: 'Front brake', value: 'Single disc' },
      { label: 'Rear brake', value: 'Single disc' },
      { label: 'Restoration scope', value: 'Ground-up restoration' },
    ],

    workCompleted: [
      'Full disassembly and component inspection',
      'Engine rebuild — piston, rings, bottom end assessment, KIPS powervalve rebuild',
      'Vapour blasting — engine cases and cylinder',
      'Fork rebuild with new seals and oil',
      'Uni-Trak linkage rebuild — all bearings replaced',
      'Zinc plating — all applicable steel hardware',
      'Frame inspection and correct colour refinish',
      'New period-correct plastics, cables, and consumables',
      'Final assembly and inspection',
    ],
  },

  {
    slug: '1996-honda-cr250',
    name: '1996 Honda CR250',
    year: 1996,
    brand: 'Honda',
    model: 'CR250R',
    category: 'Motocross',
    featured: true,

    metaTitle: '1996 Honda CR250R Motocross Restoration | Lang Restorations — Traralgon VIC',
    metaDescription:
      'Ground-up restoration of a 1996 Honda CR250R two-stroke motocross bike. Rebuilt by Lang Restorations in Traralgon, Victoria — engine, chassis, and finish to factory specification.',

    shortDescription:
      'A ground-up restoration of a 1996 Honda CR250R — Honda\'s quarter-litre motocross weapon at the height of the two-stroke era, rebuilt to factory specification.',

    story: `The Honda CR250R of the mid-1990s represents the two-stroke motocross machine at the apex of its development — decades of refinement translated into a motorcycle that was fast, well-handling, and finished to a standard that reflected the factory team's demands. The 1996 model is one of the most sought-after of the CR250 range, with a revised power delivery and chassis geometry that earned it genuine respect from racers.

This restoration followed the same process as every build at Lang Restorations: complete disassembly, component-by-component assessment, and a rebuild that addresses every element of the machine.

The engine was fully rebuilt. Cases were vapour blasted, the crankshaft measured and rebuilt, the cylinder inspected and fitted with a new piston and rings. The CR250's powervalve — responsible for the broad, usable power characteristic that set the bike apart from peaky competitors — was inspected and rebuilt. New seals, gaskets, and hardware throughout.

Fork internals were replaced. Pro-Link linkage bearings were replaced. The frame was inspected, found sound, and refinished. All steel hardware was zinc plated to factory specification. Period-correct plastics and graphics were sourced and applied with reference to factory documentation.

A 1996 Honda CR250R that leaves the workshop looking and performing the way Honda intended it to in 1996. Nothing more complicated than that.`,

    heroImage: {
      src: '/images/projects/1996-honda-cr250/hero.jpg',
      alt: '1996 Honda CR250R — ground-up motocross restoration by Lang Restorations, Traralgon Victoria',
    },
    galleryImages: [
      {
        src: '/images/projects/1996-honda-cr250/engine.jpg',
        alt: '1996 Honda CR250R engine — vapour blasted, fully rebuilt',
        caption: 'Rebuilt 249cc two-stroke — vapour blasted cases, rebuilt powervalve',
      },
    ],
    beforeImage: {
      src: '/images/projects/1996-honda-cr250/before.jpg',
      alt: '1996 Honda CR250R — condition on arrival at Lang Restorations',
      caption: 'As received',
    },
    afterImage: {
      src: '/images/projects/1996-honda-cr250/after.jpg',
      alt: '1996 Honda CR250R — completed restoration by Lang Restorations',
      caption: 'Completed — Lang Restorations, Traralgon',
    },

    specifications: [
      { label: 'Engine', value: '249cc reed-valve two-stroke single' },
      { label: 'Powervalve', value: 'ATAC (Automatic Torque Amplification Chamber)' },
      { label: 'Carburettor', value: 'Keihin PWK 38mm' },
      { label: 'Gearbox', value: '5-speed' },
      { label: 'Front suspension', value: '43mm USD forks' },
      { label: 'Rear suspension', value: 'Pro-Link single shock' },
      { label: 'Front brake', value: 'Single disc' },
      { label: 'Rear brake', value: 'Single disc' },
      { label: 'Restoration scope', value: 'Ground-up restoration' },
    ],

    workCompleted: [
      'Full disassembly and component inspection',
      'Engine rebuild — piston, rings, crankshaft, powervalve, seals and gaskets',
      'Vapour blasting — engine cases, cylinder',
      'Fork rebuild with new seals and oil',
      'Pro-Link linkage rebuild — all bearings replaced',
      'Zinc plating — all applicable steel hardware',
      'Frame inspection and refinish',
      'Period-correct plastics, graphics and consumables',
      'Final assembly and inspection',
    ],
  },

  {
    slug: '2000-yamaha-yz250-vuillemin-tribute',
    name: '2000 Yamaha YZ250 — Vuillemin Tribute',
    year: 2000,
    brand: 'Yamaha',
    model: 'YZ250',
    category: 'Motocross',
    featured: true,

    metaTitle: '2000 Yamaha YZ250 Vuillemin Tribute | Motocross Restoration — Lang Restorations Traralgon',
    metaDescription:
      'A no-compromise restoration of a 2000 Yamaha YZ250 built as a tribute to David Vuillemin\'s factory race bike. Every component restored or replaced. Lang Restorations, Traralgon Victoria.',

    shortDescription:
      'A no-compromise restoration of a 2000 Yamaha YZ250 built as a tribute to David Vuillemin\'s legendary factory race bike — every component either restored or replaced with new parts.',

    story: `David Vuillemin's 2000 season on the Yamaha YZ250 produced some of the most compelling racing of the two-stroke supercross era. The Frenchman's aggressive style and the blue Yamaha factory livery made for a combination that defined a particular moment in the sport — and it is that moment this build was constructed to honour.

The brief was unambiguous: every component either restored or replaced with new parts. No compromises. The machine that left the workshop had to be indistinguishable from what a factory mechanic would have produced for a gate pick on race day.

The 2000 YZ250 engine received a full rebuild. The reed block was inspected and replaced. The crankshaft was measured, rebuilt with new bearings. The cylinder was inspected, and the top end rebuilt with new piston, rings, and gaskets. Cases and cylinder were vapour blasted. The powervalve was disassembled, measured, and rebuilt.

Chassis work was equally comprehensive. Every bearing in the suspension linkage was replaced. Fork internals were replaced with new components. The frame was inspected and refinished. Every bolt was zinc plated or replaced. New footpegs, cables, chain, and sprockets.

The Vuillemin tribute livery was applied with reference to period factory team photography, ensuring correct colours, graphic placement, and number plate configuration for the 2000 season.

One of our most demanding and rewarding restorations — a machine that captures a specific season in motocross history and does not compromise on a single detail.`,

    heroImage: {
      src: '/images/projects/2000-yamaha-yz250-vuillemin-tribute/hero.jpg',
      alt: '2000 Yamaha YZ250 Vuillemin Tribute — ground-up motocross restoration by Lang Restorations, Traralgon Victoria',
    },
    galleryImages: [
      {
        src: '/images/projects/2000-yamaha-yz250-vuillemin-tribute/engine.jpg',
        alt: '2000 Yamaha YZ250 engine — vapour blasted, fully rebuilt',
        caption: 'Rebuilt 249cc two-stroke — vapour blasted cases, full bottom and top end rebuild',
      },
      {
        src: '/images/projects/2000-yamaha-yz250-vuillemin-tribute/livery.jpg',
        alt: '2000 Yamaha YZ250 Vuillemin Tribute livery — factory team colours',
        caption: 'Factory team tribute livery — verified against period photography',
      },
    ],
    beforeImage: {
      src: '/images/projects/2000-yamaha-yz250-vuillemin-tribute/before.jpg',
      alt: '2000 Yamaha YZ250 — condition on arrival at Lang Restorations',
      caption: 'As received',
    },
    afterImage: {
      src: '/images/projects/2000-yamaha-yz250-vuillemin-tribute/after.jpg',
      alt: '2000 Yamaha YZ250 Vuillemin Tribute — completed restoration',
      caption: 'Completed — Lang Restorations, Traralgon',
    },

    specifications: [
      { label: 'Engine', value: '249cc reed-valve two-stroke single' },
      { label: 'Powervalve', value: 'YPVS (Yamaha Power Valve System)' },
      { label: 'Carburettor', value: 'Keihin PWK 38mm' },
      { label: 'Gearbox', value: '5-speed' },
      { label: 'Front suspension', value: '46mm Kayaba USD forks' },
      { label: 'Rear suspension', value: 'Kayaba single shock with linkage' },
      { label: 'Front brake', value: 'Single disc' },
      { label: 'Rear brake', value: 'Single disc' },
      { label: 'Restoration scope', value: 'Ground-up restoration — every component restored or replaced' },
    ],

    workCompleted: [
      'Full disassembly and component inspection',
      'Engine rebuild — crankshaft, reed block, piston, rings, YPVS powervalve, all seals and gaskets',
      'Vapour blasting — engine cases, cylinder, head',
      'Fork rebuild — new internals throughout',
      'Suspension linkage rebuild — all bearings replaced',
      'Zinc plating — all steel hardware replaced or plated',
      'New footpegs, cables, chain, and sprockets',
      'Frame inspection and refinish',
      'Period-correct Vuillemin tribute livery — factory colour reference',
      'New plastics and consumables throughout',
      'Final assembly and inspection',
    ],
  },

  {
    slug: '1986-honda-z50r',
    name: '1986 Honda Z50R',
    year: 1986,
    brand: 'Honda',
    model: 'Z50R',
    category: 'Classic',
    featured: false,

    metaTitle: '1986 Honda Z50R Restoration | Classic Mini Bike — Lang Restorations Traralgon VIC',
    metaDescription:
      'Ground-up restoration of a 1986 Honda Z50R mini bike. Restored by Lang Restorations in Traralgon, Victoria to factory specification. Classic Honda mini bike restoration specialists.',

    shortDescription:
      'A ground-up restoration of a 1986 Honda Z50R — one of the most loved mini bikes in Honda\'s long Mini Trail production run, rebuilt to factory specification.',

    story: `The Honda Z50R of the mid-1980s is a machine that sits at the intersection of nostalgia and genuine collector interest. Honda's Mini Trail range had evolved significantly since the original Z50 of 1967, and the 1986 R model represented a capable, properly engineered small motorcycle rather than a novelty.

This restoration brought a well-used 1986 Z50R back to the standard it left the Honda factory with. The 49cc OHC engine was disassembled, inspected, and rebuilt with new seals and gaskets. The engine case and cover were vapour blasted. The frame was inspected, found sound, and refinished. All hardware was zinc plated.

The mini Trail range requires the same attention to detail as any larger restoration — in some respects more, given the small scale of the components involved and the fact that originality is critical to the collector value of these machines. Every detail was verified against factory specification before the restoration was signed off.`,

    heroImage: {
      src: '/images/projects/1986-honda-z50r/hero.jpg',
      alt: '1986 Honda Z50R — ground-up classic mini bike restoration by Lang Restorations, Traralgon Victoria',
    },
    galleryImages: [
      {
        src: '/images/projects/1986-honda-z50r/engine.jpg',
        alt: '1986 Honda Z50R engine — vapour blasted, rebuilt',
        caption: 'Rebuilt 49cc OHC engine — vapour blasted cases and covers',
      },
    ],
    beforeImage: {
      src: '/images/projects/1986-honda-z50r/before.jpg',
      alt: '1986 Honda Z50R — condition on arrival',
      caption: 'As received',
    },
    afterImage: {
      src: '/images/projects/1986-honda-z50r/after.jpg',
      alt: '1986 Honda Z50R — completed restoration by Lang Restorations',
      caption: 'Completed — Lang Restorations, Traralgon',
    },

    specifications: [
      { label: 'Engine', value: '49cc OHC four-stroke single' },
      { label: 'Gearbox', value: '3-speed semi-automatic' },
      { label: 'Front suspension', value: 'Telescopic forks' },
      { label: 'Rear suspension', value: 'Swingarm with twin shocks' },
      { label: 'Brakes', value: 'Drum — front and rear' },
      { label: 'Restoration scope', value: 'Ground-up restoration' },
    ],

    workCompleted: [
      'Full disassembly and inspection',
      'Engine rebuild — seals, gaskets, inspection of all internal components',
      'Vapour blasting — engine cases and covers',
      'Zinc plating — all applicable hardware',
      'Frame inspection and refinish',
      'Factory-correct paint and decals',
      'New cables, tyres, and consumables',
      'Final assembly and inspection',
    ],
  },

  {
    slug: '1982-honda-z50r',
    name: '1982 Honda Z50R',
    year: 1982,
    brand: 'Honda',
    model: 'Z50R',
    category: 'Classic',
    featured: false,

    metaTitle: '1982 Honda Z50R Restoration | Classic Mini Bike — Lang Restorations Traralgon VIC',
    metaDescription:
      'Ground-up restoration of a 1982 Honda Z50R. Restored to factory specification by Lang Restorations in Traralgon, Victoria. Honda Z50 restoration specialists.',

    shortDescription:
      'A ground-up restoration of a 1982 Honda Z50R mini bike — restored to factory specification with attention to originality throughout.',

    story: `The 1982 Honda Z50R represents the Mini Trail range during Honda's transition to the recognisably modern Z50 format — the folding handlebars and trail-focused specification of the earlier models giving way to a more refined, road-capable small motorcycle that would define the range through the decade.

This Z50R arrived at the workshop as a project that required comprehensive attention. The engine was disassembled and rebuilt with new seals and gaskets. Engine cases and covers were vapour blasted. Frame and suspension components were inspected, assessed, and refinished. All hardware was zinc plated.

Decals and paint were matched to factory specification for the 1982 model year. The finished machine is a correct, detailed restoration of a Honda mini bike that represents one of the more sought-after years in the Z50R timeline.`,

    heroImage: {
      src: '/images/projects/1982-honda-z50r/hero.jpg',
      alt: '1982 Honda Z50R — ground-up restoration by Lang Restorations, Traralgon Victoria',
    },
    galleryImages: [],
    beforeImage: {
      src: '/images/projects/1982-honda-z50r/before.jpg',
      alt: '1982 Honda Z50R — condition on arrival',
      caption: 'As received',
    },
    afterImage: {
      src: '/images/projects/1982-honda-z50r/after.jpg',
      alt: '1982 Honda Z50R — completed restoration',
      caption: 'Completed — Lang Restorations, Traralgon',
    },

    specifications: [
      { label: 'Engine', value: '49cc OHC four-stroke single' },
      { label: 'Gearbox', value: '3-speed semi-automatic' },
      { label: 'Front suspension', value: 'Telescopic forks' },
      { label: 'Rear suspension', value: 'Swingarm with twin shocks' },
      { label: 'Brakes', value: 'Drum — front and rear' },
      { label: 'Restoration scope', value: 'Ground-up restoration' },
    ],

    workCompleted: [
      'Full disassembly and inspection',
      'Engine rebuild — seals, gaskets, internal component inspection',
      'Vapour blasting — engine cases and covers',
      'Zinc plating — all applicable hardware',
      'Frame and suspension refinish',
      'Factory-correct paint and decals — 1982 specification',
      'New cables, tyres, and consumables',
      'Final assembly and inspection',
    ],
  },

  {
    slug: '1954-bsa-bantam-d3-plunger',
    name: '1954 BSA Bantam D3 Plunger',
    year: 1954,
    brand: 'BSA',
    model: 'Bantam D3 Plunger',
    category: 'Vintage',
    featured: false,

    metaTitle: '1954 BSA Bantam D3 Plunger Restoration | Vintage Motorcycle — Lang Restorations Traralgon VIC',
    metaDescription:
      'Ground-up restoration of a 1954 BSA Bantam D3 Plunger — one of Australia\'s most significant vintage British motorcycle restorations. Lang Restorations, Traralgon Victoria.',

    shortDescription:
      'A ground-up restoration of a 1954 BSA Bantam D3 Plunger — the oldest machine in the Lang Restorations portfolio and a genuinely significant vintage British motorcycle.',

    story: `The 1954 BSA Bantam D3 Plunger is not just the oldest machine to have passed through the Lang Restorations workshop — it is a motorcycle that carries with it seven decades of history and the weight of a British motorcycle industry that no longer exists in the form it took when this machine was built.

The BSA Bantam D3, with its 150cc two-stroke engine and characteristic plunger rear suspension, was built during a period when BSA was one of the world's largest motorcycle manufacturers. It was a practical, economical machine designed for the British rider of the early 1950s — and, seventy years on, it demands a restoration approach that respects both its age and its significance.

The restoration began, as all Lang Restorations projects do, with complete disassembly and a thorough inspection. The 150cc two-stroke engine was stripped, inspected, and rebuilt with new seals and gaskets. Alloy components were vapour blasted. The plunger rear suspension — the distinctive spring-box units that give this model its name — was disassembled, inspected, and rebuilt.

Every aspect of the restoration was approached with reference to period documentation and factory specifications. Correct paint colours, correct decals, correct hardware finishes — the details that define a genuine restoration rather than a cosmetic exercise.

The 1954 BSA Bantam D3 Plunger that emerged from the workshop is a machine that could have left the Small Heath factory in Birmingham in 1954. Correct, complete, and built to last another seventy years.`,

    heroImage: {
      src: '/images/projects/1954-bsa-bantam-d3-plunger/hero.jpg',
      alt: '1954 BSA Bantam D3 Plunger — vintage motorcycle restoration by Lang Restorations, Traralgon Victoria',
    },
    galleryImages: [
      {
        src: '/images/projects/1954-bsa-bantam-d3-plunger/engine.jpg',
        alt: '1954 BSA Bantam D3 engine — restored 150cc two-stroke',
        caption: 'Rebuilt 150cc two-stroke — correct factory finish',
      },
      {
        src: '/images/projects/1954-bsa-bantam-d3-plunger/plunger.jpg',
        alt: '1954 BSA Bantam D3 Plunger rear suspension — rebuilt',
        caption: 'Plunger rear suspension units — disassembled and rebuilt',
      },
    ],
    beforeImage: {
      src: '/images/projects/1954-bsa-bantam-d3-plunger/before.jpg',
      alt: '1954 BSA Bantam D3 Plunger — condition on arrival at Lang Restorations',
      caption: 'As received',
    },
    afterImage: {
      src: '/images/projects/1954-bsa-bantam-d3-plunger/after.jpg',
      alt: '1954 BSA Bantam D3 Plunger — completed restoration',
      caption: 'Completed — Lang Restorations, Traralgon',
    },

    specifications: [
      { label: 'Engine', value: '150cc two-stroke single' },
      { label: 'Gearbox', value: '3-speed' },
      { label: 'Front suspension', value: 'BSA telescopic forks' },
      { label: 'Rear suspension', value: 'Plunger (spring-box) units' },
      { label: 'Brakes', value: 'Drum — front and rear' },
      { label: 'Country of manufacture', value: 'United Kingdom' },
      { label: 'Restoration scope', value: 'Ground-up restoration' },
    ],

    workCompleted: [
      'Full disassembly and condition documentation',
      'Engine rebuild — seals, gaskets, internal assessment',
      'Vapour blasting — alloy engine components',
      'Plunger rear suspension rebuild',
      'Front fork rebuild',
      'Zinc plating or replating of all hardware as appropriate',
      'Frame and tinware inspection and refinish — factory colour specification',
      'Period-correct decals and transfers',
      'New cables, tyres, and consumables',
      'Final assembly and inspection',
    ],
  },

  {
    slug: '1978-honda-z50-j1',
    name: '1978 Honda Z50 J1',
    year: 1978,
    brand: 'Honda',
    model: 'Z50 J1',
    category: 'Classic',
    featured: false,

    metaTitle: '1978 Honda Z50 J1 Restoration | Classic Honda Mini Bike — Lang Restorations Traralgon',
    metaDescription:
      'Ground-up restoration of a 1978 Honda Z50 J1 mini bike. Restored to factory specification by Lang Restorations in Traralgon, Victoria. Honda Z50 restoration specialists.',

    shortDescription:
      'A ground-up restoration of a 1978 Honda Z50 J1 — one of the most significant years in the Mini Trail range, restored to factory specification with correct paint and decals.',

    story: `The 1978 Honda Z50 J1 marks a specific point in the long production history of Honda's Mini Trail range — a motorcycle that had by this point established itself as one of the defining small motorcycles in the world, and one that continued to evolve in ways that collectors now track carefully from model year to model year.

This J1 came to the workshop as a restoration project that required careful, methodical work. The engine was disassembled, inspected, and rebuilt with new seals and gaskets. Cases and covers were vapour blasted. Hardware was zinc plated.

The restoration of a 1978 Z50 J1 requires close attention to year-specific details — the correct colour for this model year, the correct decal set, and the correct hardware specification. These details define the difference between a restoration that holds up to collector scrutiny and one that merely looks like a Z50.

This one holds up.`,

    heroImage: {
      src: '/images/projects/1978-honda-z50-j1/hero.jpg',
      alt: '1978 Honda Z50 J1 — ground-up restoration by Lang Restorations, Traralgon Victoria',
    },
    galleryImages: [],
    beforeImage: {
      src: '/images/projects/1978-honda-z50-j1/before.jpg',
      alt: '1978 Honda Z50 J1 — condition on arrival',
      caption: 'As received',
    },
    afterImage: {
      src: '/images/projects/1978-honda-z50-j1/after.jpg',
      alt: '1978 Honda Z50 J1 — completed restoration',
      caption: 'Completed — Lang Restorations, Traralgon',
    },

    specifications: [
      { label: 'Engine', value: '49cc OHC four-stroke single' },
      { label: 'Gearbox', value: '3-speed semi-automatic' },
      { label: 'Front suspension', value: 'Telescopic forks' },
      { label: 'Rear suspension', value: 'Swingarm with twin shocks' },
      { label: 'Brakes', value: 'Drum — front and rear' },
      { label: 'Restoration scope', value: 'Ground-up restoration' },
    ],

    workCompleted: [
      'Full disassembly and inspection',
      'Engine rebuild — seals, gaskets, component inspection',
      'Vapour blasting — engine cases and covers',
      'Zinc plating — all applicable hardware',
      'Frame and tinware refinish — year-correct specification',
      'Year-correct decals and paint',
      'New cables, tyres, and consumables',
      'Final assembly and inspection',
    ],
  },

  {
    slug: '1972-honda-z50a-u-type',
    name: '1972 Honda Z50A U-Type',
    year: 1972,
    brand: 'Honda',
    model: 'Z50A U-Type',
    category: 'Vintage',
    featured: false,

    metaTitle: '1972 Honda Z50A U-Type Restoration | Vintage Honda Mini Trail — Lang Restorations Traralgon',
    metaDescription:
      'Ground-up restoration of a 1972 Honda Z50A U-Type vintage mini bike. Restored by Lang Restorations in Traralgon, Victoria. Vintage Honda Mini Trail restoration specialists.',

    shortDescription:
      'A ground-up restoration of a 1972 Honda Z50A U-Type — an early and highly sought-after variant of Honda\'s iconic Mini Trail, restored with a focus on period correctness.',

    story: `The 1972 Honda Z50A U-Type sits at a significant point in the Mini Trail's history. Honda's small folding-handlebar motorcycle had by this point established itself internationally, and the U-Type designation marks a specific variation that collectors track with particular care.

These early-1970s Z50s are among the most challenging to restore correctly — not because of mechanical complexity, but because of the attention to detail required to produce a machine that is genuinely correct for its model year. Paint colours, decal specifications, hardware finishes, and component details changed from year to year, and an incorrectly detailed restoration is visible to anyone who knows the model.

This Z50A U-Type was restored with the same methodical approach applied to every project at Lang Restorations. Complete disassembly, vapour blasting of alloy components, engine rebuild, hardware zinc plating, and frame and tinware refinished in the correct colour for this model year. Decals were sourced to factory specification.

The 1972 Honda Z50A U-Type that left the workshop is a machine that can hold its own against any original — because it has been restored, not merely refinished.`,

    heroImage: {
      src: '/images/projects/1972-honda-z50a-u-type/hero.jpg',
      alt: '1972 Honda Z50A U-Type — vintage mini bike restoration by Lang Restorations, Traralgon Victoria',
    },
    galleryImages: [],
    beforeImage: {
      src: '/images/projects/1972-honda-z50a-u-type/before.jpg',
      alt: '1972 Honda Z50A U-Type — condition on arrival',
      caption: 'As received',
    },
    afterImage: {
      src: '/images/projects/1972-honda-z50a-u-type/after.jpg',
      alt: '1972 Honda Z50A U-Type — completed restoration',
      caption: 'Completed — Lang Restorations, Traralgon',
    },

    specifications: [
      { label: 'Engine', value: '49cc OHC four-stroke single' },
      { label: 'Gearbox', value: '3-speed semi-automatic' },
      { label: 'Handlebars', value: 'Folding — U-Type specification' },
      { label: 'Front suspension', value: 'Telescopic forks' },
      { label: 'Rear suspension', value: 'Swingarm with twin shocks' },
      { label: 'Brakes', value: 'Drum — front and rear' },
      { label: 'Restoration scope', value: 'Ground-up restoration' },
    ],

    workCompleted: [
      'Full disassembly and condition documentation',
      'Engine rebuild — seals, gaskets, internal inspection',
      'Vapour blasting — engine cases and covers',
      'Zinc plating — all applicable hardware',
      'Frame and tinware refinish — year and variant correct specification',
      'Factory-specification decals sourced and applied',
      'New cables, tyres, and consumables',
      'Final assembly and inspection',
    ],
  },

  {
    slug: '1997-99-honda-cr250-lusk-tribute',
    name: '1997/99 Honda CR250 — Lusk Tribute',
    year: 1997,
    brand: 'Honda',
    model: 'CR250R',
    category: 'Motocross',
    featured: true,

    metaTitle: '1997/99 Honda CR250 Lusk Tribute | Motocross Restoration — Lang Restorations Traralgon VIC',
    metaDescription:
      'A collaboration build inspired by Ezra Lusk\'s legendary CR250 race bikes of the late 1990s. High-end components, custom finishes, and no-compromise restoration by Lang Restorations, Traralgon Victoria.',

    shortDescription:
      'A collaboration build inspired by Ezra Lusk\'s legendary Honda CR250 race bikes of the late 1990s — featuring custom finishes and high-end components throughout, built as a tribute to one of motocross\'s most iconic eras.',

    story: `Ezra Lusk's tenure on the Team Honda CR250 through the late 1990s produced some of the most memorable racing of the era. The Georgian's combination of raw speed and commitment to the Honda machine — particularly the CR250 in those transitional years between the 1997 and 1999 models — made him a reference point for the kind of riding that could be extracted from Honda's quarter-litre two-stroke.

This build began as a collaboration — a project where the approach was informed by Lusk's factory machines while the execution added individual touches throughout. The brief called for high-end components, custom finishes, and a standard of completion that would hold up as both a tribute and as a piece of craftsmanship.

The engine was rebuilt completely. Every component was assessed and addressed — crankshaft, top end, powervalve, seals, gaskets. Engine cases and cylinder were vapour blasted. The bottom end received new bearings throughout.

Chassis work went beyond a standard restoration. The frame was refinished. Suspension components were rebuilt and set up correctly. Every bearing in the linkage and headstock was replaced. Hardware was either replaced with new or zinc plated.

The tribute livery — bridging the 1997 and 1999 model years with reference to Lusk's factory team specification — was developed with close attention to period factory documentation. Custom touches were incorporated at specific points to give the build its own identity within the tribute framework.

A collaboration build that represents both a specific rider's legacy and the standard of work the Lang Restorations workshop is capable of producing.`,

    heroImage: {
      src: '/images/projects/1997-99-honda-cr250-lusk-tribute/hero.jpg',
      alt: '1997/99 Honda CR250R Lusk Tribute — motocross restoration by Lang Restorations, Traralgon Victoria',
    },
    galleryImages: [
      {
        src: '/images/projects/1997-99-honda-cr250-lusk-tribute/engine.jpg',
        alt: '1997/99 Honda CR250R Lusk Tribute — engine detail',
        caption: 'Fully rebuilt CR250R engine — vapour blasted cases, new components throughout',
      },
      {
        src: '/images/projects/1997-99-honda-cr250-lusk-tribute/livery.jpg',
        alt: '1997/99 Honda CR250R Lusk Tribute — custom livery detail',
        caption: 'Tribute livery — developed with reference to Lusk\'s factory team specification',
      },
    ],
    beforeImage: {
      src: '/images/projects/1997-99-honda-cr250-lusk-tribute/before.jpg',
      alt: '1997/99 Honda CR250R — condition on arrival',
      caption: 'As received',
    },
    afterImage: {
      src: '/images/projects/1997-99-honda-cr250-lusk-tribute/after.jpg',
      alt: '1997/99 Honda CR250R Lusk Tribute — completed restoration',
      caption: 'Completed — Lang Restorations, Traralgon',
    },

    specifications: [
      { label: 'Engine', value: '249cc reed-valve two-stroke single' },
      { label: 'Powervalve', value: 'ATAC (Automatic Torque Amplification Chamber)' },
      { label: 'Carburettor', value: 'Keihin PWK 38mm' },
      { label: 'Gearbox', value: '5-speed' },
      { label: 'Front suspension', value: '43mm USD forks — rebuilt' },
      { label: 'Rear suspension', value: 'Pro-Link single shock — rebuilt' },
      { label: 'Build scope', value: 'Ground-up restoration with custom collaboration elements' },
    ],

    workCompleted: [
      'Full disassembly and component inspection',
      'Engine rebuild — crankshaft, top end, powervalve, all seals and gaskets',
      'Vapour blasting — engine cases, cylinder, head',
      'Fork rebuild — new internals',
      'Pro-Link linkage rebuild — all bearings replaced',
      'Headstock bearing replacement',
      'Zinc plating — all hardware replaced or plated',
      'Frame refinish',
      'Custom collaboration elements — incorporated at specified points',
      'Tribute livery — 1997/99 Lusk factory team reference, custom details',
      'New plastics, cables, chain, and consumables throughout',
      'Final assembly and inspection',
    ],
  },
]

// ─── Derived helpers ──────────────────────────────────────────────────────────

export const featuredProjects = projects.filter((p) => p.featured)
