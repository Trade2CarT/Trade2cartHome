import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Section, H1, Lead, ButtonLink } from '../components/ui';
import { SITE_URL } from '../content/site';
import { nav } from '../content/site';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found | Trade2Cart"
        description="The page you are looking for does not exist."
        canonical={`${SITE_URL}/404`}
        schema={[]}
        noindex
      />
      <Section>
        <div className="mx-auto max-w-2xl py-16 text-center">
          <p className="text-6xl font-extrabold text-brand-600">404</p>
          <H1 className="mt-4 text-3xl sm:text-4xl">We couldn&apos;t find that page</H1>
          <Lead className="mt-5">
            The link may be out of date. Here is everything else on the site.
          </Lead>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 font-semibold text-slate-700 transition-all hover:border-brand-300 hover:text-brand-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink to="/">Back to home</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
