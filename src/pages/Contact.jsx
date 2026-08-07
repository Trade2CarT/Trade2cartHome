import SEO from '../components/SEO';
import { Section, H1, H2, Lead, Eyebrow, Card, ButtonLink } from '../components/ui';
import { IconMail, IconPhone, IconPin, IconArrowRight } from '../components/icons';
import { contact, business, socials, apps, SERVICE_AREAS } from '../content/site';

export default function Contact() {
  return (
    <>
      <SEO />

      <Section className="pb-8">
        <div className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <H1 className="mt-4">Get in touch</H1>
          <Lead className="mt-6">
            Questions about a pickup, interested in joining as a vendor, or need to raise a concern? Here is how to
            reach us. {contact.supportSla}
          </Lead>
        </div>
      </Section>

      <Section className="bg-white pt-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="text-brand-600"><IconMail className="h-7 w-7" /></div>
            <h2 className="mt-4 text-lg font-bold text-slate-900">Email</h2>
            <a href={`mailto:${contact.email}`} className="mt-2 block break-all font-semibold text-brand-700 underline">
              {contact.email}
            </a>
            <p className="mt-2 text-sm text-slate-500">Best for support, billing and vendor enquiries.</p>
          </Card>

          <Card>
            <div className="text-brand-600"><IconPhone className="h-7 w-7" /></div>
            <h2 className="mt-4 text-lg font-bold text-slate-900">Phone &amp; WhatsApp</h2>
            <a href={contact.phoneHref} className="mt-2 block font-semibold text-brand-700 underline">{contact.phone}</a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-semibold text-brand-700 underline">
              Message on WhatsApp
            </a>
            <p className="mt-2 text-sm text-slate-500">{contact.hours}</p>
          </Card>

          <Card>
            <div className="text-brand-600"><IconPin className="h-7 w-7" /></div>
            <h2 className="mt-4 text-lg font-bold text-slate-900">Where we operate</h2>
            <p className="mt-2 font-semibold text-slate-900">{business.region}</p>
            <p className="mt-2 text-sm text-slate-500">{SERVICE_AREAS.join(' · ')}</p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <H2>Grievance contact</H2>
            <p className="mt-5 leading-relaxed text-slate-600">
              If a pickup did not go as expected — a vendor did not arrive, the weighing or payment was disputed,
              or you want your data removed — email{' '}
              <a href={`mailto:${contact.email}`} className="font-semibold text-brand-700 underline">{contact.email}</a>{' '}
              with your booking details. We respond within 24 hours.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Please note that Trade2Cart is a platform connecting customers with independent vendors: payment
              happens directly between you and the vendor at pickup. We will always help resolve a dispute, and
              vendors who do not meet our standards are removed from the network.
            </p>
          </div>

          <div>
            <H2 className="text-2xl">Follow Trade2Cart</H2>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 transition-all hover:border-brand-300 hover:text-brand-700"
                >
                  {s.name}
                </a>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-bold text-slate-900">Quick links</h3>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={apps.customer}>Schedule a pickup <IconArrowRight /></ButtonLink>
              <ButtonLink href={apps.vendorRegister} variant="secondary">Become a vendor</ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
