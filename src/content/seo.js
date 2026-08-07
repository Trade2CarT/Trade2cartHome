// Per-route SEO metadata and JSON-LD builders.
// Used by <SEO> at runtime AND by scripts/prerender.mjs at build time, so the
// static HTML and the client-side app can never drift apart.

import {
  SITE_URL, SERVICE_AREAS, citySlug, business, contact, socials, founder, categories, faqs, cityFaqs,
} from './site';
import { posts } from './blog';

export const OG_IMAGE = `${SITE_URL}/logo.png`;

const BASE_KEYWORDS = [
  'scrap pickup', 'sell scrap online', 'kabadiwala online', 'doorstep scrap pickup',
  'book scrap pickup', 'sell newspaper online', 'sell plastic scrap', 'sell metal scrap',
  'e-waste pickup', 'best scrap rates', 'scrap dealer near me', 'recycling', 'Trade2Cart',
  ...SERVICE_AREAS.map((c) => `scrap pickup ${c}`),
].join(', ');

// --- Structured data ------------------------------------------------------

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: business.name,
  legalName: business.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  description: business.shortDescription,
  slogan: business.tagline,
  foundingDate: business.founded,
  founder: { '@type': 'Person', name: founder.name, jobTitle: founder.title },
  email: contact.email,
  telephone: contact.phoneE164,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  areaServed: SERVICE_AREAS.map((city) => ({ '@type': 'City', name: city })),
  sameAs: socials.map((s) => s.url),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: contact.email,
    telephone: contact.phoneE164,
    areaServed: 'IN',
    availableLanguage: ['English', 'Tamil'],
  },
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: business.name,
  description: business.shortDescription,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
});

export const serviceSchema = (city) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Doorstep scrap pickup and recycling',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: city
    ? { '@type': 'City', name: city, containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } }
    : SERVICE_AREAS.map((c) => ({ '@type': 'City', name: c })),
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    description: 'Free doorstep scrap pickup. Customers are paid for their scrap at the time of collection.',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Accepted scrap categories',
    itemListElement: categories.map((c) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: c.name, description: c.summary },
    })),
  },
});

export const faqSchema = (list = faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: list.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: founder.name,
  jobTitle: founder.title,
  description: founder.bio,
  alumniOf: { '@type': 'EducationalOrganization', name: founder.education },
  worksFor: { '@id': `${SITE_URL}/#organization` },
  url: `${SITE_URL}/about`,
});

export const breadcrumbSchema = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const articleSchema = (post) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  dateModified: post.date,
  author: { '@type': 'Person', name: founder.name },
  publisher: { '@id': `${SITE_URL}/#organization` },
  mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  image: OG_IMAGE,
  keywords: post.tags.join(', '),
});

// --- Per-route metadata ---------------------------------------------------
// Every entry: { path, title, description, keywords?, schema: [] , changefreq, priority }

const home = {
  path: '/',
  title: 'Trade2Cart — Doorstep Scrap Pickup, Fair Rates, Instant Payment',
  description:
    'Book a free doorstep scrap pickup with Trade2Cart. See transparent rates for your area, get a verified local vendor at your door, and get paid on the spot in cash or UPI.',
  schema: [organizationSchema(), websiteSchema(), serviceSchema(), faqSchema()],
  changefreq: 'weekly',
  priority: '1.0',
};

const staticPages = [
  home,
  {
    path: '/about',
    title: `About Trade2Cart — Our Story, Founder and Business Model`,
    description:
      'Trade2Cart is a technology platform connecting customers with verified scrap collection vendors. Learn how the company works, what we build, and who is behind it.',
    schema: [
      organizationSchema(),
      personSchema(),
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]),
    ],
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/how-it-works',
    title: 'How Trade2Cart Works — Book, Weigh, Get Paid | Scrap Pickup',
    description:
      'Three steps to sell your scrap: add items and see local rates, choose a pickup slot, and get weighed and paid at your door. Free for customers, always.',
    schema: [
      serviceSchema(),
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'How It Works', path: '/how-it-works' }]),
    ],
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/what-we-accept',
    title: 'What Scrap We Accept — Paper, Plastic, Metal, E-Waste | Trade2Cart',
    description:
      'Trade2Cart collects paper and cardboard, plastic, metal, e-waste and appliances, glass and general household scrap. See what falls into each category and how pricing works.',
    schema: [
      serviceSchema(),
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'What We Accept', path: '/what-we-accept' }]),
    ],
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/for-vendors',
    title: 'Become a Trade2Cart Vendor — Verified Scrap Pickup Leads',
    description:
      'Join the Trade2Cart vendor network and receive confirmed scrap pickup orders from your own area, with billing and earnings tracked in one dashboard.',
    schema: [
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'For Vendors', path: '/for-vendors' }]),
    ],
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/contact',
    title: 'Contact Trade2Cart — Support, Grievances and Vendor Enquiries',
    description: `Reach Trade2Cart at ${contact.email} or ${contact.phone}. Customer support, vendor onboarding and grievance contact details.`,
    schema: [
      organizationSchema(),
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]),
    ],
    changefreq: 'yearly',
    priority: '0.7',
  },
  {
    path: '/blog',
    title: 'Trade2Cart Blog — Scrap Rates, Recycling and How-To Guides',
    description:
      'Guides on selling scrap, understanding rates by category, and why doorstep recycling matters. Written by the team building Trade2Cart.',
    schema: [
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]),
    ],
    changefreq: 'weekly',
    priority: '0.7',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Trade2Cart',
    description: 'How Trade2Cart collects, uses, shares and retains your personal data, and how to request access or deletion.',
    schema: [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }])],
    changefreq: 'yearly',
    priority: '0.4',
  },
  {
    path: '/terms',
    title: 'Terms & Conditions | Trade2Cart',
    description: 'The terms governing use of the Trade2Cart platform, including our role as a mediator and the responsibilities of customers and vendors.',
    schema: [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms', path: '/terms' }])],
    changefreq: 'yearly',
    priority: '0.4',
  },
  {
    path: '/refund-policy',
    title: 'Cancellation & Refund Policy | Trade2Cart',
    description: 'How cancellations work on Trade2Cart, why the pickup service carries no customer fee, and how payment disputes are handled.',
    schema: [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Refund Policy', path: '/refund-policy' }])],
    changefreq: 'yearly',
    priority: '0.4',
  },
];

const cityPages = () =>
  SERVICE_AREAS.map((city) => {
    const path = `/sell-scrap-in-${citySlug(city)}`;
    return {
      path,
      title: `Sell Scrap in ${city} — Doorstep Pickup & Best Rates | Trade2Cart`,
      description: `Book a free doorstep scrap pickup in ${city}. Transparent rates for paper, plastic, metal and e-waste, a verified local vendor at your door, and instant payment in cash or UPI.`,
      keywords: `scrap pickup ${city}, sell scrap ${city}, kabadiwala ${city}, scrap dealer near me ${city}, e-waste pickup ${city}, best scrap rates ${city}`,
      schema: [
        serviceSchema(city),
        // City-specific questions, matching what the page actually renders —
        // FAQ schema that doesn't match visible content gets flagged by Google.
        faqSchema(cityFaqs(city)),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: `Sell Scrap in ${city}`, path }]),
      ],
      changefreq: 'weekly',
      priority: '0.9',
    };
  });

const blogPages = () =>
  posts.map((post) => ({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Trade2Cart`,
    description: post.description,
    keywords: post.tags.join(', '),
    schema: [
      articleSchema(post),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
    ],
    changefreq: 'monthly',
    priority: '0.6',
  }));

/** Every indexable route, with its metadata. Drives <SEO>, prerender and sitemap. */
export const allRoutes = () => [...staticPages, ...cityPages(), ...blogPages()];

export const getRouteMeta = (path) => {
  const clean = path !== '/' ? path.replace(/\/$/, '') : '/';
  const match = allRoutes().find((r) => r.path === clean);
  return {
    ...(match || home),
    keywords: (match && match.keywords) || BASE_KEYWORDS,
    canonical: `${SITE_URL}${clean === '/' ? '' : clean}`,
  };
};
