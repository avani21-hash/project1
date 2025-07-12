
function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = 220; 
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}