// gallery.js — handles the product image gallery on the detail page.
// When a user clicks a thumbnail, it becomes the main displayed image.

function initGallery() {
  const mainImage = document.getElementById('mainImage');
  const thumbs = document.querySelectorAll('.product-gallery__thumb');

  if (!mainImage || thumbs.length === 0) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // Swap the main image src to the clicked thumbnail's src
      mainImage.src = thumb.src;

      // Mark the clicked thumbnail as active (orange border)
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

initGallery();
