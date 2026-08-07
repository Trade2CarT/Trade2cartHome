import SEO from '../components/SEO';
import { Section, H1, Eyebrow } from '../components/ui';
import { contact, legal, business } from '../content/site';

const LegalShell = ({ eyebrow, title, children }) => (
  <>
    <SEO />
    <Section>
      <div className="mx-auto max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <H1 className="mt-4 text-3xl sm:text-4xl">{title}</H1>
        <p className="mt-4 text-sm text-slate-500">
          Effective date: {legal.effectiveDate} · Last updated: {legal.lastUpdated}
        </p>
        <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-600">{children}</div>
      </div>
    </Section>
  </>
);

const Block = ({ heading, children }) => (
  <section>
    <h2 className="text-xl font-bold text-slate-900">{heading}</h2>
    <div className="mt-3 space-y-3 [&_li]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">{children}</div>
  </section>
);

const Mail = () => (
  <a href={`mailto:${contact.email}`} className="font-semibold text-brand-700 underline">{contact.email}</a>
);

export function Privacy() {
  return (
    <LegalShell eyebrow="Legal" title="Privacy Policy">
      <p>
        {business.name} respects your privacy. This policy explains what we collect, why we collect it, who we
        share it with, and the control you have over it.
      </p>

      <Block heading="Information we collect">
        <ul>
          <li>Your name, contact number, pickup address and location.</li>
          <li>Booking details — the items you list, your chosen slot, and the outcome of the pickup.</li>
          <li>Basic usage data from our app and website, used to keep the service working and to prevent misuse.</li>
        </ul>
      </Block>

      <Block heading="How we use your data">
        <ul>
          <li>To process your booking and assign a verified vendor to it.</li>
          <li>To send you notifications and updates about your pickup.</li>
          <li>To provide customer support and resolve disputes.</li>
          <li>To improve the service and detect fraud or misuse.</li>
        </ul>
      </Block>

      <Block heading="Data sharing">
        <ul>
          <li>We share your name, contact number and pickup address with the vendor assigned to your booking — this is necessary for the pickup to happen.</li>
          <li>We do not sell your personal data to third parties, and we do not share it for advertising.</li>
          <li>We may disclose data where required by law.</li>
        </ul>
      </Block>

      <Block heading="Data retention and your rights">
        <ul>
          <li>We keep your booking history for operational, accounting and legal purposes.</li>
          <li>You can request a copy of your data, ask for corrections, or request deletion by emailing <Mail />.</li>
          <li>Deletion requests are actioned within a reasonable period, except where we are required to retain records by law.</li>
        </ul>
      </Block>

      <Block heading="Contact">
        <p>Questions about this policy, or about your data, can be sent to <Mail />.</p>
      </Block>
    </LegalShell>
  );
}

export function Terms() {
  return (
    <LegalShell eyebrow="Legal" title="Terms & Conditions">
      <p>
        Welcome to {business.name}. By booking a pickup or registering as a vendor, you agree to the terms below.
      </p>

      <Block heading="Our role as a platform">
        <ul>
          <li>{business.name} is a mediator between customers and vendors.</li>
          <li>We do not buy, sell, or collect scrap directly.</li>
          <li>All transactions, including payments, happen directly between the customer and the vendor at the time of pickup.</li>
          <li>We verify vendors before they receive orders, publish rates by location, and assign each booking to a vendor covering that area.</li>
        </ul>
      </Block>

      <Block heading="Customer responsibilities">
        <ul>
          <li>Provide accurate booking, contact and address details.</li>
          <li>Be available at the scheduled pickup time, or update the booking in advance.</li>
          <li>Only offer items you are legally entitled to sell.</li>
          <li>Once a booking is confirmed and a vendor has been assigned, cancellation may not be possible — see our cancellation policy.</li>
        </ul>
      </Block>

      <Block heading="Vendor responsibilities">
        <ul>
          <li>Vendors must pay the customer directly and in full at the time of pickup.</li>
          <li>Vendors must weigh items on a working digital scale, in front of the customer.</li>
          <li>Vendors must apply the rates published for the area and not renegotiate at the door.</li>
          <li>Vendors are responsible for settling platform commission on completed orders.</li>
          <li>{business.name} is not liable for delayed or failed payments by a vendor, though we will act on reports and remove vendors who do not meet our standards.</li>
        </ul>
      </Block>

      <Block heading="Rates and pricing">
        <ul>
          <li>Rates are location-specific and can change as the underlying scrap market moves.</li>
          <li>The rate applied is the one published for your area at the time of booking.</li>
          <li>The final amount is calculated from the weight measured at pickup.</li>
        </ul>
      </Block>

      <Block heading="Fees">
        <ul>
          <li>The pickup service is free for customers.</li>
          <li>Vendors pay a per-order platform commission for completed pickups.</li>
        </ul>
      </Block>

      <Block heading="Disputes and liability">
        <ul>
          <li>Disputes about weight, rate or payment should be raised with us at <Mail /> and are resolved between the customer and the vendor with our assistance.</li>
          <li>Because payment happens directly between the two parties, {business.name} is not a party to that transaction and is not liable for losses arising from it.</li>
        </ul>
      </Block>

      <Block heading="Changes to these terms">
        <p>We may update these terms. The effective date at the top of this page always reflects the current version.</p>
      </Block>
    </LegalShell>
  );
}

export function RefundPolicy() {
  return (
    <LegalShell eyebrow="Legal" title="Cancellation & Refund Policy">
      <p>
        Because {business.name} pickups are free for customers and payment flows from the vendor to you, there is
        no customer payment for us to refund. This policy explains how cancellations and payment disputes work.
      </p>

      <Block heading="Cancelling a booking">
        <ul>
          <li>You can cancel before a vendor has been assigned to your booking.</li>
          <li>Once a vendor has been assigned and is on the way, cancellation may not be possible — the vendor has already committed the trip.</li>
          <li>If you need to change a slot, contact us at <Mail /> or on {contact.phone} as early as you can.</li>
        </ul>
      </Block>

      <Block heading="If a vendor does not arrive">
        <ul>
          <li>Report it to <Mail /> with your booking details.</li>
          <li>We will reassign your pickup to another verified vendor.</li>
          <li>Repeated no-shows result in a vendor being removed from the network.</li>
        </ul>
      </Block>

      <Block heading="Payment disputes">
        <ul>
          <li>Payment is made by the vendor directly to you at pickup, so there is no platform-held amount to refund.</li>
          <li>If you were underpaid, or the weighing was disputed, contact us within 48 hours with the booking details and we will investigate.</li>
        </ul>
      </Block>

      <Block heading="Vendor commission">
        <ul>
          <li>Platform commission charged to vendors is calculated per completed order.</li>
          <li>Commission charged on an order that is later cancelled or reversed is adjusted in the vendor's next settlement.</li>
        </ul>
      </Block>

      <Block heading="Contact">
        <p>All cancellation and dispute requests go to <Mail /> or {contact.phone}. {contact.supportSla}</p>
      </Block>
    </LegalShell>
  );
}
