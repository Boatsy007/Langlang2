import { Link } from 'react-router-dom'
import { business } from '@/data/siteContent'
import { useInView } from '@/hooks/useInView'
import { Seo } from '@/components/Seo'
import { Picture } from '@/components/Picture'
import {
  buildGraph,
  businessNode,
  webPageNode,
  breadcrumbNode,
  articleFaqNode,
} from '@/data/schema'

const BASE = 'https://langrestorations.com.au'
const URL = `${BASE}/motorbike-shop-traralgon`
const link = 'text-red-400 underline underline-offset-2 hover:text-red-300 transition-colors'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
    >
      {children}
    </div>
  )
}

function ContactButton({ label = 'Contact the Workshop' }: { label?: string }) {
  return (
    <Link
      to="/contact"
      className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors"
    >
      {label}
    </Link>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-zinc-400 leading-relaxed">
          <span className="shrink-0 mt-[9px] w-1.5 h-1.5 rounded-full bg-red-500" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const faqs = [
  { q: 'Is there a motorcycle restoration shop in Traralgon?', a: 'Yes. Lang Restorations is based in Traralgon, Victoria and specialises in vintage, classic and motocross motorcycle restoration.' },
  { q: 'Does Lang Restorations do motorcycle engine rebuilds?', a: 'Yes. Engine rebuilding can form part of a complete restoration depending on the motorcycle and the work required.' },
  { q: 'Does Lang Restorations service modern road bikes?', a: 'Lang Restorations focuses primarily on restoration work rather than routine high-volume servicing. Contact the workshop to discuss whether your motorcycle is suitable.' },
  { q: 'Can you restore an old motorcycle that has not run for years?', a: 'In many cases, yes. The motorcycle will need to be assessed to determine engine condition, corrosion, missing parts and the overall scope of restoration.' },
  { q: 'Do you restore motocross bikes?', a: 'Yes. Vintage and classic motocross motorcycles form part of Lang Restorations’ work.' },
  { q: 'Do you restore Honda Z50s?', a: 'Yes. Honda Z50 minibikes are among the types of vintage motorcycles restored by Lang Restorations.' },
  { q: 'Do you restore Honda CR500s?', a: 'Lang Restorations has completed Honda CR restorations including a 1996 CR500R Jeremy McGrath tribute.' },
  { q: 'Do you sell restored motorcycles?', a: 'Selected restored motorcycles are offered through the Bikes for Sale section when available.' },
  { q: 'Do you do vapour blasting in Traralgon?', a: 'Vapour blasting is one of the restoration processes offered for suitable motorcycle components.' },
  { q: 'Do you do zinc plating and parts restoration?', a: 'Yes. Parts restoration and zinc plating can form part of motorcycle restoration work.' },
  { q: 'How much does motorcycle restoration cost in Traralgon?', a: 'Cost depends on the motorcycle, condition, parts required, labour and the level of restoration. A proper assessment is needed before giving an accurate estimate.' },
  { q: 'How long does motorcycle restoration take?', a: 'A complete restoration can take several months. Rare parts, machining, engine work and refinishing can extend the timeline.' },
  { q: 'Can I bring a motorcycle from outside Traralgon?', a: 'Yes. Lang Restorations works with owners from Gippsland and other parts of Victoria. Contact the workshop to discuss transport and project suitability.' },
]

const serviceAreas = [
  'Traralgon', 'Morwell', 'Moe', 'Churchill', 'Sale', 'Warragul',
  'Latrobe Valley', 'Greater Gippsland', 'Melbourne', 'Regional Victoria',
]

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-5 scroll-mt-24">
      {children}
    </h2>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-zinc-400 leading-relaxed text-lg mb-4">{children}</p>
}

export function MotorbikeShopTraralgonPage() {
  const metaTitle = 'Motorbike Shop Traralgon | Motorcycle Restoration & Engine Rebuilds'
  const metaDescription =
    'Looking for a motorbike shop in Traralgon? Lang Restorations specialises in vintage and classic motorcycle restoration, engine rebuilds, vapour blasting, parts restoration and selected bikes for sale in Traralgon, Victoria.'

  return (
    <main className="min-h-screen bg-zinc-950">
      <Seo
        title={metaTitle}
        description={metaDescription}
        canonical={URL}
        ogTitle={metaTitle}
        ogDescription={metaDescription}
        ogImage={`${BASE}/images/services/vintage-restoration.jpg`}
        jsonLd={buildGraph([
          businessNode,
          webPageNode({
            url: URL,
            name: metaTitle,
            description: metaDescription,
            image: `${BASE}/images/services/vintage-restoration.jpg`,
          }),
          breadcrumbNode([
            { name: 'Home', url: `${BASE}/` },
            { name: 'Motorbike Shop Traralgon', url: URL },
          ]),
          articleFaqNode(URL, faqs.map((f) => ({ question: f.q, answer: f.a }))),
        ])}
      />

      {/* Hero */}
      <section className="relative py-24 sm:py-32 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-6">
                {business.location} · Est. {business.established}
              </p>
              <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
                Motorbike Shop Traralgon — Vintage Motorcycle Restoration Specialists
              </h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                If you are searching for a motorbike shop in Traralgon, Lang Restorations is a
                specialist motorcycle restoration workshop focused on vintage, classic and
                motocross motorcycles.
              </p>
              <div className="flex flex-wrap gap-4">
                <ContactButton />
                <Link
                  to="/for-sale"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-transparent text-white text-sm font-semibold ring-1 ring-zinc-700 hover:ring-zinc-500 hover:bg-zinc-900 transition-all"
                >
                  Bikes for Sale
                </Link>
              </div>
            </div>
            <FadeIn className="rounded-2xl overflow-hidden ring-1 ring-zinc-800 bg-zinc-900">
              <Picture
                src="/images/services/vintage-restoration.jpg"
                alt="Motorcycle restoration workshop Traralgon Victoria"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="eager"
                fetchPriority="high"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <P>
            Based in Traralgon, Victoria, Lang Restorations works on motorcycles that need more
            than a basic service or quick repair. Our work includes full{' '}
            <Link to="/services/vintage-motorcycle-restoration" className={link}>motorcycle restoration</Link>,
            engine rebuilding, parts restoration, vapour blasting, aluminium repair, zinc plating,
            frame repairs and selected restored motorcycles for sale.
          </P>
          <P>
            We work with owners who want their motorcycle restored properly — whether it is a
            classic bike that has been sitting for decades, a motocross bike from the 1980s or
            1990s, a vintage <Link to="/blog/honda-z50-history-value-buying-guide" className={link}>Honda Z50</Link>{' '}
            mini bike, or a motorcycle with personal or collector significance. If you are looking
            for a Traralgon motorbike shop that specialises in restoration rather than general
            servicing, Lang Restorations can help.
          </P>

          <div className="mt-14">
            <H2 id="restoration">Motorcycle Restoration in Traralgon</H2>
            <P>
              Motorcycle restoration is very different from ordinary motorcycle repair. A normal
              repair may focus on fixing one problem. A restoration looks at the motorcycle as a
              complete machine. That can involve:
            </P>
            <Bullets items={[
              'Complete disassembly', 'Engine inspection and rebuilding', 'Frame restoration',
              'Suspension rebuilding', 'Brake restoration', 'Wheel restoration', 'Electrical repairs',
              'Vapour blasting', 'Zinc plating', 'Aluminium refinishing', 'Fastener restoration',
              'Paint and cosmetic restoration', 'Parts sourcing', 'Final assembly', 'Testing and adjustment',
            ]} />
            <P>
              At Lang Restorations, the goal is not simply to make an old motorcycle look better.
              The aim is to restore the bike properly, with attention to mechanical condition,
              finish, originality and the details that make each model unique.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="vintage">Vintage Motorcycle Restoration Traralgon</H2>
            <P>
              Older motorcycles require a different approach from modern bikes. A motorcycle that
              is 30, 40 or 50 years old may have been repaired many times throughout its life. It
              may have incorrect replacement parts, worn engine components, damaged threads,
              previous welding, corrosion, old electrical repairs, missing hardware, non-original
              finishes, seized components, poorly matched paint or aftermarket parts fitted over
              decades.
            </P>
            <P>
              That is why vintage motorcycle restoration often takes more than simply ordering new
              components and bolting them together. The bike needs to be assessed carefully to
              determine what can be reused, what should be restored and what needs replacement.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="gippsland">Classic Motorcycle Restoration in Gippsland</H2>
            <P>
              Lang Restorations is based in Traralgon and works with motorcycle owners throughout
              Gippsland and Victoria. For riders and collectors in areas such as Traralgon, Morwell,
              Moe, Churchill, Sale, Warragul and surrounding regions, having a specialist
              restoration workshop in Gippsland means you do not necessarily have to send a project
              interstate or across Melbourne.
            </P>
            <P>
              The workshop focuses on older motorcycles where attention to detail matters — Japanese
              classics, vintage motocross bikes, mini bikes and older British motorcycles.
            </P>
          </div>

          {/* Engine image */}
          <FadeIn className="my-12 rounded-2xl overflow-hidden ring-1 ring-zinc-800 bg-zinc-900">
            <Picture
              src="/images/services/engine-rebuild.jpg"
              alt="Vintage motorcycle engine rebuild Traralgon"
              className="w-full object-cover aspect-video"
              loading="lazy"
            />
          </FadeIn>

          <div className="mt-14">
            <H2 id="engine-rebuilds">Motorcycle Engine Rebuilds Traralgon</H2>
            <P>
              Engine rebuilding is often one of the most important parts of a motorcycle
              restoration. A fresh coat of paint means very little if the engine underneath is worn,
              damaged or unreliable. A{' '}
              <Link to="/services/engine-rebuilds" className={link}>motorcycle engine rebuild</Link>{' '}
              may involve complete disassembly, cylinder inspection, piston and ring replacement,
              crankshaft inspection, bearing and seal replacement, gearbox and clutch inspection,
              cylinder machining or replating, valve work, timing components, gaskets, thread
              repairs, and cleaning and refinishing.
            </P>
            <P>
              The exact work depends on the engine and its condition. Two-stroke and four-stroke
              engines require different processes, and vintage engines often need more investigation
              because parts may be difficult to source. If you are looking for a motorcycle engine
              rebuild in Traralgon, Lang Restorations can assess the project and determine what work
              is required — our{' '}
              <Link to="/blog/how-much-does-motorcycle-engine-rebuild-cost" className={link}>engine rebuild cost guide</Link>{' '}
              explains what drives the figure.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="two-stroke">Two-Stroke Motorcycle Restoration</H2>
            <P>
              Classic two-stroke motorcycles are a major part of vintage motocross history. Models
              such as Honda CRs, Yamaha YZs, Kawasaki KXs and Suzuki RMs remain highly desirable
              among riders and collectors. Older two-strokes can be mechanically simple compared
              with four-strokes, but they often need significant restoration work because many were
              ridden hard. Common problems include:
            </P>
            <Bullets items={[
              'Worn top ends', 'Crankshaft wear', 'Damaged engine cases', 'Worn gearboxes',
              'Frame damage', 'Bent components', 'Poor previous repairs', 'Missing plastics',
              'Incorrect graphics', 'Modified suspension', 'Worn wheels', 'Damaged fasteners',
            ]} />
            <P>A proper restoration means addressing those issues rather than hiding them.</P>
          </div>

          <div className="mt-14">
            <H2 id="honda">Honda Motorcycle Restoration Traralgon</H2>
            <P>
              Honda is one of the brands most strongly represented in classic motorcycle
              restoration. Lang Restorations has worked on motorcycles including Honda CR motocross
              bikes, Honda Z50 mini bikes and other vintage Hondas. Honda models such as the{' '}
              <Link to="/blog/honda-cr500-history-jeremy-mcgrath-tribute-for-sale" className={link}>CR500</Link>,
              CR250 and <Link to="/blog/honda-z50-history-value-buying-guide" className={link}>Z50</Link>{' '}
              have strong enthusiast followings and can be highly rewarding restoration projects.
              These bikes also require attention to detail — correct finishes, engine components,
              fasteners, decals, paint and original specification can all matter to collectors.
            </P>
          </div>

          {/* Honda restored image */}
          <FadeIn className="my-12 rounded-2xl overflow-hidden ring-1 ring-zinc-800 bg-zinc-900">
            <Picture
              src="/images/projects/1996-honda-cr500-mcgrath-tribute/hero.jpg"
              alt="Honda motorcycle restoration at Lang Restorations Traralgon"
              className="w-full object-cover aspect-video"
              loading="lazy"
            />
          </FadeIn>

          <div className="mt-14">
            <H2 id="honda-z50">Honda Z50 Restoration</H2>
            <P>
              <Link to="/blog/honda-z50-history-value-buying-guide" className={link}>Honda Z50s</Link>{' '}
              have become increasingly collectible, and small size does not mean simple restoration.
              A high-quality Z50 restoration can involve a full engine rebuild, frame refinishing,
              tank restoration, correct paint, wheel and seat restoration, correct hardware, zinc
              plating, electrical repairs, exhaust restoration and correct decals and badges. Early
              Honda Z50s are especially sensitive to incorrect parts because different models can
              look very similar at first glance — correct model identification matters before
              restoration begins.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="honda-cr500">Honda CR500 Restoration</H2>
            <P>
              The <Link to="/blog/honda-cr500-history-jeremy-mcgrath-tribute-for-sale" className={link}>Honda CR500</Link>{' '}
              is one of the most iconic large-capacity two-stroke motocross bikes ever produced.
              Because many CR500s had hard lives, restoring one properly often means going far
              beyond cosmetic work — frame condition, engine cases, cylinder condition, gearbox
              components, suspension and wheels all need careful inspection.
            </P>
            <P>
              Lang Restorations has completed a{' '}
              <Link to="/builds/1996-honda-cr500-mcgrath-tribute" className={link}>1996 Honda CR500R Jeremy McGrath tribute build</Link>,
              combining the legendary CR500 platform with styling inspired by McGrath's factory
              Honda era. Selected restored motorcycles like this may also be offered for sale
              through Lang Restorations.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="japanese">Kawasaki, Yamaha and Suzuki Restoration</H2>
            <P>
              Lang Restorations is not limited to Honda motorcycles. Vintage Japanese motocross
              bikes from Kawasaki, Yamaha and Suzuki are also popular restoration candidates.
              Motorcycles such as the Kawasaki KX250, Yamaha YZ250 and Suzuki RM series remain
              highly desirable among riders who grew up with 1980s and 1990s motocross. These bikes
              often need engine work, chassis restoration, suspension rebuilding and careful parts
              sourcing.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="british">British Motorcycle Restoration</H2>
            <P>
              Older British motorcycles can require a different restoration approach again. Vintage
              British engines, electrical systems and frames can present unique challenges, and
              parts availability, correct finishes and period accuracy are often important. Projects
              such as older BSA motorcycles may require specialist work and a slower restoration
              process due to the age of the bike and the availability of correct components.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="vapour-blasting">Vapour Blasting Traralgon</H2>
            <P>
              <Link to="/services/vapour-blasting" className={link}>Vapour blasting</Link> is a useful
              restoration process for aluminium motorcycle components — engine cases, cylinder heads,
              hubs, covers, aluminium brackets and small engine components. When done correctly, it
              can create a clean, factory-style appearance without leaving the harsh surface
              associated with some dry blasting methods, which makes it particularly useful for
              vintage motorcycle restorations.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="zinc-plating">Zinc Plating and Fastener Restoration</H2>
            <P>
              Small details make a major difference to a restoration. Old bolts, brackets, clips and
              hardware can make a freshly restored motorcycle look unfinished.{' '}
              <Link to="/services/zinc-plating" className={link}>Zinc plating</Link> allows original
              fasteners and small steel components to be restored rather than replaced with
              inappropriate modern hardware, helping preserve the factory appearance of the bike.
              For collector-quality restorations, these details matter.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="aluminium">Aluminium Repairs and Refinishing</H2>
            <P>
              Older motorcycles often suffer damage to aluminium components. Engine cases may be
              cracked, threads stripped, covers damaged or housings repaired poorly in the past.{' '}
              <Link to="/services/aluminium-repairs" className={link}>Aluminium repair</Link> can often
              save valuable original components that would otherwise be difficult or expensive to
              replace.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="frame">Frame Repairs and Restoration</H2>
            <P>
              The frame is the foundation of the motorcycle. On old motocross bikes in particular,
              frame cracks, repairs and wear can be common. A restoration should include a proper
              inspection of the frame before refinishing — fresh paint should never be used to hide
              structural problems. Where{' '}
              <Link to="/services/frame-repairs" className={link}>repairs</Link> are required, they
              should be completed before the frame is restored cosmetically.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="parts">Motorcycle Parts Restoration</H2>
            <P>
              Not every owner needs a complete motorcycle restored. Lang Restorations also works
              with individual components.{' '}
              <Link to="/services/parts-restoration" className={link}>Parts restoration</Link> may
              include engine cases, cylinder heads, hubs, swingarms, covers, brackets, fasteners,
              wheels and small aluminium parts. This can be useful for owners completing their own
              restoration who need specialist finishing work.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="mechanic-vs-restoration">What Is the Difference Between a Motorbike Mechanic and a Restoration Shop?</H2>
            <P>
              A general motorbike mechanic usually focuses on servicing, tyres, brakes, chain and
              sprockets, general repairs, roadworthy work and fault diagnosis. A restoration
              specialist focuses on bringing older motorcycles back to a high standard, which often
              involves far more labour per bike. A restoration project may spend months in the
              workshop while parts are sourced, engines are rebuilt and components are refinished.
            </P>
            <P>
              Lang Restorations is better described as a specialist motorcycle restoration workshop
              in Traralgon rather than a high-volume general servicing shop.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="cost">How Much Does Motorcycle Restoration Cost?</H2>
            <P>
              There is no fixed price. A restoration can range from a relatively straightforward
              refurbishment to a complete ground-up build. Cost depends on condition, model, parts
              availability, engine condition, paint, machining, labour, missing components,
              restoration standard and originality requirements. The biggest mistake owners make is
              assuming every old motorcycle needs the same amount of work — two bikes of the same
              model can have completely different restoration costs. Our{' '}
              <Link to="/blog/how-much-does-motorcycle-restoration-cost" className={link}>motorcycle restoration cost guide</Link>{' '}
              breaks this down in detail.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="time">How Long Does Motorcycle Restoration Take?</H2>
            <P>
              A professional motorcycle restoration often takes several months. Some projects are
              faster; others can take much longer. Parts availability is one of the biggest factors
              — a rare engine component or discontinued part can delay a project significantly, and
              machining, paint, plating and specialist repairs can also extend the timeline. For a
              fuller explanation, see our guide to{' '}
              <Link to="/blog/how-long-does-a-motorcycle-restoration-take" className={link}>how long a motorcycle restoration takes</Link>.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="worth-it">Is Motorcycle Restoration Worth It?</H2>
            <P>
              For the right motorcycle, yes. Restoration can make sense when the bike has collector
              value, historical significance, sentimental value, strong enthusiast demand, original
              components or personal importance. It does not always make financial sense purely as
              an investment — sometimes the value comes from preserving the motorcycle. We explore
              this in{' '}
              <Link to="/blog/is-motorcycle-restoration-worth-the-cost" className={link}>is motorcycle restoration worth the cost</Link>.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="for-sale">Motorcycles for Sale in Traralgon</H2>
            <P>
              Lang Restorations also offers selected restored motorcycles for sale. These bikes are
              different from unknown used motorcycles advertised privately — when a motorcycle has
              been restored here, the workshop knows what has been done to it, which gives buyers
              greater confidence about the restoration process. Availability changes as motorcycles
              are completed and sold; check the{' '}
              <Link to="/for-sale" className={link}>Bikes for Sale</Link> section for current
              motorcycles.
            </P>
          </div>

          <div className="mt-14">
            <H2 id="why-choose">Why Choose Lang Restorations?</H2>
            <P>
              Lang Restorations focuses on a specialist area of the motorcycle industry. The
              workshop is built around restoration rather than high-volume servicing, which means
              attention can be given to correct finishes, original components, mechanical condition,
              engine rebuilding, small details, parts restoration and model accuracy. For owners who
              care about the final result, that approach matters.
            </P>
          </div>

          {/* Service areas */}
          <div className="mt-14">
            <H2 id="service-areas">Motorcycle Restoration Across Gippsland</H2>
            <P>
              Lang Restorations is based in Traralgon, Victoria, servicing owners from across
              Gippsland and further afield. Customers may come from areas including:
            </P>
            <Bullets items={serviceAreas} />
            <P>
              Owners may also arrange transport for suitable restoration projects from outside the
              local area.
            </P>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <H2 id="faq">Frequently Asked Questions</H2>
            <div className="divide-y divide-zinc-800 border-t border-zinc-800 mt-4">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="text-white font-semibold mb-2">{f.q}</h3>
                  <p className="text-zinc-400 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-28 bg-zinc-900/30 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
              Contact Lang Restorations — Traralgon
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              If you are looking for a motorbike shop in Traralgon that specialises in vintage,
              classic and motocross motorcycle restoration, the first step is understanding exactly
              what your bike needs. Whether you have a complete motorcycle, an unfinished project or
              a bike that has been sitting for decades, get in touch to discuss it.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <ContactButton label="Contact the Workshop" />
              <Link
                to="/for-sale"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-transparent text-white text-sm font-semibold ring-1 ring-zinc-700 hover:ring-zinc-500 hover:bg-zinc-900 transition-all"
              >
                View Bikes for Sale
              </Link>
            </div>
            <p className="text-sm text-zinc-600 mt-8">
              Lang Restorations · {business.location} ·{' '}
              <a href={`tel:${business.phone.replace(/\s/g, '')}`} className={link}>{business.phone}</a>
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
