import type { Project } from '@/types'

// ─── Featured Builds / Projects ───────────────────────────────────────────────
//
// To add a new build: copy one object below and fill in your details.
// The site automatically generates the card, gallery and detail page from this data.
//
// Required: slug (must be unique, URL-safe, e.g. "1972-honda-cb750")
// ─────────────────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: '1972-honda-cb750-cafe-racer',
    name: 'Desert Storm',
    year: 1972,
    brand: 'Honda',
    model: 'CB750',
    category: 'Cafe Racer',
    completionYear: 2023,
    featured: true,

    shortDescription:
      'A full ground-up restoration of a 1972 Honda CB750, rebuilt as a lean cafe racer with modern running gear hidden behind period-correct aesthetics.',

    story: `The CB750 arrived in pieces — decades of neglect packed into two milk crates and a busted frame. What started as a "quick refresh" became an 18-month obsession.

The engine was a write-off. Bores were oval, cam lobes worn flat, every seal weeping. We sourced a matching-numbers replacement block and rebuilt it from scratch: new pistons, rebored cylinders, reground crank, complete valve train, and a full port-and-polish on the head. The result breathes through a quartet of re-jetted Keihin carburettors feeding into a custom 4-into-1 stainless exhaust.

The frame was stripped, powder-coated in satin black, and fitted with a Hagon rear shock conversion and period-correct Ceriani-style forks rebuilt with new internals. Braking is handled by a Brembo front caliper on a drilled stainless rotor — the only obvious modern concession.

The bodywork tells the story. The fibreglass cafe seat was hand-formed in-house, the tank sourced from a 1974 donor and filled, blocked, and sprayed in PPG two-stage urethane over two weeks of sanding sessions. The final colour — a deep sand gold — shifts between amber and olive depending on the light.

Two thousand miles since completion. Not a drop of oil dropped.`,

    heroImage: {
      src: '/images/projects/cb750-cafe/hero.jpg',
      alt: '1972 Honda CB750 Desert Storm cafe racer — three-quarter front view',
    },
    galleryImages: [
      { src: '/images/projects/cb750-cafe/gallery-01.jpg', alt: 'Engine detail — rebuilt SOHC four', caption: 'Rebuilt 736cc SOHC four with ported head' },
      { src: '/images/projects/cb750-cafe/gallery-02.jpg', alt: 'Exhaust — custom 4-into-1 stainless', caption: 'Custom 4-into-1 stainless headers' },
      { src: '/images/projects/cb750-cafe/gallery-03.jpg', alt: 'Tank detail — sand gold', caption: 'PPG two-stage urethane, hand-blocked' },
      { src: '/images/projects/cb750-cafe/gallery-04.jpg', alt: 'Cockpit — clip-ons and Smiths gauges', caption: 'Aluminium clip-ons, Smiths speedo/tacho' },
      { src: '/images/projects/cb750-cafe/gallery-05.jpg', alt: 'Rear — cafe seat and rear-sets', caption: 'Hand-formed fibreglass seat unit' },
      { src: '/images/projects/cb750-cafe/gallery-06.jpg', alt: 'Rolling shot on open road', caption: 'First ride — Barossa Valley, SA' },
    ],
    beforeImage: {
      src: '/images/projects/cb750-cafe/before.jpg',
      alt: 'CB750 as received — stripped and rusted',
      caption: 'As received — two milk crates and a busted frame',
    },
    afterImage: {
      src: '/images/projects/cb750-cafe/after.jpg',
      alt: 'CB750 Desert Storm completed build',
      caption: 'Desert Storm — completed December 2023',
    },

    specifications: [
      { label: 'Engine', value: '736cc SOHC inline-four' },
      { label: 'Bore × Stroke', value: '61 × 63mm' },
      { label: 'Carburettors', value: '4× Keihin 28mm, re-jetted' },
      { label: 'Exhaust', value: 'Custom 4-into-1 stainless' },
      { label: 'Gearbox', value: '5-speed constant mesh' },
      { label: 'Front suspension', value: 'Ceriani-style 35mm forks, rebuilt' },
      { label: 'Rear suspension', value: 'Hagon twin shocks' },
      { label: 'Front brake', value: 'Brembo caliper, 296mm drilled rotor' },
      { label: 'Rear brake', value: 'Original drum, refurbished' },
      { label: 'Wheels', value: '19" front / 18" rear, laced in stainless' },
      { label: 'Tyres', value: 'Dunlop TT100 GP' },
      { label: 'Seat', value: 'Hand-formed fibreglass, period foam' },
      { label: 'Paint', value: 'PPG Sand Gold, two-stage urethane' },
      { label: 'Electrics', value: '12V conversion, Motogadget m.unit' },
      { label: 'Weight', value: '189kg wet' },
    ],

    workCompleted: [
      'Full engine rebuild — pistons, rings, rebore, cam, valve train',
      'Custom 4-into-1 stainless exhaust fabrication',
      '4× Keihin carburettors rebuilt and re-jetted',
      'Frame strip, repair and powder coat',
      'Fork rebuild with progressive springs',
      'Hagon rear shock conversion',
      'Brembo front brake conversion',
      'Stainless wheel lacing front and rear',
      'Hand-formed fibreglass cafe seat unit',
      'Tank fill, block and respray — PPG Sand Gold',
      '12V electrical conversion with Motogadget m.unit',
      'LED lighting throughout',
      'Aluminium clip-on handlebars',
      'Rearset footpeg conversion',
      'Complete wiring loom rebuild',
    ],
  },

  {
    slug: '1968-triumph-bonneville-scrambler',
    name: 'The Bushwalker',
    year: 1968,
    brand: 'Triumph',
    model: 'T120 Bonneville',
    category: 'Scrambler',
    completionYear: 2022,
    featured: true,

    shortDescription:
      'A 1968 Triumph Bonneville transformed into a period-correct scrambler — high pipes, knobbly tyres, and a twin-leading-shoe front drum that means business.',

    story: `The Bonneville came from a shed in McLaren Vale — dry, complete, and wearing the original Aubergine and Silver paint beneath thirty years of grime.

We chose to build the bike the factory should have built: a scrambler in the spirit of the late-sixties desert sled, not a pastiche. Every modification was referenced against period photography from the ISDT and Baja.

The parallel twin was dismantled and measured. Bores were within spec; the head was ported and polished, fitted with Del'Orto PHF carbs and a balance pipe that transformed throttle response. High pipes were fabricated from 304 stainless, ceramic-coated in satin black with polished tips. The note is somewhere between thunder and a rolling storm.

The frame runs a set of Ceriani motocross forks from 1970 — the real thing, sourced through three months of eBay watch-lists — and a custom subframe to accept a fibreglass front fender and Bates-style seat. The twin-leading-shoe drum up front was rebuilt with new shoes and cable, and stops the bike with authority most modern discs wouldn't match in feel.

Paint: British Racing Green over a deep black base. Applied in the shed on a Tuesday with the radio on.`,

    heroImage: {
      src: '/images/projects/bonneville-scrambler/hero.jpg',
      alt: '1968 Triumph Bonneville Scrambler — The Bushwalker',
    },
    galleryImages: [
      { src: '/images/projects/bonneville-scrambler/gallery-01.jpg', alt: 'Engine — unit 650cc twin', caption: 'Unit 650cc parallel twin, rebuilt' },
      { src: '/images/projects/bonneville-scrambler/gallery-02.jpg', alt: 'High pipes — ceramic coated', caption: 'High-rise stainless pipes, ceramic coated' },
      { src: '/images/projects/bonneville-scrambler/gallery-03.jpg', alt: 'Front drum brake — TLS rebuild', caption: 'Twin-leading-shoe drum, fully rebuilt' },
      { src: '/images/projects/bonneville-scrambler/gallery-04.jpg', alt: 'Seat — Bates style fibreglass', caption: 'Bates-style seat, period foam and cover' },
      { src: '/images/projects/bonneville-scrambler/gallery-05.jpg', alt: 'On dirt — action shot', caption: 'First ride in the Barossa ranges' },
    ],
    beforeImage: {
      src: '/images/projects/bonneville-scrambler/before.jpg',
      alt: 'Triumph Bonneville as found — original Aubergine paint under grime',
      caption: 'McLaren Vale shed find — thirty years of dust',
    },
    afterImage: {
      src: '/images/projects/bonneville-scrambler/after.jpg',
      alt: 'The Bushwalker completed — BRG scrambler',
      caption: 'The Bushwalker — completed March 2022',
    },

    specifications: [
      { label: 'Engine', value: '649cc OHV parallel twin' },
      { label: 'Carburettors', value: 'Dell\'Orto PHF 30mm with balance pipe' },
      { label: 'Exhaust', value: 'Custom high-rise 304 stainless, ceramic coated' },
      { label: 'Gearbox', value: '4-speed unit' },
      { label: 'Front suspension', value: 'Ceriani 38mm motocross forks — 1970' },
      { label: 'Rear suspension', value: 'Hagon competition shocks' },
      { label: 'Front brake', value: 'Twin-leading-shoe drum, rebuilt' },
      { label: 'Rear brake', value: 'Original SLS drum, refurbished' },
      { label: 'Wheels', value: '21" front / 18" rear, stainless spoke' },
      { label: 'Tyres', value: 'Mitas E-07 Enduro' },
      { label: 'Seat', value: 'Fibreglass Bates-style, period cover' },
      { label: 'Paint', value: 'British Racing Green, two-stage urethane' },
      { label: 'Electrics', value: 'Original 6V → 12V conversion, Podtronics' },
    ],

    workCompleted: [
      'Engine dismantled, measured and reassembled',
      'Head ported, polished and fitted with stainless valves',
      'Dell\'Orto PHF carburettor conversion with balance pipe',
      'Custom high-rise stainless exhaust fabrication and ceramic coating',
      'Ceriani motocross fork fitment (period correct)',
      'Hagon competition rear shocks',
      'Twin-leading-shoe front drum rebuild',
      'Custom fibreglass front mudguard',
      'Custom subframe for Bates-style seat',
      'Bates seat upholstery',
      '6V to 12V electrical conversion',
      'Tank restoration — fill, block sand, BRG respray',
      '21" front wheel rebuild with stainless spokes',
    ],
  },

  {
    slug: '1980-kawasaki-z1000-brat',
    name: 'Iron Curtain',
    year: 1980,
    brand: 'Kawasaki',
    model: 'Z1000',
    category: 'Brat Style',
    completionYear: 2024,
    featured: false,

    shortDescription:
      'A 1980 Kawasaki Z1000 stripped back to essentials — flat tracker bars, minimalist brat seat, and a tuned inline-four that makes 92 horsepower with a straight pipe soundtrack.',

    story: `The Z1000 was a running bike — just ugly. Twenty years of bolt-on accessories, a cracked fairing, and a paint job the colour of old mustard. The bones were there: a healthy motor, straight frame, and 23,000 original kilometres.

Brat style done properly is harder than it looks. The temptation is to slap on a flat seat and call it done. Iron Curtain took six months of careful editing — removing, not adding.

The motor received a hot cam kit, re-jetted Mikunis, and a custom 4-into-2 exhaust that exits under the seat in a classic UJM style. We kept the original airbox to maintain the intake note.

The frame was de-tabbed, stretched slightly at the rear, and a new subframe welded to accept a hand-shaped aluminium seat pan covered in black suede. The tank was smoothed, the filler neck flipped, and the whole thing shot in satin black with a brushed aluminium panel either side.

Simple. Intentional. Exactly what it needs to be.`,

    heroImage: {
      src: '/images/projects/z1000-brat/hero.jpg',
      alt: '1980 Kawasaki Z1000 Brat — Iron Curtain',
    },
    galleryImages: [
      { src: '/images/projects/z1000-brat/gallery-01.jpg', alt: 'Engine — Z1000 inline-four', caption: 'Tuned 1015cc inline-four' },
      { src: '/images/projects/z1000-brat/gallery-02.jpg', alt: 'Seat — aluminium pan, suede cover', caption: 'Hand-shaped aluminium seat pan' },
      { src: '/images/projects/z1000-brat/gallery-03.jpg', alt: 'Tank — satin black with brushed panels', caption: 'Satin black with brushed aluminium inlays' },
      { src: '/images/projects/z1000-brat/gallery-04.jpg', alt: 'Side view — brat style profile', caption: 'Side profile — minimal and purposeful' },
    ],
    beforeImage: {
      src: '/images/projects/z1000-brat/before.jpg',
      alt: 'Z1000 before — cracked fairing, mustard paint',
      caption: 'Before — mustard yellow and two decades of additions',
    },
    afterImage: {
      src: '/images/projects/z1000-brat/after.jpg',
      alt: 'Iron Curtain completed — satin black brat',
      caption: 'Iron Curtain — completed January 2024',
    },

    specifications: [
      { label: 'Engine', value: '1015cc DOHC inline-four' },
      { label: 'Carburettors', value: '4× Mikuni VM34, re-jetted with K&N pods' },
      { label: 'Exhaust', value: 'Custom 4-into-2 under-seat exit' },
      { label: 'Gearbox', value: '5-speed' },
      { label: 'Front suspension', value: 'Original forks, rebuilt with heavier springs' },
      { label: 'Rear suspension', value: 'Progressive Suspension 412 series' },
      { label: 'Front brake', value: 'Dual disc, rebuilt calipers' },
      { label: 'Wheels', value: '19" front / 18" rear, powder coated black' },
      { label: 'Seat', value: 'Hand-shaped aluminium pan, black suede' },
      { label: 'Paint', value: 'Satin black, brushed aluminium side panels' },
      { label: 'Power (est.)', value: '92hp at rear wheel' },
    ],

    workCompleted: [
      'Full engine service — cam chain, timing, valve clearances',
      'Hot cam kit installation',
      'Mikuni VM34 carburettor re-jet and K&N pod filters',
      'Custom 4-into-2 exhaust fabrication',
      'Frame de-tabbing and subframe fabrication',
      'Hand-shaped aluminium brat seat pan',
      'Black suede upholstery',
      'Tank smoothing and respray — satin black',
      'Brushed aluminium panel fabrication and fitment',
      'Fork rebuild with progressive springs',
      'Progressive Suspension 412 rear shocks',
      'Wheel powder coat — gloss black',
      'LED tail light and indicators',
      'Motogadget m.tripmeter speedo',
      'Complete wiring loom tidy',
    ],
  },
]

// ─── Derived helpers ──────────────────────────────────────────────────────────

export const featuredProjects = projects.filter((p) => p.featured)
