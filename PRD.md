# PRD — KUBE Website Rebuild

**Version:** 1.0  
**Date:** 2026-04-05  
**Author:** Martin  
**Status:** Draft

---

## 1. Problem & Goals

### Problem
The current kube.com.py site is built on WooCommerce (WordPress + PHP). It ships with:
- ~50KB of inline CSS bloating every page
- 4+ third-party tracking scripts (Google Analytics, TikTok Pixel, Retainful, WhatsApp) that delay render
- Inconsistent responsive breakpoints
- Code that is hard to read, modify, or improve without WordPress/PHP knowledge

### Goals
1. Rebuild KUBE as a clean, fast, maintainable static site using HTML + CSS + JS
2. Achieve a Lighthouse Performance score > 90 on all pages
3. Produce code that is easy for Martin to read, learn from, and extend
4. Deploy a publicly accessible site on GitHub Pages within 1–2 weeks
5. Lay a clean foundation for a future backend phase (cart, checkout, registry database)

---

## 2. Users & Jobs

| User | Job to be done |
|---|---|
| Gift shopper | Browse products, find the right gift, understand pricing and availability |
| Engaged couple | Learn about the Lista de Bodas feature, understand how to create a registry |
| Gift giver | Find a couple's registry, pick and purchase an item from their list |
| Store visitor | Understand what KUBE is, find contact info, trust the brand |

---

## 3. In-Scope (MVP) vs Out-of-Scope

### In-Scope — 1–2 week build
| Page / Feature | Description |
|---|---|
| Homepage | Hero banner, category grid, featured products, promotional banner |
| Product listing page | Grid of products, static category filters, sort UI |
| Product detail page | Image gallery, product name/price/description, add-to-cart button (UI only) |
| Wedding registry landing | Explains Lista de Bodas, how it works, CTA to contact |
| Gift cards page | Gift card product page (static UI) |
| Contact page | Company info, contact form (static — no backend submission) |
| Header & footer | Navigation, logo, mobile hamburger menu, social links |
| Cart drawer (UI only) | Side panel that opens when "Add to cart" is clicked — no real cart logic |
| localStorage cart | Items added persist in the browser session |

### Nice to Have (if time allows)
- Animated transitions between pages
- Scroll-triggered product card animations
- Product quick-view modal

### Out of Scope
| Feature | Why deferred |
|---|---|
| Real checkout / payment processing | Requires backend + payment provider (Phase 2) |
| User accounts / login | Requires auth system (Phase 2) |
| Admin product dashboard | Requires backend (Phase 2) |
| Live product database / CMS | Products will be hardcoded as HTML/JS data (Phase 2 converts to API) |
| Multi-language (WPML) | Spanish only for now |
| Wedding registry database | Registry creation/management requires backend (Phase 2) |

---

## 4. Information Architecture & Routes

```
/                          → Homepage (index.html)
/productos.html            → Product listing (all products)
/producto.html             → Product detail (single product, driven by URL param)
/lista-de-bodas.html       → Wedding registry landing page
/gift-cards.html           → Gift cards page
/contacto.html             → Contact page
```

### Navigation structure
```
Header nav:
  Inicio | Productos | Lista de Bodas | Gift Cards | Contacto
  [Search icon] [Wishlist icon] [Cart icon]

Footer:
  About KUBE | Links | Social media | Contact info | Copyright
```

---

## 5. UX Requirements

### Visual Design
- **Colors:** Navy #142249 (primary), Orange #ee7c49 (accent/CTA), White #FFFFFF (backgrounds)
- **Fonts:** PT Serif (headings) + Nunito Sans (body) — loaded from Google Fonts in a single request
- **Spacing:** Consistent 8px base grid (8, 16, 24, 32, 48, 64px)
- **Border radius:** 4px on cards and buttons

### Responsiveness
- Mobile-first CSS
- Breakpoints: 768px (tablet) and 1024px (desktop)
- Hamburger menu on screens below 768px

### Performance Rules
- Zero inline `<style>` blocks
- Zero tracking scripts
- All images use `loading="lazy"`
- CSS split into focused files — no single file over 200 lines
- Google Fonts loaded with `display=swap`

### Accessibility
- All images have `alt` text
- Form inputs have `<label>` elements
- Navigation is keyboard-navigable
- Color contrast meets WCAG AA

---

## 6. System Architecture

```
Browser
  └── index.html / productos.html / etc.
        ├── css/
        │     ├── reset.css          ← Browser normalize
        │     ├── variables.css      ← CSS custom properties (colors, fonts, spacing)
        │     ├── layout.css         ← Header, footer, grid, nav
        │     ├── components.css     ← Cards, buttons, badges, forms, cart drawer
        │     └── pages/
        │           ├── home.css
        │           ├── productos.css
        │           └── producto.css
        └── js/
              ├── nav.js             ← Mobile menu toggle
              ├── gallery.js         ← Product image switcher
              └── cart.js            ← localStorage cart logic + drawer UI
```

No build tools. No bundlers. No frameworks. Plain files — open in browser, edit in VS Code, push to GitHub.

---

## 7. Data Model

Since there is no backend in Phase 1, product data lives in a JavaScript file:

```js
// js/data/products.js
const products = [
  {
    id: "001",
    name: "Caja de Regalo Premium",
    category: "regalos",
    price: 150000,          // PYG
    images: ["img/001-1.jpg", "img/001-2.jpg"],
    description: "...",
    badge: "Oferta",        // or null
    inStock: true
  },
  // ...
];
```

Product listing and detail pages read from this array via JS. When Phase 2 adds a backend, this array is replaced with an API call — no HTML changes needed.

---

## 8. Acceptance Criteria

### Homepage
- [ ] Hero banner visible with headline and CTA button
- [ ] At least 3 product category cards displayed
- [ ] At least 6 featured product cards displayed
- [ ] Page loads in under 2 seconds on a 4G connection (Lighthouse)

### Product listing
- [ ] Products render from `products.js` data
- [ ] Clicking a product navigates to the detail page with correct product ID in URL
- [ ] Category filter buttons visually highlight the active filter
- [ ] Grid is 3 columns on desktop, 2 on tablet, 1 on mobile

### Product detail
- [ ] Thumbnail images switch main image on click
- [ ] "Agregar al carrito" button adds item to localStorage cart
- [ ] Cart icon badge updates with item count
- [ ] Cart drawer opens when item is added

### Cart
- [ ] Items persist after page refresh (localStorage)
- [ ] Item count shows in header icon
- [ ] Cart drawer shows item list, quantities, and total price
- [ ] Items can be removed from the drawer

### Wedding registry page
- [ ] Page explains the Lista de Bodas concept clearly
- [ ] Includes a CTA (e.g. "Contactanos" link or button)

### All pages
- [ ] No console errors in Chrome DevTools
- [ ] Renders correctly at 375px (iPhone SE) and 1440px (desktop)
- [ ] Lighthouse Performance score ≥ 90
- [ ] All links navigate to the correct pages

---

## 9. Technical Decisions

| Decision | Choice | Reason |
|---|---|---|
| Framework | None (Vanilla HTML/CSS/JS) | Easiest for Martin to learn and read; no build step |
| Styling | External CSS files with CSS variables | Clean, no inline styles, easy to maintain |
| Product data | JS array in `data/products.js` | Simple now; easy to swap for API call in Phase 2 |
| Cart persistence | localStorage | Works without a backend; survives page refresh |
| Hosting | GitHub Pages | Free, simple, works perfectly for static sites |
| Fonts | Google Fonts (1 combined request) | Keeps original KUBE typography; minimal performance hit |
| Images | Local `/assets/images/` folder | No dependency on external CDN |

---

## 10. Build Order / Milestones

### Week 1
| Day | Task |
|---|---|
| 1 | Set up GitHub repo, folder structure, base CSS (reset, variables, layout) |
| 2 | Header + footer + mobile nav |
| 3 | Homepage |
| 4 | Product listing page |
| 5 | Product detail page |

### Week 2
| Day | Task |
|---|---|
| 6 | Cart drawer + localStorage cart logic |
| 7 | Wedding registry landing page |
| 8 | Gift cards page + Contact page |
| 9 | Polish pass — spacing, hover states, responsiveness |
| 10 | Lighthouse audit, fix issues, deploy to GitHub Pages |

---

## Phase 2 Preview (Future)

When the static site is live and working, Phase 2 will add:
- Product data from a headless CMS or JSON API
- Real cart and checkout (MercadoPago or Stripe)
- Wedding registry system with a database (Supabase)
- User accounts and wishlists
