import SEO from '../components/SEO';
import { Section, H1, H2, Lead, Eyebrow, Card, CtaBand, CheckList } from '../components/ui';
import { CategoryIcon } from '../components/icons';
import { categories, apps, SERVICE_AREAS } from '../content/site';

export default function WhatWeAccept() {
  return (
    <>
      <SEO />

      <Section className="pb-8">
        <div className="max-w-3xl">
          <Eyebrow>What we accept</Eyebrow>
          <H1 className="mt-4">Everything from old newspapers to old refrigerators</H1>
          <Lead className="mt-6">
            Trade2Cart collects five broad categories of scrap. Live rates are location-specific and shown in the
            app once you select your area, because what a vendor can pay genuinely differs between towns.
          </Lead>
        </div>
      </Section>

      <Section className="bg-white pt-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {categories.map((c) => (
            <Card key={c.slug}>
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-brand-50 p-3 ring-1 ring-brand-100">
                  <CategoryIcon name={c.icon} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{c.name}</h2>
                  <p className="mt-1.5 text-slate-600">{c.summary}</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.items.map((item) => (
                  <li key={item} className="rounded-lg bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <H2>How pricing works</H2>
            <p className="mt-6 leading-relaxed text-slate-600">
              Every item has a published rate for your area, visible in the app before you book. You do not need to
              know exact weights up front — a rough estimate is enough to schedule a pickup. The final amount is
              calculated from the weight measured on a digital scale at your door, at those same published rates.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Rates move with the underlying scrap market, so they are updated per location rather than fixed
              permanently. Appliances and e-waste are usually priced per unit rather than per kilo.
            </p>
          </div>
          <div>
            <H2 className="text-2xl">Get a better rate</H2>
            <div className="mt-6">
              <CheckList
                items={[
                  'Separate metals from general scrap — mixed loads get priced at the lowest common rate.',
                  'Keep paper dry. Damp paper weighs more but is worth less, and vendors price accordingly.',
                  'Rinse plastic bottles and containers; contamination is the most common reason a rate drops.',
                  'Accumulate before booking. One larger pickup is worth more to you than three small ones.',
                  'Mention large appliances when you book so the vendor arrives prepared to carry them.',
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <H2>Not sure about an item?</H2>
        <Lead className="mt-4 max-w-3xl">
          Add it to your cart anyway. The app will tell you whether it is accepted in your area, and the vendor
          confirms at pickup. We currently operate across {SERVICE_AREAS.join(', ')} and the surrounding areas.
        </Lead>
      </Section>

      <CtaBand
        title="See the rates for your area"
        description="Rates are published per location inside the app — select your area to see them."
        primary={{ href: apps.customer, label: 'Check rates & book' }}
        secondary={{ to: '/how-it-works', label: 'How pickups work' }}
      />
    </>
  );
}
