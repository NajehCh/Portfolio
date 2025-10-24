// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold:0.1 });

document.querySelectorAll('.project-card, .script-card, .certificate-card').forEach(card => observer.observe(card));

// Sticky header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Filter Scripts
function filterScripts(lang){
  const cards = document.querySelectorAll('.script-card');
  cards.forEach(card => {
    card.style.display = (lang==='all' || card.dataset.lang===lang) ? 'block' : 'none';
  });
}

// Certificates Carousel
const track = document.querySelector('.carousel-track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

prev.addEventListener('click', () => {
  index = (index <= 0) ? track.children.length - 1 : index - 1;
  updateCarousel();
});
next.addEventListener('click', () => {
  index = (index >= track.children.length - 1) ? 0 : index + 1;
  updateCarousel();
});

function updateCarousel(){
  const cardWidth = track.children[0].getBoundingClientRect().width + 20; // margin
  track.style.transform = `translateX(-${cardWidth * index}px)`;
}
