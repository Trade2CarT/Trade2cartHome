import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Section, Container, H1, H2, Lead, ButtonLink, FeatureCard, StepCard, FaqItem, Eyebrow, CtaBand, Card } from '../components/ui';
import { IconArrowRight, IconCart, IconCalendar, IconPayment, IconTag, IconVerified, IconTruck, IconScale, IconRecycle, CategoryIcon } from '../components/icons';
import { business, apps, howItWorks, whyChooseUs, faqs, categories, SERVICE_AREAS, citySlug } from '../content/site';

const stepIcons = [<IconCart />, <IconCalendar />, <IconPayment />];
const whyIcons = [<IconTag />, <IconVerified />, <IconTruck />, <IconScale />, <IconPayment />, <IconRecycle />];

export default function Home() {
  return (
    <>
      <SEO />

      {/* Hero */}
      <Section className="pt-14 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
            Now serving {SERVICE_AREAS.slice(0, 3).join(', ')} &amp; nearby
          </span>
          <H1 className="mt-6">
            Turn your <span className="text-brand-600">scrap</span> into <span className="text-accent-500">cash</span>.
          </H1>
          <Lead className="mx-auto mt-6 max-w-2xl">
            Book a free doorstep pickup, see the rates before you book, and get paid on the spot by a verified
            local vendor. No calling around, no haggling, no waiting.
          </Lead>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href={apps.customer}>Sell your scrap <IconArrowRight /></ButtonLink>
            <ButtonLink href={apps.vendorRegister} variant="secondary">Join as a vendor</ButtonLink>
          </div>
          <p className="mt-6 text-sm text-slate-500">Free for customers · Weighed at your door · Paid in cash or UPI</p>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how-it-works" className="bg-white">
        <div className="mb-14 max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <H2 className="mt-3">Sell your scrap in three steps</H2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {howItWorks.map((step, i) => (
            <StepCard key={step.title} index={i + 1} icon={stepIcons[i]} title={step.title} description={step.description} />
          ))}
        </div>
        <div className="mt-12">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
            See the full process <IconArrowRight />
          </Link>
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <div className="mb-14 max-w-2xl">
          <Eyebrow>Why Trade2Cart</Eyebrow>
          <H2 className="mt-3">Built to remove the guesswork</H2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f, i) => (
            <FeatureCard key={f.title} icon={whyIcons[i]} title={f.title} description={f.description} />
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section className="bg-white">
        <div className="mb-14 max-w-2xl">
          <Eyebrow>What we collect</Eyebrow>
          <H2 className="mt-3">From old newspapers to old refrigerators</H2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Card key={c.slug}>
              <CategoryIcon name={c.icon} />
              <h3 className="mt-4 text-lg font-bold text-slate-900">{c.name}</h3>
              <p className="mt-2 text-slate-600">{c.summary}</p>
              <p className="mt-3 text-sm text-slate-500">{c.items.slice(0, 3).join(' · ')}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/what-we-accept" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
            See everything we accept <IconArrowRight />
          </Link>
        </div>
      </Section>

      {/* Vendors */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>For vendors</Eyebrow>
            <H2 className="mt-3">Grow your scrap business</H2>
            <Lead className="mt-5">
              Stop searching for customers. Get confirmed pickup orders from your own area, delivered straight to
              your dashboard — with billing and earnings handled in the same place.
            </Lead>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={apps.vendorRegister} variant="dark">Register as a vendor <IconArrowRight /></ButtonLink>
              <ButtonLink to="/for-vendors" variant="secondary">How it works for vendors</ButtonLink>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-300">The vendor deal</p>
            <ul className="mt-6 space-y-5">
              <li><p className="text-lg font-bold">Confirmed leads, not cold calls</p><p className="mt-1 text-slate-300">Customers have already picked items and booked a slot.</p></li>
              <li><p className="text-lg font-bold">Only your areas</p><p className="mt-1 text-slate-300">Orders are matched to the areas you actually cover.</p></li>
              <li><p className="text-lg font-bold">Small per-order commission</p><p className="mt-1 text-slate-300">You keep the scrap and settle the platform fee from your dashboard.</p></li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Service areas */}
      <Section className="bg-white">
        <div className="mb-10 max-w-2xl">
          <Eyebrow>Service areas</Eyebrow>
          <H2 className="mt-3">Where we currently operate</H2>
          <Lead className="mt-4">
            We add new areas as verified vendors join the network. Pick your town to see how pickups work locally.
          </Lead>
        </div>
        <div className="flex flex-wrap gap-3">
          {SERVICE_AREAS.map((city) => (
            <Link
              key={city}
              to={`/sell-scrap-in-${citySlug(city)}`}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 transition-all hover:border-brand-300 hover:text-brand-700"
            >
              Scrap pickup in {city}
            </Link>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>FAQ</Eyebrow>
          <H2 className="mt-3">Frequently asked questions</H2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((f, i) => (
            <FaqItem key={f.question} question={f.question} answer={f.answer} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      <CtaBand
        title="Ready to clear out your scrap?"
        description={`${business.name} pickups are free, weighed at your door, and paid on the spot.`}
        primary={{ href: apps.customer, label: 'Schedule a pickup' }}
        secondary={{ href: apps.vendorRegister, label: 'Join as a vendor' }}
      />
    </>
  );
}
