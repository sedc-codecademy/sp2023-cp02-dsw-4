const container = document.getElementById('container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', () => {
  container.scrollBy({
    left: -1000,
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  container.scrollBy({
    left: 1000,
    behavior: 'smooth'
  });
});