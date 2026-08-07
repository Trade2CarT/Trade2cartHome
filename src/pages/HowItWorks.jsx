import SEO from '../components/SEO';
import { Section, H1, H2, Lead, Eyebrow, StepCard, Card, FaqItem, CtaBand, CheckList } from '../components/ui';
import { IconCart, IconCalendar, IconPayment } from '../components/icons';
import { howItWorks, vendorSteps, faqs, apps, businessModel } from '../content/site';

const icons = [<IconCart />, <IconCalendar />, <IconPayment />];

export default function HowItWorks() {
  return (
    <>
      <SEO />

      <Section className="pb-8">
        <div className="max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <H1 className="mt-4">Book a pickup, get weighed, get paid</H1>
          <Lead className="mt-6">
            The whole point of Trade2Cart is that you know the terms before anyone knocks on your door. Here is
            exactly what happens, for customers and for vendors.
          </Lead>
        </div>
      </Section>

      <Section className="bg-white pt-8">
        <H2>For customers</H2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {howItWorks.map((step, i) => (
            <StepCard key={step.title} index={i + 1} icon={icons[i]} title={step.title} description={step.description} />
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="font-bold text-slate-900">What does it cost?</h3>
            <p className="mt-2 text-slate-600">{businessModel.customers}</p>
          </Card>
          <Card>
            <h3 className="font-bold text-slate-900">How is the weight decided?</h3>
            <p className="mt-2 text-slate-600">
              The vendor brings a digital scale and weighs everything at your door, in front of you. The total is
              calculated from that weight at the rates shown in the app.
            </p>
          </Card>
          <Card>
            <h3 className="font-bold text-slate-900">When do I get paid?</h3>
            <p className="mt-2 text-slate-600">
              Immediately, at the time of pickup — cash or UPI, whichever you prefer. Nothing is transferred later.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <H2>For vendors</H2>
        <Lead className="mt-4 max-w-2xl">
          Vendors join the network, get verified, and start receiving confirmed orders from their own area.
        </Lead>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
            <H2>Where Trade2Cart sits</H2>
            <p className="mt-6 leading-relaxed text-slate-600">{businessModel.role}</p>
            <p className="mt-4 leading-relaxed text-slate-600">
              That distinction matters in practice: the money never passes through us, so there is nothing to
              withhold and nothing to wait for. What we are responsible for is that the vendor at your door is
              verified, the rates you saw are the rates applied, and someone answers when you need support.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">What we take responsibility for</h3>
            <div className="mt-5">
              <CheckList
                items={[
                  'Verifying and approving every vendor before they receive orders',
                  'Publishing rates by location so pricing is visible before booking',
                  'Assigning each pickup to a vendor who covers your area',
                  'Handling billing records and platform settlement',
                  'Answering support requests within 24 hours',
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <H2>Common questions</H2>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((f, i) => (
            <FaqItem key={f.question} question={f.question} answer={f.answer} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      <CtaBand
        title="Try it with one pickup"
        description="Book a slot, see what your scrap is worth, and decide for yourself."
        primary={{ href: apps.customer, label: 'Schedule a pickup' }}
        secondary={{ href: apps.vendorRegister, label: 'Join as a vendor' }}
      />
    </>
  );
}
