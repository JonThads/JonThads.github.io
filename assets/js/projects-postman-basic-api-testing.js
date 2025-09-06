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
    imgEl.src = images[index].src;
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

  // HAMBURGER MENU FUNCTIONALITY
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger && nav) {
      console.log('Hamburger menu elements found, adding event listener');
      hamburger.addEventListener('click', function(e) {
          console.log('Hamburger clicked!');
          e.preventDefault();
          
          hamburger.classList.toggle('active');
          nav.classList.toggle('active');
          
          // Update aria-expanded attribute
          const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
          hamburger.setAttribute('aria-expanded', !isExpanded);
          
          console.log('Hamburger active:', hamburger.classList.contains('active'));
          console.log('Nav active:', nav.classList.contains('active'));
      });
  } else {
      console.error('Hamburger or nav element not found');
      console.log('Hamburger:', hamburger);
      console.log('Nav:', nav);
  }
});

// Keep the original function for backward compatibility
function toggleMenu() {
  console.log('toggleMenu called');
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger && nav) {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
      
      // Update aria-expanded attribute
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      
      console.log('toggleMenu executed');
  } else {
      console.error('toggleMenu: Elements not found');
  }
}