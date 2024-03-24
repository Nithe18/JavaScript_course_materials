'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🙌 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

//Implementing the game logic
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value);
  console.log(x, typeof x);

  if (!x) {
    document.querySelector('.message').textContent =
      'No input found please enter a number';
  } else if (x === secretNumber) {
    document.querySelector('.message').textContent = 'Yaay guess is correct💯';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '50rem';
  } else if (x > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is high📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over💣';
      document.querySelector('.score').textContent = 0;
    }
  } else if (x < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is low📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over💣';
      document.querySelector('.score').textContent = 0;
    }
  }
});
