# PLANNING.md — KUBE Website Rebuild

**Timeline:** 10 days  
**Optimize for:** Speed to ship + code clarity (Martin is learning while building)

---

## 1. Project Vision

### Mission Statement
Rebuild kube.com.py as a clean, fast, readable static website — stripping out the bloat of WordPress/WooCommerce while keeping the brand identity and improving the user experience.

### Core Principles
1. **Readable first** — every line of code should be understandable by someone learning HTML/CSS/JS
2. **No unnecessary complexity** — no frameworks, no build tools, no abstractions unless they earn their place
3. **Fast by default** — no inline styles, no tracking scripts, lazy-loaded images
4. **Ship it** — a working site beats a perfect one; polish after it's live

### Success Metrics
| Metric | Target |
|---|---|
| Lighthouse Performance score | ≥ 90 on all pages |
| Page load time | < 2 seconds on 4G |
| Console errors | 0 |
| Pages built | 6 (all in scope) |
| Deployed and publicly accessible | Yes, on GitHub Pages |

---

## 2. Architecture

### High-Level Overview
```
User's browser
    │
    ▼
Static HTML files (no server needed)
    │
    ├── CSS files  → control how everything looks
    ├── JS files   → control how things move and behave
    └── Assets     → images, icons
```

Everything runs directly in the browser. No server. No database. No login required to view.

### Directory Structure
```
kube-rebuild/
│
├── index.html                  ← Homepage
├── productos.html              ← Product listing
├── producto.html               ← Product detail (URL: producto.html?id=001)
├── lista-de-bodas.html         ← Wedding registry landing
├── gift-cards.html             ← Gift cards page
├── contacto.html               ← Contact page
│
├── css/
│   ├── reset.css               ← Remove default browser styles
│   ├── variables.css           ← Colors, fonts, spacing as reusable values
│   ├── layout.css              ← Header, footer, nav, page grid
│   ├── components.css          ← Cards, buttons, badges, cart drawer, forms
│   └── pages/
│       ├── home.css            ← Homepage-only styles
│       ├── productos.css       ← Product listing-only styles
│       └── producto.css        ← Product detail-only styles
│
├── js/
│   ├── data/
│   │   └── products.js         ← All product data (replaces database in Phase 1)
│   ├── nav.js                  ← Mobile hamburger menu open/close
│   ├── gallery.js              ← Product image thumbnail switcher
│   └── cart.js                 ← localStorage cart + cart drawer open/close
│
└── assets/
    ├── images/                 ← Product photos, banners, logos
    └── icons/                  ← SVG icons (cart, search, heart, etc.)
```

### How Pages Connect
```
index.html
  └── "Ver productos" → productos.html
        └── Click product card → producto.html?id=001
              └── "Agregar al carrito" → opens cart drawer (cart.js)

index.html / any page
  └── Header nav → lista-de-bodas.html
                 → gift-cards.html
                 → contacto.html
```

---

## 3. Technology Stack

### What We're Using

| Tool | Purpose | Why |
|---|---|---|
| HTML5 | Page structure | The foundation of every website |
| CSS3 + Custom Properties | Styling | Clean, no build step, easy to read |
| Vanilla JavaScript (ES6) | Interactivity | No framework overhead; great for learning |
| localStorage (browser built-in) | Cart persistence | Works without a backend |
| Google Fonts | PT Serif + Nunito Sans | Same fonts as original KUBE; 1 network request |
| GitHub | Version control + hosting | Free, simple, industry standard |
| GitHub Pages | Deployment | Free static hosting, automatic from repo |
| VS Code | Code editor | Best-in-class, free, has Live Preview extension |

### CSS Variable System (defined in `variables.css`)
```css
:root {
  /* Colors */
  --color-navy:    #142249;
  --color-orange:  #ee7c49;
  --color-white:   #ffffff;
  --color-gray:    #f5f5f5;
  --color-text:    #333333;

  /* Spacing (8px grid) */
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  24px;
  --space-lg:  32px;
  --space-xl:  48px;
  --space-2xl: 64px;

  /* Typography */
  --font-heading: 'PT Serif', serif;
  --font-body:    'Nunito Sans', sans-serif;

  /* Borders */
  --radius: 4px;
}
```

### What We're NOT Using (and why)
| Skipped tool | Why we're skipping it |
|---|---|
| React / Vue / Angular | Overkill for a static site; hard to learn while building |
| Sass / LESS | Not needed — CSS variables cover our needs |
| Webpack / Vite / Parcel | No build step needed for plain HTML/CSS/JS |
| Bootstrap / Tailwind | Would hide how CSS works; Martin learns more writing it himself |
| Node.js / PHP backend | Phase 2 — not needed for static frontend |
| npm packages | Zero dependencies in Phase 1 |

---

## 4. Required Tools & Setup

### Minimum Requirements
- A computer (Mac, Windows, or Linux)
- [VS Code](https://code.visualstudio.com/) — free code editor
- [Git](https://git-scm.com/) — version control
- A [GitHub](https://github.com) account (free)
- A browser (Chrome recommended — best DevTools)

### VS Code Extensions to Install
Search for these in VS Code's Extensions panel (`Cmd+Shift+X` on Mac):
1. **Live Preview** (by Microsoft) — lets you see your site in VS Code without a server
2. **Prettier** — auto-formats your code so it's always clean
3. **GitHub Copilot** (optional) — AI autocomplete while coding

### Quick Setup Commands
Run these in your terminal (Terminal app on Mac, Command Prompt on Windows):

```bash
# 1. Check git is installed
git --version

# 2. Configure git with your name and email (only needed once)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# 3. Navigate to your project folder
cd "/Users/martin/Proyecto pagina kube"

# 4. Initialize git
git init

# 5. Create the folder structure
mkdir -p css/pages js/data assets/images assets/icons

# 6. Create all the files you'll need
touch index.html productos.html producto.html lista-de-bodas.html gift-cards.html contacto.html
touch css/reset.css css/variables.css css/layout.css css/components.css
touch css/pages/home.css css/pages/productos.css css/pages/producto.css
touch js/nav.js js/gallery.js js/cart.js js/data/products.js
```

### GitHub Setup (one time)
```bash
# After creating a repo named "kube-rebuild" on github.com:
git remote add origin https://github.com/YOUR-USERNAME/kube-rebuild.git
git branch -M main
git add .
git commit -m "Initial project structure"
git push -u origin main
```

### Enable GitHub Pages (one time, in browser)
1. Go to your repo on github.com
2. Click **Settings** → **Pages**
3. Under "Branch", select `main` → `/ (root)` → click **Save**
4. Your site will be live at: `https://YOUR-USERNAME.github.io/kube-rebuild/`

### Daily Workflow (how to save and deploy changes)
```bash
# After making changes in VS Code:
git add .
git commit -m "Short description of what you changed"
git push
# GitHub Pages auto-updates in ~30 seconds
```

---

## 5. Development Approach

### Day-by-Day Plan

| Day | Focus | Files touched |
|---|---|---|
| 1 | Repo setup + base CSS skeleton | `variables.css`, `reset.css`, `layout.css` |
| 2 | Header + footer + mobile nav | `layout.css`, `components.css`, `nav.js`, all `.html` |
| 3 | Homepage | `index.html`, `home.css` |
| 4 | Product listing page | `productos.html`, `productos.css`, `products.js` |
| 5 | Product detail page | `producto.html`, `producto.css`, `gallery.js` |
| 6 | Cart drawer + localStorage | `cart.js`, `components.css` |
| 7 | Wedding registry page | `lista-de-bodas.html` |
| 8 | Gift cards + Contact pages | `gift-cards.html`, `contacto.html` |
| 9 | Polish — spacing, hover states, mobile | All CSS files |
| 10 | Lighthouse audit + deploy | Fix any issues, push final to GitHub Pages |

### HTML Page Template (copy-paste starter for every page)
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KUBE — Regalamos momentos que emocionan</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />

  <!-- CSS -->
  <link rel="stylesheet" href="css/reset.css" />
  <link rel="stylesheet" href="css/variables.css" />
  <link rel="stylesheet" href="css/layout.css" />
  <link rel="stylesheet" href="css/components.css" />
  <!-- Add page-specific CSS here, e.g.: -->
  <!-- <link rel="stylesheet" href="css/pages/home.css" /> -->
</head>
<body>

  <!-- HEADER -->
  <header class="site-header">
    <!-- nav goes here -->
  </header>

  <!-- MAIN CONTENT -->
  <main>
    <!-- page content goes here -->
  </main>

  <!-- FOOTER -->
  <footer class="site-footer">
    <!-- footer content goes here -->
  </footer>

  <!-- Cart Drawer -->
  <div class="cart-drawer" id="cartDrawer">
    <!-- cart items go here -->
  </div>
  <div class="cart-overlay" id="cartOverlay"></div>

  <!-- JS -->
  <script src="js/cart.js"></script>
  <script src="js/nav.js"></script>
  <!-- Add page-specific JS here -->
</body>
</html>
```

### Quick Decision Matrix
When you're unsure how to do something, use this guide:

| Question | Answer |
|---|---|
| Should I use a `<div>` or something else? | Use a semantic tag if it fits: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`. Use `<div>` for layout containers only. |
| Where do I put styles? | Always in a `.css` file. Never in the HTML as `style="..."`. |
| Where do I put JavaScript? | Always in a `.js` file. Never in the HTML as `onclick="..."`. |
| How do I name a CSS class? | Use lowercase with hyphens: `.product-card`, `.cart-drawer`, `.nav-menu` |
| Something looks broken on mobile? | Add `border: 1px solid red` to the element in CSS to see its actual size |
| Not sure if a change works? | Open Chrome DevTools (`F12`), check Console tab for errors |

---

## Phase 2 Preview
Once the static site ships, Phase 2 will add:
- Product data from a real CMS or JSON API (replaces `products.js`)
- Working cart and checkout via MercadoPago
- Wedding registry database via Supabase
- User accounts and saved wishlists
