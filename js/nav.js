// nav.js — controls the mobile hamburger menu open/close behavior.
// When the user clicks the hamburger button, we toggle a CSS class
// called "is-open" on the menu. The CSS in layout.css handles the
// actual showing/hiding based on whether that class is present.

const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);

    // Accessibility: tells screen readers whether the menu is expanded
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close the mobile menu if user clicks a nav link
  mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}

// Highlight the active nav link based on the current page URL
document.querySelectorAll('.site-nav__link, .mobile-nav__link').forEach(link => {
  if (link.getAttribute('href') === window.location.pathname.split('/').pop()) {
    link.classList.add('active');
  }
});
