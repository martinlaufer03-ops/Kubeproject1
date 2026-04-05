# TASKS.md — KUBE Website Rebuild

**Timeline:** 10 days | **Stack:** HTML + CSS + JS | **Deploy:** GitHub Pages  
**Legend:** 🔴 Critical · 🟡 High · 🟢 Normal · ⚪ Skip if needed

---

## Milestone 1: Foundation
*Goal: Folder structure exists, base CSS is written, every page file is created and links to the shared CSS. Opening any page in the browser shows a blank white page with no errors.*

- [x] 🔴 Create folder structure and all empty files [15m]
- [x] 🔴 Write `css/reset.css` — remove default browser styles [15m]
- [x] 🔴 Write `css/variables.css` — colors, fonts, spacing, border-radius [20m]
- [x] 🔴 Add Google Fonts link to all 6 HTML pages [10m]
- [x] 🔴 Link all CSS files in all 6 HTML pages [10m]
- [x] 🟡 Initialize git repo and push initial commit to GitHub [15m]
- [x] 🟡 Enable GitHub Pages in repo settings [5m]

**Milestone 1 total: ~1h 30m**

---

## Milestone 2: Header + Footer + Nav
*Goal: Every page has the same working header and footer. The hamburger menu opens and closes on mobile. The nav links go to the correct pages.*

- [x] 🔴 Write header HTML (logo, nav links, icons) — copy into all 6 pages [30m]
- [x] 🔴 Write `css/layout.css` — header styles, logo sizing, nav flex layout [30m]
- [x] 🔴 Write mobile hamburger menu HTML + `js/nav.js` toggle logic [20m]
- [x] 🔴 Style hamburger menu open/close state in `layout.css` [20m]
- [x] 🔴 Write footer HTML — links, social icons, copyright [20m]
- [x] 🔴 Style footer in `layout.css` [20m]
- [ ] 🟡 Test header + footer on mobile (375px) and desktop (1440px) [10m]
- [x] 🟡 Git commit: "Day 2 — header, footer, mobile nav" [5m]

**Milestone 2 total: ~2h 35m**

---

## Milestone 3: Homepage
*Goal: The homepage looks like KUBE. Hero banner with headline and CTA, category grid, featured product cards, and a promo banner are all visible.*

- [x] 🔴 Write hero section HTML (headline, subheadline, CTA button) [20m]
- [x] 🔴 Style hero section in `css/pages/home.css` [30m]
- [x] 🔴 Write category grid HTML (3–4 category cards with images) [20m]
- [x] 🔴 Style category grid — responsive 2-col mobile, 4-col desktop [25m]
- [x] 🔴 Write `js/data/products.js` with 8–10 sample products [20m]
- [x] 🔴 Write featured products section HTML (rendered from `products.js`) [30m]
- [x] 🔴 Write `css/components.css` — product card styles [30m]
- [x] 🟡 Add promotional banner section HTML + CSS [20m]
- [ ] 🟡 Test homepage at 375px and 1440px — fix any layout issues [15m]
- [x] 🟡 Git commit: "Day 3 — homepage" [5m]

**Milestone 3 total: ~3h 15m**

---

## Milestone 4: Product Listing Page
*Goal: `productos.html` shows all products from `products.js` in a grid. Clicking a category filter button highlights it and filters the visible cards. Clicking a card goes to the detail page.*

- [x] 🔴 Write JS to render product cards from `products.js` into the page grid [30m]
- [x] 🔴 Write product listing grid HTML structure in `productos.html` [15m]
- [x] 🔴 Style listing grid in `css/pages/productos.css` — 1/2/3 col responsive [25m]
- [x] 🔴 Write filter buttons HTML (Todos, Regalos, Bodas, etc.) [10m]
- [x] 🔴 Write JS filter logic — show/hide cards by category [25m]
- [x] 🔴 Style active filter button state (orange highlight) [10m]
- [x] 🟡 Add product count label ("Mostrando X productos") [10m]
- [ ] 🟡 Test filter buttons + product links work correctly [10m]
- [x] 🟡 Git commit: "Day 4 — product listing page" [5m]

**Milestone 4 total: ~2h 20m**

---

## Milestone 5: Product Detail Page
*Goal: `producto.html?id=001` loads the correct product from `products.js`. Images switch when thumbnails are clicked. "Agregar al carrito" adds the item to localStorage and shows a count badge on the cart icon.*

- [ ] 🔴 Write JS to read `?id=` from URL and find matching product [20m]
- [ ] 🔴 Render product name, price, description from data into the page [20m]
- [ ] 🔴 Write image gallery HTML (main image + thumbnails) [20m]
- [ ] 🔴 Write `js/gallery.js` — thumbnail click switches main image [20m]
- [ ] 🔴 Style product detail layout in `css/pages/producto.css` [30m]
- [ ] 🔴 Write "Agregar al carrito" button — calls `addToCart()` from `cart.js` [15m]
- [ ] 🟡 Show "Producto no encontrado" if ID doesn't match any product [10m]
- [ ] 🟡 Test clicking through from listing page → detail page [10m]
- [ ] 🟡 Git commit: "Day 5 — product detail page" [5m]

**Milestone 5 total: ~2h 30m**

---

## Milestone 6: Cart Drawer
*Goal: Clicking "Agregar al carrito" on any product opens a side drawer showing the cart contents, quantities, and total price. Items persist after page refresh. The cart icon shows an item count badge.*

- [ ] 🔴 Write cart drawer HTML in all pages (hidden by default) [20m]
- [ ] 🔴 Write `js/cart.js` — `addToCart()`, `removeFromCart()`, `getCart()`, `saveCart()` [40m]
- [ ] 🔴 Write `renderCart()` function — updates drawer contents from localStorage [20m]
- [ ] 🔴 Write cart open/close logic — `openCartDrawer()`, `closeCartDrawer()` [15m]
- [ ] 🔴 Style cart drawer in `css/components.css` — slides in from right [25m]
- [ ] 🔴 Style cart overlay (dark background behind drawer) [10m]
- [ ] 🔴 Update cart badge count in header on page load and on add [10m]
- [ ] 🟡 Add quantity +/- buttons in cart drawer [20m]
- [ ] 🟡 Test add, remove, refresh — confirm localStorage persists [10m]
- [ ] 🟡 Git commit: "Day 6 — cart drawer + localStorage" [5m]

**Milestone 6 total: ~3h**

---

## Milestone 7: Remaining Pages
*Goal: Wedding registry, gift cards, and contact pages are all built, styled, and linked correctly from the nav.*

### Wedding Registry Page (`lista-de-bodas.html`)
- [ ] 🔴 Write hero section — headline, description of the service [20m]
- [ ] 🔴 Write "Cómo funciona" steps section (3 steps with icons) [20m]
- [ ] 🔴 Write CTA section — "Contactanos" button linking to contacto.html [10m]
- [ ] 🟡 Style the full page [30m]

### Gift Cards Page (`gift-cards.html`)
- [ ] 🔴 Write gift card product page HTML (image, amounts, add to cart button) [20m]
- [ ] 🟡 Style gift card page [20m]

### Contact Page (`contacto.html`)
- [ ] 🔴 Write contact form HTML (name, email, message, submit button) [15m]
- [ ] 🔴 Write company info section (address, phone, social links) [10m]
- [ ] 🟡 Style contact page [20m]
- [ ] 🟡 Git commit: "Day 8 — registry, gift cards, contact pages" [5m]

**Milestone 7 total: ~2h 50m**

---

## Milestone 8: Polish + Deploy
*Goal: All pages look consistent, feel smooth, pass Lighthouse ≥ 90, and are live on GitHub Pages.*

- [ ] 🔴 Audit all pages for visual consistency — spacing, font sizes, colors [30m]
- [ ] 🔴 Test every page at 375px mobile width [20m]
- [ ] 🔴 Test every page at 1440px desktop width [20m]
- [ ] 🔴 Test every nav link, button, and card click [15m]
- [ ] 🔴 Fix any console errors (Chrome DevTools → Console tab) [30m]
- [ ] 🔴 Run Lighthouse audit on homepage — fix issues until score ≥ 90 [30m]
- [ ] 🟡 Run Lighthouse on product listing + detail pages [20m]
- [ ] 🟡 Add hover transitions to buttons and product cards [20m]
- [ ] 🟡 Final git commit + push — confirm GitHub Pages is live [10m]

**Milestone 8 total: ~3h 15m**

---

## If Time Permits (Bonus)
*Only touch these after all 6 pages are built and Lighthouse passes.*

- [ ] ⚪ Page fade-in animation on load [20m]
- [ ] ⚪ Scroll-triggered product card animation (cards appear as you scroll) [30m]
- [ ] ⚪ Product quick-view modal (see product details without leaving listing page) [1h]
- [ ] ⚪ "Volver arriba" scroll-to-top button [15m]
- [ ] ⚪ 404.html page for broken links [15m]
- [ ] ⚪ Skeleton loading shimmer on product cards [30m]

---

## Skip These (Too Complex for Phase 1)
- [ ] ~~Real checkout / payment processing~~ → Phase 2
- [ ] ~~User login / registration~~ → Phase 2
- [ ] ~~Wedding registry database~~ → Phase 2
- [ ] ~~Admin product dashboard~~ → Phase 2
- [ ] ~~Live product search with autocomplete~~ → Phase 2
- [ ] ~~Multi-language support~~ → Phase 2
- [ ] ~~Abandoned cart emails~~ → Phase 2

---

## Emergency Shortcuts
*If you're falling behind, apply these in order:*

| Instead of... | Do this... | Time saved |
|---|---|---|
| Building full product listing with filters | Just render all products in a grid, no filter buttons | ~45m |
| Full image gallery with thumbnails | Single product image, no switcher | ~40m |
| Cart drawer with quantities | Cart drawer with just item list + remove button, no +/- | ~20m |
| Styled wedding registry page | Plain page with headline, 3 bullet points, and a contact link | ~30m |
| Polished gift cards page | Redirect gift cards nav link to contacto.html instead | ~35m |
| Full Lighthouse optimization pass | Just fix console errors and confirm pages load | ~30m |

---

## Copy-Paste Code Blocks

### Render product cards from `products.js`
```js
// In productos.html — paste inside a <script> tag at bottom of page
function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = list.map(product => `
    <a href="producto.html?id=${product.id}" class="product-card">
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
      ${product.badge ? `<span class="badge">${product.badge}</span>` : ''}
      <div class="product-card__info">
        <h3>${product.name}</h3>
        <p class="price">Gs. ${product.price.toLocaleString('es-PY')}</p>
      </div>
    </a>
  `).join('');
}

renderProducts(products); // show all on page load
```

### Filter products by category
```js
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // highlight active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // filter products
    const category = btn.dataset.category;
    const filtered = category === 'todos' ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
  });
});
```

### Load product on detail page
```js
// In producto.html — reads ?id= from URL
const params = new URLSearchParams(window.location.search);
const product = products.find(p => p.id === params.get('id'));

if (!product) {
  document.getElementById('productContent').innerHTML = '<p>Producto no encontrado.</p>';
} else {
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productPrice').textContent = `Gs. ${product.price.toLocaleString('es-PY')}`;
  document.getElementById('mainImage').src = product.images[0];
}
```

### Cart: add item
```js
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('kube-cart')) || [];
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, image: product.images[0], quantity: 1 });
  }
  localStorage.setItem('kube-cart', JSON.stringify(cart));
  updateCartBadge();
  openCartDrawer();
}
```

### Cart: update badge count
```js
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('kube-cart')) || [];
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  });
}

updateCartBadge(); // call on every page load
```

### Mobile nav toggle
```js
// js/nav.js
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('is-open'));
});
```

---

## Time Summary

| Milestone | Estimated Time |
|---|---|
| 1 — Foundation | 1h 30m |
| 2 — Header + Footer + Nav | 2h 35m |
| 3 — Homepage | 3h 15m |
| 4 — Product Listing | 2h 20m |
| 5 — Product Detail | 2h 30m |
| 6 — Cart Drawer | 3h 00m |
| 7 — Remaining Pages | 2h 50m |
| 8 — Polish + Deploy | 3h 15m |
| **Total** | **~21h** |

**Fits comfortably in 10 days at ~2 hours per day.**  
Ahead of schedule? Pick from "If Time Permits."  
Behind schedule? Apply Emergency Shortcuts.

---

## Session Summary (fill in at end of each session)

```
## Session Summary — [DATE]
- Completed: 
- In progress: [file name, what's half done]
- Next action: [exact first thing to do next session]
- Blockers: 
```
