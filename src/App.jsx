import { Routes, Route } from 'react-router-dom';
import { SERVICE_AREAS, citySlug } from './content/site';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import WhatWeAccept from './pages/WhatWeAccept';
import ForVendors from './pages/ForVendors';
import CityPage from './pages/CityPage';
import Contact from './pages/Contact';
import { Privacy, Terms, RefundPolicy } from './pages/Legal';
import { BlogIndex, BlogPost } from './pages/Blog';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/what-we-accept" element={<WhatWeAccept />} />
        <Route path="/for-vendors" element={<ForVendors />} />
        {/* One explicit route per service area. React Router does not match a
            dynamic segment that is only part of a path segment, so
            "/sell-scrap-in-:city" would never match — and keeping the keyword
            in a single slug is better for search than /sell-scrap-in/<city>. */}
        {SERVICE_AREAS.map((city) => (
          <Route
            key={city}
            path={`/sell-scrap-in-${citySlug(city)}`}
            element={<CityPage city={city} />}
          />
        ))}
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
