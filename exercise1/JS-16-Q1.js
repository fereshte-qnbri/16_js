// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:

const heartIcon = document.querySelector('.cards__card__img__icon i');
const counterElement = document.getElementById('counter');

heartIcon.addEventListener('click', () => {
  
  heartIcon.classList.toggle('red');
  let currentCount = parseInt(counterElement.textContent, 10);
  currentCount++;
  counterElement.textContent = currentCount;
});