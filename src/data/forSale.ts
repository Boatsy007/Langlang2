import type { ForSaleBike } from '@/types'

// ─── For Sale Listings ────────────────────────────────────────────────────────
//
// To list a new bike: copy one object below and fill in your details.
// Change status to 'On Hold' or 'Sold' — the card and badge update automatically.
//
// Required: slug (must be unique, URL-safe, e.g. "1965-bsa-a65")
// ─────────────────────────────────────────────────────────────────────────────

export const forSaleBikes: ForSaleBike[] = [
  {
    slug: '1974-honda-cb550-cafe-for-sale',
    name: 'Silver Fox',
    year: 1974,
    brand: 'Honda',
    model: 'CB550',
    price: 14500,
    status: 'Available',

    shortDescription:
      'A freshly completed CB550 cafe racer — full mechanical rebuild, PPG Silver Fox respray, and a turn-key riding experience. Registered and ready.',

    fullDescription: `Silver Fox is a clean, complete build on a numbers-matching 1974 Honda CB550. The bike was purchased as a runner, fully disassembled, and rebuilt to a standard we're comfortable putting our name on.

The 544cc inline-four received a full service: new rings, valve clearances set, carburettors rebuilt and balanced, new filters and fluids throughout. A 4-into-1 Jardine-style exhaust was fitted and the carbs re-jetted accordingly. The motor pulls hard from 4,000rpm and is completely oil-tight.

The frame was powder-coated in gloss black. Fork legs were polished and rebuilt with new seals and oil. Rear suspension runs a set of Hagon shocks set to the softer end — comfortable over long distances while still giving confidence in corners.

The bodywork is all new reproduction parts: fibreglass cafe seat unit, lightweight front mudguard, knee indents on the tank. Everything was blocked and filled before two coats of PPG Silver Fox — a shimmering silver with green metallic flake — followed by three coats of clear.

Registered in South Australia. Comes with a fresh RWC, 12 months registration, and a folder of build photos.

This is a bike you can ride today and be proud to park anywhere.`,

    heroImage: {
      src: '/images/for-sale/cb550-silver-fox/hero.jpg',
      alt: '1974 Honda CB550 Silver Fox cafe racer for sale',
    },
    galleryImages: [
      { src: '/images/for-sale/cb550-silver-fox/gallery-01.jpg', alt: 'Engine — rebuilt CB550 four', caption: 'Rebuilt 544cc inline-four' },
      { src: '/images/for-sale/cb550-silver-fox/gallery-02.jpg', alt: 'Cockpit — clip-ons and Motogadget speedo', caption: 'Aluminium clip-ons, Motogadget speedo' },
      { src: '/images/for-sale/cb550-silver-fox/gallery-03.jpg', alt: 'Tank — Silver Fox PPG', caption: 'PPG Silver Fox with metallic flake' },
      { src: '/images/for-sale/cb550-silver-fox/gallery-04.jpg', alt: 'Rear — cafe seat', caption: 'Fibreglass cafe seat unit' },
      { src: '/images/for-sale/cb550-silver-fox/gallery-05.jpg', alt: 'Full side — studio shot', caption: 'Studio shot — completed April 2024' },
    ],

    specifications: [
      { label: 'Engine', value: '544cc SOHC inline-four' },
      { label: 'Carburettors', value: '4× Keihin, rebuilt and balanced' },
      { label: 'Exhaust', value: '4-into-1 Jardine style, re-jetted' },
      { label: 'Gearbox', value: '5-speed' },
      { label: 'Front suspension', value: '35mm forks, rebuilt with new seals' },
      { label: 'Rear suspension', value: 'Hagon twin shocks' },
      { label: 'Front brake', value: 'Single disc, rebuilt caliper' },
      { label: 'Wheels', value: '19" front / 18" rear, polished rims' },
      { label: 'Tyres', value: 'Dunlop TT100 GP (new)' },
      { label: 'Seat', value: 'Fibreglass cafe unit, new foam and cover' },
      { label: 'Paint', value: 'PPG Silver Fox, metallic flake' },
      { label: 'Electrics', value: 'Motogadget m.unit, LED throughout' },
      { label: 'Registration', value: 'SA registered — expires April 2025' },
      { label: 'Odometer', value: '31,420km (verified)' },
    ],

    enquiryCta: 'Enquire About This Bike',
  },

  {
    slug: '1971-bsa-a65-lightning-for-sale',
    name: 'Thunderclap',
    year: 1971,
    brand: 'BSA',
    model: 'A65 Lightning',
    price: 18900,
    status: 'On Hold',

    shortDescription:
      'One of the last great British twins — a 1971 BSA A65 Lightning restored to concours standard with a mildly hot engine and original colour scheme.',

    fullDescription: `Thunderclap is a meticulous restoration of a 1971 BSA A65 Lightning — one of the last of the classic British parallel twins before the Japanese tide made machines like this economically unviable.

This particular bike was sourced from an estate in regional Victoria with approximately 41,000 original miles. The previous owner raced it in local club events through the late 1970s before a crankshaft issue saw it parked and covered.

The engine was fully rebuilt: new crankshaft assembly, rebore with Hepolite pistons, new cams, a ported and gas-flowed head, and twin Amal Concentric carburettors rebuilt from scratch. A mild cam kit lifts power to around 58hp — not a dramatic change, but one felt clearly through the seat.

The frame was stripped, straightened at the headstock (old crash damage, long corrected), and powder-coated in correct BSA black. All chrome is re-done: new tubes on the fork legs, re-chromed mudguards, side covers, and headlight ears. The tank and side panels are in original Lightning Red and Silver — period-correct PPG mixed to the factory colour code.

This is not a riders' bike. It's a proper restoration that happens to run exceptionally well.

Currently on hold for a buyer in interstate. Will be re-listed if that sale doesn't proceed.`,

    heroImage: {
      src: '/images/for-sale/bsa-a65/hero.jpg',
      alt: '1971 BSA A65 Lightning Thunderclap — concours restoration',
    },
    galleryImages: [
      { src: '/images/for-sale/bsa-a65/gallery-01.jpg', alt: 'Engine — rebuilt A65 twin', caption: 'Rebuilt 654cc parallel twin' },
      { src: '/images/for-sale/bsa-a65/gallery-02.jpg', alt: 'Chrome — fork legs and mudguards', caption: 'New chrome throughout' },
      { src: '/images/for-sale/bsa-a65/gallery-03.jpg', alt: 'Tank — Lightning Red and Silver', caption: 'Period-correct Lightning Red and Silver' },
      { src: '/images/for-sale/bsa-a65/gallery-04.jpg', alt: 'Amal carburettors', caption: 'Amal Concentric twins, rebuilt' },
      { src: '/images/for-sale/bsa-a65/gallery-05.jpg', alt: 'Full bike — studio lighting', caption: 'Completed June 2024 — 41,220 miles' },
    ],

    specifications: [
      { label: 'Engine', value: '654cc OHV parallel twin' },
      { label: 'Carburettors', value: 'Twin Amal Concentric 930, rebuilt' },
      { label: 'Exhaust', value: 'Peashooter silencers, stainless' },
      { label: 'Gearbox', value: '4-speed, rebuilt' },
      { label: 'Front suspension', value: 'BSA lower legs with new chrome tubes' },
      { label: 'Rear suspension', value: 'Girling-spec twin shocks' },
      { label: 'Front brake', value: 'SLS drum, rebuilt' },
      { label: 'Rear brake', value: 'SLS drum, rebuilt' },
      { label: 'Wheels', value: '19" front / 18" rear, new chrome rims, stainless spokes' },
      { label: 'Tyres', value: 'Avon Roadrider (period spec)' },
      { label: 'Paint', value: 'Lightning Red and Silver — PPG period colour match' },
      { label: 'Chrome', value: 'Full re-chrome — forks, guards, headlight, cases' },
      { label: 'Odometer', value: '41,220 miles (original)' },
      { label: 'Power (est.)', value: '58hp at rear wheel' },
    ],

    enquiryCta: 'Join the Waitlist',
  },

  {
    slug: '1984-honda-xr500r-tracker-for-sale',
    name: 'Red Dirt',
    year: 1984,
    brand: 'Honda',
    model: 'XR500R',
    price: 8900,
    status: 'Available',

    shortDescription:
      'A 1984 Honda XR500R converted into a street-legal flat tracker — big torque single, 21" front wheel, and the kind of presence that only a big-bore thumper commands.',

    fullDescription: `Red Dirt started life as a desert sled and got better. The XR500R is one of Honda's finest air-cooled singles — reliable, torquey, and simple enough to maintain with a basic tool kit.

The conversion kept everything that worked and improved everything that didn't. The motor received fresh top-end components: new piston, rings, and valve stem seals. A JD Jetting kit was fitted to the carburettor and the airbox opened up for better breathing. A PMB exhaust header and SuperTrapp muffler replaced the original — the note is deep, hollow, and addictive.

The frame was blasted and painted in Dupont Imron red. The XR front fork was retained, rebuilt with new springs and seals to suit tarmac use. Rear suspension runs a Works Performance piggyback shock set firm.

Street conversion involved: indicators, mirrors, headlight, horn, and a taillight/brake light unit fabricated into the new rear loop. Registered and engineered in South Australia.

The 21" Akront front rim was laced with stainless spokes around the original XR hub — correct flat tracker specification. Rear runs an 18" Akront on the original hub.

This bike is simple, fast where it counts, and completely reliable.`,

    heroImage: {
      src: '/images/for-sale/xr500-tracker/hero.jpg',
      alt: '1984 Honda XR500R Red Dirt flat tracker for sale',
    },
    galleryImages: [
      { src: '/images/for-sale/xr500-tracker/gallery-01.jpg', alt: 'Engine — XR500 thumper', caption: 'Rebuilt 498cc air-cooled single' },
      { src: '/images/for-sale/xr500-tracker/gallery-02.jpg', alt: 'Front wheel — 21" Akront', caption: '21" Akront rim, stainless spokes' },
      { src: '/images/for-sale/xr500-tracker/gallery-03.jpg', alt: 'Cockpit — bars and headlight', caption: 'Tracker bars, Lucas-style headlight' },
      { src: '/images/for-sale/xr500-tracker/gallery-04.jpg', alt: 'Full side — Red Dirt on dirt', caption: 'On the back roads — Red Dirt in its element' },
    ],

    specifications: [
      { label: 'Engine', value: '498cc OHC air-cooled single' },
      { label: 'Carburettor', value: 'Keihin PD 40mm, JD Jetting kit' },
      { label: 'Exhaust', value: 'PMB header, SuperTrapp muffler' },
      { label: 'Gearbox', value: '5-speed' },
      { label: 'Front suspension', value: 'XR 43mm forks, rebuilt — heavier springs' },
      { label: 'Rear suspension', value: 'Works Performance piggyback shock' },
      { label: 'Front brake', value: 'Original SLS drum, refurbished' },
      { label: 'Rear brake', value: 'Original SLS drum, refurbished' },
      { label: 'Wheels', value: '21" Akront front / 18" Akront rear, stainless spokes' },
      { label: 'Tyres', value: 'Shinko SR 241 (street legal dirt tread)' },
      { label: 'Seat', value: 'Flat tracker seat, gripper cover' },
      { label: 'Paint', value: 'Dupont Imron Red, frame and tank' },
      { label: 'Registration', value: 'SA registered — engineered for road' },
      { label: 'Odometer', value: '17,800km' },
    ],

    enquiryCta: 'Enquire About Red Dirt',
  },
]
