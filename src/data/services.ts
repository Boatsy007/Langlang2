import type { Service } from '@/types'

// ─── Services ────────────────────────────────────────────────────────────────

export const services: Service[] = [

  // ── Vintage Motorcycle Restoration ─────────────────────────────────────────
  {
    id: 'vintage-motorcycle-restoration',
    name: 'Vintage Motorcycle Restoration',
    category: 'Restoration',
    featured: true,

    shortDescription:
      'Ground-up restorations of vintage and classic motorcycles — Honda, Yamaha, Kawasaki, Suzuki and British marques — rebuilt to factory specification for riders and collectors across Australia.',

    fullDescription: `A complete motorcycle restoration is the most demanding work a specialist workshop undertakes. It is also the work where the difference between workshops is most clearly visible — in the finished machine, in its mechanical behaviour and in how it holds up five years after delivery.

Lang Restorations has been performing ground-up motorcycle restorations in Traralgon, Gippsland since 2004. The specialisation is vintage and classic Japanese motorcycles from the late 1960s through to the early 2000s — motocross machines from Honda, Yamaha, Kawasaki and Suzuki, Honda Mini Trail and Monkey minibikes, and classic road bikes from the same manufacturers. British classics are assessed individually. The common requirement across all of these machines is that they be restored correctly: to factory specification, using the correct processes and the correct materials, with the kind of attention to detail that enthusiasts and judges immediately recognise.

**The restoration process at Lang Restorations begins with disassembly and inspection.** Every component is cleaned, photographed and measured. Nothing is assumed to be serviceable — everything is verified against factory specifications where those specifications exist. The condition report produced at this stage is shared with the customer and becomes the basis for all decisions and quotations. There are no surprises mid-project because the project is fully understood before it begins.

From that foundation, the work proceeds component by component. Alloy parts — engine cases, cylinder heads and barrels, carburettor bodies, brake and wheel hubs — are vapour blasted to restore the factory cast finish. Cracked or damaged aluminium is repaired by TIG welding before the blasting stage, and the repair blended so the component presents correctly after finishing. Steel hardware — bolts, studs, brackets, clips, springs — is zinc plated to factory specification. The frame is inspected for cracks at the stress points typical to that model, structurally assessed, and refinished once any required repairs are complete.

Engine rebuilds are performed to factory clearances. Two-stroke engines receive attention to porting condition, power valve operation, crank seal integrity and correct jetting. Four-stroke engines receive close inspection of valve train specifications, cam timing, oil pump condition and the timing drive. Both benefit from crankcase pressure testing where applicable before final assembly. Assembly throughout uses factory torque specifications, correct lubricants for each application and new seals and gaskets throughout.

The restoration of vintage motorcycles requires specific knowledge that generalised workshops do not possess. Parts for a 1978 Honda CR250M are not stocked by any dealer. The correct jetting specification for a 1986 Yamaha YZ250 depends on the year of manufacture within that production run. The correct shade of blue for a 1982 Kawasaki KX250 frame is not the same shade as the 1983. These details matter to collectors and judges, and they are the details this workshop is equipped to get right.

Parts sourcing is part of the service. Genuine OEM parts are pursued before NOS alternatives, which are pursued before quality reproduction parts. No substitution is made that affects correctness, function or longevity without discussion with the customer. Some vintage restorations require parts to be manufactured — a machined alloy component, a fabricated bracket — and that capability is available in-house.

The finished restoration is accompanied by full photographic documentation of the process, from disassembly through to completion. This documentation establishes provenance, supports valuation and insurance, and provides a reference for any future work. It is one of the things that distinguishes a restoration done properly from one done quickly.`,

    includes: [
      'Full disassembly and photographic documentation at each stage',
      'Component-by-component inspection and measurement',
      'Engine rebuild to factory specification — two-stroke or four-stroke',
      'Vapour blasting of all alloy components to factory cast finish',
      'Aluminium TIG welding — cracks, fin repairs, thread repair',
      'Zinc plating of steel hardware to factory specification',
      'Frame inspection, structural assessment, repair and refinish',
      'Parts sourcing — OEM, NOS and correct-specification reproduction',
      'Assembly to factory torque specifications with correct lubricants',
      'New seals, gaskets and fluids throughout',
      'Final inspection and restoration documentation',
    ],

    priceLabel: 'Quoted per project — contact us with make, model, year and condition for an assessment.',

    image: {
      src: '/images/services/vintage-restoration.jpg',
      alt: 'Vintage Japanese motorcycle ground-up restoration — Lang Restorations, Traralgon, Gippsland Victoria',
    },

    metaTitle: 'Vintage Motorcycle Restoration | Lang Restorations — Traralgon VIC',
    metaDescription: 'Ground-up vintage and classic motorcycle restoration in Traralgon, Victoria. Honda, Yamaha, Kawasaki and Suzuki specialists. Factory-correct restorations for collectors across Australia.',
  },

  // ── Engine Rebuilds ────────────────────────────────────────────────────────
  {
    id: 'engine-rebuilds',
    name: 'Engine Rebuilds',
    category: 'Mechanical',
    featured: true,

    shortDescription:
      'Complete engine rebuilds for vintage and classic two-stroke and four-stroke motorcycles. Full disassembly, precision measurement and factory-specification reassembly.',

    fullDescription: `The engine is the foundation of a motorcycle restoration. An engine rebuilt properly is more reliable and longer-lived than the original. An engine rebuilt carelessly fails — and the failure is rarely cheap or convenient.

Lang Restorations performs complete engine rebuilds on vintage and classic two-stroke and four-stroke motorcycles, with deep experience in the Japanese manufacturers whose machines represent most of the serious collector market in Australia: Honda, Yamaha, Kawasaki and Suzuki. Two decades of working exclusively on these machines means the workshop carries model-specific knowledge — common failure modes, correct clearance specifications, original jetting, known weak points in specific engine families — that a general mechanic cannot replicate from a workshop manual alone.

**Every engine rebuild begins with complete disassembly.** Every component is cleaned and inspected individually. Measurement comes before assessment — bore micrometers and feeler gauges establish what the engine actually is, not what it appears to be. Wear within tolerance is documented. Wear beyond tolerance is corrected. We do not reassemble borderline components and hope. An engine rebuilt with worn components will fail again, on the same timeline, for the same reasons.

**Two-stroke engine rebuilds** require specific attention to elements that four-stroke mechanics may overlook. Porting condition — the shape, finish and dimensions of the transfer, exhaust and inlet ports — directly affects power characteristics. Power valve operation, where fitted, must be mechanically correct and properly timed. Reed valve condition determines low-speed response and air-fuel separation. Crank seal integrity is a critical safety issue, not merely a performance one: a failed crank seal in a two-stroke causes a lean mixture that leads to seizure with little or no warning. We inspect and replace crank seals as a standard part of every two-stroke rebuild, and we perform crankcase pressure testing before final assembly to confirm integrity.

**Four-stroke engine rebuilds** require close attention to valve train specifications — clearances, seat condition, guide wear — that directly affect performance and longevity. Cam chain and tensioner condition determines timing stability. Oil pump condition and flow rate affect everything downstream. We address all of these components systematically rather than replacing only what is obviously failed.

Correct reassembly is as important as the inspection and machining that precede it. Factory torque specifications are applied throughout — to head fasteners, main bearing fasteners, clutch nut, flywheel nut, and every other fastener in the assembly. Correct lubricants are used for each application during assembly, and the specific lubricant requirements for the first heat cycle are documented and provided with the engine.

Engines that require boring to accept oversized pistons are measured precisely before cylinder selection and boring. We work to the factory oversize increments where they exist, and to the available piston sizes for that specific model where they do not.

Engine rebuilds are accepted as standalone projects — the complete motorcycle is not required. Components can be freighted to the Traralgon workshop from across Victoria and Australia.`,

    includes: [
      'Complete disassembly and inspection under magnification',
      'Component measurement against factory specifications',
      'Bore measurement — machining and oversized pistons where required',
      'Crank inspection, measurement and rebuild (two-stroke)',
      'Reed valve and power valve inspection and replacement',
      'Crankcase pressure testing (two-stroke)',
      'Valve train rebuild — clearances, seats, guides (four-stroke)',
      'Oil pump inspection and service (four-stroke)',
      'Complete bearing replacement throughout',
      'Seal and gasket replacement — correct specification for each application',
      'Assembly to factory torque specifications',
      'Break-in procedure documentation',
    ],

    priceLabel: 'Quoted per engine — contact us with make, model and year for an assessment.',

    image: {
      src: '/images/services/engine-rebuild.jpg',
      alt: 'Vintage motorcycle engine rebuild — two-stroke and four-stroke specialist, Lang Restorations Traralgon',
    },

    metaTitle: 'Motorcycle Engine Rebuilds | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Complete vintage motorcycle engine rebuilds in Traralgon, Victoria. Two-stroke and four-stroke specialists. Honda, Yamaha, Kawasaki, Suzuki. Precision measurement, factory-spec reassembly.',
  },

  // ── Parts Restoration ──────────────────────────────────────────────────────
  {
    id: 'parts-restoration',
    name: 'Parts Restoration',
    category: 'Restoration',
    featured: false,

    shortDescription:
      'Individual component restoration for vintage and classic motorcycles — carburettors, hubs, engine cases and steel hardware. Restored to factory specification rather than replaced.',

    fullDescription: `Not every customer bringing a vintage motorcycle back to life needs a complete, workshop-managed restoration. Many experienced collectors and restorers handle the bulk of the work themselves but need specific capabilities they do not have access to — vapour blasting, aluminium TIG welding, zinc plating, carburettor rebuilding or precision engine work. Parts restoration at Lang Restorations provides those capabilities as standalone services, accessible without committing to a complete project.

The parts restoration service is used regularly by collectors doing their own restorations, by workshops needing specialist finishing or fabrication capability, by dealers preparing stock for sale and by owners who have a single problematic component preventing an otherwise complete machine from being finished correctly.

**Alloy components** are the most common parts restoration request. Engine cases, cylinder heads and barrels, carburettor bodies, brake and wheel hubs, triple clamps, clutch and ignition covers — any cast or machined alloy component that needs to be returned to factory appearance. The standard process is vapour blasting, which restores the factory cast finish without removing material and without the aggressiveness of dry bead blasting. Where components are cracked, have stripped or damaged threads, or have broken or damaged fins, we repair by aluminium TIG welding before blasting — the weld blended to the surrounding surface so the repair is invisible in the finished component.

**Carburettor restoration** is performed as a complete process: full disassembly, ultrasonic cleaning of all passages and orifices, external vapour blasting, inspection and measurement of needle and needle jet wear, replacement of jets, needles, O-rings, diaphragms and float valves to the correct specification for that model. Correct jetting is verified for the machine's intended use. A carburettor returned from this process is indistinguishable from a factory-new unit — and flows correctly, which is the point.

**Steel hardware** — bolts, studs, brackets, clips, springs, washers — is zinc plated to restore the factory finish. This is often the final detail that completes an otherwise excellent restoration: hardware in factory zinc finish, rather than replaced with stainless steel fasteners or left with bare metal, reads as correct to anyone who has studied an original machine closely.

**Chrome and polished components** that require rechrome or replating are assessed and coordinated with specialist platers on behalf of customers. We manage the process, specify the correct plating type for the application and inspect the result before return.

Components from across Australia are accepted by post or freight. Quote requests should include a description of the parts, their condition and photos where possible.`,

    includes: [
      'Condition assessment and photographic documentation',
      'Vapour blasting — alloy components to factory cast finish',
      'Aluminium TIG welding — crack repair, fin repair, thread repair',
      'Carburettor disassembly, ultrasonic clean and rebuild to specification',
      'Zinc plating — bolts, studs, brackets, clips and small steel hardware',
      'Chrome coordination with specialist platers',
      'Return packing and freight coordination for posted components',
    ],

    priceLabel: 'Quoted per component or batch — contact us with details and photos.',

    image: {
      src: '/images/services/parts-restoration.jpg',
      alt: 'Motorcycle parts restoration — alloy components, carburettors, hardware, Lang Restorations Victoria',
    },

    metaTitle: 'Motorcycle Parts Restoration | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Individual motorcycle component restoration in Victoria — alloy parts, carburettors, engine cases, hardware. Vapour blasting, zinc plating, TIG welding. Posted components accepted.',
  },

  // ── Vapour Blasting ────────────────────────────────────────────────────────
  {
    id: 'vapour-blasting',
    name: 'Vapour Blasting',
    category: 'Finishing',
    featured: true,

    shortDescription:
      'Professional motorcycle vapour blasting in Traralgon, Victoria. Engine cases, cylinder heads, carburettors, hubs and alloy components restored to factory cast finish. Posted components accepted from across Australia.',

    fullDescription: `Vapour blasting — also called wet blasting or aqua blasting — is the process that most clearly separates a correct motorcycle restoration from one that is cosmetically plausible but technically wrong. It is the correct method for restoring the factory cast finish on alloy motorcycle components, and it is one of the core capabilities of the Lang Restorations workshop.

The process uses a precisely mixed slurry of fine glass media and water, propelled by compressed air onto the component surface. The water acts as a lubricant between the media and the metal, reducing the aggressiveness of the blast and producing a clean, bright, uniform matte surface that closely replicates the texture of factory-cast aluminium. Unlike dry bead blasting, vapour blasting does not peen the surface or close the pores in the alloy — it cleans them. Unlike sand blasting, it does not remove material from precision components or leave a rough, contaminated surface that retains grit and accelerates corrosion. The result is dimensionally unchanged from the original component, clean throughout, and visually correct.

**The appearance difference is immediately apparent** to anyone who has seen a correctly restored vintage Japanese motorcycle. Engine cases, cylinder heads and barrels, carburettor bodies, brake and wheel hubs, clutch and ignition covers, swing arms — all emerge from the vapour blasting cabinet with a uniform, consistent finish that is free of oxidation, old paint, oil contamination and decades of accumulated grime. The surface holds that appearance because it is correctly prepared, not because it has been polished or coated. It is the finish that the factory intended, correctly restored.

**Why dry bead blasting is the wrong choice for motorcycle restorations:** Dry bead blasting creates a rough, peened surface that traps contamination and provides no corrosion protection. It removes material from precision mating surfaces. On engine cases, it can affect gasket seating faces if not carefully managed. On bearing bores, it can change dimensions. On components that will be used functionally rather than display-only, dry blasting creates future problems that vapour blasting does not.

**What we vapour blast:**
Engine cases — upper and lower. Cylinder heads and barrels. Carburettor bodies (before rebuild). Brake hubs — front and rear. Wheel hubs. Clutch covers, ignition covers and inspection covers. Swing arms. Frame lugs and alloy brackets. Any cast or machined aluminium component where a factory-correct surface finish is required.

Components containing rubber or plastic components should have these removed before blasting. Assistance with disassembly of complex assemblies is available.

Vapour blasting is offered as part of a complete restoration and as a standalone service. Posted components are accepted from across Victoria and Australia. Contact us with component details and photos for a quote.`,

    includes: [
      'Pre-blast condition assessment and inspection',
      'Disassembly assistance for complex assemblies where required',
      'Thorough vapour blast to factory cast alloy finish',
      'Post-blast cleaning, drying and inspection',
      'Return packing and freight coordination for posted components',
    ],

    priceLabel: 'Quoted per component or batch — contact us with component details and photos.',

    image: {
      src: '/images/services/vapour-blasting.jpg',
      alt: 'Motorcycle vapour blasting service — engine cases, cylinder heads, alloy components, Traralgon Victoria',
    },

    metaTitle: 'Motorcycle Vapour Blasting | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Professional motorcycle vapour blasting in Traralgon, Victoria. Engine cases, cylinder heads, hubs, carburettors. Factory cast finish restored. Accept posted components from across Australia.',
  },

  // ── Aluminium Repairs ──────────────────────────────────────────────────────
  {
    id: 'aluminium-repairs',
    name: 'Aluminium Repairs',
    category: 'Fabrication',
    featured: true,

    shortDescription:
      'TIG welding and structural repair of cracked, broken or damaged motorcycle alloy components — engine cases, cylinder fins, frames, covers and brackets. A service that saves components that would otherwise end a restoration.',

    fullDescription: `Cracked engine cases. Broken cylinder fins. Stripped threads in inaccessible locations. A cracked alloy frame at a stress point that the previous owner either did not notice or chose not to address. These are the problems that stop restorations in their tracks — unless the workshop handling the job can weld aluminium properly.

Aluminium TIG welding is a specialist skill. It requires the correct equipment, the correct shielding gas, the correct filler material for the specific alloy and a substantial amount of practice to produce welds that are structurally sound, clean in appearance and suitable for use on a precision mechanical component. It is not a skill that can be improvised. Lang Restorations has the equipment, the experience and the specific knowledge of motorcycle alloys to repair components that would otherwise require replacement — often with genuine parts that are increasingly scarce and expensive for vintage machines.

**Cracked engine cases and covers** are the most frequent aluminium repair request for vintage motorcycle restorations. Cracks in engine cases occur from impact, from overtorqued fasteners, from thermal cycling over decades and from assembly errors by previous owners. The repair process begins with thorough cleaning of the crack and surrounding area — contamination must be completely removed or the weld will be compromised. The crack is then TIG welded with an appropriate filler rod, the weld area ground and blended to the surrounding surface, and the component subjected to post-weld inspection before vapour blasting. On components that will be blasted, a correctly performed repair is typically invisible in the finished part.

**Broken cylinder fins** affect both appearance and cooling performance on air-cooled engines. Fins are reattached or reproduced by welding — the material matched to the original alloy, the fin profile restored as closely as possible to the factory shape. After welding and blending, the repair vapour blasted, the result is a component that presents correctly and functions correctly.

**Stripped and damaged threads** in alloy components are addressed by thread insert fitment where access allows, or by weld build-up and re-tapping where it does not. A stripped thread in an engine case that was previously repaired with an oversized fastener — a compromise that creates further problems — is returned to the correct specification.

**Cracked alloy frames and subframes** are assessed individually for repairability. Mild distortion and crack repair at non-critical locations is routine. Structural repairs in the steering head area or other safety-critical locations require specific attention to pre-heat management, filler selection and post-weld inspection. Where a repair is not the correct approach for a safety-critical component, we say so clearly rather than weld it and allow a safety concern to be built into a finished machine.

**Custom alloy fabrication** — brackets, mounts, gussets, reinforcements and small structural components — is available for restorations that require a component that no longer exists in the aftermarket.

Components for assessment and repair can be posted from across Australia.`,

    includes: [
      'Pre-repair damage assessment and photographic documentation',
      'TIG welding of cracks — engine cases, covers, cylinders, frames',
      'Broken fin repair and reproduction',
      'Thread repair — inserts, weld build-up and re-tap to correct specification',
      'Weld area grinding, blending and preparation for vapour blasting',
      'Structural assessment on load-bearing and safety-critical components',
      'Custom alloy fabrication — brackets, gussets, mounts',
      'Post-repair inspection and documentation',
    ],

    priceLabel: 'Quoted per repair — contact us with photos and a description of the damage.',

    image: {
      src: '/images/services/aluminium-repairs.jpg',
      alt: 'Motorcycle aluminium TIG welding and repair — engine cases, fins, frames, Lang Restorations Victoria',
    },

    metaTitle: 'Motorcycle Aluminium Repairs | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Aluminium TIG welding and repair for vintage motorcycle components in Victoria. Engine cases, cylinder fins, frames. Crack repair, fin replacement, thread repair. Posted components accepted.',
  },

  // ── Zinc Plating ───────────────────────────────────────────────────────────
  {
    id: 'zinc-plating',
    name: 'Zinc Plating',
    category: 'Finishing',
    featured: false,

    shortDescription:
      'Factory-correct zinc plating for motorcycle hardware — bolts, studs, brackets, clips and small steel components. The finishing detail that separates a complete restoration from one that is almost complete.',

    fullDescription: `Examine a correctly restored vintage Japanese motorcycle closely — not the paintwork and not the polished alloy — and look instead at the hardware. The bolts that hold the engine cases together. The studs that mount the exhaust. The clips and brackets throughout the chassis. On an original machine in unrestored condition, this hardware has a characteristic appearance: a clean, bright zinc plate, sometimes with an iridescent sheen depending on the finish specification for that model and year. It is the factory finish, applied at the point of manufacture as both corrosion protection and cosmetic specification.

Over time, zinc plating corrodes. The bright, uniform finish develops a dull, patchy appearance that progresses to surface rust on the steel beneath. On an otherwise well-executed restoration, incorrectly finished hardware reads as a significant oversight to anyone who knows what correct looks like. Replacing original zinc-plated hardware with stainless steel fasteners is a common shortcut that avoids the plating step — and is immediately apparent to a knowledgeable inspector as a substitution rather than a restoration.

Lang Restorations offers zinc plating for motorcycle hardware as part of every complete restoration and as a standalone service for customers completing their own work. The process is straightforward but requires attention to preparation: components are degreased and cleaned before plating, threads are inspected and chased before the process to ensure plating build-up does not affect thread engagement, and components are inspected after plating against the original factory finish specification for that model.

**The finish specification varies by model, year and manufacturer.** Some machines use a clear bright zinc. Others use an iridescent finish — sometimes called yellow or gold passivate — that has a subtle colour shift visible in certain light. These are not interchangeable, and matching the correct finish for a specific machine is part of doing the job correctly rather than doing it approximately.

**What is plated:** Engine fasteners. Chassis bolts. Frame hardware. Exhaust studs and nuts. Side cover bolts. Handlebar clamp bolts. Footpeg mounts. Every bolt, stud, washer, bracket, clip, spring and small steel component that was zinc plated at the factory. On a complete vintage restoration, this represents a significant quantity of hardware — the difference in appearance between a restoration with correctly plated hardware and one with bare metal or stainless substitutes is visible from a distance.

Components submitted for zinc plating as a standalone service should arrive cleaned and with threads in good condition. Heavily corroded components may require media blasting or electrolytic cleaning before plating proceeds. Contact us with component quantities and a description for a quote. Hardware batches from across Australia are accepted.`,

    includes: [
      'Pre-plate degreasing and cleaning',
      'Corrosion removal — media blasting or electrolytic clean where required',
      'Thread inspection and chase before and after plating',
      'Zinc plating to factory finish specification for the model',
      'Post-plate thread chase and component inspection',
      'Return packing for posted hardware',
    ],

    priceLabel: 'Quoted per batch — contact us with component quantities and photos.',

    image: {
      src: '/images/services/zinc-plating.jpg',
      alt: 'Motorcycle zinc plating service — hardware, bolts, brackets, factory finish restoration, Victoria',
    },

    metaTitle: 'Motorcycle Zinc Plating | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Factory-correct zinc plating for vintage motorcycle hardware in Victoria. Bolts, studs, brackets, clips. Standalone service — posted batches from across Australia accepted.',
  },

  // ── Frame Repairs ──────────────────────────────────────────────────────────
  {
    id: 'frame-repairs',
    name: 'Frame Repairs',
    category: 'Fabrication',
    featured: false,

    shortDescription:
      'Motorcycle frame inspection, crack detection, structural repair, straightening and gusset fabrication. The foundation that every restoration depends on.',

    fullDescription: `Every element of a motorcycle restoration — the engine rebuild, the vapour blasted alloy, the zinc plated hardware, the period-correct paint — is built on the frame. A restoration on a compromised frame is a problem waiting to surface. Frame inspection and structural repair is a critical early stage of every complete restoration at Lang Restorations, and a service offered independently to customers who need specific structural work done correctly.

Vintage motorcycle frames fail in predictable ways when examined with enough knowledge and enough light. Cracks at weld junctions where stress concentrates from hard use or from impacts that were absorbed through the frame rather than through the tyres. Distortion — sometimes subtle, often masked by subsequent cosmetic repair — that affects steering geometry and handling. Rust penetration at tube joints where moisture has accumulated inside closed sections over decades. Previous repairs performed with inadequate preparation, incorrect filler materials or insufficient post-weld inspection that appear sound on the surface but are not.

**The inspection process** begins with the frame stripped of paint. Painted frames conceal problems; inspection under bare metal reveals them. Every weld junction is examined under good lighting, with particular attention to the steering head area, the swingarm pivot, the engine mounts and the known stress points specific to that model. Many vintage frames have characteristic weak points — locations where the original design or the typical use pattern of that machine creates recurring crack patterns — and knowing where to look is a function of model-specific experience rather than general mechanical competence.

**Crack repair** is performed by TIG welding after thorough preparation. The crack must be cleaned completely — contamination at the weld zone produces a structurally inferior weld, regardless of its appearance. The weld is performed with the correct filler material for the frame's steel specification. Where the location of the crack suggests it will recur under load — a welded crack at a stress concentration point without reinforcement will fail again, in the same place, on the same timeline — a gusset is fabricated and fitted to distribute the load away from the original failure point.

**Straightening** of bent or twisted frames is possible for mild distortion from minor accidents or prolonged use. The frame is measured and the distortion assessed before straightening proceeds. Severe distortion — particularly involving the steering head — requires individual assessment. Some damage is not safely repairable, and we provide a clear, honest assessment of what we find rather than proceeding with work that cannot produce a safe result.

**Fabrication** of mounting points, subframe sections, tabs, brackets and other steel components is available for restorations that require something that no longer exists or that was damaged beyond repair. We fabricate from correct-gauge steel using appropriate welding procedures and structural specifications.

Frames for assessment and repair can be freight-shipped from across Victoria and Australia. Contact us with photographs and a description of the known damage or history for a preliminary assessment.`,

    includes: [
      'Full frame inspection — paint stripped, stress points examined by model',
      'Crack detection and photographic documentation',
      'TIG weld crack repair with correct filler materials',
      'Gusset fabrication and fitment at repaired locations',
      'Distortion assessment and controlled straightening',
      'Custom bracket, tab and mounting point fabrication',
      'Weld area grinding and blending for refinishing',
      'Structural assessment documentation',
    ],

    priceLabel: 'Quoted per frame — contact us with photos and description for an assessment.',

    image: {
      src: '/images/services/frame-repairs.jpg',
      alt: 'Motorcycle frame repair, crack welding and structural assessment — Lang Restorations, Traralgon Victoria',
    },

    metaTitle: 'Motorcycle Frame Repairs | Lang Restorations — Traralgon, Victoria',
    metaDescription: 'Motorcycle frame inspection, crack repair, TIG welding and straightening in Traralgon, Victoria. Structural assessment included. Contact Lang Restorations for a quote.',
  },
]

export const featuredServices = services.filter((s) => s.featured)
