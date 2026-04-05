# CLAUDE.md — KUBE Website Rebuild

This file governs every Claude Code session on this project.
Read it fully before writing a single line of code.

---

## Who Martin Is

Martin is learning to code without a CS or IT background. He understands very little coding language and is learning how coding works as we build together.

**This means:**
- Explain concepts when you introduce them using the `📖` format below
- Never assume he knows what a term means — define it briefly in plain English
- Prefer simple, explicit code over clever, compact code
- When there are two ways to do something, pick the one that's easier to read

**Explanation format (use this every time you introduce something new):**
```
📖 **`term` — Short label**
Plain-English description using an analogy if possible.
**Why it matters here:** One sentence on why this is relevant right now.
```

---

## Session Start Protocol

At the start of EVERY session, before writing any code:

1. Read `PLANNING.md` — understand the architecture and day-by-day plan
2. Read `PRD.md` — understand what's in scope and what's not
3. Read `TASKS.md`  — pick up where we left off
4. Check the current state of the file structure with a directory listing
5. Confirm with Martin which day/task we are working on today

Do not skip this. Do not assume you remember the context from a previous session.

---

## File Management Rules

- **Check before creating.** Before creating any file, verify it doesn't already exist.
- **Edit, don't duplicate.** If a file exists, edit it. Never create a second version.
- **No new files without a reason.** Every file must map to something in the directory structure in `PLANNING.md`. If it doesn't, ask Martin first.
- **No generated files.** Do not create `README.md`, `CHANGELOG.md`, `TODO.md`, `.gitignore` or any other file unless Martin explicitly asks for it.
- **CSS goes in CSS files. JS goes in JS files.** Never write `style="..."` in HTML. Never write `onclick="..."` in HTML.

---

## Task Management Protocol

- Use `TASKS.md` to track what's done and what's next. If it doesn't exist yet, create it when we start Day 1 work.
- Mark a task `[x]` the moment it is complete — not at the end of the session.
- If a task takes longer than expected, note it in `TASKS.md` under a "Blockers" section.
- Never start a new task until the current one is marked complete.

**TASKS.md format:**
```markdown
# TASKS.md

## Day 1 — Base CSS Setup
- [x] Create folder structure
- [x] Write variables.css
- [ ] Write reset.css
- [ ] Write layout.css skeleton

## Blockers
- None
```

---

## Development Workflow

**This is a 10-day build. Optimize for: shipping working pages, not perfect code.**

- Speed-first, not TDD. No test files. No test runners.
- Build one thing at a time. Finish it. Move on.
- After each page is built: open it in the browser and confirm it looks right before moving to the next.
- Commit to git at the end of each day's work (or after each major section is done).

**Daily git commit command:**
```bash
git add .
git commit -m "Day X — brief description of what was built"
git push
```

---

## Code Standards

### HTML
- Use semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Use `<div>` only as a layout container, not for meaningful content
- Every image must have an `alt` attribute
- Every form input must have a `<label>`
- Use `loading="lazy"` on all `<img>` tags except above-the-fold hero images

```html
<!-- CORRECT -->
<section class="featured-products">
  <h2>Productos Destacados</h2>
  <img src="assets/images/product-001.jpg" alt="Caja de regalo premium" loading="lazy" />
</section>

<!-- WRONG — don't do this -->
<div>
  <div>Productos Destacados</div>
  <img src="assets/images/product-001.jpg" />
</div>
```

### CSS
- All styles go in the correct CSS file — never inline
- Use CSS variables from `variables.css` — never hardcode colors or font names
- Class names: lowercase with hyphens (`.product-card`, `.cart-drawer`, `.nav-menu`)
- No single CSS file should exceed 200 lines — split into page files if needed
- Mobile-first: write base styles for mobile, then use `@media` to adjust for larger screens

```css
/* CORRECT — uses variables, mobile-first */
.product-card {
  background: var(--color-white);
  border-radius: var(--radius);
  padding: var(--space-sm);
}

@media (min-width: 768px) {
  .product-card {
    padding: var(--space-md);
  }
}

/* WRONG — hardcoded values, no mobile-first */
.product-card {
  background: #ffffff;
  border-radius: 4px;
  padding: 24px;
}
```

### JavaScript
- Keep functions small — one function does one thing
- Use `const` for values that don't change, `let` for values that do. Never use `var`.
- Comment any line that isn't immediately obvious
- No external libraries. No npm packages. No CDN script tags (except Google Fonts).

```js
// CORRECT — small, named, commented
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  drawer.classList.add('is-open'); // adds CSS class that slides drawer in
}

// WRONG — unclear, no comments
function doThing(x) {
  document.getElementById(x).classList.toggle('active');
}
```

---

## Project-Specific Guidelines

### Colors — always use variables
```css
var(--color-navy)    /* #142249 — headings, nav, buttons */
var(--color-orange)  /* #ee7c49 — CTAs, hover states, accents */
var(--color-white)   /* #ffffff — backgrounds */
var(--color-gray)    /* #f5f5f5 — subtle backgrounds */
var(--color-text)    /* #333333 — body text */
```

### Spacing — always use the 8px grid
```css
var(--space-xs)   /* 8px */
var(--space-sm)   /* 16px */
var(--space-md)   /* 24px */
var(--space-lg)   /* 32px */
var(--space-xl)   /* 48px */
var(--space-2xl)  /* 64px */
```

### Breakpoints
```css
/* Mobile: default (no media query needed) */
/* Tablet: */
@media (min-width: 768px) { }
/* Desktop: */
@media (min-width: 1024px) { }
```

### Product data
All product data lives in `js/data/products.js` as a plain JS array.
Never hardcode product info directly into HTML — always pull from this file.

```js
// How to get a product by ID (use this pattern in producto.html)
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const product = products.find(p => p.id === productId);
```

### Cart (localStorage)
```js
// Read cart
const cart = JSON.parse(localStorage.getItem('kube-cart')) || [];

// Save cart
localStorage.setItem('kube-cart', JSON.stringify(cart));

// Add item
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('kube-cart')) || [];
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('kube-cart', JSON.stringify(cart));
}
```

---

## Error Handling Approach

This is a static frontend — there's no server, no API, no database in Phase 1.
Error handling is minimal and practical:

- If a product ID in the URL doesn't match any product: show a "Producto no encontrado" message
- If localStorage is unavailable (private browsing edge case): fail silently, cart just won't persist
- No try/catch blocks unless something genuinely can throw (e.g. JSON.parse)
- No error boundary components. No error logging services.

---

## Testing Requirements

**No automated tests in Phase 1.** This is a 10-day build optimized for shipping.

Manual verification after each page is built:
1. Open in Chrome — check Console tab for errors (should be zero)
2. Resize window to 375px width — confirm it looks right on mobile
3. Resize to 1440px — confirm it looks right on desktop
4. Click every link and button — confirm they work
5. Run Lighthouse audit (Chrome DevTools → Lighthouse tab) on final day — target ≥ 90 Performance

---

## Session Management

### Handling Context Limits
If a session is getting long and context is filling up:
1. Stop before starting a new page or major section
2. Write a session summary (see template below)
3. Save it as a comment at the top of `TASKS.md`
4. Start a new session — the summary + TASKS.md is enough to resume

### Session Summary Template
```
## Session Summary — [Date]
- Completed: [what was finished]
- In progress: [what was half-done, with file name and line number]
- Next action: [exact first thing to do next session]
- Blockers: [anything that needs a decision before continuing]
```

### What to Document
Document things that aren't obvious from reading the code:
- Why a specific CSS approach was chosen (if it's unusual)
- Why a section is commented out
- Any known visual quirk that needs fixing later

Do NOT document things that are obvious:
- Don't comment `/* This is the header */` above `<header>`
- Don't write `// opens the drawer` above a function called `openDrawer()`

---

## Scope Guardrails

These are hard limits. Do not cross them without Martin explicitly asking.

| Temptation | Rule |
|---|---|
| "I could refactor this to be cleaner" | Don't. Ship the page first. |
| "Let me add a nice animation here" | Only after all 6 pages are built. |
| "We should add TypeScript" | No. Vanilla JS only. |
| "I'll install a small npm package for this" | No npm. No packages. |
| "Let me create a helper utility function" | Only if it's used in 3+ places. |
| "We should add a 404 page" | Nice to have — only after Day 10. |
| "The backend could be..." | Stop. Phase 2. Not now. |

---

## Common Pitfalls to Avoid

1. **Don't build the backend.** Cart is localStorage. Registry is static HTML. Checkout is out of scope.
2. **Don't use frameworks.** No React, no Vue, no Alpine.js — even if it "would be easier."
3. **Don't use CSS frameworks.** No Bootstrap, no Tailwind — Martin learns more writing CSS himself.
4. **Don't inline styles.** If you catch yourself writing `style="color: red"`, stop and put it in a CSS file.
5. **Don't skip the session start protocol.** Always read PLANNING.md and TASKS.md first.
6. **Don't create files that aren't in the directory structure** without asking Martin.
7. **Don't skip explanations.** Martin is learning. If you write something new, explain it with 📖.
8. **Don't over-comment.** Explain the *why*, not the *what*. The code already shows the what.
9. **Don't commit broken code.** Always verify the page opens in a browser before committing.
10. **Don't work on two pages at once.** Finish one completely before starting the next.

---

## Quick Reference

| Thing | Where it lives |
|---|---|
| Colors, fonts, spacing | `css/variables.css` |
| Header + footer styles | `css/layout.css` |
| Buttons, cards, forms | `css/components.css` |
| Page-specific styles | `css/pages/[page].css` |
| Product data | `js/data/products.js` |
| Cart logic | `js/cart.js` |
| Mobile nav toggle | `js/nav.js` |
| Image switcher | `js/gallery.js` |
| What to build next | `TASKS.md` |
| Why we built it this way | `PRD.md` |
| How we're building it | `PLANNING.md` |
