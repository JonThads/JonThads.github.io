// projects-details.js
let currentImageIndex = 0;

const images = [
  { src: '../assets/images/projects/postman-basic-api-testing/json-placeholder.png', alt: 'Postman collection overview showing API endpoints' },
  { src: '../assets/images/projects/postman-basic-api-testing/http-requests.png', alt: 'Test execution results with pass/fail indicators' },
  { src: '../assets/images/projects/postman-basic-api-testing/local-environment.png', alt: 'Detailed test report with performance metrics' }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.gallery-container');
  const imgEl = document.querySelector('.gallery-image');
  const dotsContainer = document.querySelector('.gallery-dots');
  const prevBtn = document.querySelector('.gallery-prev');
  const nextBtn = document.querySelector('.gallery-next');

  if (!imgEl || !dotsContainer) {
    console.error('Missing .gallery-image or .gallery-dots in HTML.');
    return;
  }

  // Create dots
  images.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'gallery-dot';
    dot.setAttribute('aria-pressed', 'false');
    dot.addEventListener('click', () => showImage(i));
    dotsContainer.appendChild(dot);
  });

  function showImage(index) {
    if (index < 0 || index >= images.length) return;
    currentImageIndex = index;
    imgEl.src = images[index].src;        // <<-- set the image source
    imgEl.alt = images[index].alt;
    dotsContainer.querySelectorAll('.gallery-dot').forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  prevBtn?.addEventListener('click', () => showImage(currentImageIndex - 1));
  nextBtn?.addEventListener('click', () => showImage(currentImageIndex + 1));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showImage(currentImageIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentImageIndex + 1);
  });

  showImage(0);

  // Auto-advance (optional)
  const interval = setInterval(() => showImage((currentImageIndex + 1) % images.length), 5000);
  container?.addEventListener('mouseenter', () => clearInterval(interval));
});