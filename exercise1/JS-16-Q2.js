//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:

const bidButton = document.querySelector('.cards__card__footer__btn button');

bidButton.addEventListener('click', () => {
  bidButton.textContent = 'Added to Cart';

  bidButton.disabled = true;

  bidButton.classList.add('disabled');
});