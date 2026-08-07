import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteMeta, OG_IMAGE } from '../content/seo';
import { business } from '../content/site';

/**
 * Keeps <head> in sync with the current route.
 *
 * The static HTML for every route already carries the correct head tags —
 * scripts/prerender.mjs writes them from this same config, so crawlers and
 * link scrapers never need to run JavaScript. This component only handles
 * *client-side navigation*, where the document persists between routes.
 *
 * It updates the DOM imperatively rather than rendering <title>/<meta> as JSX
 * on purpose: rendering them would duplicate the prerendered tags in the served
 * HTML and risk hydration mismatches.
 */
export default function SEO({ title, description, keywords, canonical, schema, noindex = false }) {
  const { pathname } = useLocation();

  // useEffect, not useLayoutEffect: the prerendered HTML already carries the
  // right tags, so there is nothing to correct before paint — and
  // useLayoutEffect warns during server rendering.
  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const finalTitle = title || meta.title;
    const finalDescription = description || meta.description;
    const finalCanonical = canonical || meta.canonical;
    const finalSchema = schema || meta.schema || [];

    document.title = finalTitle;

    const setMeta = (selector, attr, key, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', 'name', 'description', finalDescription);
    setMeta('meta[name="keywords"]', 'name', 'keywords', keywords || meta.keywords);
    setMeta('meta[name="author"]', 'name', 'author', business.name);
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', business.name);
    setMeta('meta[property="og:title"]', 'property', 'og:title', finalTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', finalDescription);
    setMeta('meta[property="og:url"]', 'property', 'og:url', finalCanonical);
    setMeta('meta[property="og:image"]', 'property', 'og:image', OG_IMAGE);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', finalTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', finalDescription);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', OG_IMAGE);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', finalCanonical);

    // Replace only the JSON-LD blocks this component owns, so the prerendered
    // ones are swapped out cleanly on navigation instead of accumulating.
    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((s) => s.remove());
    finalSchema.forEach((entry) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    });
  }, [pathname, title, description, keywords, canonical, schema, noindex]);

  return null;
}
