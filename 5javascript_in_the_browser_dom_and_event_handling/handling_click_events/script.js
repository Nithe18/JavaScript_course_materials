'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🙌 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

//Handling click events
document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value);
  console.log(x, typeof x);

  if (!x) {
    document.querySelector('.message').textContent =
      'No input found please enter a number';
  }
});
