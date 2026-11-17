# Media replacement checklist — ELEN Makeup Telford (public site)

Send this to Elen to prioritise photography. **Do not use fabricated clients or uncredited stock as “results”.** Written consent required before identifiable faces appear.

Legend — **Priority**: Critical → ship first for trust; High → next; Medium → polish.

---

## Site-wide hero

| Page | Component / file | Current placeholder | Required replacement | Priority | Notes |
|------|------------------|---------------------|------------------------|----------|--------|
| `/`, `/powder-brows-telford` | `components/marketing/pmu-hero.tsx` · `lib/marketing/hero-media.ts` | `/images/hero/image.png` | **Real ELEN** healed powder brow close-up **OR** Elen mapping brows **OR** Elen working with client (consented). Vertical-friendly portrait; neutral tones; natural skin texture; **brows focal**. | **Critical** | Avoid: red lipstick, rose/fashion shot, stock model, heavy glam, brows not the focus. |

---

## About portrait

| Page | Component / file | Current | Required replacement | Priority | Notes |
|------|------------------|---------|------------------------|----------|--------|
| `/` (About preview), `/about` | `components/marketing/about-elen-preview.tsx` · `app/about/page.tsx` | `/images/about/Elen.png` | **Professional portrait** — soft neutral outfit/background, warm approachable expression, clean studio or neutral wall, light tasteful grade (**no heavy filters**). | **Critical** | Same asset can serve homepage preview + About hero. |

---

## Powder preview gallery (`lib/marketing/pmu-gallery.ts`)

Tiles drive **`/`** (first 2 items) and **`/powder-brows-telford`** (all 4).

| Slot | Current | Required replacement | Priority | Usage | Consent |
|------|---------|----------------------|----------|--------|---------|
| 1 | `/placeholder.svg…` | Healed powder brow result — **front-facing**, **natural daylight**, soft healed finish. | Critical | Homepage tile 1 + Powder gallery 1 | Yes |
| 2 | placeholder | **Brunette** natural powder brows — finished result or tasteful before/after; **clean neutral background**. | Critical | Homepage tile 2 + Powder gallery 2 | Yes |
| 3 | placeholder | **Brow mapping / process** — Elen working **or** mapped shape before treatment (educational). | High | Powder gallery 3 only | Yes |
| 4 | placeholder | **Mature skin or sparse brows** — natural soft result; believable texture; **not over-edited**. | High | Powder gallery 4 only | Yes |

**Crop / orientation**: Portrait-leaning tiles (approx 3:4 display). Soft daylight preferred over flash.

---

## Semi-permanent makeup (`/semi-permanent-makeup`)

| Area | File | Current | Required replacement | Priority | Notes |
|------|------|---------|----------------------|----------|--------|
| Hero | `app/semi-permanent-makeup/page.tsx` → `serviceData.image` | placeholder wide SVG | **Natural PMU** overview — healed brow / lip / liner examples **matching services you actively offer**. Not generic beauty stock. | High | Export wide crop for hero banner. |
| Gallery ×6 | `serviceData.gallery` | placeholders | Consented **healed-detail** shots per modality marketed (powder heal, lip blush, liner subtle). Slot-by-slot shoot list with studio. | Medium | Label each file in DAM with treatment type + consent ID. |

---

## Eyelash extensions (`/eyelash-extensions`)

| Area | File | Current | Required replacement | Priority | Notes |
|------|------|---------|----------------------|----------|--------|
| Hero | `app/eyelash-extensions/page.tsx` | placeholder | **Real lash set close-up** — eye-safe crop; authentic retention (consented). | High | No fake “pack shot” stock lashes. |
| Gallery ×6 | `serviceData.gallery` | placeholders | Classic / hybrid / volume **macros** — crisp lashes, neutral background. | Medium | Mix styles if offered. |

---

## Services index (`/services`)

| Card ID | File | Current | Required replacement | Priority | Notes |
|---------|------|---------|----------------------|----------|--------|
| permanent-makeup | `app/services/page.tsx` | placeholder | Mood aligned with **powder / PMU** offer — healed or editorial brow-forward (consented). | High | Card links to Powder Brows route. |
| eyelash-extensions | same | placeholder | Macro lash image as above. | High | |
| facial-treatments | same | placeholder | **Real facial/treatment setup** in studio **OR** confirm whether facials stay live — if not, retire card/route with dev. | Medium | Confirm business intent first. |

---

## Dynamic services (`/services/[service]`)

| Route key | Hero | Gallery ×6 | Notes |
|-----------|------|------------|--------|
| `permanent-makeup` | Healed PMU mix — **powder priority** + lip/liner only if booked | Same modality spread as semi-permanent page | Match messaging to actual offerings. |
| `eyelash-extensions` | Lash macro hero | Extension detail set | Consented eyes/lashes. |
| `facial-treatments` | Studio facial ambience | Treatment stills | Remove/simplify page if facials inactive. |

---

## SEO journal articles (`lib/blog/articles/*.tsx`)

Hero / OG target: **1200×630** unless otherwise noted. Placeholders until files land in `/public` or CDN.

| Slug | File | Required image | Priority |
|------|------|----------------|----------|
| `powder-brows-vs-microblading` | `powder-brows-vs-microblading.tsx` | Split-style editorial — soft powder result vs mapping/natural brow detail (illustrative; consent if identifiable). | High |
| `how-long-do-powder-brows-last` | `how-long-do-powder-brows-last.tsx` | Healed brow close-up — soft natural finish. | High |
| `do-powder-brows-look-natural` | `do-powder-brows-look-natural.tsx` | Natural healed brow in **real daylight**. | High |
| `powder-brow-healing-day-by-day` | `powder-brow-healing-day-by-day.tsx` | Gentle **aftercare/healing** mood — calm editorial still life (not clinical stock). | Medium |
| `best-pmu-for-mature-skin` | `best-pmu-for-mature-skin.tsx` | Mature client brow result (consented) **OR** tasteful neutral editorial — **never fake before/after**. | High |

---

## Legacy journal posts (`lib/blog/legacy-posts.ts`)

All legacy entries currently use `/placeholder.svg…`. Replace per article topic with **honest editorial or consented studio shots** — priority **Medium** unless an article is promoted heavily.

| Slug (examples) | Suggested direction |
|-----------------|---------------------|
| `benefits-of-permanent-makeup` | Soft PMU editorial — tools/mapping ambient shot (non-identifiable). |
| `care-for-eyelash-extensions` | Aftercare flat-lay — cleanser, spoolie (no fake lash packs). |
| `skincare-routine-glowing-skin` | Neutral skincare still life — brand-safe props. |
| Others | Match title; avoid unrelated stock faces. |

---

## Developer visibility

- **`NODE_ENV === development`**: Gallery placeholders show a short **MEDIA TODO** line with `replacementNeeded` from `pmu-gallery.ts`.
- **Production**: Visitor sees honest captions only — no internal labels.

---

## What to provide first (recommended order)

1. **Hero** (`/images/hero/image.png`) — brow-forward, on-brand, trust-critical.  
2. **About portrait** (`/images/about/Elen.png`).  
3. **Gallery tile 1 & 2** (pmu-gallery — healed daylight + brunette result).  
4. **SEO article heroes** for top-traffic slugs (powder brows vs microblading, how long, natural look).  
5. Service heroes + galleries as time allows.

---

*Generated from codebase Phase 8D — update this file when assets land or routes change.*
