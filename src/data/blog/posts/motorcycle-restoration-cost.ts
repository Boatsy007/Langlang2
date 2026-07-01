import type { BlogPost } from '@/types'

export const motorcycleRestorationCost: BlogPost = {
  slug: 'how-much-does-motorcycle-restoration-cost',
  title: 'How Much Does It Cost to Restore a Motorcycle?',
  excerpt:
    'The honest answer from a specialist workshop with over 20 years of restorations completed. Engine rebuilds, vapour blasting, zinc plating, parts sourcing — every cost explained with real-world figures.',
  category: 'Restoration Guides',
  tags: [
    'motorcycle restoration cost',
    'restore a motorcycle',
    'motorcycle rebuild cost',
    'vintage motorcycle restoration',
    'engine rebuild cost',
    'vapour blasting',
    'zinc plating',
  ],
  publishedAt: '2026-06-30',
  updatedAt: '2026-06-30',
  readingTime: 14,
  heroImage: {
    src: '/images/services/vintage-restoration.jpg',
    alt: 'Vintage Japanese motorcycle undergoing ground-up restoration at Lang Restorations workshop, Traralgon Gippsland',
    width: 1200,
    height: 800,
    caption: 'Ground-up restoration in progress at the Lang Restorations workshop, Traralgon',
  },
  metaTitle: 'How Much Does Motorcycle Restoration Cost? (2024 Guide) | Lang Restorations',
  metaDescription:
    'Honest guide to motorcycle restoration costs from a 20-year specialist workshop in Traralgon, Gippsland. Engine rebuilds, vapour blasting, zinc plating — every service explained with real prices.',
  toc: [
    { id: 'why-costs-vary', text: 'Why Costs Vary So Dramatically', level: 2 },
    { id: 'types-of-restoration', text: 'Types of Motorcycle Restoration', level: 2 },
    { id: 'cost-breakdown', text: 'Cost Breakdown: Every Service Explained', level: 2 },
    { id: 'engine-rebuilds', text: 'Engine Rebuilds', level: 3 },
    { id: 'vapour-blasting', text: 'Vapour Blasting', level: 3 },
    { id: 'zinc-plating', text: 'Zinc Plating', level: 3 },
    { id: 'aluminium-repairs', text: 'Aluminium TIG Welding & Repairs', level: 3 },
    { id: 'frame-repairs', text: 'Frame Repairs', level: 3 },
    { id: 'paintwork', text: 'Paintwork & Finishing', level: 3 },
    { id: 'parts-sourcing', text: 'Parts Sourcing', level: 3 },
    { id: 'budget-ranges', text: 'Total Budget Ranges', level: 2 },
    { id: 'hidden-costs', text: 'Hidden Costs Nobody Mentions', level: 2 },
    { id: 'when-not-to-restore', text: 'When Restoration Isn\'t Worth It', level: 2 },
    { id: 'choosing-a-workshop', text: 'Choosing the Right Workshop', level: 2 },
    { id: 'questions-to-ask', text: 'Questions to Ask First', level: 2 },
    { id: 'cheap-restorations', text: 'Why Cheap Restorations Cost More', level: 2 },
    { id: 'budget-planning', text: 'Planning Your Budget', level: 2 },
  ],
  content: [
    {
      type: 'p',
      html: 'The most common question we hear at the beginning of a restoration enquiry is: <em>"How much will it cost?"</em> It\'s an honest question that deserves an honest answer — and the honest answer is that it depends on more variables than most people expect.',
    },
    {
      type: 'p',
      html: 'At Lang Restorations in Traralgon, Gippsland, we\'ve been quoting and completing ground-up motorcycle restorations since 2004. In that time we\'ve worked on machines ranging from a single Honda Z50 engine case that needed a crack repaired, to complete show-standard restorations of rare Honda CR motocross bikes that took twelve months from disassembly to delivery. The cost range across that work has been enormous — from a few hundred dollars for a standalone vapour blast or zinc plate, to well over $30,000 for a no-expense-spared collector build with genuine OEM Honda parts throughout.',
    },
    {
      type: 'p',
      html: 'This article breaks down exactly what drives restoration costs, what each major service actually involves and costs, how to budget realistically, and how to avoid the mistakes that turn a $5,000 project into a $15,000 one.',
    },

    // ── Why costs vary ──────────────────────────────────────────────────
    { type: 'h2', id: 'why-costs-vary', text: 'Why Restoration Costs Vary So Dramatically' },
    {
      type: 'p',
      html: 'Motorcycle restoration is not a commodity service with fixed prices. Two machines of the same make and model — same year, same markings — can arrive at a workshop in conditions so different that the resulting quotes are almost unrelated to each other.',
    },
    {
      type: 'p',
      html: '<strong>Condition is the primary driver.</strong> A Honda CR250 that was stored in a shed for thirty years with its fuel left in the carburettor, its crank seals perished and its engine cases cracked on two faces is not the same restoration as a CR250 that was last ridden in the late 1990s, stored dry, and has 95% of its original components intact and functional. Both are "a 1996 Honda CR250". The quotes are not in the same ballpark.',
    },
    {
      type: 'p',
      html: 'Beyond condition, the scope of work you\'re asking for determines the cost. "Restoration" means different things to different people — and different workshops. To some owners, a good clean, fresh tyres and a running engine constitutes a restoration. To a judge at a motorcycle show, restoration means factory-correct finishes on every component, original-specification hardware, period-correct decals, and a machine that looks and functions exactly as it did on the assembly line.',
    },
    {
      type: 'p',
      html: 'Labour rate, workshop expertise and location all play a role. A specialist workshop with genuine model-specific knowledge, the right equipment — a vapour blast cabinet, a TIG welder, access to parts catalogues and genuine OEM parts networks — costs more per hour than a general mechanic who learned vapour blasting recently. That cost difference is real, and it is compounded across a 200-hour restoration project.',
    },
    {
      type: 'callout',
      variant: 'insight',
      title: 'From the workshop',
      html: 'The most expensive restoration we do is the one that follows a cheap restoration. Machines that have been through a careless previous rebuild arrive carrying the consequences of that work — badly prepared weld repairs, incorrect parts, over-torqued fasteners that damaged threads, engines assembled without checking clearances. The second restoration always costs more than the first one should have.',
    },

    // ── Types ───────────────────────────────────────────────────────────
    { type: 'h2', id: 'types-of-restoration', text: 'Types of Motorcycle Restoration' },
    {
      type: 'p',
      html: 'Before pricing anything, it helps to be clear about what level of restoration you\'re actually after. We distinguish between a few different categories:',
    },
    {
      type: 'ul',
      items: [
        '<strong>Mechanical restoration</strong> — Gets the machine running correctly and safely. Engine rebuild, carburettor service, fresh fluids, brake service, new tyres. No full cosmetic work beyond what\'s needed to make the mechanical side accessible. Suitable for riders who want to use their bike and aren\'t focused on show judging.',
        '<strong>Cosmetic restoration</strong> — Addresses visual presentation without full mechanical disassembly. Vapour blasting the alloy components, zinc plating the hardware, repainting, recovering the seat. The engine may not be rebuilt. Suitable for display bikes or machines where the mechanical side is known-good.',
        '<strong>Ground-up restoration</strong> — Complete disassembly, full inspection of every component, mechanical rebuild to factory specification, and cosmetic finishing of everything. The machine is effectively rebuilt from scratch. This is show-level work and the price reflects it.',
        '<strong>Tribute or race replica builds</strong> — Add the complexity of sourcing and fitting period-correct race-team components, graphics and specifications to a ground-up restoration. These projects require research well beyond the workshop manual and cost accordingly.',
      ],
    },
    {
      type: 'p',
      html: 'Understanding which category your project falls into is the first conversation any honest restoration workshop should have with you. Getting this wrong at the start is expensive.',
    },

    // ── Cost breakdown ─────────────────────────────────────────────────
    { type: 'h2', id: 'cost-breakdown', text: 'Cost Breakdown: Every Service Explained' },

    { type: 'h3', id: 'engine-rebuilds', text: 'Engine Rebuilds' },
    {
      type: 'p',
      html: 'The engine rebuild is typically the single largest line item in a restoration budget. On a complete ground-up project, expect engine work alone to represent 30–50% of the total labour cost.',
    },
    {
      type: 'p',
      html: 'For <strong>two-stroke engines</strong>, a complete rebuild — full disassembly, component inspection, crank measurement and rebuild, bore measurement, piston replacement, reed valve and power valve service, seal and gasket replacement, and reassembly to factory clearances — runs from around $800 to $2,500 for labour, plus parts. Add a cylinder boring to the next oversize and a correctly matched piston, and you can add $300–$600. Crankshaft rebuilds vary considerably: a standard crank service might be $200, while a crank requiring rods, bearings and a full rebuild can exceed $500 in parts alone.',
    },
    {
      type: 'p',
      html: '<strong>Four-stroke engine rebuilds</strong> for vintage machines — particularly overhead-cam designs with complex valve trains — tend to cost more. Expect $1,200–$3,500 labour for a complete rebuild, with parts on top. Valve reseating, cam chain replacement, oil pump overhaul and the tighter machining tolerances of four-stroke top-end work add complexity and time.',
    },
    {
      type: 'table',
      caption: 'Typical engine rebuild cost ranges (labour + common parts)',
      rows: [
        { label: 'Two-stroke rebuild — labour', value: '$800 – $2,500' },
        { label: 'Two-stroke rebuild — parts (common models)', value: '$300 – $700' },
        { label: 'Two-stroke rebuild — parts (rare/OEM models)', value: '$1,000 – $3,000+' },
        { label: 'Cylinder boring + oversized piston', value: '$300 – $600' },
        { label: 'Crankshaft service (bearings)', value: '$200 – $350' },
        { label: 'Crankshaft full rebuild', value: '$400 – $800' },
        { label: 'Four-stroke rebuild — labour', value: '$1,200 – $3,500' },
        { label: 'Four-stroke rebuild — parts', value: '$500 – $2,000+' },
      ],
    },
    {
      type: 'p',
      html: 'What drives engine rebuild costs up: a cylinder that needs boring rather than honing; a crank requiring full rebuild rather than bearing replacement; parts that are only available as genuine OEM for rare machines; significant corrosion or seizure damage requiring additional machining; models where gasket kits are no longer manufactured.',
    },

    { type: 'h3', id: 'vapour-blasting', text: 'Vapour Blasting' },
    {
      type: 'p',
      html: 'Vapour blasting is one of the most impactful — and most often underestimated — cost items in a vintage motorcycle restoration. It is also the process that most clearly distinguishes a correct restoration from a cosmetically approximate one.',
    },
    {
      type: 'p',
      html: 'For those unfamiliar: vapour blasting uses a slurry of fine glass media and water propelled by compressed air to clean and finish alloy components. The result is the factory cast finish — clean, bright, uniform and dimensionally unchanged — that dry bead blasting or sandblasting cannot produce without damaging precision surfaces.',
    },
    {
      type: 'table',
      caption: 'Vapour blasting costs by component',
      rows: [
        { label: 'Engine case (single side)', value: '$60 – $120' },
        { label: 'Cylinder head', value: '$80 – $150' },
        { label: 'Barrel / cylinder', value: '$60 – $120' },
        { label: 'Carburettor body', value: '$40 – $80' },
        { label: 'Wheel hub (per hub)', value: '$60 – $100' },
        { label: 'Swing arm', value: '$80 – $150' },
        { label: 'Full alloy set (typical motocross machine)', value: '$600 – $1,200' },
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Why this matters',
      html: 'Vapour blasting is not optional on a correct restoration. If you rebuild an engine but return it in un-blasted cases, you have a clean engine inside dirty, oxidised castings. The difference is immediately visible to anyone who has studied a correctly restored vintage motorcycle — and it is the first thing a judge or knowledgeable buyer looks at.',
    },

    { type: 'h3', id: 'zinc-plating', text: 'Zinc Plating' },
    {
      type: 'p',
      html: 'The small steel hardware on a vintage motorcycle — bolts, studs, brackets, clips, springs, washers — is zinc plated at the factory. Not stainless steel. Not bare metal. Not black oxide. Zinc plated, in the specific finish specification for that model and year.',
    },
    {
      type: 'p',
      html: 'Replacing original zinc-plated hardware with stainless steel fasteners is the most common shortcut in cheap restorations. It immediately reads as wrong to a knowledgeable inspector, and it removes the factory specification from the machine permanently. The finish specification varies by model, year and manufacturer — clear bright zinc on some machines, iridescent or yellow passivate on others. These are not interchangeable.',
    },
    {
      type: 'table',
      caption: 'Zinc plating costs',
      rows: [
        { label: 'Complete hardware kit (typical motocross)', value: '$200 – $500' },
        { label: 'Complete hardware kit (classic road bike)', value: '$350 – $700' },
        { label: 'Engine fastener set only', value: '$100 – $200' },
        { label: 'Frame hardware only', value: '$80 – $180' },
        { label: 'Pre-plate media blast (corroded hardware)', value: '$80 – $200' },
      ],
    },

    { type: 'h3', id: 'aluminium-repairs', text: 'Aluminium TIG Welding & Repairs' },
    {
      type: 'p',
      html: 'Cracked engine cases. Broken cylinder fins. Stripped threads in positions where a thread insert won\'t reach. A cracked alloy frame section at a stress point. These problems appear regularly in vintage restorations — particularly on machines that have seen competition use or decades of storage.',
    },
    {
      type: 'p',
      html: 'Aluminium TIG welding is a specialist skill requiring specific equipment, the correct shielding gas, the right filler material for the alloy in question, and significant experience to produce welds that are structurally sound and clean enough to blend for vapour blasting. A correctly performed repair is invisible in the finished component.',
    },
    {
      type: 'table',
      caption: 'Aluminium repair costs',
      rows: [
        { label: 'Simple crack repair (accessible location)', value: '$150 – $300' },
        { label: 'Multiple cracks on complex component', value: '$300 – $600' },
        { label: 'Broken fin repair (multiple fins)', value: '$200 – $500' },
        { label: 'Thread weld build-up and re-tap', value: '$150 – $300 per location' },
        { label: 'Alloy frame crack repair + gusset fabrication', value: '$400 – $900' },
      ],
    },

    { type: 'h3', id: 'frame-repairs', text: 'Frame Repairs' },
    {
      type: 'p',
      html: 'Every restoration starts with a frame assessment. A frame that is cracked, bent, or carrying a previous poorly-executed repair is not a suitable foundation for anything built on top of it.',
    },
    {
      type: 'p',
      html: 'Frames fail in predictable ways on specific models — experienced restorers know where to look before they pick up a torch. The steering head area, the swingarm pivot, the engine mount locations, and the tube junctions under the seat are common failure points on Japanese motocross machines from the 1970s through the 1990s.',
    },
    {
      type: 'table',
      caption: 'Frame repair costs',
      rows: [
        { label: 'Frame inspection and assessment', value: 'Included in restoration assessment' },
        { label: 'Crack TIG weld repair (single location)', value: '$200 – $400' },
        { label: 'Multiple crack repairs + gusset fabrication', value: '$500 – $1,200' },
        { label: 'Frame straightening (mild distortion)', value: '$300 – $600' },
        { label: 'Custom bracket or mounting point fabrication', value: '$200 – $500 per item' },
      ],
    },

    { type: 'h3', id: 'paintwork', text: 'Paintwork & Finishing' },
    {
      type: 'p',
      html: 'Paintwork is the most visible part of a restoration and one of the most variable in cost. On vintage motocross machines, "paintwork" primarily means the frame — plastics are replaced rather than painted on competition machines. On classic road bikes, the tank, guards and side panels receive full paintwork.',
    },
    {
      type: 'table',
      caption: 'Paint and finishing costs',
      rows: [
        { label: 'Frame powder coat (single colour)', value: '$250 – $450' },
        { label: 'Frame two-pack automotive paint (factory-matched)', value: '$400 – $900' },
        { label: 'Chrome frame (where original)', value: '$1,500 – $3,500+' },
        { label: 'Tank + side panels (single colour, road bike)', value: '$600 – $1,200' },
        { label: 'Tank + panels (multicolour / striping)', value: '$1,000 – $3,000+' },
        { label: 'Race replica livery', value: '$2,000 – $5,000+' },
        { label: 'Period-correct reproduction decal set', value: '$80 – $300' },
      ],
    },

    { type: 'h3', id: 'parts-sourcing', text: 'Parts Sourcing' },
    {
      type: 'p',
      html: 'Parts cost is the hardest component to estimate before disassembly and inspection. It depends entirely on the machine, its condition, and how correct you want the restoration to be.',
    },
    {
      type: 'p',
      html: 'A Honda CR250 from 1996 has a reasonable aftermarket supply of consumable components. A 1972 Honda Z50 A with a genuine OEM restoration brief has a very different parts procurement challenge — one that requires established networks, patience, and a willingness to pay for genuinely correct components rather than approximations.',
    },
    {
      type: 'ul',
      items: [
        '<strong>Consumables</strong> (gaskets, seals, bearings, filters): $200 – $800 for most machines',
        '<strong>Mechanical components</strong> (piston, rings, reeds, clutch, cables): $300 – $1,500+',
        '<strong>Tyres</strong> (period-correct or correct-spec): $150 – $600 per set',
        '<strong>Plastics and bodywork</strong>: $200 – $1,500 depending on availability',
        '<strong>Genuine Honda OEM parts</strong> (for OEM-specification restorations): variable — can add $2,000 – $8,000+ to the total',
      ],
    },
    {
      type: 'callout',
      variant: 'insight',
      title: 'Our approach to parts',
      html: 'We pursue genuine OEM parts before NOS (New Old Stock) alternatives, which we pursue before quality reproduction parts. No substitution is made that affects correctness, function or longevity without discussion with the client. On every restoration, we document which parts are genuine OEM, which are NOS, and which are reproduction — so there is a complete record of what is on the machine.',
    },

    { type: 'cta' },

    // ── Budget ranges ─────────────────────────────────────────────────
    { type: 'h2', id: 'budget-ranges', text: 'Total Budget Ranges by Restoration Type' },
    {
      type: 'p',
      html: 'Putting it all together, here are realistic total restoration budgets for common machine types. These are all-inclusive estimates — labour and parts — based on machines arriving in typical condition for their age. Better-condition machines cost less; worse-condition machines cost more.',
    },
    {
      type: 'table',
      caption: 'Total restoration budget ranges (labour + parts)',
      rows: [
        { label: 'Basic mechanical restoration / running refresh', value: '$1,500 – $4,000' },
        { label: 'Cosmetic restoration (no engine rebuild)', value: '$2,500 – $6,000' },
        { label: 'Ground-up restoration (common Japanese motocross, 1970s–1990s)', value: '$8,000 – $18,000' },
        { label: 'Ground-up restoration (rare or complex machine)', value: '$15,000 – $30,000' },
        { label: 'No-expense-spared collector build (OEM parts throughout)', value: '$20,000 – $50,000+' },
      ],
    },
    {
      type: 'p',
      html: 'These ranges exist because every machine arrives in different condition, and the work discovered during disassembly always differs from the initial assessment. A machine that looks complete on arrival may have significant previous work done badly. These are not unusual findings — they are normal findings on machines of this age that have been through previous hands.',
    },

    // ── Hidden costs ──────────────────────────────────────────────────
    { type: 'h2', id: 'hidden-costs', text: 'Hidden Costs Nobody Tells You About' },
    {
      type: 'p',
      html: '<strong>The disassembly surprise.</strong> Almost every motorcycle looks better before disassembly than during it. Thirty years of oil, dust and paint conceal a lot. The crack that wasn\'t visible until the cases were clean. The frame section that appeared straight until measured. The crankshaft that appeared fine until we measured the runout. These findings extend the project and the cost.',
    },
    {
      type: 'p',
      html: '<strong>The previous restoration tax.</strong> Machines that have been through previous workshops carry the consequences of that work. Over-torqued fasteners that have damaged threads. TIG repairs done with the wrong filler that must be completely removed before the correct repair can be made. Replacement parts fitted that are incorrect for the year and must be sourced again. The second restoration of a badly-restored machine always costs more than the first.',
    },
    {
      type: 'p',
      html: '<strong>Period-correct documentation research.</strong> Show-standard restorations require period-correct specification checking — the correct shade of blue for a 1982 KX250 is not the same as the 1983, and confirming it requires reference materials, contact with other collectors, and sometimes sourcing original examples for comparison. This takes time, and time is billable.',
    },
    {
      type: 'p',
      html: '<strong>Transport and freight.</strong> If you are sending a machine or components to a specialist workshop from another state, freight costs accumulate quickly. A complete motorcycle freighted interstate can cost $300–$600 each way. Components posted for standalone services are cheaper but still a genuine line item for budgeting purposes.',
    },

    // ── When not to restore ───────────────────────────────────────────
    { type: 'h2', id: 'when-not-to-restore', text: 'When Restoration Isn\'t Worth Doing' },
    {
      type: 'p',
      html: 'Not every motorcycle is worth restoring. This is an important point that an honest workshop will tell you — and that a workshop focused on generating work will not.',
    },
    {
      type: 'p',
      html: 'A machine with a replacement frame that doesn\'t match the engine number, heavily damaged castings that can\'t be repaired correctly, or a history so obscured by previous work that factory-correctness is impossible to establish, may never produce the result you want regardless of how much is spent on it.',
    },
    {
      type: 'p',
      html: 'For collector machines, value matters. A restoration costs a fixed amount regardless of the underlying motorcycle\'s collector value. If the restoration will cost $15,000 and the resulting machine — even restored to the highest standard — is worth $12,000 in the current market, the economics don\'t work. This doesn\'t make the project worthless: there is genuine pleasure in owning a machine you have had properly restored. But it needs to be understood going in, not discovered after spending $15,000.',
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Our honest position',
      html: 'If the machine has significant structural compromise, if genuinely correct parts are unavailable at any price, or if a client\'s budget is substantially less than what a correct restoration requires, we say so in the initial consultation. We would rather lose a project than produce a result that doesn\'t meet the standard we\'re known for.',
    },

    // ── Choosing a workshop ───────────────────────────────────────────
    { type: 'h2', id: 'choosing-a-workshop', text: 'How to Choose the Right Restoration Workshop' },
    {
      type: 'p',
      html: 'The workshop you choose is as important as the budget you set. The difference between a correctly restored vintage motorcycle and a cosmetically plausible one is entirely in the quality of the work — and that quality is invisible until you know what to look for.',
    },
    {
      type: 'p',
      html: '<strong>Specialisation matters.</strong> A workshop that will restore any motorcycle, any year, any make, any style is doing too many things to be expert at any of them. The model-specific knowledge required to correctly restore a 1978 Honda CR250M — the correct jetting for the year of manufacture within the production run, the correct hardware finish, the known weak points in the engine — is accumulated over years of working specifically on these machines. It cannot be read out of a workshop manual.',
    },
    {
      type: 'p',
      html: '<strong>Ask to see completed work.</strong> Any workshop worth using will have examples of completed restorations they\'re proud of. Look at the hardware — is it zinc plated or stainless? Look at the alloy finish — vapour blasted factory cast finish, or polished bright? Look at whether the decals are correct for the year, not just approximately right.',
    },
    {
      type: 'p',
      html: '<strong>Ask about the documentation process.</strong> The best restoration workshops document every stage of their work — photographs at disassembly, during each service stage, and at completion. This documentation is part of the value of a correctly done restoration. It establishes provenance and provides a reference for any future work.',
    },
    {
      type: 'p',
      html: '<strong>Don\'t select on price alone.</strong> The cheapest quote in motorcycle restoration is rarely what it appears. Labour is the largest cost, and labour is compressible — by doing less of it, by using shortcuts, by not replacing parts that are borderline. The difference between an $8,000 restoration quote and a $14,000 one is often not the hourly rate. It\'s what is actually done.',
    },

    // ── Questions to ask ──────────────────────────────────────────────
    { type: 'h2', id: 'questions-to-ask', text: 'Questions to Ask Before You Start' },
    {
      type: 'p',
      html: 'Before committing to a restoration project, ask any workshop you are considering:',
    },
    {
      type: 'ol',
      items: [
        'What is included in your initial assessment, and will I receive a written condition report before any restoration work begins?',
        'How do you handle parts that turn out to be worse than expected during disassembly — do I approve any additional costs before they are incurred?',
        'What is your approach to parts sourcing — genuine OEM, NOS, or reproduction?',
        'Do you photograph work at each stage, and will I receive documentation with the completed machine?',
        'What is your experience specifically with this make, model and year?',
        'Can I see examples of comparable completed restorations?',
        'What happens if the restoration uncovers work that substantially changes the original estimate?',
        'Is your quote for the restoration, or for the restoration minus what you discover after starting?',
      ],
    },
    {
      type: 'p',
      html: 'A workshop that answers these questions directly, specifically, and without deflection is a workshop with nothing to hide about their process. Vague answers to these questions are informative in a different way.',
    },

    // ── Cheap restorations ────────────────────────────────────────────
    { type: 'h2', id: 'cheap-restorations', text: 'Why Cheap Restorations Always Cost More in the End' },
    {
      type: 'p',
      html: 'This is the insight that most people learn the expensive way: a cheap restoration almost always costs more over its lifetime than a correct one done once.',
    },
    {
      type: 'p',
      html: 'The reasons are mechanical. A badly rebuilt engine — assembled without checking clearances, with borderline components left in place, with incorrect lubricants used during assembly — will fail. The failure happens after the warranty period and after confidence has been built in the machine. When it does fail, the disassembly, inspection and correct rebuild of what was done wrong costs more than doing it correctly the first time would have.',
    },
    {
      type: 'p',
      html: 'The same applies to welding repairs. A crack repaired with the wrong filler material, without adequate preparation, will crack again. It may take a season, or two, or three — but the crack will propagate at the same stress point. And the second repair, which now involves removing poorly-done previous work before the correct repair can begin, costs more.',
    },
    {
      type: 'p',
      html: 'Cosmetic shortcuts compound in the same way. A frame painted over rust rather than treated and sealed. Hardware zinc-plated without adequate degreasing and preparation. Decals applied over surface contamination rather than clean paint. Each starts to fail in ways that are disproportionately expensive to correct once the machine is assembled and presented.',
    },
    {
      type: 'p',
      html: 'The correct restoration — done completely, to the correct standard, with the right processes — is finished. There is nothing waiting to fail.',
    },

    { type: 'divider' },

    // ── Budget planning ───────────────────────────────────────────────
    { type: 'h2', id: 'budget-planning', text: 'Planning Your Restoration Budget' },
    {
      type: 'p',
      html: '<strong>Get a condition assessment before you commit.</strong> At Lang Restorations, every project begins with a thorough disassembly and inspection, with a written condition report before any restoration work proceeds. The assessment cost is credited against the final invoice on completing projects. You cannot accurately budget a restoration without knowing what condition the machine is actually in. Photographs and a description are not a substitute for disassembly.',
    },
    {
      type: 'p',
      html: '<strong>Add 20% to any estimate as contingency.</strong> This is not pessimism — it is practical recognition that disassembly reveals things that the initial inspection cannot. The contingency covers discovered work without stopping the project or creating difficult conversations mid-build.',
    },
    {
      type: 'p',
      html: '<strong>Prioritise mechanical correctness over cosmetic perfection if budget is constrained.</strong> A machine that runs correctly, has sound structure and correct mechanical components can have its cosmetic work completed later. A cosmetically beautiful machine with a poorly rebuilt engine is a problem that recurs on the same timeline as the engine\'s mechanical condition.',
    },
    {
      type: 'p',
      html: '<strong>Understand the difference between restoration and modification.</strong> Original-specification components, correctly fitted, maintain and increase the machine\'s collector value. Modifications — aftermarket parts, non-original specifications, "improvements" — reduce collector value regardless of quality, because they move the machine away from what it was.',
    },
    {
      type: 'p',
      html: '<strong>Ask for staged quotes if the total is uncertain.</strong> We regularly quote restorations in stages: complete the assessment and mechanical work first, review cosmetic work separately. This lets clients make informed decisions at each stage rather than committing to an unknown total upfront.',
    },

    { type: 'cta' },
  ],

  faqs: [
    {
      question: 'How much does it cost to restore a motorcycle?',
      answer:
        'Motorcycle restoration costs vary enormously depending on the machine, its condition and the scope of work. A basic mechanical restoration runs $1,500–$4,000. A complete ground-up restoration of a typical Japanese vintage motocross machine costs $8,000–$18,000. Rare or complex machines restored to collector standard can exceed $30,000. The only accurate figure requires a proper condition assessment after disassembly — photographs are not a substitute.',
    },
    {
      question: 'Is restoring a motorcycle worth it?',
      answer:
        'It depends on your objective. If you are restoring a machine you are passionate about, or one that has collector significance, the result — a correctly restored motorcycle with full documentation — is genuinely valuable, both financially and personally. From a pure financial perspective, restorations rarely produce a profit above their cost when sold. The value is in owning and using the finished machine.',
    },
    {
      question: 'Can I restore a motorcycle myself?',
      answer:
        'Some aspects of restoration are accessible to a capable home mechanic — basic mechanical work, simple bodywork preparation, parts cleaning and assembly. The specialist services — vapour blasting, aluminium TIG welding, zinc plating, engine boring, crankshaft rebuilding — require specific equipment and experience that most home mechanics do not have. At Lang Restorations, we regularly provide standalone specialist services to experienced collectors who are doing the rest of the restoration work themselves.',
    },
    {
      question: 'How long does a motorcycle restoration take?',
      answer:
        'A basic mechanical restoration can be completed in 2–6 weeks. A complete ground-up restoration of a vintage machine typically takes 3–9 months. Complex machines, machines requiring rare parts, or show-standard restorations that require extensive period-correct checking take longer — sometimes 12 months or more. The timeline depends on parts availability as much as workshop capacity.',
    },
    {
      question: 'Do restored motorcycles increase in value?',
      answer:
        'Correctly restored, documented vintage motorcycles generally maintain or increase in value over time as the supply of restorable machines diminishes. The key word is "correctly" — restorations using incorrect parts, non-original finishes or shortcuts do not hold value the same way. Factory-correct, documented restorations of significant machines are the most reliable in terms of maintained collector value.',
    },
    {
      question: 'How much does motorcycle engine rebuilding cost?',
      answer:
        'A two-stroke engine rebuild costs approximately $800–$2,500 in labour plus parts, which vary by model from $300–$700 for common machines to $1,500–$3,000+ for rare models requiring genuine OEM components. A four-stroke engine rebuild typically runs $1,200–$3,500 in labour plus parts. Cylinder boring, crankshaft rebuilds and complex machining are additional.',
    },
    {
      question: 'What is vapour blasting?',
      answer:
        'Vapour blasting (also called wet blasting or aqua blasting) uses a slurry of fine glass media and water propelled by compressed air to restore alloy components to their factory cast finish. Unlike dry bead blasting or sandblasting, it does not remove material from precision surfaces or damage components. The result is the clean, uniform, slightly bright finish you see on correctly restored Japanese motorcycle engine cases and alloy components. It is the correct process for vintage motorcycle restoration and cannot be replicated by any other finishing method.',
    },
    {
      question: 'What is zinc plating?',
      answer:
        'Zinc plating is an electrochemical process that applies a thin layer of zinc to steel hardware — bolts, studs, brackets, clips and small steel components. Vintage Japanese motorcycles left the factory with most steel hardware zinc plated. A correct restoration matches this original specification, including the specific finish variant (clear bright zinc or iridescent/yellow passivate) specified for that model, year and manufacturer. Replacing zinc-plated hardware with stainless steel fasteners is a common restoration shortcut that is immediately visible to knowledgeable inspectors.',
    },
    {
      question: 'Do you restore dirt bikes?',
      answer:
        'Yes. Vintage and classic motocross machines — Honda CR, Yamaha YZ, Kawasaki KX, Suzuki RM from the 1970s through the 1990s — are among our most common restoration projects at Lang Restorations in Traralgon. We have extensive model-specific knowledge of these machines and have completed restorations across all three eras of Japanese two-stroke motocross.',
    },
    {
      question: 'Do you restore vintage motorcycles?',
      answer:
        'Yes — vintage and classic motorcycle restoration is our primary work. We specialise in Japanese machines from the 1960s through to the early 2000s: Honda, Yamaha, Kawasaki and Suzuki. British classics are accepted for assessment individually. We are based in Traralgon, Gippsland, and accept machines from across Victoria and Australia.',
    },
    {
      question: 'Can you source parts for a restoration?',
      answer:
        'Yes. Parts sourcing is part of the service on every restoration we undertake. We pursue genuine OEM parts before NOS (New Old Stock) alternatives, which we pursue before quality reproduction parts. For rare machines or components, we have established networks across Australia and internationally. Some components for very early machines need to be manufactured — a capability available in-house.',
    },
    {
      question: 'Do you restore Honda motorcycles?',
      answer:
        'Yes. Honda motorcycles are among the most common machines we work on — including Honda CR motocross machines, Honda Z50 Mini Trail and Monkey minibikes, and classic Honda road bikes. We have deep experience across the full Honda vintage and classic range and have completed restorations to the highest collector standard.',
    },
    {
      question: 'Do you restore Yamaha and Kawasaki motorcycles?',
      answer:
        'Yes. Yamaha YZ and WR motocross and enduro machines, Kawasaki KX motocross machines, and classic road bikes from both manufacturers are machines we restore. We have model-specific experience across the Japanese manufacturers\' vintage and classic ranges.',
    },
    {
      question: 'Do you restore motorcycles in Traralgon?',
      answer:
        'Yes. Lang Restorations is based in Traralgon, in the Latrobe Valley, Gippsland, Victoria. We are accessible to customers across the Gippsland region — Sale, Bairnsdale, Leongatha, Wonthaggi, Warragul and surrounds — as well as across Victoria and Australia. Engine components, parts and smaller complete machines can be freighted to the workshop from anywhere in Australia.',
    },
    {
      question: 'What is the difference between a restoration and a refurbish?',
      answer:
        'A refurbish typically covers the mechanical necessities — making the machine run and ride safely — without addressing factory-correct presentation of every component. A restoration returns the machine to factory specification across mechanical, structural and cosmetic elements. The distinction matters significantly for collectors and anyone purchasing with resale or show value in mind.',
    },
    {
      question: 'How do you quote a restoration?',
      answer:
        'Every restoration at Lang Restorations begins with a disassembly and condition assessment. We cannot quote accurately until we know what we are actually dealing with — no restoration can be honestly priced from photographs or a general description. Following the assessment, we provide a written breakdown of discovered work and costs before proceeding. The assessment cost is credited against the final invoice on completing projects.',
    },
    {
      question: 'Do you offer standalone services like vapour blasting or zinc plating?',
      answer:
        'Yes. Vapour blasting, zinc plating, aluminium TIG welding and engine rebuilds are all offered as standalone services — you do not need to commit to a complete restoration to access these capabilities. We regularly work with collectors and home restorers who are handling the overall project themselves but need specific specialist services. Components can be posted or freighted to our Traralgon workshop from across Australia.',
    },
  ],
}
