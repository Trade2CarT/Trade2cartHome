import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo.PNG';
import { business, contact, nav, apps, socials, SERVICE_AREAS, citySlug } from '../content/site';
import { IconMenu, IconClose, IconMail, IconPhone } from './icons';
import { Container } from './ui';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-brand-700' : 'text-slate-600 hover:text-brand-600'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <Container>
        <nav className="flex items-center justify-between py-3.5" aria-label="Main">
          <Link to="/" onClick={close} className="flex items-center gap-2.5">
            <img src={Logo} alt={`${business.name} logo`} width="40" height="40" className="h-10 w-10 rounded-full" />
            <span className="text-lg font-extrabold tracking-tight text-slate-900">{business.name}</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href={apps.customer}
              className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-brand-700 hover:shadow-lg"
            >
              Schedule Pickup
            </a>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <IconClose /> : <IconMenu />}
          </button>
        </nav>
      </Container>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white shadow-lg lg:hidden">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={close} className="block px-6 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">
              {item.label}
            </NavLink>
          ))}
          <div className="p-4">
            <a href={apps.customer} onClick={close} className="block rounded-xl bg-brand-600 px-6 py-3.5 text-center font-semibold text-white">
              Schedule Pickup
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const FooterCol = ({ title, children }) => (
  <div>
    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{title}</h3>
    <ul className="space-y-2.5 text-sm">{children}</ul>
  </div>
);

const FooterLink = ({ to, href, children }) => (
  <li>
    {to ? (
      <Link to={to} className="text-slate-400 transition-colors hover:text-white">{children}</Link>
    ) : (
      <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-white">
        {children}
      </a>
    )}
  </li>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300">
    <Container className="py-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={Logo} alt="" width="40" height="40" className="h-10 w-10 rounded-full" />
            <span className="text-lg font-extrabold text-white">{business.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{business.shortDescription}</p>
          <p className="mt-4 text-sm italic text-slate-500">“{business.tagline}”</p>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Company">
          <FooterLink to="/about">About us</FooterLink>
          <FooterLink to="/how-it-works">How it works</FooterLink>
          <FooterLink to="/what-we-accept">What we accept</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterCol>

        <FooterCol title="Service areas">
          {SERVICE_AREAS.map((city) => (
            <FooterLink key={city} to={`/sell-scrap-in-${citySlug(city)}`}>Scrap pickup in {city}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Get started">
          <FooterLink href={apps.customer}>Sell your scrap</FooterLink>
          <FooterLink href={apps.vendorRegister}>Become a vendor</FooterLink>
          <FooterLink href={apps.vendor}>Vendor portal</FooterLink>
          <FooterLink to="/privacy">Privacy policy</FooterLink>
          <FooterLink to="/terms">Terms &amp; conditions</FooterLink>
          <FooterLink to="/refund-policy">Cancellation policy</FooterLink>
        </FooterCol>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <IconMail className="h-4 w-4" /> {contact.email}
          </a>
          <a href={contact.phoneHref} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <IconPhone className="h-4 w-4" /> {contact.phone}
          </a>
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
);

// Restores scroll position on route change — without this, navigating from the
// bottom of one page lands you mid-way down the next.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
