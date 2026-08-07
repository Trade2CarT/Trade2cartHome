// Build-time prerender: renders every route to static HTML and writes a sitemap.
//
// Why this exists: the site is a client-rendered SPA, so without this step a
// crawler (and every social-media link scraper) receives an empty <div id="root">.
// Here we render each route with react-dom/server, inject the route's real <head>
// tags from src/content/seo.js, and write dist/<route>/index.html.
//
// Run automatically as part of `npm run build`.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

const { render, allRoutes, getRouteMeta, OG_IMAGE, SITE_URL, business } = await import(
  path.join(dist, 'server', 'entry-server.js')
);

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Build the <head> content for a route from the shared SEO config. */
function headFor(meta) {
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="keywords" content="${esc(meta.keywords)}" />`,
    `<meta name="author" content="${esc(business.name)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${esc(meta.canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(business.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${esc(meta.canonical)}" />`,
    `<meta property="og:image" content="${esc(OG_IMAGE)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(OG_IMAGE)}" />`,
  ];

  for (const schema of meta.schema || []) {
    // </script> inside JSON would close the tag early.
    const json = JSON.stringify(schema).replace(/</g, '\\u003c');
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tags.join('\n    ');
}

// Strip HTML comments from the template BEFORE rewriting the title/description.
// Comment text can contain tag-like strings, and a rewrite that matches inside a
// comment eats its closing "-->" — leaving the comment open so the browser treats
// the stylesheet and script tags as comment text. That shipped once; never again.
const template = (await fs.readFile(path.join(dist, 'index.html'), 'utf-8'))
  .replace(/<!--[\s\S]*?-->/g, '');

const routes = allRoutes();
let written = 0;

/** Fail the build rather than deploy a page that can't load its own assets. */
function assertRenderable(html, label) {
  const problems = [];
  if (!/rel="stylesheet"/.test(html)) problems.push('no stylesheet link');
  if (!/<script[^>]+type="module"/.test(html)) problems.push('no module script');
  const opens = (html.match(/<!--/g) || []).length;
  const closes = (html.match(/-->/g) || []).length;
  if (opens !== closes) problems.push(`unbalanced HTML comments (${opens} open, ${closes} close)`);
  if (!/<div id="root">./.test(html)) problems.push('empty #root — prerender produced no markup');
  if (problems.length) {
    console.error(`  ✗ ${label}: ${problems.join('; ')}`);
    return false;
  }
  return true;
}

for (const route of routes) {
  const meta = getRouteMeta(route.path);
  let appHtml;
  try {
    appHtml = render(route.path);
  } catch (err) {
    console.error(`  ✗ ${route.path} — render failed:`, err.message);
    process.exitCode = 1;
    continue;
  }

  // Replace the placeholder title/description from index.html with the real
  // per-route head, and inject the rendered markup into #root.
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', `  ${headFor(meta)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  if (!assertRenderable(html, route.path)) {
    process.exitCode = 1;
    continue;
  }

  const outDir = route.path === '/' ? dist : path.join(dist, route.path);
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, 'index.html'), html, 'utf-8');
  written += 1;
}

if (written !== routes.length) {
  throw new Error(`Only ${written}/${routes.length} routes were renderable — refusing to publish a broken build.`);
}

// --- 404.html -------------------------------------------------------------
// Vercel serves this for any path with no matching file, so we don't need a
// catch-all rewrite — and a rewrite risks shadowing the prerendered pages.
const notFoundHtml = template
  .replace(/<title>[\s\S]*?<\/title>/, '<title>Page not found | Trade2Cart</title>')
  .replace(/<meta name="description"[^>]*>/, '<meta name="robots" content="noindex, nofollow" />')
  .replace('<div id="root"></div>', `<div id="root">${render('/404-not-found')}</div>`);
await fs.writeFile(path.join(dist, '404.html'), notFoundHtml, 'utf-8');

// --- sitemap.xml ----------------------------------------------------------
const today = new Date().toISOString().split('T')[0];
const urls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n');

await fs.writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  'utf-8'
);

// The server bundle is a build artifact, not something to deploy.
await fs.rm(path.join(dist, 'server'), { recursive: true, force: true });

console.log(`\n  ✓ Prerendered ${written}/${routes.length} routes`);
console.log(`  ✓ sitemap.xml with ${routes.length} URLs\n`);
