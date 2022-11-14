'use strict';

let name0 = document.querySelector('.player--0');
let name1 = document.querySelector('.player--1');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let curr0 = document.querySelector('.current--0');
let curr1 = document.querySelector('.current--1');

let rollDice = document.querySelector('.btn--roll');
let newGame = document.querySelector('.btn--new');
let hold = document.querySelector('.btn--hold');

let dice = document.querySelector('.dice');

let currentScore, activePlayer, scores, playing;

function init() {
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
}

init();

rollDice.addEventListener('click', function () {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  console.log(diceValue);
  dice.src = `dice-${diceValue}.png`;
});

console.log(score0, ' ', newGame);
newGame.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  curr0.textContent = 0;
  curr1.textContent = 0;
});

hold.addEventListener('click', function () {
  document.getElementById(`score--${activePlayer}`).textContent = currentScore;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  currentScore = 0;
  name0.classList.toggle('player--active');
  name1.classList.toggle('player--active');
});
