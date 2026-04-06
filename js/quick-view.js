// quick-view.js — shows a product detail overlay without leaving the listing page.
//
// How it works:
//   1. We inject a "Vista rápida" button into every product card on the page.
//   2. When clicked, we look up the product data from products.js using the
//      product ID stored on the card.
//   3. We build the modal HTML and insert it into the overlay div.
//   4. We open the overlay (add .is-open).
//   5. Close button, overlay click, and Escape key all close the modal.


// --- SETUP: create the overlay container once and add it to the page ---

const overlay = document.createElement('div');
overlay.className = 'quick-view-overlay';
overlay.id = 'quickViewOverlay';
overlay.setAttribute('role', 'dialog');
overlay.setAttribute('aria-modal', 'true');
overlay.setAttribute('aria-label', 'Vista rápida de producto');
document.body.appendChild(overlay);


// --- OPEN / CLOSE ---

function openQuickView(productId) {
  // Find the product in the products array (from products.js)
  const product = products.find(p => p.id === productId);
  if (!product) return;

  overlay.innerHTML = `
    <div class="quick-view-modal">
      <div class="quick-view-modal__inner">

        <!-- Product image -->
        <img
          class="quick-view-modal__image"
          src="${product.images[0]}"
          alt="${product.name}"
        />

        <!-- Product info -->
        <div class="quick-view-modal__info">

          <!-- Close button (×) -->
          <button class="quick-view-modal__close" id="qvClose" aria-label="Cerrar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          ${product.badge ? `<span class="quick-view-modal__badge">${product.badge}</span>` : ''}

          <h2 class="quick-view-modal__name">${product.name}</h2>
          <p class="quick-view-modal__price">Gs. ${product.price.toLocaleString('es-PY')}</p>
          <p class="quick-view-modal__desc">${product.description}</p>

          <div class="quick-view-modal__actions">
            <button class="btn btn--primary btn--full" id="qvAddToCart">
              Agregar al carrito
            </button>
            <a href="producto.html?id=${product.id}" class="btn btn--secondary btn--full">
              Ver detalle completo
            </a>
          </div>

        </div>
      </div>
    </div>
  `;

  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // prevent page scrolling while modal is open

  // Wire up close button
  document.getElementById('qvClose').addEventListener('click', closeQuickView);

  // Wire up Add to Cart — calls the same addToCart() from cart.js
  document.getElementById('qvAddToCart').addEventListener('click', () => {
    addToCart(product);
    closeQuickView();
  });
}

function closeQuickView() {
  overlay.classList.remove('is-open');
  document.body.style.overflow = ''; // restore page scrolling
}

// Close when clicking the dark backdrop (outside the modal box)
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeQuickView();
});

// Close when pressing Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
    closeQuickView();
  }
});


// --- INJECT "Vista rápida" BUTTONS INTO PRODUCT CARDS ---
//
// We can't add the buttons directly in HTML because product cards are generated
// by JavaScript (renderProducts / renderFeatured). Instead, we expose this function
// so the pages can call it AFTER their cards are rendered.

function initQuickView() {
  document.querySelectorAll('.product-card').forEach(card => {
    // Read the product ID from the card's href: "producto.html?id=001"
    const href = card.getAttribute('href') || '';
    const match = href.match(/[?&]id=([^&]+)/);
    if (!match) return;

    const productId = match[1];

    // Avoid adding duplicate buttons if initQuickView() is called more than once
    if (card.querySelector('.product-card__quick-view')) return;

    const btn = document.createElement('button');
    btn.className = 'product-card__quick-view';
    btn.textContent = 'Vista rápida';
    btn.setAttribute('aria-label', 'Vista rápida');

    btn.addEventListener('click', (e) => {
      e.preventDefault();  // don't navigate to the product page
      e.stopPropagation(); // don't trigger the card's link click
      openQuickView(productId);
    });

    card.appendChild(btn);
  });
}
