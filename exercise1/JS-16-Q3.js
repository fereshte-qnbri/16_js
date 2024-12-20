// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
const bidButton = document.querySelector('.cards__card__footer__btn button');

bidButton.addEventListener('click', () => {
  bidButton.textContent = 'Added to Cart';

  bidButton.disabled = true;

  bidButton.classList.add('disabled');
});