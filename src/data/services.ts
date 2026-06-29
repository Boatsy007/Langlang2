import type { Service } from '@/types'

// ─── Services ────────────────────────────────────────────────────────────────
//
// Add, edit, or remove services here.
// The services page and homepage automatically reflect these changes.
// ─────────────────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 'vintage-motorcycle-restoration',
    name: 'Vintage Motorcycle Restoration',
    category: 'Restoration',
    featured: true,
    shortDescription:
      'Ground-up restorations of vintage and classic Japanese motorcycles — Honda, Yamaha, Kawasaki and Suzuki — rebuilt to factory specification or better.',

    fullDescription: `A complete motorcycle restoration is the most demanding work a workshop can take on, and it is where Lang Restorations has built its reputation in Victoria.

We specialise in vintage and classic Japanese motorcycles from the late 1960s through to the early 1990s — road bikes, trail bikes, and in particular the two-stroke motocross machines from Honda, Yamaha, Kawasaki and Suzuki that attract serious collector attention today. These are not simple vehicles to restore correctly. Parts are obsolete, factory specifications are inconsistently documented, and decades of poor storage and amateur maintenance create problems that are not always visible at the outset.

Every restoration at Lang Restorations begins the same way: the motorcycle is fully disassembled, every component is cleaned and inspected, and a comprehensive condition report is produced before any work begins. We photograph every stage of the disassembly so that nothing is forgotten and so that you can see exactly what the restoration involves.

From that point, the work proceeds methodically. The engine is assessed and rebuilt to factory clearances. Alloy components — engine cases, cylinder heads, carburettors, hubs — are vapour blasted to restore the factory cast finish without removing material. Cracked or damaged aluminium is repaired by TIG welding. Steel hardware is zinc plated or replaced. The frame is inspected for cracks and damage, straightened if necessary, and refinished. The entire machine is assembled with correct torque values, new seals and gaskets throughout, and a correct lubricant specification for each application.

We do not restore motorcycles to a standard that looks good at the time of delivery and deteriorates quickly. The finishes, specifications, and materials we use are chosen for longevity and correctness.

**What is included:**
- Full disassembly and photographic condition report
- Engine rebuild to factory specification
- Vapour blasting of alloy components
- Aluminium repairs (welding, thread repair, fin replacement)
- Zinc plating of small steel hardware
- Frame inspection, repair and refinish
- Correct assembly with factory torque values
- New seals, gaskets and fluids throughout
- Parts sourcing — including obsolete and hard-to-find components
- Final inspection and documentation

Vintage and classic motorcycle restoration in Traralgon, Victoria. We work on motorcycles from across Victoria and interstate.`,

    includes: [
      'Full disassembly and component-by-component inspection',
      'Photographic documentation throughout',
      'Engine rebuild to factory specification — two-stroke or four-stroke',
      'Vapour blasting of all alloy components',
      'Aluminium TIG welding — crack repairs, fin repairs, thread repairs',
      'Zinc plating of small steel hardware',
      'Frame inspection, straightening, repair and refinish',
      'Parts sourcing — OEM, NOS, and quality reproduction',
      'Correct assembly to factory torque specifications',
      'New seals, gaskets, and fluids throughout',
      'Final inspection and sign-off',
    ],
    priceLabel: 'Quoted per project — contact us with make, model, year and condition for an assessment.',
    image: {
      src: '/images/services/vintage-restoration.jpg',
      alt: 'Vintage Japanese motorcycle ground-up restoration — Lang Restorations, Traralgon Victoria',
    },
    metaTitle: 'Vintage Motorcycle Restoration | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Ground-up vintage and classic motorcycle restorations in Traralgon, Victoria. Honda, Yamaha, Kawasaki and Suzuki specialists. Contact Lang Restorations for an assessment.',
  },

  {
    id: 'engine-rebuilds',
    name: 'Engine Rebuilds',
    category: 'Mechanical',
    featured: true,
    shortDescription:
      'Complete engine rebuilds for vintage and classic two-stroke and four-stroke motorcycles. Full disassembly, inspection, machining and reassembly to factory specification.',

    fullDescription: `An engine rebuild is the most consequential work in a motorcycle restoration. Done correctly, a rebuilt engine is more reliable and longer-lived than the original. Done poorly, it fails — expensively and sometimes dangerously.

Lang Restorations performs complete engine rebuilds on vintage and classic two-stroke and four-stroke motorcycles, primarily from Honda, Yamaha, Kawasaki and Suzuki. Our focus on Japanese motorcycles from the 1960s through the 1990s means we have accumulated specific knowledge of the engine families, common failure modes, and correct rebuild specifications for these machines.

Every engine rebuild begins with complete disassembly. Every component is cleaned, measured, and assessed against factory specifications. We use bore micrometers and feeler gauges, not estimates. Wear that is within tolerance is documented; wear that exceeds tolerance is corrected — by boring and fitting oversized pistons, by regrinding or replacing crank components, by replacing bearings to correct dimensions. We do not reassemble worn parts and hope for the best.

Two-stroke engines require particular attention to porting condition, reed valve condition, power valve operation (where fitted), crank seal condition, and correct jetting. Four-stroke engines require close attention to cam specifications, valve clearances, oil pump condition, and the condition of the timing drive components. We address each element systematically.

Where required, we can perform pressure testing of two-stroke crankcases to verify seal integrity before final assembly — a step that significantly reduces the risk of post-rebuild air leaks and lean seizures.

All engine rebuilds are completed with correct factory torque specifications and correct lubricants. Where the original specification calls for specific break-in procedures, we document these and provide them to you at the time of delivery.

**Engine rebuild services include:**
- Complete disassembly and component measurement
- Bore measurement and machining (where required)
- Piston and ring replacement
- Crank inspection, measurement and rebuild (two-stroke)
- Valve train inspection and adjustment or rebuild (four-stroke)
- Bearing replacement throughout
- Seal and gasket replacement
- Two-stroke crankcase pressure testing
- Correct assembly to factory torque specifications
- Break-in procedure documentation

We rebuild engines for motorcycles sent from across Victoria and Australia. Contact us with your engine details for a rebuild assessment.`,

    includes: [
      'Full disassembly and photographic documentation',
      'Component measurement against factory specifications',
      'Bore measurement — machining and oversized pistons where required',
      'Crank inspection, measurement and rebuild (two-stroke)',
      'Valve train rebuild — clearances, seats, guides (four-stroke)',
      'Complete bearing replacement',
      'Crankcase pressure test (two-stroke)',
      'Seal and gasket replacement throughout',
      'Correct assembly to factory torque specifications',
      'Break-in procedure documentation',
    ],
    priceLabel: 'Quoted per engine — contact us with make, model and year for an assessment.',
    image: {
      src: '/images/services/engine-rebuild.jpg',
      alt: 'Vintage motorcycle engine rebuild — two-stroke and four-stroke, Lang Restorations Traralgon',
    },
    metaTitle: 'Motorcycle Engine Rebuilds | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Complete vintage motorcycle engine rebuilds in Traralgon, Victoria. Two-stroke and four-stroke specialists. Honda, Yamaha, Kawasaki. Contact for an assessment.',
  },

  {
    id: 'parts-restoration',
    name: 'Parts Restoration',
    category: 'Restoration',
    featured: false,
    shortDescription:
      'Individual component restoration for vintage and classic motorcycles. Carburettors, hubs, engine cases, covers, brackets — restored rather than replaced.',

    fullDescription: `Not every customer needs a ground-up restoration. Sometimes a single component is the difference between a motorcycle that is finished and a motorcycle that is close. Lang Restorations offers individual parts restoration as a standalone service — for customers restoring their own machines, for dealers preparing stock, and for workshops that need specific capabilities they do not have in-house.

Parts restoration at Lang Restorations covers the full range of motorcycle components:

**Alloy components** — engine cases, cylinder heads and barrels, carburettor bodies, brake hubs, wheel hubs, triple clamps, and other cast or machined alloy parts are vapour blasted to restore factory surface texture. Where components are cracked, have stripped threads, or have broken fins, we repair by TIG welding before blasting.

**Carburettors** — disassembled, ultrasonically cleaned, vapour blasted externally, and rebuilt with new jets, needles, O-rings and diaphragms where applicable. Correct jetting specified per model.

**Steel hardware** — bolts, studs, brackets, clips, and small steel components are zinc plated to restore factory finish and corrosion protection.

**Chrome and polished components** — assessed and sent to specialist platers where rechrome or replating is required. We coordinate this on your behalf.

**Cables and hoses** — replaced with correct specification or reproduced in stainless.

Parts can be sent to us from across Australia. We accept components from customers who are completing their own restorations, from workshops needing vapour blasting or alloy repair capability, and from collectors sourcing and restoring individual components.

Contact us with a description of the parts and their condition. We will quote per component or per batch.`,

    includes: [
      'Individual component assessment and condition report',
      'Vapour blasting — alloy components to factory finish',
      'Carburettor disassembly, ultrasonic clean, rebuild',
      'Aluminium TIG welding — crack repair, fin repair, thread repair',
      'Zinc plating — bolts, studs, brackets, small steel hardware',
      'Chrome coordination with specialist platers',
      'Cable and hose replacement or manufacture',
      'Return packing and freight coordination',
    ],
    priceLabel: 'Quoted per component or batch — contact us with details and photos.',
    image: {
      src: '/images/services/parts-restoration.jpg',
      alt: 'Motorcycle parts restoration — alloy components, carburettors, hardware, Lang Restorations Victoria',
    },
    metaTitle: 'Motorcycle Parts Restoration | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Individual component restoration for vintage motorcycles — alloy parts, carburettors, hardware. Vapour blasting, zinc plating, TIG welding. Lang Restorations, Victoria.',
  },

  {
    id: 'vapour-blasting',
    name: 'Vapour Blasting',
    category: 'Finishing',
    featured: true,
    shortDescription:
      'Professional vapour blasting service for motorcycle alloy components — engine cases, heads, barrels, hubs, carburettors. Restores factory cast finish without removing material.',

    fullDescription: `Vapour blasting — also called wet blasting or aqua blasting — is the correct method for restoring the factory finish on cast alloy motorcycle components. It is one of the services that separates a proper motorcycle restoration from a surface-level refresh, and it is one of the core capabilities of the Lang Restorations workshop.

The process uses a slurry of fine glass media and water, propelled by compressed air onto the component surface. The water acts as a lubricant, reducing the aggressiveness of the blast media and producing a clean, bright, matte finish that closely replicates the original factory cast appearance. Unlike dry bead blasting or sand blasting, vapour blasting does not remove material or create a rough, porous surface. It is safe to use on precision alloy components without concern for dimensional change.

The results are visible immediately. Engine cases, cylinder heads, carburettor bodies, brake hubs, wheel hubs, and other alloy components emerge from the vapour blasting cabinet with a uniform, clean finish — free of oxidation, old paint, oil contamination, and the grime of decades — that is functionally and visually correct for a restored motorcycle.

**What we vapour blast:**
- Engine cases — upper and lower
- Cylinder heads
- Cylinder barrels
- Carburettor bodies
- Brake hubs — front and rear
- Wheel hubs
- Engine covers — ignition, clutch, inspection
- Swing arms
- Frame lugs and brackets (alloy)
- Any other cast or machined alloy component

Components must be free of plastic and rubber components before blasting. We can assist with disassembly of complex assemblies where required.

Vapour blasting is offered as part of a full restoration and as a standalone service. We accept components sent from across Australia.

**Why vapour blasting is the correct choice:**
Dry bead blasting creates a rough, open surface that traps contaminants and accelerates corrosion. Sand blasting removes material and is too aggressive for precision components. Vapour blasting produces a consistent, correct finish that holds up over time and looks right on a restored motorcycle. For vintage Japanese motorcycles, there is no better way to restore alloy components.`,

    includes: [
      'Pre-blast inspection and condition assessment',
      'Disassembly assistance for complex components',
      'Thorough vapour blast to factory cast finish',
      'Post-blast clean and dry',
      'Inspection and documentation',
      'Return packing for posted components',
    ],
    priceLabel: 'Quoted per component or batch — contact us with component details and photos.',
    image: {
      src: '/images/services/vapour-blasting.jpg',
      alt: 'Motorcycle vapour blasting service — engine cases, cylinder heads, alloy components, Traralgon Victoria',
    },
    metaTitle: 'Motorcycle Vapour Blasting | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Professional vapour blasting for vintage motorcycle alloy components in Traralgon, Victoria. Engine cases, heads, hubs, carburettors. Accept posted components from across Australia.',
  },

  {
    id: 'aluminium-repairs',
    name: 'Aluminium Repairs',
    category: 'Fabrication',
    featured: true,
    shortDescription:
      'TIG welding and structural repair of cracked, broken or damaged aluminium motorcycle components — engine cases, covers, cylinder fins, frames, and alloy fabrication.',

    fullDescription: `Cracked engine cases. Broken cylinder fins. Stripped threads in critical locations. Damaged alloy frames and subframes. These are the problems that end restorations — unless you have access to a workshop that can weld aluminium properly.

Lang Restorations offers professional aluminium TIG welding and repair for motorcycle components. Aluminium welding requires specific equipment, specific filler materials, and a significant amount of skill and practice to produce welds that are structurally sound and visually acceptable on a restored motorcycle. We have all three.

**What we repair:**

*Cracked engine cases and covers* — the most common aluminium repair request for vintage motorcycles. Cracks in engine cases typically occur from impact, from overtightening fasteners, or from thermal stress over decades. We clean, prepare and TIG weld the crack, then blend the weld area as appropriate. On components that will be vapour blasted, the repair is typically invisible after finishing.

*Broken cylinder fins* — a common cosmetic issue on vintage motorcycles, and one that affects cooling on air-cooled engines. Broken fins are reattached or reproduced by welding, then blended and vapour blasted.

*Stripped and damaged threads* — inserts are fitted to repair damaged threads in alloy components. Where damage is severe, we can build up the area by welding and re-tap to correct specification.

*Cracked alloy frames and subframes* — structural alloy repairs require careful preparation, correct filler rod selection, and correct heat management to produce welds with full structural integrity. We assess all structural repairs for safety before the motorcycle returns to service.

*Custom alloy fabrication* — brackets, gussets, mounts, and small structural components manufactured to suit specific restoration requirements.

All aluminium repairs include a post-weld inspection. Structural repairs include a load assessment. Where a repair is not the correct approach for a safety-critical component, we will tell you rather than weld it and hope.

Components can be sent from across Australia. Contact us with photos and a description of the damage for an assessment.`,

    includes: [
      'Pre-repair assessment and damage documentation',
      'TIG welding of cracks — engine cases, covers, frames',
      'Broken fin repair and replacement',
      'Thread repair — inserts, build-up and re-tap',
      'Weld area blending and preparation for vapour blasting',
      'Structural assessment on load-bearing components',
      'Custom alloy fabrication — brackets, mounts, gussets',
      'Post-repair inspection and documentation',
    ],
    priceLabel: 'Quoted per repair — contact us with photos and description of the damage.',
    image: {
      src: '/images/services/aluminium-repairs.jpg',
      alt: 'Motorcycle aluminium TIG welding repairs — engine cases, fins, frames, Lang Restorations Victoria',
    },
    metaTitle: 'Motorcycle Aluminium Repairs | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'TIG welding and aluminium repair for vintage motorcycle components — engine cases, cylinder fins, frames. Lang Restorations, Traralgon Victoria. Posted components accepted.',
  },

  {
    id: 'zinc-plating',
    name: 'Zinc Plating',
    category: 'Finishing',
    featured: false,
    shortDescription:
      'Factory-correct zinc plating for motorcycle bolts, studs, brackets, clips and small steel hardware — restoring original appearance and corrosion protection.',

    fullDescription: `Look closely at a correctly restored vintage Japanese motorcycle and you will see it in the hardware: bolts, studs, brackets, and small steel components finished in a clear or iridescent zinc plate, not painted over or left bare.

Zinc plating is the factory finish on the majority of steel hardware used on Japanese motorcycles from the 1960s through the 1990s. Over time it corrodes to a dull, rusty finish that reads as neglect on an otherwise clean restoration. Restoring the correct zinc finish on a motorcycle's hardware is one of the details that separates a complete restoration from one that is almost complete.

Lang Restorations offers zinc plating for motorcycle hardware as part of a complete restoration and as a standalone service. Bolts, studs, washers, brackets, clips, springs, and other small steel components are plated with a clear zinc finish that correctly replicates the original factory appearance.

**The process:**
Components are degreased, cleaned, and assessed for corrosion and thread condition before plating. Heavily corroded components may require media blasting to remove rust before plating proceeds. Threads are cleaned and chased before and after plating to ensure correct fit. After plating, components are inspected against factory specifications.

**What we plate:**
- Bolts and studs — engine, chassis, and bodywork fasteners
- Washers and spacers
- Brackets and clips
- Springs and small steel assemblies
- Frame hardware
- Any small steel component with factory zinc finish

Components can be sent from across Australia. We accept batches of hardware from customers completing their own restorations. Contact us with component quantities and a description for a quote.`,

    includes: [
      'Pre-plate degreasing and cleaning',
      'Corrosion removal — media blasting where required',
      'Thread inspection and chase',
      'Clear zinc plate to factory specification',
      'Post-plate thread chase and inspection',
      'Return packing for posted components',
    ],
    priceLabel: 'Quoted per batch — contact us with component quantities and photos.',
    image: {
      src: '/images/services/zinc-plating.jpg',
      alt: 'Motorcycle zinc plating service — bolts, hardware, brackets, factory finish restoration, Victoria',
    },
    metaTitle: 'Motorcycle Zinc Plating | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Factory-correct zinc plating for vintage motorcycle hardware — bolts, studs, brackets, clips. Lang Restorations, Traralgon Victoria. Standalone service, posted batches accepted.',
  },

  {
    id: 'frame-repairs',
    name: 'Frame Repairs',
    category: 'Fabrication',
    featured: false,
    shortDescription:
      'Motorcycle frame inspection, crack repair, straightening, gusset fabrication and structural assessment — ensuring every restoration is built on a sound foundation.',

    fullDescription: `A motorcycle restoration that begins on a compromised frame is a restoration waiting to fail. Frame inspection and repair is a critical stage of every restoration at Lang Restorations, and it is a service we offer independently to customers who need structural work done correctly.

Vintage motorcycle frames fail in predictable ways: cracks at weld junctions and stress points from impacts and hard use; distortion from accidents that were repaired cosmetically but not structurally; rust penetration at tube joints; and damage from poorly executed modifications. We find all of it.

**Frame inspection:**
Every frame that comes through Lang Restorations for a complete restoration is stripped of paint and inspected under good light for cracks, distortion, and damage. We check known stress points for each model — the areas where frames crack with use — and assess the overall structural integrity of the chassis before any other work is invested in the machine.

**Crack repair:**
Frame cracks are repaired by TIG welding after thorough preparation of the weld area. Where the repair addresses a chronically stressed location, we may recommend adding a gusset to reinforce the area and prevent recurrence. All weld repairs are ground and blended before refinishing.

**Straightening:**
Frames that are bent or twisted from accident damage are assessed for repairability. Mild distortion is corrected by controlled straightening. Severe distortion — particularly in the steering head area — may not be safe to repair and we will tell you if that is the case.

**Modifications and fabrication:**
Where a restoration requires mounting points, subframe modifications, or custom steel work — brackets, mounts, tabs — we fabricate these in-house using correct-gauge steel and correct welding procedures.

Contact us with photos and a description of your frame for an assessment. We work with frames sent from across Victoria and Australia.`,

    includes: [
      'Full frame inspection — known stress points per model',
      'Crack detection and assessment',
      'TIG weld crack repair with correct filler materials',
      'Gusset fabrication and fitment at repaired locations',
      'Distortion assessment and straightening (mild)',
      'Custom bracket and tab fabrication',
      'Weld blend and preparation for refinishing',
      'Structural assessment documentation',
    ],
    priceLabel: 'Quoted per frame — contact us with photos and description for an assessment.',
    image: {
      src: '/images/services/frame-repairs.jpg',
      alt: 'Motorcycle frame repair, crack welding and straightening — Lang Restorations, Traralgon Victoria',
    },
    metaTitle: 'Motorcycle Frame Repairs | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Motorcycle frame inspection, crack repair, TIG welding and straightening in Traralgon, Victoria. Structural assessment included. Lang Restorations — contact for a quote.',
  },
]

// ─── Derived helpers ──────────────────────────────────────────────────────────

export const featuredServices = services.filter((s) => s.featured)
