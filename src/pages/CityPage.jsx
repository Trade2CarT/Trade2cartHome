import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Section, H1, H2, Lead, Eyebrow, Card, ButtonLink, FaqItem, CtaBand } from '../components/ui';
import { IconArrowRight, IconCart, IconCalendar, IconPayment, CategoryIcon } from '../components/icons';
import { SERVICE_AREAS, citySlug, categories, howItWorks, apps, contact, cityNote, cityFaqs } from '../content/site';

const icons = [<IconCart />, <IconCalendar />, <IconPayment />];

/** One page per service area. `city` is supplied by the route in App.jsx. */
export default function CityPage({ city }) {
  const others = SERVICE_AREAS.filter((c) => c !== city);
  const note = cityNote(city);

  return (
    <>
      <SEO />

      <Section className="pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Scrap pickup in {city}{note ? ` · ${note.district}` : ''}</Eyebrow>
          <H1 className="mt-4">
            Sell your scrap in <span className="text-brand-600">{city}</span> — free doorstep pickup
          </H1>
          <Lead className="mt-6">
            Book a pickup in {city} and a verified local vendor comes to your door, weighs everything on a digital
            scale in front of you, and pays you on the spot in cash or by UPI. Rates for {city} are published in
            the app before you book.
          </Lead>
          {note && <p className="mt-5 text-lg leading-relaxed text-slate-600">{note.intro}</p>}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={apps.customer}>Book a pickup in {city} <IconArrowRight /></ButtonLink>
            <ButtonLink href={apps.vendorRegister} variant="secondary">Become a vendor in {city}</ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="bg-white pt-8">
        <H2>How a {city} pickup works</H2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {howItWorks.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-100">
                {icons[i]}
              </div>
              <div>
                <span className="text-sm font-bold text-brand-600">Step {i + 1}</span>
                <h3 className="mt-1 font-bold text-slate-900">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
            Read the full process <IconArrowRight />
          </Link>
        </div>
      </Section>

      <Section>
        <div className="mb-10 max-w-2xl">
          <H2>What we collect in {city}</H2>
          <Lead className="mt-4">All five categories are collected across {city} and the surrounding areas.</Lead>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <div key={c.slug} className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <CategoryIcon name={c.icon} className="h-5 w-5 text-brand-600" />
              <span className="font-semibold text-slate-800">{c.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/what-we-accept" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
            See every item we accept <IconArrowRight />
          </Link>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <H2>Why {city} residents use Trade2Cart</H2>
            <p className="mt-6 leading-relaxed text-slate-600">
              Finding a scrap collector in {city} has always meant waiting for someone to pass by, or calling
              around and accepting whatever rate you are quoted. Trade2Cart replaces that with a booking: you
              choose the time, you see the rate first, and the vendor who arrives has been verified by us.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              The service is completely free for {city} customers. You receive the full amount for your scrap —
              our commission is paid by the vendor, not deducted from you.
            </p>
            {note && <p className="mt-4 leading-relaxed text-slate-600">{note.localNote}</p>}
            <div className="mt-8">
              <ButtonLink href={apps.customer} variant="dark">Schedule a pickup <IconArrowRight /></ButtonLink>
            </div>
          </div>
          <Card className="h-fit">
            <h3 className="text-lg font-bold text-slate-900">Pickup details for {city}</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <div><dt className="font-semibold text-slate-900">Cost to you</dt><dd className="mt-0.5 text-slate-600">Free — you are paid for your scrap</dd></div>
              <div><dt className="font-semibold text-slate-900">Payment</dt><dd className="mt-0.5 text-slate-600">Cash or UPI, at the time of pickup</dd></div>
              <div><dt className="font-semibold text-slate-900">Weighing</dt><dd className="mt-0.5 text-slate-600">Digital scale, at your door, in front of you</dd></div>
              <div><dt className="font-semibold text-slate-900">Support hours</dt><dd className="mt-0.5 text-slate-600">{contact.hours}</dd></div>
              {note && (
                <div><dt className="font-semibold text-slate-900">Areas covered</dt><dd className="mt-0.5 text-slate-600">{note.neighbourhoods}</dd></div>
              )}
              <div>
                <dt className="font-semibold text-slate-900">Contact</dt>
                <dd className="mt-0.5">
                  <a href={contact.phoneHref} className="text-brand-700 underline">{contact.phone}</a>
                  <span className="text-slate-400"> · </span>
                  <a href={`mailto:${contact.email}`} className="text-brand-700 underline">{contact.email}</a>
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      </Section>

      <Section>
        <H2>Questions from {city} customers</H2>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {cityFaqs(city).map((f, i) => (
            <FaqItem key={f.question} question={f.question} answer={f.answer} defaultOpen={i === 0} />
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-sm text-slate-500">
          More questions are answered on our{' '}
          <Link to="/how-it-works" className="font-semibold text-brand-700 underline">how it works</Link> page.
        </p>
      </Section>

      {others.length > 0 && (
        <Section className="bg-white">
          <H2 className="text-2xl">We also collect in</H2>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((c) => (
              <Link
                key={c}
                to={`/sell-scrap-in-${citySlug(c)}`}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 transition-all hover:border-brand-300 hover:text-brand-700"
              >
                Scrap pickup in {c}
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        title={`Clear out your scrap in ${city}`}
        description="Pick your items, choose a slot, and get paid at your door."
        primary={{ href: apps.customer, label: 'Book a free pickup' }}
        secondary={{ href: apps.vendorRegister, label: 'Join as a vendor' }}
      />
    </>
  );
}
