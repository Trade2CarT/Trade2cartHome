// Blog posts. Each post renders through the shared BlogPost template and gets
// its own URL, meta tags, Article structured data and sitemap entry.
// `body` is an array of blocks: {h2}, {p}, {ul}, or {quote}.

import { SERVICE_AREAS } from './site';

export const posts = [
  {
    slug: 'how-trade2cart-works',
    title: 'How Trade2Cart works — from booking to instant payment',
    description:
      'A step-by-step walkthrough of a Trade2Cart scrap pickup: choosing items, seeing your local rates, getting a verified vendor at your door, and being paid on the spot.',
    date: '2026-01-15',
    readingTime: '4 min read',
    tags: ['How it works', 'Doorstep pickup'],
    body: [
      {
        p: 'Selling scrap has traditionally been an errand built on trust you cannot verify. You call whoever you can find, you accept whatever rate you are quoted, and you take the weighing scale on faith. Trade2Cart exists to remove all three of those uncertainties. Here is exactly what happens when you book a pickup.',
      },
      { h2: '1. You pick your items and see real rates' },
      {
        p: 'You start in the customer app by selecting your area. Rates are location-specific, because what a vendor can pay for a kilo of cardboard in one town is not what they can pay in another. Once your area is set, you add the items you want to sell — newspapers, bottles, old utensils, a dead refrigerator — and the app shows the current rate for each one before you commit to anything.',
      },
      {
        p: 'You do not need to know exact weights. A rough estimate is enough to book; the real number is measured at your door.',
      },
      { h2: '2. You choose a pickup slot' },
      {
        p: 'Confirm your address and pick a time. Your booking is then assigned to a verified vendor who already works in your area. That matters for a practical reason: a vendor covering your neighbourhood arrives faster and has a stronger incentive to keep the relationship good.',
      },
      { h2: '3. The vendor arrives, weighs, and pays' },
      {
        p: 'The vendor comes to your door with a digital weighing scale. Everything is weighed in front of you, the total is calculated at the rates you already saw in the app, and you are paid immediately — cash or UPI, your choice. There is no invoice to chase and no transfer to wait for.',
      },
      { h2: 'Why we sit in the middle' },
      {
        p: 'Trade2Cart does not buy your scrap. We do not run trucks or warehouses. We are a platform: we verify the vendors, publish the rates, route the orders, and handle the billing so that both sides of the transaction can trust it. The money moves directly between you and the vendor, exactly as it always did — the difference is that now the terms are visible before anyone knocks on your door.',
      },
      { h2: 'What it costs you' },
      {
        p: 'Nothing. The pickup is free and you receive the full quoted amount for your items. Vendors pay us a small commission per completed order, and that is what funds the platform.',
      },
    ],
  },
  {
    slug: 'what-your-scrap-is-worth',
    title: 'What your scrap is actually worth — paper, plastic, metal and e-waste',
    description:
      'A practical guide to the five scrap categories Trade2Cart collects, what falls into each one, and the simple things you can do to get a better rate at pickup.',
    date: '2026-01-22',
    readingTime: '5 min read',
    tags: ['Scrap rates', 'Guide'],
    body: [
      {
        p: 'Most households underestimate what is sitting in their storeroom. The value is rarely in any single item — it is in the accumulated weight of things nobody thought to sell. Here is how the categories break down, and what actually moves the price.',
      },
      { h2: 'Paper and cardboard' },
      {
        p: 'Newspapers, magazines, notebooks, office paper and cardboard cartons. This is the most common category and the one almost every home has. The rate per kilo is modest, but volume adds up quickly — a year of newspapers is heavier than people expect.',
      },
      {
        p: 'The one thing that hurts you here is moisture. Damp paper weighs more but is worth less to a recycler, and vendors price accordingly. Keep it dry and stacked.',
      },
      { h2: 'Plastic' },
      {
        p: 'PET bottles, containers, buckets, polythene and packaging film. Clean, dry plastic is worth noticeably more than plastic with food residue in it, because contamination has to be removed before recycling. Rinsing bottles before pickup is a genuinely worthwhile two minutes.',
      },
      { h2: 'Metal' },
      {
        p: 'Usually the highest-value category by weight. Iron and steel form the bulk of what people sell, but aluminium, copper and brass are worth substantially more per kilo. Old wiring, discarded utensils, window grills and broken fittings are all worth separating out rather than lumping in with general scrap.',
      },
      { h2: 'E-waste and appliances' },
      {
        p: 'Refrigerators, washing machines, microwaves, computers, cables and batteries. These are priced by unit rather than by weight, and they are the category where responsible disposal matters most — electronics contain materials that should never reach a landfill.',
      },
      { h2: 'Glass and general household scrap' },
      {
        p: 'Bottles, jars, furniture and mixed items. If you are unsure whether something qualifies, add it to your cart anyway; the app will tell you, and the vendor will confirm at pickup.',
      },
      { h2: 'Three things that get you a better rate' },
      {
        ul: [
          'Separate metals from everything else — mixed loads get priced at the lowest common rate.',
          'Keep paper dry and plastic clean; contamination is the most common reason a rate drops.',
          'Accumulate before you book. One larger pickup is worth more to you and to the vendor than three small ones.',
        ],
      },
      {
        p: 'Live rates for every item are shown in the Trade2Cart app once you select your area, because prices genuinely differ between locations and change over time.',
      },
    ],
  },
  {
    slug: 'why-doorstep-recycling-matters',
    title: 'Why doorstep scrap collection matters more than it looks',
    description:
      'Informal scrap collection already does most of the recycling work in India. Making it easier to reach is one of the highest-leverage things a small platform can do.',
    date: '2026-02-05',
    readingTime: '4 min read',
    tags: ['Recycling', 'Sustainability'],
    body: [
      {
        p: 'It is easy to think of scrap collection as a small transaction — a few kilos of newspaper, a couple of hundred rupees. Looked at one household at a time, that is true. Looked at across a town, it is the recycling system.',
      },
      { h2: 'The informal sector already does the work' },
      {
        p: 'In India, the overwhelming majority of material that gets recycled is recovered by informal collectors and small scrap dealers, not by municipal systems. The kabadiwala who comes down your street is not an alternative to recycling infrastructure — in most places, he is the infrastructure.',
      },
      {
        p: 'That system works, but it runs on friction. Customers cannot find a collector when they want one. Collectors spend their day looking for customers instead of collecting. Rates are opaque on both sides. None of that is a technology problem in the exciting sense; it is a coordination problem, which is exactly the kind of thing software is good at.',
      },
      { h2: 'What changes when the friction goes away' },
      {
        p: 'When a pickup takes thirty seconds to book, people book it. Material that would otherwise sit in a storeroom for another year — or worse, go out with the household waste — enters the recycling chain instead. The environmental value is not in any one pickup; it is in the pickups that would never have happened at all.',
      },
      {
        ul: [
          'Paper and cardboard that gets recycled avoids both landfill volume and virgin pulp production.',
          'Metal is effectively infinitely recyclable — recovering it is dramatically less energy-intensive than mining it.',
          'E-waste kept out of general waste keeps hazardous material out of soil and groundwater.',
        ],
      },
      { h2: 'The other side of the transaction' },
      {
        p: 'There is a livelihood argument here too, and it deserves to be stated plainly. A collector who spends less time searching for work and more time doing it earns more from the same day. Verified, scheduled orders from a known area are simply a better way to run a small business than driving around hoping.',
      },
      {
        p: `That is the whole thesis behind Trade2Cart, and why we are building it town by town rather than launching everywhere at once. We are currently live in ${SERVICE_AREAS.join(', ')}, and each new area is added when there are verified vendors ready to serve it properly.`,
      },
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
