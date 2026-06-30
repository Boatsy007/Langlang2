import type { ProcessStep, Testimonial, FaqItem } from '@/types'

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
  email: 'info@langrestorations.com.au',
  instagram: 'https://www.instagram.com/langrestorations/',
  facebook: 'https://www.facebook.com/langrestorations/',
  website: 'https://langrestorations.com.au',
}

// ─── Homepage Hero ────────────────────────────────────────────────────────────

export const homepage = {
  hero: {
    line1: 'Motorcycle Restorations',
    line2: 'Without Compromise.',
    subheading: 'Specialist motorcycle restoration in Traralgon, Gippsland — vintage motocross, classic road motorcycles and iconic Honda minibikes rebuilt to factory standard for collectors and riders across Australia.',
    ctaPrimary: { label: 'View Featured Builds', href: '/builds' },
    ctaSecondary: { label: 'Motorcycles For Sale', href: '/for-sale' },
  },

  about: {
    label: 'Established 2004',
    headline: 'Two decades of restoration work that holds up under scrutiny.',
    ownerQuote: `I've been restoring motorcycles from this workshop since 2004 and I get just as invested in every build that comes through the door. Whether it's a vintage motocross weapon from the golden era of two-stroke racing, a Honda Z50 that's been in someone's family for decades, or a classic road bike with a story attached — every one of them gets my full attention.`,
    body: `Lang Restorations is a specialist motorcycle restoration workshop based in Traralgon, Gippsland. This is not a volume operation. We take on a limited number of projects each year so that each one receives the time and expertise it demands — and we do not move to the next stage until the current one is right.`,
    values: ['Factory Correct', 'Fully Documented', 'Australian Owned'],
    stats: [{ value: '20+', label: 'Years Experience' }],
  },

  services: {
    label: 'Capabilities',
    headline: 'What We Do.',
    body: 'Complete motorcycle restoration capabilities under one roof — engine rebuilds, vapour blasting, aluminium TIG welding, zinc plating, frame repairs and ground-up restorations.',
    cta: { label: 'View All Services', href: '/services' },
  },

  builds: {
    label: 'Featured Builds',
    headline: 'Recent Projects.',
    body: 'A selection of completed motorcycle restorations from the Lang Restorations workshop — each documented from disassembly to final sign-off.',
    cta: { label: 'View All Projects', href: '/builds' },
  },

  forSale: {
    label: 'For Sale',
    headline: 'Bikes Available Now.',
    body: 'Professionally restored motorcycles ready for a new owner. Every bike fully rebuilt, documented and presented to collector standard.',
    cta: { label: 'View Full Showroom', href: '/for-sale' },
  },

  finalCta: {
    label: 'Get in Touch',
    headline: 'Ready to Restore Something Special?',
    body: `Tell us about your motorcycle — what it is, what condition it's in and what you want to achieve. We'll come back to you with an honest assessment of the work involved, a clear timeframe and a real price. No obligation, no surprises.`,
    ctaPrimary: { label: 'Start Your Restoration', href: '/contact' },
    ctaSecondary: { label: 'View Current Motorcycles', href: '/for-sale' },
  },
}

// ─── Homepage: Intro paragraphs (used in HomePage.tsx) ───────────────────────

export const homepageIntroParagraphs = [
  `Lang Restorations has specialised in motorcycle restoration from its Traralgon, Gippsland workshop since 2004. Over more than twenty years, the business has built a reputation across Victoria and interstate for restorations that are correct in the engineering, sound in the mechanics and finished to a standard that collectors and knowledgeable riders recognise immediately — machines rebuilt the right way, using the right techniques and the right materials.`,
  `This is not a volume workshop. Every restoration begins with a full inspection and an honest assessment before a single dollar of work is committed. It ends with a motorcycle that is correct, not merely presentable — and with documentation that records every stage of the process, supporting provenance and adding demonstrable value to the machine.`,
]

export const homepageIntroStats = [
  { value: '20+', label: 'Years Experience' },
  { value: '100+', label: 'Restorations Completed' },
  { value: '3', label: 'Restoration Disciplines' },
  { value: 'VIC', label: 'Gippsland, Victoria' },
]

// ─── Homepage: Why Lang Restorations ─────────────────────────────────────────

export const whyItems = [
  {
    title: 'Factory-Correct Restorations',
    body: 'Every specification is verified against factory documentation — torque values, material finishes, hardware grades, assembly sequences. The result is a motorcycle restored to the standard it left the factory, not an approximation of it. Judges and experienced collectors notice the difference immediately.',
  },
  {
    title: 'Collector-Quality Finishes',
    body: 'Vapour blasting restores alloy components to their factory cast finish without removing material. Zinc plating returns steel hardware to its original appearance. Period-correct paint and decals are sourced or reproduced precisely. These are the details that distinguish a complete restoration from one that is almost complete.',
  },
  {
    title: 'Fully Documented Process',
    body: 'Every restoration is photographed at disassembly and at each stage throughout. You receive a complete visual record of the condition found and the work performed — documentation that establishes provenance, supports insurance valuation and adds measurable value to a collector machine.',
  },
  {
    title: 'Owner-Operated Workshop',
    body: 'Nick Lang personally inspects, assesses and signs off on every motorcycle that leaves the workshop. Your machine is worked on by someone with more than two decades of hands-on experience — not delegated to an apprentice or processed on a production line.',
  },
  {
    title: 'Correct Parts, Properly Sourced',
    body: 'Genuine OEM parts wherever they can be found. Quality NOS or correct-specification reproduction where they cannot. No substitutions that compromise function, longevity or correctness. Parts are sourced from Honda, Yamaha, Kawasaki and Suzuki networks, specialist suppliers and established private collections globally.',
  },
  {
    title: 'Interstate Accepted',
    body: 'Based in Traralgon, Gippsland, the workshop regularly receives motorcycles from Melbourne, across Victoria and from other states. Most motorcycle freight services handle transport straightforwardly, and we can advise on the logistics. Distance has never been a reason to settle for a lesser restoration.',
  },
]

// ─── Homepage: Workshop Philosophy ───────────────────────────────────────────

export const philosophyItems = [
  {
    word: 'Precision',
    body: 'Factory torque specifications. Clearances measured and verified. The correct lubricant in the correct location at the correct quantity. Precision is not the finishing touch — it is the foundation. Everything built on that foundation performs correctly and lasts.',
  },
  {
    word: 'Honesty',
    body: 'A clear account of what the restoration involves — and what it costs — before any work begins. No surprises, no scope creep without conversation. If a component is beyond cost-effective repair, we say so, because that information belongs to you before you commit to the project.',
  },
  {
    word: 'Heritage',
    body: 'A vintage motorcycle is a historical object as much as a mechanical one. The engineering decisions, aesthetic choices and material specifications of its era are part of its value and identity. A correct restoration preserves all of that. A shortcut erodes it permanently.',
  },
  {
    word: 'Craftsmanship',
    body: 'The work that cannot be seen when the motorcycle is assembled matters as much as the finish that can. Properly prepared mating surfaces. Correct thread engagement. Seals fitted to the right depth and torqued correctly. The invisible work is what separates a rebuilt machine from one that is genuinely restored.',
  },
  {
    word: 'Responsibility',
    body: 'We are custodians of machines that cannot be replaced. A 1970 Honda Z50 in correct original condition represents more than fifty years of history. Rushing the work, cutting corners on materials or ignoring factory specifications causes irreversible damage to something that matters. We take that seriously.',
  },
]

// ─── Homepage: Before & After section ────────────────────────────────────────

export const homepageBeforeAfter = {
  label: 'Restoration Quality',
  headline: 'Before & After.',
  body: 'Drag the slider to see the transformation. Every machine that leaves this workshop has been through the same documented process — complete disassembly, full component inspection and a ground-up rebuild to factory specification.',
}

// ─── Homepage: FAQ ────────────────────────────────────────────────────────────

export const homepageFaq: FaqItem[] = [
  {
    question: 'How much does a motorcycle restoration cost in Australia?',
    answer: `Restoration costs vary significantly based on the machine's condition, the scope of work required and parts availability. A single-component job — a carburettor rebuild, a set of engine cases vapour blasted — is priced accordingly. A complete ground-up restoration of a vintage motocross or classic road motorcycle is a different scope entirely, and is quoted only after the machine has been fully inspected and assessed. At Lang Restorations, every project begins with an honest assessment and a clear quote before any work is committed. There are no lowball estimates that compound during the project. Contact us with your make, model, year and a description of the machine's condition to begin the conversation.`,
  },
  {
    question: 'How long does a motorcycle restoration take?',
    answer: `A complete restoration typically takes several months from initial inspection to final delivery. The timeline depends on the project scope, the parts situation for that specific machine and what is discovered once disassembly begins — motorcycles sometimes reveal hidden damage or previous repairs that add to the scope. Genuine OEM or NOS parts for vintage Japanese motorcycles can require extended sourcing from specialist suppliers. Lang Restorations deliberately limits the number of active projects to ensure each receives the attention it requires without being rushed. A realistic timeframe is provided upfront and communicated throughout the project.`,
  },
  {
    question: 'Do you restore vintage motocross bikes?',
    answer: `Vintage motocross restoration is one of the core specialisations at Lang Restorations. The workshop has extensive experience with the two-stroke motocross machines from Honda, Yamaha, Kawasaki and Suzuki that defined the sport from the mid-1970s through the 1990s — Honda CR, Yamaha YZ, Kawasaki KX and related machines. These motorcycles present specific challenges: many parts are obsolete, factory documentation is inconsistent, and decades of hard racing use combined with amateur maintenance create problems that are not always apparent before disassembly. We have the tooling, the parts contacts and the model-specific knowledge to restore them correctly. Browse the completed projects gallery for examples.`,
  },
  {
    question: 'Do you restore Honda Z50 and Monkey minibikes?',
    answer: `Honda Z50 Mini Trail and Monkey minibike restoration is a significant and ongoing part of the work at Lang Restorations. The workshop has restored examples spanning five decades of Honda Mini Trail and Monkey production — from early K-series and J-series machines through to modern anniversary editions. Each generation presents its own challenges: parts availability, correct factory colour specifications, period-accurate decals and the precise assembly details that differentiate a correct restoration from a sympathetic repaint. We source genuine Honda OEM parts wherever possible. If you have a Honda Z50, Monkey, Dax or related minibike that deserves proper attention, contact us to discuss the project.`,
  },
  {
    question: 'Can you rebuild vintage motorcycle engines?',
    answer: `Complete engine rebuilds are central to the restoration work at Lang Restorations. We rebuild two-stroke and four-stroke engines for vintage and classic motorcycles — full disassembly, component measurement against factory specifications, bore inspection and machining where required, bearing replacement throughout, correct seal and gasket specification, and assembly to factory torque values. Two-stroke engines receive close attention to porting condition, power valve operation, crank seal integrity and correct jetting. For two-stroke crankcases, we perform pressure testing to verify seal integrity before final assembly. Engines can be submitted as standalone projects without the complete motorcycle.`,
  },
  {
    question: 'Do you offer vapour blasting for motorcycle parts?',
    answer: `Vapour blasting is one of the core services at Lang Restorations and is used on alloy components throughout every full restoration. It is also available as a standalone service. We accept components posted from anywhere in Australia. Vapour blasting — also called wet blasting or aqua blasting — uses a water-and-glass-media slurry to clean and restore the factory cast finish on alloy without removing material, making it the correct approach for precision engine parts and hubs. Engine cases, cylinder heads and barrels, carburettor bodies, brake and wheel hubs, swing arms and other cast or machined alloy are all suitable. Contact us with details and photos.`,
  },
  {
    question: 'Do you restore classic road motorcycles and British bikes?',
    answer: `Lang Restorations restores classic road motorcycles alongside vintage motocross and minibike machines. Completed projects include British classics — including a 1954 BSA Bantam D3 Plunger, one of the earliest machines the workshop has taken on — as well as classic Japanese road bikes. The workshop's core expertise is Japanese motorcycles from Honda, Yamaha, Kawasaki and Suzuki, but British and European classics are assessed individually. Where we have the specific knowledge and parts access to do the work correctly, we take the project. Where we do not, we say so rather than proceed on guesswork.`,
  },
  {
    question: 'What motorcycles do you specialise in?',
    answer: `Lang Restorations specialises in three primary areas: vintage and classic motocross motorcycles (Honda CR, Yamaha YZ, Kawasaki KX and Suzuki RM two-strokes from the 1970s through the 1990s); Honda Mini Trail and Monkey minibikes (Honda Z50 series spanning multiple decades of production); and classic road motorcycles (primarily Japanese machines, plus selected British classics). The common thread is not the marque or the era — it is that these are machines their owners care about. They arrive because the owner understands the difference between a motorcycle that looks correct and one that is correct.`,
  },
  {
    question: 'Can I send my motorcycle from interstate?',
    answer: `Yes. Interstate customers are a regular part of the work at Lang Restorations. Motorcycles are freighted to the Traralgon workshop from Melbourne, across Victoria and from Queensland, New South Wales, South Australia and Western Australia. Most reputable motorcycle freight services handle the transport straightforwardly. We can advise on the logistics process — crating requirements, preferred carriers and collection from the freight depot — if you are new to this. Distance has never been a reason to accept a lower standard of restoration work.`,
  },
  {
    question: 'Do you restore motorcycles for show or competition judging?',
    answer: `Show and competition-quality restorations require the highest level of attention to correctness — factory-accurate finishes verified against original specifications, period-correct components sourced rather than substituted, documented provenance and the kind of precision that knowledgeable judges and collectors immediately identify. Lang Restorations has completed restorations that hold up to that scrutiny across multiple disciplines: vintage motocross machines, Honda Z50 variants in rare factory colour specifications, and British classics. Every restoration we undertake is approached as though it will be examined closely by someone who knows exactly what correct looks like.`,
  },
]

// ─── Process Steps ────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    name: 'Consult',
    description: 'Every restoration begins with a direct conversation about the motorcycle, your goals and what correct completion looks like. An honest assessment of scope, cost and timeline is provided before any commitment is made.',
  },
  {
    number: 2,
    name: 'Inspect',
    description: 'The motorcycle is fully disassembled, cleaned and documented. Every component is inspected and measured. Nothing is assumed. The condition report produced at this stage is shared with you and informs all decisions that follow.',
  },
  {
    number: 3,
    name: 'Restore',
    description: 'Components are addressed individually and correctly: vapour blasted, rebuilt to factory specification, TIG welded, zinc plated or sourced and replaced. Engine cases, cylinder heads, hubs, carburettors, hardware — each element returned to the correct standard.',
  },
  {
    number: 4,
    name: 'Build',
    description: 'Assembly is carried out with factory torque specifications, correct lubricants and new seals and gaskets throughout. Period-correct details are verified at each stage before the build progresses to the next.',
  },
  {
    number: 5,
    name: 'Complete',
    description: 'The finished motorcycle is inspected, started and reviewed before delivery. Full photographic documentation of the restoration accompanies the machine, establishing provenance and adding demonstrable value.',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    quote: "Nick's work is next level. The attention to detail is unreal — best vintage bike restoration work I've seen in years.",
    author: 'Dave',
    role: 'Vintage MX Rider',
  },
  {
    quote: "Straight shooter, knows his stuff. My Husqvarna came back looking better than it did on the showroom floor in '74.",
    author: 'Mick',
    role: 'Classic Collector',
  },
]

// ─── About Page ──────────────────────────────────────────────────────────────

export const about = {
  seo: {
    title: 'About Lang Restorations | Motorcycle Restoration Specialist — Traralgon, Victoria',
    metaDescription:
      'Nick Lang has restored vintage and classic motorcycles from his Traralgon, Gippsland workshop since 2004. Two decades of factory-correct restorations for riders and collectors across Victoria and Australia.',
  },

  hero: {
    headline: 'The Workshop.',
    subheading: 'Traralgon, Gippsland, Victoria. Est. 2004.',
  },

  sections: [
    {
      heading: 'Twenty Years. One Standard.',
      body: `Nick Lang has been restoring motorcycles from his Traralgon, Gippsland workshop since 2004. Over more than two decades, Lang Restorations has built a reputation across Victoria, interstate and among the broader Australian collector community for work that holds up under scrutiny — machines that are correct in the engineering, documented throughout the restoration process and finished to a standard that lasts beyond the first close inspection.

The work centres on three disciplines: vintage and classic motocross motorcycles from the golden era of two-stroke racing; Honda Mini Trail and Monkey minibikes spanning five decades of production; and classic road motorcycles from Honda, Yamaha, Kawasaki, Suzuki and selected British manufacturers. These are not categories chosen for convenience — they are the machines Nick has spent twenty years developing specific, deep knowledge of, and the machines where the workshop's expertise is most directly demonstrated in the finished result.

Lang Restorations is not a volume operation. A deliberate decision is made each year to limit the number of active projects so that each receives the attention it demands. The waiting list exists for a reason: the work cannot be done correctly any faster than it is currently being done, and we have no interest in doing it incorrectly.`,
    },
    {
      heading: 'The Machines We Restore',
      body: `The machines that pass through the Lang Restorations workshop span more than seventy years of motorcycle production. At one end, a 1954 BSA Bantam D3 Plunger — a machine that predates most of its eventual owners and requires parts sourcing, engineering knowledge and historical reference that most workshops cannot support. At the other, a 2017 Honda Z50 Monkey 50th Anniversary Chrome Edition — a modern collectible requiring a different kind of precision: factory-correct colour, unmodified specification and preservation rather than rebuilding.

Between those two points: the two-stroke motocross machines that defined competitive off-road racing from the mid-1970s through the 1990s. Honda CR series machines from the 125 through to the 500. Yamaha YZ and YZ-WR machines. Kawasaki KX. These motorcycles attract serious collector attention and equally serious restoration challenges — obsolete parts, inconsistent factory documentation, decades of hard racing use and the legacy of maintenance that prioritised performance over longevity.

Honda Z50 Mini Trail and Monkey minibikes are an ongoing and important part of the work. These machines are deceptively complex to restore correctly. A 1970 Honda Z50 A K2 in correct GE Red with genuine OEM hardware, correct decals and factory-accurate assembly is a fundamentally different object from one that has been cleaned up and resprayed. The difference matters — to collectors, to judges and to the historical record these machines represent.`,
    },
    {
      heading: 'How Restorations Are Approached',
      body: `Every restoration at Lang Restorations begins with the same process, regardless of the machine or its condition. The motorcycle is fully disassembled. Every component is cleaned, inspected under good light and measured against factory specifications where those specifications exist. The condition of each part is documented photographically. Nothing is assumed to be serviceable — everything is verified.

From that foundation, the restoration proceeds methodically. Engine components are measured and assessed. Alloy components — engine cases, cylinder heads and barrels, carburettor bodies, hubs — are vapour blasted to restore the factory cast finish without removing material. Cracked or damaged aluminium is repaired by TIG welding before the blasting stage. Steel hardware — bolts, studs, brackets, clips — is zinc plated to factory specification. The frame is inspected for cracks at known stress points and structurally assessed before any investment of work is placed on top of it.

Assembly follows with factory torque specifications, correct lubricants and new seals and gaskets throughout. Period-correct details are verified at each stage before the build progresses. The finished machine is inspected, started and reviewed before delivery. Full photographic documentation of the process accompanies the motorcycle, establishing a provenance record that supports valuation, insurance and the machine's standing as a correctly restored example.

We do not cut corners on work that cannot be seen. The preparation of mating surfaces, the correct torque on a fastener that will never be accessed again, the right sealant in the right location — these are the decisions that separate a machine that performs correctly and lasts from one that presents well and fails quietly.`,
    },
    {
      heading: 'Working With Lang Restorations',
      body: `The process starts with a consultation. Bring the motorcycle to the Traralgon workshop, or send us detailed photographs and a thorough description of the machine and its known history. We will give you an honest assessment of what it needs, what that work will involve, what it will cost and how long it will realistically take — before any work is committed.

Lang Restorations works with customers from across Gippsland, metropolitan Melbourne, regional Victoria and interstate. Motorcycles are regularly freighted to the workshop from Queensland, New South Wales, South Australia and beyond. We assist with transport logistics for customers who are unfamiliar with the process.

If you have a motorcycle that deserves proper attention — a restoration, an engine rebuild, a single component that needs specialist work — get in touch. The conversation is always the right place to start.`,
    },
  ],
}

// ─── Contact Page ─────────────────────────────────────────────────────────────

export const contact = {
  seo: {
    title: 'Contact Lang Restorations | Traralgon, Gippsland Victoria',
    metaDescription:
      'Enquire about vintage motorcycle restoration, classic motorcycle rebuilds, engine work, vapour blasting or zinc plating. Lang Restorations, Traralgon. Call 0439 744 632.',
  },
  headline: 'Get in Touch.',
  body: `Tell us about your motorcycle. What it is, what condition it's in, what you're hoping to achieve and any history you know about it. That information lets us give you a genuinely useful first response rather than a generic quote. We reply to every enquiry personally.`,
  note: `The workshop is based in Traralgon, Gippsland, Victoria. We work with customers from across the state and interstate — motorcycles arrive from Melbourne, regional Victoria, Queensland, New South Wales and beyond. Freight logistics are straightforward and we can advise on the process if you need guidance. Distance has never been a reason to accept a lesser restoration.`,
}
