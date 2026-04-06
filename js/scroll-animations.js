// scroll-animations.js — makes elements fade in as they scroll into view.
//
// How it works:
//   1. We mark elements with the class "reveal" in the HTML.
//   2. This script watches those elements using IntersectionObserver —
//      a browser tool that fires a callback the moment an element enters
//      the visible area of the screen.
//   3. When an element enters the viewport, we add the class "reveal--visible",
//      which triggers a CSS animation (defined in components.css).
//
// Why IntersectionObserver instead of a scroll event?
//   Scroll events fire hundreds of times per second and can slow the page down.
//   IntersectionObserver is built into the browser and is much more efficient —
//   it only fires when something actually enters or exits the screen.

// Exposed as a global so pages that re-render cards (like productos.html)
// can call observer.observe(el) on newly injected elements.
var observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is now visible — trigger the animation
        entry.target.classList.add('reveal--visible');

        // Stop watching this element once it's been revealed.
        // No need to animate it again if the user scrolls back up.
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,   // fire when 12% of the element is visible
    rootMargin: '0px 0px -40px 0px' // trigger slightly before the bottom edge
  }
);

// Find every element on the page marked with class "reveal" and watch it
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
