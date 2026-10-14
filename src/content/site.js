// ============================================================================
// SINGLE SOURCE OF TRUTH for every business fact and every line of copy.
// Edit this file to change the site — components read from here, never inline.
// ============================================================================

// Must match the hostname Vercel actually serves. The apex trade2cart.in
// 307-redirects to www, so canonicals/OG/sitemap all use www — pointing them at
// a redirecting hostname gives search engines contradictory signals.
export const SITE_URL = 'https://www.trade2cart.in';

// Service areas are config-driven because coverage keeps expanding.
// Set VITE_SERVICE_AREAS in Vercel → Settings → Environment Variables as a
// comma-separated list, then redeploy. Each name automatically generates its
// own landing page, structured data, sitemap entry and footer link.
export const SERVICE_AREAS = (
  import.meta.env?.VITE_SERVICE_AREAS || 'Arakkonam,Tiruttani,Sholinghur,Vellore'
)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

// "Arakkonam" -> "arakkonam" for /sell-scrap-in-arakkonam
export const citySlug = (city) => city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const business = {
  name: 'Trade2Cart',
  legalName: 'Trade2Cart',
  tagline: 'Transforming trash into treasure',
  shortDescription:
    'Trade2Cart is a doorstep scrap pickup platform that connects households and businesses with verified local scrap vendors. Book a free pickup, get transparent rates, and get paid on the spot.',
  longDescription:
    'Trade2Cart is a technology platform that makes scrap collection easier by connecting customers with verified scrap collection vendors and simplifying the pickup process. Instead of calling around to find a kabadiwala, you pick your items in the app, see the rates for your area, and choose a pickup slot. We assign a verified vendor near you, who arrives at your door, weighs everything on a digital scale in front of you, and pays you immediately in cash or by UPI. For vendors, Trade2Cart replaces guesswork and cold calls with a steady stream of confirmed pickup requests from their own area, delivered to a dashboard that also handles billing and earnings. We operate as a mediator: we do not buy, sell, or collect scrap ourselves, and every payment happens directly between the customer and the vendor.',
  category: 'Recycling and waste collection technology platform',
  founded: '2025',
  region: 'Tamil Nadu, India',
  country: 'India',
};

export const contact = {
  email: 'trade@trade2cart.in',
  phone: '+91 8903166106',
  phoneHref: 'tel:+918903166106',
  phoneE164: '+918903166106',
  whatsapp: 'https://wa.me/918903166106',
  hours: 'Monday to Sunday, 9:00 AM to 7:00 PM IST',
  supportSla: 'We respond to support requests within 24 hours.',
};

export const socials = [
  { name: 'Instagram', url: 'https://www.instagram.com/trade2cart' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/trade2cart' },
  { name: 'Facebook', url: 'https://www.facebook.com/trade2cart' },
];

export const apps = {
  customer: 'https://user.trade2cart.in',
  vendor: 'https://vendor.trade2cart.in',
  vendorRegister: 'https://vendor.trade2cart.in/register',
};

// ---------------------------------------------------------------------------
// FOUNDER
// The technical background below is factual and verifiable from the codebase.
// >>> EDIT `bio` and `whyStarted` in your own words — they are yours to write.
// ---------------------------------------------------------------------------
export const founder = {
  name: 'Imran S',
  title: 'Founder',
  education: 'B.Tech, Information Technology',
  bio: 'Imran S is the founder of Trade2Cart. He built the platform end to end and continues to lead product and engineering.',
  whyStarted:
    'Selling scrap in a small town usually means tracking down a kabadiwala, haggling over a price you cannot verify, and hoping the weighing scale is honest. Trade2Cart started from a simple idea: publish the rates, send a verified vendor to the door, weigh everything in front of the customer, and pay immediately. Everything else in the product follows from those four things.',
  // Deliberately describes outcomes, not internal systems or infrastructure.
  // Do not list internal tools, architecture or the technology stack here.
  technicalBackground: [
    'Designed and built the customer app used to pick items, see local rates and schedule a pickup.',
    'Built the vendor portal where verified vendors receive orders, process bills and track earnings.',
    'Leads product and engineering for the platform.',
  ],
  photoAlt: 'Imran S, Founder of Trade2Cart',
};

// ---------------------------------------------------------------------------
// WHAT WE ACCEPT — the five canonical categories used across the platform.
// Live per-item rates are location-specific and come from the customer app.
// ---------------------------------------------------------------------------
export const categories = [
  {
    slug: 'paper',
    name: 'Paper & Cardboard',
    icon: 'paper',
    summary: 'The most common household scrap, and the easiest to collect.',
    items: ['Newspapers', 'Magazines and books', 'Cardboard cartons', 'Office paper', 'Notebooks'],
  },
  {
    slug: 'plastic',
    name: 'Plastic',
    icon: 'plastic',
    summary: 'Clean, dry plastic fetches the best rate — rinse bottles before pickup.',
    items: ['PET water and soft-drink bottles', 'Plastic containers and buckets', 'Polythene and packaging film', 'Hard plastic scrap'],
  },
  {
    slug: 'metal',
    name: 'Metal',
    icon: 'metal',
    summary: 'Usually the highest-value category by weight.',
    items: ['Iron and steel', 'Aluminium and tin', 'Copper wiring', 'Brass', 'Old utensils and grills'],
  },
  {
    slug: 'e-waste',
    name: 'E-Waste & Appliances',
    icon: 'ewaste',
    summary: 'Electronics kept out of landfill and routed to responsible recyclers.',
    items: ['Refrigerators', 'Washing machines', 'Microwaves', 'Computers and peripherals', 'Batteries and cables'],
  },
  {
    slug: 'others',
    name: 'Glass & Others',
    icon: 'others',
    summary: "Not sure if we take it? Add it to your cart and we'll tell you.",
    items: ['Glass bottles and jars', 'Mixed household scrap', 'Furniture and fittings'],
  },
];

export const howItWorks = [
  {
    title: 'Add your items to the cart',
    description:
      'Open the app and pick what you want to sell. You see the rates for your own area before you book — no negotiating, no surprises. A rough quantity is fine; the exact weight is measured at pickup.',
  },
  {
    title: 'Choose a pickup slot',
    description:
      'Confirm your address and pick a time that suits you. We assign a verified vendor who already works in your area, and you can track the status of your booking in the app.',
  },
  {
    title: 'Get weighed and paid on the spot',
    description:
      'The vendor arrives at your door, weighs everything on a digital scale in front of you, and pays you immediately in cash or by UPI. Nothing to carry, nothing to chase.',
  },
];

export const whyChooseUs = [
  { title: 'Transparent rates', description: 'See the rate for every item before you book, based on your location.' },
  { title: 'Verified vendors', description: 'Every vendor on the platform is verified and approved before receiving orders.' },
  { title: 'Doorstep pickup', description: 'You never carry scrap anywhere. The vendor comes to your address.' },
  { title: 'Weighed in front of you', description: 'Digital scale at your door, so the weight and the payment are never in doubt.' },
  { title: 'Paid immediately', description: 'Cash or UPI at the time of pickup — not later, not by transfer.' },
  { title: 'Responsibly recycled', description: 'Your scrap goes into the recycling chain instead of into landfill.' },
];

export const vendorBenefits = [
  { title: 'Confirmed leads, not cold calls', description: 'Customers have already picked their items and booked a slot before the order reaches you.' },
  { title: 'Orders from your own area', description: 'Assignments are matched to the areas you actually cover, so travel stays short.' },
  { title: 'One dashboard for everything', description: 'Assigned orders, billing and completed jobs live in a single vendor portal.' },
  { title: 'Earnings you can track', description: 'Every completed pickup is billed and recorded, so your earnings are never a guess.' },
];

export const vendorSteps = [
  { title: 'Register', description: 'Sign up on the vendor portal with your details and the areas you cover.' },
  { title: 'Get verified', description: 'Our team reviews and approves your profile before any orders are assigned.' },
  { title: 'Receive assigned orders', description: 'Confirmed pickups from your area appear in your Assigned Orders tab.' },
  { title: 'Complete and settle', description: 'Pay the customer at pickup, close the order with a bill, and settle platform commission from your dashboard.' },
];

// ---------------------------------------------------------------------------
// Per-city copy. Without this, every /sell-scrap-in-<city> page would be the
// same text with one word swapped, which search engines treat as duplicate
// content and can suppress across all of them.
// Cities added via VITE_SERVICE_AREAS that have no entry here still work —
// they fall back to generic copy. Add an entry to make the page stronger.
// ---------------------------------------------------------------------------
export const CITY_NOTES = {
  Arakkonam: {
    district: 'Ranipet district',
    intro:
      'Arakkonam is where Trade2Cart started, and it is still our busiest area. Between the railway colony, the older residential streets and the shops around the bus stand, there is a steady supply of paper, packaging and metal scrap that used to depend entirely on whoever happened to pass by.',
    localNote:
      'Because our vendor coverage in Arakkonam is densest, pickups here are usually scheduled fastest — often the same day for a morning booking.',
    neighbourhoods: 'Railway colony, Bus stand area, Thiruvalangadu road and surrounding streets',
  },
  Tiruttani: {
    district: 'Tiruvallur district',
    intro:
      'Tiruttani sees a constant flow of visitors, and with them a steady volume of packaging, plastic and cardboard from shops and lodges around the town. Households here have long relied on informal collectors passing through — Trade2Cart turns that into something you can actually schedule.',
    localNote:
      'We handle both household pickups and larger commercial loads from shops in Tiruttani. If you have a bulk quantity, mention it when booking so the vendor arrives with the right vehicle.',
    neighbourhoods: 'Town centre, temple road area and the surrounding residential streets',
  },
  Sholinghur: {
    district: 'Ranipet district',
    intro:
      'Sholinghur is a smaller town where finding a scrap collector has always meant waiting for one to come to your street. Trade2Cart covers Sholinghur through vendors based in the surrounding area, so a pickup is a booking rather than a matter of luck.',
    localNote:
      'Because Sholinghur pickups are often combined with nearby routes, booking a slightly larger load — or coordinating with a neighbour — usually gets you a faster slot.',
    neighbourhoods: 'Town centre and surrounding residential areas',
  },
  Vellore: {
    district: 'Vellore district',
    intro:
      'Vellore is the largest area we serve, with a mix of households, student accommodation, shops and offices. That mix produces a wide range of scrap — from routine paper and plastic to office e-waste and old appliances when tenants move out.',
    localNote:
      'Vellore has the widest range of accepted items, including bulk e-waste and appliance collection. Larger commercial pickups can be arranged directly by phone or email.',
    neighbourhoods: 'Residential neighbourhoods, commercial streets and surrounding areas',
  },
};

export const cityNote = (city) => CITY_NOTES[city] || null;

/**
 * City-specific FAQ copy. Keeps each area page genuinely distinct instead of
 * the same boilerplate with one word swapped, which search engines discount.
 * Used both to render the page and to build its FAQPage structured data, so
 * the schema always matches what a visitor actually sees.
 */
export const cityFaqs = (city) => {
  const note = cityNote(city);
  return [
    {
      question: `Do you collect scrap in all parts of ${city}?`,
      answer: note
        ? `Yes — we cover ${city} and the surrounding areas, including the ${note.neighbourhoods.toLowerCase()}. If you are just outside ${city}, book anyway and we will confirm whether a vendor covers your street.`
        : `Yes — we cover ${city} and the surrounding areas. If you are just outside ${city}, book anyway and we will confirm whether a vendor covers your street.`,
    },
    {
      question: `How quickly can I get a pickup in ${city}?`,
      answer: note
        ? `${note.localNote} You choose a slot when booking, and the assigned vendor confirms it in the app.`
        : `You choose a slot when booking and the assigned vendor confirms it in the app. Availability depends on how many verified vendors are active in ${city} on that day.`,
    },
    {
      question: `What are the scrap rates in ${city} right now?`,
      answer: `Rates are published per area and can move with the scrap market, so we show live ${city} rates inside the app rather than printing a fixed table here. Select ${city} as your location and every item shows its current rate before you book.`,
    },
    {
      question: `Is the pickup really free in ${city}?`,
      answer: `Yes. There is no charge to ${city} customers and no deduction from what you are paid — the vendor pays you the full amount for your scrap at the door. Our commission is paid by the vendor, not by you.`,
    },
  ];
};

export const businessModel = {
  customers:
    'Trade2Cart is completely free for customers. You are paid the full amount quoted for your items — we never take a cut of what the vendor pays you.',
  vendors:
    'Vendors pay a small commission to Trade2Cart for each completed order. That commission is what funds the platform: verification, order assignment, support and the technology itself.',
  role:
    'Trade2Cart is a mediator between customers and vendors. We do not buy, sell, or collect scrap directly, and every payment happens directly between the customer and the vendor at the time of pickup.',
  expansion:
    'We are live across Arakkonam, Tiruttani, Sholinghur and the surrounding Vellore region, and we are adding new areas as verified vendors join the network.',
};

// Public-facing products only.
// Do NOT document internal tools, operations systems or their capabilities here —
// this file is published on the website and is readable by anyone.
export const products = [
  {
    name: 'Customer app',
    url: apps.customer,
    description:
      'Pick your scrap items, see the rates for your location, schedule a doorstep pickup and track the booking. Installable on any phone, works in English and Tamil.',
    cta: 'Open the customer app',
  },
  {
    name: 'Vendor portal',
    url: apps.vendorRegister,
    description:
      'Where verified vendors receive their orders, generate bills, and track earnings — everything a vendor needs in one place.',
    cta: 'Register as a vendor',
  },
];

// Customer-facing capabilities only — no infrastructure, no vendors, no
// architecture. Naming the stack publicly tells an attacker where to start.
export const platformHighlights = [
  'Installable on any phone straight from the browser — no app store needed',
  'Available in English and Tamil',
  'Rates published per location, visible before you book',
  'Booking status you can track from your phone',
];

export const faqs = [
  {
    question: 'How do I get paid for my scrap?',
    answer:
      'The verified vendor pays you directly, in cash or by UPI, at the time of pickup — right after weighing your items in front of you. There is no waiting period and no bank transfer to chase.',
  },
  {
    question: 'What items can I sell?',
    answer:
      'Paper and cardboard, plastic, metal, e-waste and appliances, glass and general household scrap. You can see the full item list with current rates in the app once you select your location.',
  },
  {
    question: 'Is the pickup service really free?',
    answer:
      'Yes. The pickup is completely free for customers and you receive the full amount quoted for your items. Vendors pay a small commission to Trade2Cart for the verified leads they receive.',
  },
  {
    question: 'Which areas do you cover?',
    answer: `We currently serve ${SERVICE_AREAS.join(', ')} and the surrounding areas, and we are expanding as new verified vendors join the network.`,
  },
  {
    question: 'How is the weight measured?',
    answer:
      'The vendor carries a digital weighing scale and weighs your items at your door, in front of you, before paying. The final amount is calculated from that measured weight at the rates shown in the app.',
  },
  {
    question: 'Is there a minimum quantity?',
    answer:
      'You can book with a rough estimate of what you have. Very small quantities may be combined with nearby pickups, so the vendor may propose a slot that works for both.',
  },
  {
    question: '[For vendors] How do I receive new orders?',
    answer:
      "Orders are assigned to you based on your location and availability, and appear in the 'Assigned Orders' tab of your vendor dashboard. You are only assigned pickups in the areas you cover.",
  },
  {
    question: '[For vendors] How does the commission work?',
    answer:
      'You pay the customer directly at pickup and keep the scrap. Trade2Cart charges a small per-order platform commission, which you settle from your vendor dashboard.',
  },
];

export const legal = {
  effectiveDate: '23-06-2025',
  lastUpdated: '14-10-2026',
};

export const nav = [
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'What We Accept', to: '/what-we-accept' },
  { label: 'For Vendors', to: '/for-vendors' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];
