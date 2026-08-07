import SEO from '../components/SEO';
import VendorScreenshot from '../assets/images/vendor.jpg';
import { Section, H1, H2, Lead, Eyebrow, Card, ButtonLink, CheckList, FaqItem, CtaBand } from '../components/ui';
import { IconArrowRight } from '../components/icons';
import { vendorBenefits, vendorSteps, businessModel, faqs, apps, SERVICE_AREAS, contact } from '../content/site';

const vendorFaqs = faqs.filter((f) => f.question.startsWith('[For vendors]'));

export default function ForVendors() {
  return (
    <>
      <SEO />

      <Section className="pb-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>For vendors</Eyebrow>
            <H1 className="mt-4">Confirmed pickups from your own area</H1>
            <Lead className="mt-6">
              Stop spending the day looking for customers. Join the Trade2Cart network and receive verified pickup
              orders where the customer has already chosen their items and booked a slot.
            </Lead>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={apps.vendorRegister}>Register as a vendor <IconArrowRight /></ButtonLink>
              <ButtonLink href={apps.vendor} variant="secondary">Vendor portal login</ButtonLink>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={VendorScreenshot}
              alt="Trade2Cart vendor portal showing assigned pickup orders"
              width="326"
              height="732"
              className="w-full max-w-[280px] rounded-3xl border border-slate-100 shadow-2xl"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Why join</Eyebrow>
          <H2 className="mt-3">What the network gives you</H2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {vendorBenefits.map((b) => (
            <Card key={b.title}>
              <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{b.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Onboarding</Eyebrow>
          <H2 className="mt-3">Four steps to your first order</H2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {vendorSteps.map((step, i) => (
            <div key={step.title} className="rounded-2xl border border-slate-100 bg-white p-6">
              <span className="text-sm font-bold text-brand-600">Step {i + 1}</span>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <H2>Commission and settlement</H2>
            <p className="mt-6 leading-relaxed text-slate-600">{businessModel.vendors}</p>
            <p className="mt-4 leading-relaxed text-slate-600">
              You pay the customer directly at pickup and the scrap is yours. The platform commission for completed
              orders is tracked in your dashboard and settled from there, so your outstanding balance is always
              visible rather than something you have to reconcile by hand.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">What we expect from vendors</h3>
            <div className="mt-5">
              <CheckList
                items={[
                  'Arrive within the scheduled pickup window, or update the order if you cannot.',
                  'Carry a working digital weighing scale and weigh in front of the customer.',
                  'Pay the customer in full at pickup, in cash or by UPI.',
                  'Apply the published rates for the area — no renegotiating at the door.',
                  'Close every completed order with a bill in the portal.',
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <H2>Where we need vendors</H2>
            <Lead className="mt-4">
              We are actively onboarding in {SERVICE_AREAS.join(', ')}, and we open new areas when there are
              verified vendors ready to serve them properly.
            </Lead>
            <p className="mt-4 text-slate-600">
              Operating somewhere we have not launched yet? Email{' '}
              <a href={`mailto:${contact.email}`} className="font-semibold text-brand-700 underline">{contact.email}</a>{' '}
              or call{' '}
              <a href={contact.phoneHref} className="font-semibold text-brand-700 underline">{contact.phone}</a>{' '}
              — new areas usually start with a vendor who is already working there.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Vendor questions</h3>
            <div className="mt-5 space-y-4">
              {vendorFaqs.map((f) => (
                <FaqItem key={f.question} question={f.question.replace('[For vendors] ', '')} answer={f.answer} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Join the Trade2Cart vendor network"
        description="Registration takes a few minutes. Verification is handled by our team before your first order."
        primary={{ href: apps.vendorRegister, label: 'Register as a vendor' }}
        secondary={{ to: '/contact', label: 'Talk to us first' }}
      />
    </>
  );
}
