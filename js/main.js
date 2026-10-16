'use strict';

(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');

  // Reveal sections as they enter the viewport. Fall back cleanly without IntersectionObserver.
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  // Interactive photo viewer.
  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCaption = document.querySelector('#lightbox-caption');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const imageUrl = item.dataset.full;
      if (!imageUrl || !lightbox || typeof lightbox.showModal !== 'function') return;

      const image = item.querySelector('img');
      lightboxImage.src = imageUrl;
      lightboxImage.alt = image ? image.alt : 'Expanded memory';
      lightboxCaption.textContent = item.dataset.caption || 'A moment worth keeping.';
      lightbox.showModal();
    });
  });

  // Close the photo viewer when the backdrop itself is clicked.
  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  // Small reminder reveal near the bottom of the page.
  const noteButton = document.querySelector('#open-note');
  const hiddenNote = document.querySelector('#hidden-note');
  noteButton?.addEventListener('click', () => {
    if (!hiddenNote) return;
    const isHidden = hiddenNote.hidden;
    hiddenNote.hidden = !isHidden;
    noteButton.setAttribute('aria-expanded', String(isHidden));
    noteButton.innerHTML = isHidden
      ? 'Keep this reminder <span aria-hidden="true">♡</span>'
      : 'Open a little reminder <span aria-hidden="true">♡</span>';
    if (isHidden) hiddenNote.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
  });
})();
