'use strict';

let name0 = document.querySelector('.player--0');
let name1 = document.querySelector('.player--1');
let score0 = document.querySelector('.score--0');
let score1 = document.querySelector('.score--1');
let curr0 = document.querySelector('.current--0');
let curr1 = document.querySelector('.current--1');

let rollDice = document.querySelector('.btn--roll');
let newGame = document.querySelector('.btn--new');
let hold = document.querySelector('.btn--hold');
let dice = document.querySelector('.dice');

let turn = 0;

if (turn === 0) {
  name1.classList.remove('player--active');
  name0.classList.add('player--active');
} else if (turn === 1) {
  name0.classList.remove('player--active');
  name1.classList.add('player--active');
}

rollDice.addEventListener('click', function () {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  console.log(diceValue);
  dice.src = `dice-${diceValue}.png`;
});

newGame.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  curr0.textContent = 0;
  curr1.textContent = 0;
});
