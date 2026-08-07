import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconArrowRight, IconChevronDown, IconCheck } from './icons';

export const Container = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const Section = ({ children, className = '', id }) => (
  <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
    <Container>{children}</Container>
  </section>
);

export const Eyebrow = ({ children }) => (
  <span className="text-sm font-bold uppercase tracking-widest text-brand-600">{children}</span>
);

export const H1 = ({ children, className = '' }) => (
  <h1 className={`text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = '' }) => (
  <h2 className={`text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl ${className}`}>{children}</h2>
);

export const Lead = ({ children, className = '' }) => (
  <p className={`text-lg leading-relaxed text-slate-600 sm:text-xl ${className}`}>{children}</p>
);

export const Prose = ({ children }) => (
  <div className="space-y-4 text-base leading-relaxed text-slate-600 [&_a]:font-semibold [&_a]:text-brand-700 [&_a]:underline [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_li]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
    {children}
  </div>
);

const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200';

export const ButtonLink = ({ to, href, variant = 'primary', children, className = '', ...rest }) => {
  const styles = {
    primary: 'bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:shadow-xl',
    secondary: 'border border-slate-200 bg-white text-slate-800 shadow-sm hover:border-slate-300 hover:shadow-md',
    dark: 'bg-slate-900 text-white shadow-lg hover:bg-slate-800',
    accent: 'bg-accent-500 text-white shadow-lg shadow-accent-500/20 hover:bg-accent-600',
  }[variant];

  const cls = `${btnBase} ${styles} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  return (
    <a href={href} className={cls} {...(href?.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  );
};

export const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}>
    {children}
  </div>
);

export const FeatureCard = ({ icon, title, description }) => (
  <Card>
    {icon && <div className="mb-4">{icon}</div>}
    <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
    <p className="leading-relaxed text-slate-600">{description}</p>
  </Card>
);

export const StepCard = ({ index, icon, title, description }) => (
  <div className="relative flex flex-col items-start">
    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 ring-1 ring-brand-100">
      {icon}
    </div>
    <span className="mb-2 text-sm font-bold text-brand-600">Step {index}</span>
    <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
    <p className="leading-relaxed text-slate-600">{description}</p>
  </div>
);

export const CheckList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={typeof item === 'string' ? item : item.title} className="flex items-start gap-3">
        <IconCheck />
        {typeof item === 'string' ? (
          <span className="text-slate-700">{item}</span>
        ) : (
          <span className="text-slate-700">
            <strong className="font-semibold text-slate-900">{item.title}</strong> — {item.description}
          </span>
        )}
      </li>
    ))}
  </ul>
);

export const FaqItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <span className="text-base font-semibold text-slate-900 sm:text-lg">{question}</span>
        <span className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <IconChevronDown />
        </span>
      </button>
      {/* Always in the DOM so crawlers read every answer, matching the FAQPage schema */}
      <div className={isOpen ? 'block' : 'hidden'}>
        <p className="px-5 pb-6 leading-relaxed text-slate-600 sm:px-6">{answer}</p>
      </div>
    </div>
  );
};

export const CtaBand = ({ title, description, primary, secondary }) => (
  <Section>
    <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-14 text-center shadow-xl sm:px-12">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="relative">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {description && <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-50">{description}</p>}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href={primary.href} to={primary.to} variant="secondary">
            {primary.label} <IconArrowRight />
          </ButtonLink>
          {secondary && (
            <ButtonLink
              href={secondary.href}
              to={secondary.to}
              className="border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              {secondary.label}
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  </Section>
);
