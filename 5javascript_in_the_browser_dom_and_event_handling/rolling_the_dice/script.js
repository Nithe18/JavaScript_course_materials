'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const p1CurrentEl = document.getElementById('current--0');
const p2CurrentEl = document.getElementById('current--1');

let currentScore = 0;

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1; //math.trunc()-to remove the decimals, math.randon() * 6-genarates random number between 1 to 6, The plus one will make it between 1 to 6.

  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Check if rolled 1?
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    p1CurrentEl.textContent = currentScore;
  }

  //switch player
});
