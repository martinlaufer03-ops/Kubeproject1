// cart.js — manages the shopping cart using localStorage.
// localStorage is a small storage space inside the browser.
// It works like a notebook: we write items to it, and they stay
// there even after the page refreshes or the browser closes.

// The cart is saved under this key in localStorage
const CART_KEY = 'kube-cart';


// --- READ & WRITE ---

// Returns the current cart array from localStorage (or empty array if none)
function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// Saves the cart array back to localStorage
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}


// --- MODIFY CART ---

// Adds a product to the cart. If it's already in there, increases quantity.
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartBadge();
  openCartDrawer();
}

// Removes an item from the cart by its product ID
function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  updateCartBadge();
  renderCartDrawer();
}


// --- CART BADGE (the number on the cart icon) ---

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  });
}


// --- CART DRAWER ---

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) {
    renderCartDrawer();
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
  }
}

// Builds the cart drawer HTML from the current cart contents
function renderCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  if (!drawer) return;

  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  drawer.innerHTML = `
    <div class="cart-drawer__header">
      <span class="cart-drawer__title">Tu carrito</span>
      <button class="cart-drawer__close" id="cartClose" aria-label="Cerrar carrito">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="cart-drawer__items">
      ${cart.length === 0
        ? '<p class="cart-drawer__empty">Tu carrito está vacío.</p>'
        : cart.map(item => `
            <div class="cart-item">
              <img class="cart-item__image" src="${item.image}" alt="${item.name}" />
              <div class="cart-item__info">
                <p class="cart-item__name">${item.name}</p>
                <p class="cart-item__price">Gs. ${item.price.toLocaleString('es-PY')}</p>
                <p class="cart-item__qty">Cantidad: ${item.quantity}</p>
              </div>
              <button class="cart-item__remove" data-id="${item.id}" aria-label="Eliminar ${item.name}">×</button>
            </div>
          `).join('')
      }
    </div>

    ${cart.length > 0 ? `
      <div class="cart-drawer__footer">
        <div class="cart-drawer__total">
          <span>Total</span>
          <span>Gs. ${total.toLocaleString('es-PY')}</span>
        </div>
        <a href="contacto.html" class="btn btn--primary btn--full">Consultar pedido</a>
      </div>
    ` : ''}
  `;

  // Attach close button event
  const closeBtn = document.getElementById('cartClose');
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);

  // Attach remove buttons
  drawer.querySelectorAll('.cart-item__remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
  });
}


// --- INITIALIZE ON PAGE LOAD ---

// Wire up cart toggle button in header
const cartToggle = document.getElementById('cartToggle');
if (cartToggle) {
  cartToggle.addEventListener('click', openCartDrawer);
}

// Close drawer when clicking the overlay behind it
const cartOverlay = document.getElementById('cartOverlay');
if (cartOverlay) {
  cartOverlay.addEventListener('click', closeCartDrawer);
}

// Update badge count on every page load
updateCartBadge();
