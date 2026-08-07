# Trade2Cart — off-site listing pack

Copy-paste text for every external profile. **Use these exact values everywhere.**
Local SEO rewards consistency: Google cross-checks your name, address and phone
(NAP) across sites, and mismatched details dilute your ranking.

---

## Core details (must be identical on every listing)

| Field | Value |
|---|---|
| Business name | `Trade2Cart` |
| Website | `https://www.trade2cart.in` |
| Email | `trade@trade2cart.in` |
| Phone | `+91 8903166106` |
| Category | Recycling centre / Waste management service / Scrap dealer |
| Region | Tamil Nadu, India |
| Service areas | Arakkonam, Tiruttani, Sholinghur, Vellore |
| Hours | Monday–Sunday, 9:00 AM – 7:00 PM |
| Founder | Imran S, Founder |
| Logo | `https://www.trade2cart.in/logo.png` |

---

## Tagline (under 30 characters)

```
Transforming trash into treasure
```

## Short description (under 160 characters — bios, directory cards, meta)

```
Trade2Cart connects you with verified local scrap vendors. Book a free doorstep pickup, see transparent rates, and get paid on the spot.
```

## Medium description (about 300 characters — Google Business Profile, LinkedIn tagline)

```
Trade2Cart is a doorstep scrap pickup platform serving Arakkonam, Tiruttani, Sholinghur and Vellore. Pick your items in the app, see the rates for your area, and a verified local vendor collects from your door — weighing everything on a digital scale and paying you instantly in cash or UPI. Free for customers.
```

## Long description (About sections, Crunchbase-style directories)

```
Trade2Cart is a technology platform that makes scrap collection easier by connecting customers with verified scrap collection vendors and simplifying the pickup process.

Instead of calling around to find a kabadiwala, customers pick their items in the app, see the published rates for their area, and choose a pickup slot. Trade2Cart assigns a verified vendor nearby, who arrives at the door, weighs everything on a digital scale in front of the customer, and pays immediately in cash or by UPI.

For vendors, Trade2Cart replaces guesswork and cold calls with a steady stream of confirmed pickup requests from their own area, delivered to a dashboard that also handles billing and earnings tracking.

Trade2Cart operates as a mediator: we do not buy, sell or collect scrap ourselves, and every payment happens directly between the customer and the vendor. The service is free for customers; vendors pay a small per-order commission.

We collect paper and cardboard, plastic, metal, e-waste and appliances, glass and general household scrap. Founded in 2025 and currently serving Arakkonam, Tiruttani, Sholinghur and Vellore in Tamil Nadu.
```

---

## Priority order — do these in this sequence

### 1. Google Business Profile (highest impact by far)
`business.google.com` → Add business.

- **Business type:** Service area business (you serve customers at their location — do **not** publish a street address).
- **Service areas:** add all four towns individually.
- **Category:** primary `Recycling Center`; secondary `Waste Management Service`, `Scrap Metal Dealer`.
- **Website:** `https://www.trade2cart.in`
- **Phone:** `+91 8903166106`
- **Description:** use the medium description above.
- **Photos:** logo, vendor-app screenshot, and real pickup photos when you have them.
- Verification is by postcard or phone and usually takes a few days. Nothing else on this list moves local rankings as much.

### 2. Bing Places
`bingplaces.com` — supports importing directly from Google Business Profile once step 1 is verified. Five minutes of work.

### 3. Instagram (`@trade2cart`)
Bio (150 char limit):
```
♻️ Doorstep scrap pickup
📍 Arakkonam · Tiruttani · Sholinghur · Vellore
💰 Fair rates, paid on the spot
👇 Book a free pickup
```
Link: `https://www.trade2cart.in`
Content that works: before/after collection photos, a rate update per category, vendor introductions, customer stories.

### 4. LinkedIn company page
- Tagline: use the short description.
- About: use the long description.
- Industry: `Environmental Services`; Company size: 1–10; Founded: 2025.
- Website: `https://www.trade2cart.in`
- Add yourself as Founder so the page links to your personal profile — this is what makes the `Person` structured data on `/about` corroborate.

### 5. Facebook page
- Category: `Recycling Center`
- Use the medium description, same photo set as Google.
- Add the service areas and phone so the NAP matches.

### 6. Google Search Console (do this the day you deploy)
1. Add a **Domain property** for `trade2cart.in` — it covers both the apex and the
   `www` hostname in one place, which matters because the site is served on
   `www.trade2cart.in` and the apex redirects to it.
2. Verify via DNS TXT record in your domain registrar.
3. Submit the sitemap: `https://www.trade2cart.in/sitemap.xml`
4. Use **URL Inspection → Request indexing** on the homepage and each city page to speed up first crawl.

### 7. Directories (do after the above)
- Justdial and Sulekha — both drive real local scrap enquiries in Tamil Nadu.
- IndiaMART — relevant for bulk/commercial scrap.
- Startup directories: Crunchbase, F6S, AngelList/Wellfound, Product Hunt (for the app launch), Startup India registration.
- Always paste the exact NAP block from the table above.

---

## Content calendar starters

The site ships with three articles at `/blog`. Good follow-ups, roughly in order of SEO value:

1. **"Scrap rates in Arakkonam this month"** — updated monthly. Rate-update posts earn repeat local traffic better than anything else.
2. **"How to prepare your scrap before pickup"** — practical, highly shareable.
3. **A vendor story** — one of your verified vendors, their round, what changed after joining. Builds trust with both sides.
4. **"What happens to your scrap after collection"** — the recycling chain; strong for the eco-conscious audience.
5. **Customer story with before/after photos** — a cleared storeroom is a genuinely satisfying visual.

Each new post needs an entry in `src/content/blog.js`; the URL, meta tags, `Article` structured data and sitemap entry are generated automatically.

---

## Adding a new service area

1. In Vercel → Project → Settings → Environment Variables, edit `VITE_SERVICE_AREAS` and append the town.
2. Redeploy.

That generates `/sell-scrap-in-<town>`, its structured data, a sitemap entry and footer links — no code change. Then add the town to your Google Business Profile service areas and request indexing for the new URL in Search Console.
