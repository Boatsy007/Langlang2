import type { BlogPost } from '@/types'

export const motorcycleWontStart10ThingsToCheck: BlogPost = {
  slug: 'motorcycle-wont-start-10-things-to-check',
  title: "Motorcycle Won't Start? 10 Things to Check Before Calling a Mechanic",
  excerpt:
    "A motorcycle that won't start is often stopped by something simple. Work through these 10 common causes — battery, fuel, spark, kill switch, safety switches, carburettor and compression — before assuming the worst.",
  category: 'Workshop Notes',
  tags: [
    "motorcycle won't start",
    "motorbike won't start",
    'motorcycle not starting',
    "motorcycle won't crank",
    'motorcycle has no spark',
    'motorcycle battery flat',
    "motorcycle won't start after sitting",
    "motorcycle won't start cold",
    'motorcycle troubleshooting',
  ],
  publishedAt: '2026-09-23',
  updatedAt: '2026-09-23',
  readingTime: 15,
  heroImage: {
    src: '/images/services/engine-rebuild.jpg',
    alt: "Motorcycle won't start troubleshooting at Lang Restorations Traralgon — engine and fuel system inspection",
    width: 1501,
    height: 2000,
    caption: 'Diagnosing a starting problem — fuel, spark and compression, at Lang Restorations, Traralgon',
  },
  metaTitle: "Motorcycle Won't Start? 10 Things to Check Before Calling a Mechanic",
  metaDescription:
    "Motorcycle won't start? Check these 10 common causes first, including battery, fuel, spark, kill switch, carburettor, clutch switch and more.",
  toc: [
    { id: 'kill-switch', text: '1. Check the Kill Switch', level: 2 },
    { id: 'battery', text: '2. Check the Battery', level: 2 },
    { id: 'fuel', text: '3. Make Sure There Is Fuel', level: 2 },
    { id: 'safety-switches', text: '4. Side-Stand & Clutch Switches', level: 2 },
    { id: 'listen', text: '5. Listen to the Starter', level: 2 },
    { id: 'spark-plug', text: '6. Check the Spark Plug', level: 2 },
    { id: 'spark', text: '7. Check for Spark', level: 2 },
    { id: 'fuel-to-carb', text: '8. Is Fuel Reaching the Carburettor?', level: 2 },
    { id: 'carburettor', text: '9. Dirty or Blocked Carburettor', level: 2 },
    { id: 'compression', text: '10. Check Compression', level: 2 },
    { id: 'after-sitting', text: "Won't Start After Sitting", level: 2 },
    { id: 'cold', text: "Won't Start When Cold", level: 2 },
    { id: 'hot', text: "Won't Start When Hot", level: 2 },
    { id: 'cranks-no-start', text: "Cranks But Won't Start", level: 2 },
    { id: 'wont-crank', text: "Won't Crank at All", level: 2 },
    { id: 'just-clicks', text: 'Starter Just Clicks', level: 2 },
    { id: 'starts-then-dies', text: 'Starts Then Dies', level: 2 },
    { id: 'old-fuel', text: 'Can Old Fuel Stop It Starting?', level: 2 },
    { id: 'keep-cranking', text: 'Should You Keep Cranking?', level: 2 },
    { id: 'when-to-call', text: 'When to Call a Mechanic', level: 2 },
    { id: 'older-bikes', text: 'Older & Two-Stroke Motorcycles', level: 2 },
    { id: 'traralgon', text: 'Motorcycle Repairs in Traralgon', level: 2 },
  ],
  content: [
    {
      type: 'p',
      html: `Few things are more frustrating than turning the key, pressing the starter and getting nothing. Sometimes the problem is serious — but very often, a motorcycle that won't start is being stopped by something simple.`,
    },
    {
      type: 'p',
      html: `A flat battery, empty fuel tank, kill switch, loose connection or fouled spark plug can all leave a perfectly healthy bike sitting dead in the shed. Before assuming the engine needs major work, there are several basic checks worth doing first.`,
    },
    {
      type: 'p',
      html: `At Lang Restorations in Traralgon, Victoria, we regularly work on older motorcycles where starting problems can come from fuel, ignition, wiring, carburettors or internal engine wear. This guide covers the 10 most common things to check when your motorcycle won't start.`,
    },

    // ── 1 kill switch ───────────────────────────────────────────────────
    { type: 'h2', id: 'kill-switch', text: '1. Check the Kill Switch' },
    {
      type: 'p',
      html: `It sounds obvious, but it happens constantly. Make sure the engine kill switch is in the RUN position. Some motorcycles will still power up with the kill switch off, which can make the problem confusing — you may have dash lights, headlight, indicators and horn but no ignition or starter operation. If the bike suddenly refuses to start, this should be one of the first things you check.`,
    },

    // ── 2 battery ───────────────────────────────────────────────────────
    { type: 'h2', id: 'battery', text: '2. Check the Battery' },
    {
      type: 'p',
      html: `A weak or flat battery is one of the most common reasons a motorcycle will not start. Signs of a weak battery can include a starter clicking, the starter turning slowly, dash lights dimming, instruments resetting, rapid clicking from a relay, or no response at all when pressing the starter. A battery can still power lights while being too weak to start the engine.`,
    },
    {
      type: 'p',
      html: `A basic multimeter is useful. With the motorcycle switched off, a healthy fully charged 12-volt battery will usually show around 12.6 volts or slightly higher. If the voltage drops heavily when you press the starter, the battery may not have enough capacity to crank the engine properly. If the motorcycle has been sitting for weeks or months, battery condition should be one of the first things you investigate.`,
    },

    // ── 3 fuel ──────────────────────────────────────────────────────────
    { type: 'h2', id: 'fuel', text: '3. Make Sure There Is Fuel' },
    {
      type: 'p',
      html: `Never assume there is fuel in the bike. Fuel gauges can be inaccurate and older motorcycles may not have one at all, so check the tank physically. Also make sure the fuel tap is in the correct position if the motorcycle uses a manual fuel tap — settings may include ON, OFF and RES. If the fuel level is low, switching to reserve may be enough to get the bike running.`,
    },

    // ── 4 safety switches ───────────────────────────────────────────────
    { type: 'h2', id: 'safety-switches', text: '4. Check the Side-Stand and Clutch Safety Switches' },
    {
      type: 'p',
      html: `Modern motorcycles often include safety switches that prevent the engine from starting under certain conditions — commonly a side-stand switch, clutch switch and neutral switch. If one of these fails or becomes dirty, the motorcycle may refuse to start even though nothing is wrong with the engine itself.`,
    },
    {
      type: 'p',
      html: `Try putting the motorcycle in neutral, raising the side stand and pulling the clutch lever fully in. If that suddenly allows it to start, a safety switch may be involved.`,
    },

    // ── 5 listen ────────────────────────────────────────────────────────
    { type: 'h2', id: 'listen', text: '5. Listen to What Happens When You Press the Starter' },
    {
      type: 'p',
      html: `The sound the motorcycle makes can give you a useful clue:`,
    },
    {
      type: 'ul',
      items: [
        '<strong>Nothing happens</strong> — flat battery, kill switch, starter switch, clutch or side-stand switch, main fuse, wiring problem or starter relay',
        '<strong>One click</strong> — often a weak battery, starter relay, starter motor or a poor battery connection',
        '<strong>Rapid clicking</strong> — commonly a battery without enough power to operate the starter',
        '<strong>Engine cranks normally but will not start</strong> — the problem is more likely fuel, spark, compression or ignition timing',
      ],
    },
    {
      type: 'p',
      html: `Identifying which of these is happening narrows the diagnosis considerably.`,
    },

    // ── 6 spark plug ────────────────────────────────────────────────────
    { type: 'h2', id: 'spark-plug', text: '6. Check the Spark Plug' },
    {
      type: 'p',
      html: `A spark plug can tell you a surprising amount about what is happening inside the engine. Remove the plug and inspect it — you may find it wet with fuel, dry, black and carbon-fouled, oil-fouled, worn or damaged.`,
    },
    {
      type: 'ul',
      items: [
        '<strong>Wet plug</strong> — usually means fuel is reaching the engine; the motorcycle may be flooded or have an ignition problem',
        '<strong>Dry plug</strong> after repeated attempts — may suggest fuel is not reaching the cylinder',
        '<strong>Black, carbon-fouled plug</strong> — can prevent reliable ignition',
      ],
    },
    {
      type: 'p',
      html: `Sometimes replacing the spark plug is enough to get an old motorcycle running again.`,
    },

    // ── 7 spark ─────────────────────────────────────────────────────────
    { type: 'h2', id: 'spark', text: 'Check Whether the Motorcycle Has Spark' },
    {
      type: 'p',
      html: `If the engine cranks but does not start, ignition is one of the main areas to investigate. A motorcycle generally needs three basic things to run: <strong>fuel, spark and compression</strong>. If one is missing, the engine will not start. A no-spark condition can be caused by the spark plug, plug cap, ignition coil, wiring, kill switch, CDI or ignition module, points ignition, condenser, pickup coil or safety switches. Older motorcycles can be especially prone to corroded electrical connections and worn ignition components.`,
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Be careful testing ignition',
      html: `Ignition systems can generate high voltage. If you are not confident testing the ignition safely, stop and have the bike inspected.`,
    },

    // ── 8 fuel to carb ──────────────────────────────────────────────────
    { type: 'h2', id: 'fuel-to-carb', text: 'Check Whether Fuel Is Reaching the Carburettor' },
    {
      type: 'p',
      html: `This is especially important on older motorcycles. A motorcycle that has been sitting for months or years may have stale fuel, a blocked fuel tap, a blocked filter, a stuck carburettor float, blocked jets or a dirty carburettor. If fuel cannot reach the carburettor, the motorcycle will not start — and even if fuel reaches it, blocked jets can prevent the correct mixture from reaching the engine.`,
    },

    // ── 9 carburettor ───────────────────────────────────────────────────
    { type: 'h2', id: 'carburettor', text: 'Consider a Dirty or Blocked Carburettor' },
    {
      type: 'p',
      html: `Carburettor problems are extremely common on motorcycles that have been sitting. Old petrol can leave deposits behind as it evaporates, and these deposits can block very small passages inside the carburettor. Symptoms can include the motorcycle not starting, starting only with choke, not idling, running rough, stalling when the throttle is opened, leaking fuel or hard starting.`,
    },
    {
      type: 'p',
      html: `A proper carburettor clean may involve full disassembly, jet removal, cleaning passages, float and needle inspection, gasket replacement and float-height adjustment. Spraying carburettor cleaner into the intake is not the same as properly cleaning a carburettor internally.`,
    },

    // ── 10 compression ──────────────────────────────────────────────────
    { type: 'h2', id: 'compression', text: 'Check Compression' },
    {
      type: 'p',
      html: `If the bike has fuel and spark but still refuses to start, compression becomes important. An engine needs enough compression to ignite the fuel mixture properly. Low compression can be caused by a worn piston, worn rings, a damaged cylinder, burnt valves, incorrect valve clearances, head-gasket problems or crank-seal issues on some two-strokes. A compression test can help identify whether there may be an internal engine problem — the kind of issue that may call for an <a href="/services/engine-rebuilds">engine rebuild</a>.`,
    },

    { type: 'cta' },

    // ── After sitting ───────────────────────────────────────────────────
    { type: 'h2', id: 'after-sitting', text: "Motorcycle Won't Start After Sitting" },
    {
      type: 'p',
      html: `This is extremely common. If a motorcycle has been sitting for months or years, the most likely causes are often a flat battery, stale fuel, a blocked carburettor, corroded electrical connections, a fouled spark plug or seized components. For an older carburetted motorcycle, stale fuel and blocked jets are particularly common. Before repeatedly trying to start a long-stored motorcycle, it is worth checking the condition of the oil, fuel system and engine first.`,
    },

    // ── Cold ────────────────────────────────────────────────────────────
    { type: 'h2', id: 'cold', text: "Motorcycle Won't Start When Cold" },
    {
      type: 'p',
      html: `A motorcycle that is difficult to start cold may have incorrect choke use, a carburettor mixture problem, a weak battery, a worn spark plug, tight valves, low compression or a fuel issue. Some older carburetted motorcycles simply require a specific cold-starting procedure — but if starting becomes progressively harder, there may be an underlying problem.`,
    },

    // ── Hot ─────────────────────────────────────────────────────────────
    { type: 'h2', id: 'hot', text: "Motorcycle Won't Start When Hot" },
    {
      type: 'p',
      html: `Hot-start problems can sometimes be caused by ignition coil failure, electrical components failing with heat, incorrect valve clearance, carburettor problems, vapour lock or low compression. If the motorcycle starts perfectly when cold but consistently refuses to restart hot, note exactly when the problem occurs — that information can make diagnosis much easier.`,
    },

    // ── Cranks no start ─────────────────────────────────────────────────
    { type: 'h2', id: 'cranks-no-start', text: "Motorcycle Cranks But Won't Start" },
    {
      type: 'p',
      html: `If the starter is spinning the engine normally, the battery and starter system are probably doing their job. The next things to check are, in order:`,
    },
    {
      type: 'ol',
      items: [
        'Fuel — is fuel reaching the engine?',
        'Spark — is the ignition system producing a strong spark?',
        'Compression — can the engine build enough pressure to run?',
      ],
    },
    {
      type: 'p',
      html: `Working through these systematically is much more effective than replacing random parts.`,
    },

    // ── Won't crank ─────────────────────────────────────────────────────
    { type: 'h2', id: 'wont-crank', text: "Motorcycle Won't Crank" },
    {
      type: 'p',
      html: `If the engine does not turn at all, the problem is probably not the carburettor. Focus instead on the battery, battery terminals, main fuse, kill switch, starter button, starter relay, starter motor, neutral switch, side-stand switch, clutch switch and wiring. A multimeter can save a lot of guesswork.`,
    },

    // ── Just clicks ─────────────────────────────────────────────────────
    { type: 'h2', id: 'just-clicks', text: 'Motorcycle Starter Just Clicks' },
    {
      type: 'p',
      html: `A click usually means the starter relay is attempting to operate, and the most common cause is still a weak battery. Before replacing the starter motor, check battery voltage, battery terminals, the earth connection, the starter cable and the relay. Loose or corroded connections can cause the same symptoms as a bad battery.`,
    },

    // ── Starts then dies ────────────────────────────────────────────────
    { type: 'h2', id: 'starts-then-dies', text: 'Motorcycle Starts Then Dies' },
    {
      type: 'p',
      html: `A motorcycle that starts briefly and then stops may have a blocked pilot jet, a fuel-flow restriction, a blocked tank vent, weak ignition, a side-stand switch fault or a carburettor problem. If it only stays running with the choke on, the carburettor may be running too lean or have a blocked pilot circuit — one of the classic signs of a carburettor that needs attention.`,
    },

    // ── Old fuel ────────────────────────────────────────────────────────
    { type: 'h2', id: 'old-fuel', text: 'Can Old Fuel Stop a Motorcycle Starting?' },
    {
      type: 'p',
      html: `Yes. Petrol deteriorates over time, and on carburetted motorcycles old fuel can leave varnish-like deposits that block jets and passages. If a motorcycle has been sitting for a long period, replacing old fuel is often one of the first sensible steps — fuel that looks or smells stale should not simply be ignored. The same goes for the spark plug and battery: a plug can look relatively normal and still perform poorly under compression, and a battery that appears only slightly weak can sometimes prevent the motorcycle from starting properly.`,
    },

    // ── Keep cranking ───────────────────────────────────────────────────
    { type: 'h2', id: 'keep-cranking', text: "Should You Keep Cranking a Motorcycle That Won't Start?" },
    {
      type: 'p',
      html: `No. Repeatedly operating the starter can flatten the battery, overheat the starter, flood the engine and make diagnosis harder. Try to determine what is missing rather than simply continuing to press the starter button. A basic home troubleshooting kit — a multimeter, spark-plug socket, basic spanners, screwdrivers, a battery charger, a workshop manual and a compression tester — is enough to diagnose many basic starting problems.`,
    },

    // ── When to call ────────────────────────────────────────────────────
    { type: 'h2', id: 'when-to-call', text: 'When Should You Stop and Call a Motorcycle Mechanic?' },
    {
      type: 'p',
      html: `Basic checks are reasonable for many owners, but stop if:`,
    },
    {
      type: 'ul',
      items: [
        'You are unsure about electrical testing',
        'The engine has no compression',
        'The engine is seized',
        'Wiring is damaged',
        'The motorcycle repeatedly blows fuses',
        'You find metal in the oil',
        'There are serious internal noises',
        'The carburettor needs major repair',
        'The engine requires dismantling',
      ],
    },
    {
      type: 'p',
      html: `Guessing can turn a small problem into an expensive one.`,
    },

    // ── Older / two-stroke ──────────────────────────────────────────────
    { type: 'h2', id: 'older-bikes', text: 'Older and Two-Stroke Motorcycles' },
    {
      type: 'p',
      html: `Vintage motorcycles often require a different troubleshooting approach from modern fuel-injected bikes. Problems may involve carburettors, points ignition, condensers, old coils, corroded wiring, mechanical fuel taps, aged seals and low compression. A motorcycle that has been sitting for 20 years should not necessarily be treated like a bike that ran last week — before attempting to start a long-stored vintage motorcycle, it may be worth inspecting the engine and lubrication system first.`,
    },
    {
      type: 'p',
      html: `For a two-stroke, the main checks still apply — fuel, spark and compression — but two-strokes can also suffer from fouled spark plugs, incorrect fuel mixture, crank-seal problems, reed-valve issues and carburettor problems. A two-stroke may still produce a visible spark and refuse to run if compression or crankcase sealing is poor. Four-stroke starting problems can also involve valve clearances, cam timing and fuel injection; tight valve clearances are a common reason some four-strokes become progressively harder to start.`,
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Start with the basics',
      html: `The biggest mistake is replacing expensive parts before checking simple things. Work through the problem logically: <strong>battery → switches → fuel → spark → compression</strong>. That sequence can solve or identify a large percentage of starting problems.`,
    },

    // ── Traralgon ───────────────────────────────────────────────────────
    { type: 'h2', id: 'traralgon', text: 'Motorcycle Repairs and Restoration in Traralgon' },
    {
      type: 'p',
      html: `Lang Restorations is based in Traralgon, Victoria, specialising in vintage, classic and motocross <a href="/motorbike-shop-traralgon">motorcycle restoration and repair</a>. Our work includes engine rebuilding, carburettor restoration, electrical troubleshooting, parts restoration, vapour blasting, zinc plating, frame repairs and <a href="/blog/whats-included-full-motorcycle-restoration">complete motorcycle restoration</a>.`,
    },
    {
      type: 'p',
      html: `Older motorcycles often require more than simply replacing one failed part — years of wear, corrosion and previous repairs can all contribute to starting problems, and a persistent no-start can sometimes point to an internal issue that needs an <a href="/blog/how-much-does-motorcycle-engine-rebuild-cost">engine rebuild</a>. If your vintage or classic motorcycle will not start and the basic checks above have not identified the problem, <a href="/contact">contact Lang Restorations</a> to discuss the bike.`,
    },

    { type: 'cta' },
  ],
  faqs: [
    { question: "Why won't my motorcycle start?", answer: 'The most common causes include a flat battery, no fuel, kill switch position, a faulty safety switch, a blocked carburettor, a fouled spark plug, ignition failure or low compression.' },
    { question: 'Why does my motorcycle click but not start?', answer: 'A weak battery is one of the most common causes. Poor battery connections, starter relay problems or a starter motor fault can produce similar symptoms.' },
    { question: 'Why does my motorcycle crank but not start?', answer: 'If the engine cranks normally, check for fuel, spark and compression.' },
    { question: "Why won't my motorcycle start after sitting?", answer: 'Common causes include a flat battery, stale fuel, blocked carburettor jets, fouled spark plugs and corroded electrical connections.' },
    { question: 'Can a motorcycle battery have power but still be too weak to start?', answer: 'Yes. A battery may operate lights while being unable to provide enough current to crank the engine properly.' },
    { question: 'Can old petrol stop a motorcycle from starting?', answer: 'Yes. Stale fuel can cause starting problems and can leave deposits inside carburettors.' },
    { question: 'Why does my motorcycle only run with the choke on?', answer: 'This commonly points to a lean fuel mixture, a blocked pilot jet or an intake air leak.' },
    { question: 'How do I know if my motorcycle has spark?', answer: 'A spark test can confirm ignition output, but ignition systems produce high voltage. If you are unsure how to test safely, have the bike inspected.' },
    { question: 'Can low compression stop a motorcycle from starting?', answer: 'Yes. Worn rings, cylinder wear, valve problems or other internal engine issues can reduce compression enough to prevent starting.' },
    { question: 'Should I keep trying to start a motorcycle that will not run?', answer: 'No. Repeated cranking can flatten the battery, flood the engine and overheat starter components.' },
    { question: 'Where can I get an older motorcycle diagnosed in Traralgon?', answer: 'Lang Restorations in Traralgon, Victoria specialises in vintage, classic and motocross motorcycle restoration and engine work.' },
  ],
}
