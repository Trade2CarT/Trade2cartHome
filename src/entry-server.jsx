import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.jsx'

/** Renders a route to an HTML string. Called by scripts/prerender.mjs. */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}

// Re-exported so the prerender script reads routes and metadata from the exact
// same source the app uses, instead of keeping a duplicate list.
export { allRoutes, getRouteMeta, OG_IMAGE } from './content/seo'
export { SITE_URL, business } from './content/site'
