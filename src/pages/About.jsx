import SEO from '../components/SEO';
import FounderPhoto from '../assets/images/Imran.png';
import VendorScreenshot from '../assets/images/vendor.jpg';
import { Section, H1, H2, Lead, Eyebrow, Card, ButtonLink, CheckList, CtaBand } from '../components/ui';
import { IconArrowRight, IconCheck } from '../components/icons';
import { business, founder, businessModel, products, platformHighlights, apps, SERVICE_AREAS, contact } from '../content/site';

export default function About() {
  return (
    <>
      <SEO />

      <Section className="pb-8">
        <div className="max-w-3xl">
          <Eyebrow>About us</Eyebrow>
          <H1 className="mt-4">Making scrap collection something you can actually rely on</H1>
          <Lead className="mt-6">{business.shortDescription}</Lead>
        </div>
      </Section>

      {/* Long description */}
      <Section className="bg-white pt-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <H2>What Trade2Cart does</H2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{business.longDescription}</p>
          </div>
          <div className="space-y-4">
            <Card>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Founded</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{business.founded}</p>
            </Card>
            <Card>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Category</p>
              <p className="mt-1 font-semibold text-slate-900">{business.category}</p>
            </Card>
            <Card>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Operating region</p>
              <p className="mt-1 font-semibold text-slate-900">{business.region}</p>
              <p className="mt-2 text-sm text-slate-500">{SERVICE_AREAS.join(' · ')}</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Founder */}
      <Section>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Founder</Eyebrow>
          <H2 className="mt-3">Who is behind Trade2Cart</H2>
        </div>
        <div className="grid items-start gap-10 lg:grid-cols-3">
          <div>
            <img
              src={FounderPhoto}
              alt={founder.photoAlt}
              width="410"
              height="609"
              loading="lazy"
              className="w-full max-w-xs rounded-3xl border border-slate-100 object-cover shadow-lg"
            />
            <p className="mt-5 text-xl font-bold text-slate-900">{founder.name}</p>
            <p className="text-brand-700 font-semibold">{founder.title}</p>
            <p className="mt-2 text-sm text-slate-500">{founder.education}</p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-slate-600">{founder.bio}</p>

            <h3 className="mt-9 text-xl font-bold text-slate-900">Why Trade2Cart exists</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{founder.whyStarted}</p>

            <h3 className="mt-9 text-xl font-bold text-slate-900">Technical background</h3>
            <div className="mt-4">
              <CheckList items={founder.technicalBackground} />
            </div>
          </div>
        </div>
      </Section>

      {/* Products */}
      <Section className="bg-white">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Our products</Eyebrow>
          <H2 className="mt-3">Built and run by us</H2>
          <Lead className="mt-4">
            Trade2Cart runs on software we build and operate ourselves — one app for customers, one portal for
            vendors.
          </Lead>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p) => (
            <Card key={p.name} className="flex flex-col">
              <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-600">{p.description}</p>
              {p.url && p.cta && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
                  {p.cta} <IconArrowRight />
                </a>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900">What that means for you</h3>
            <ul className="mt-5 space-y-3">
              {platformHighlights.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <IconCheck />
                  <span className="text-slate-700">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src={VendorScreenshot}
              alt="The Trade2Cart vendor portal showing assigned pickup orders"
              width="326"
              height="732"
              loading="lazy"
              className="w-full max-w-[260px] rounded-3xl border border-slate-100 shadow-xl"
            />
          </div>
        </div>
      </Section>

      {/* Business model */}
      <Section>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Business model</Eyebrow>
          <H2 className="mt-3">How Trade2Cart makes money</H2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card><h3 className="text-lg font-bold text-slate-900">For customers</h3><p className="mt-3 leading-relaxed text-slate-600">{businessModel.customers}</p></Card>
          <Card><h3 className="text-lg font-bold text-slate-900">For vendors</h3><p className="mt-3 leading-relaxed text-slate-600">{businessModel.vendors}</p></Card>
          <Card><h3 className="text-lg font-bold text-slate-900">Our role</h3><p className="mt-3 leading-relaxed text-slate-600">{businessModel.role}</p></Card>
          <Card><h3 className="text-lg font-bold text-slate-900">Expansion</h3><p className="mt-3 leading-relaxed text-slate-600">{businessModel.expansion}</p></Card>
        </div>
        <div className="mt-10">
          <ButtonLink to="/contact" variant="secondary">Talk to us <IconArrowRight /></ButtonLink>
        </div>
      </Section>

      <CtaBand
        title="Want to work with us?"
        description={`Customers can book a pickup in under a minute. Vendors can join the network today. Or just email ${contact.email}.`}
        primary={{ href: apps.customer, label: 'Schedule a pickup' }}
        secondary={{ href: apps.vendorRegister, label: 'Become a vendor' }}
      />
    </>
  );
}
