'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${mov} EUR</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
console.log(containerMovements.innerHTML);

const user = 'Steven Thomas Williams';
const createUsernames = function (accs) {
  console.log(typeof accs);
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });

  // const username = user
  // .toLowerCase()
  // .split(' ')
  // .map(function (name) {
  //   return name[0];
  // });
};
createUsernames(accounts);
console.log(accounts);
// console.log(createUsernames(user));

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcPrintBalance(account2.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((accumulate, movement) => accumulate + movement, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((accumulate, movement) => accumulate + movement, 0);
  labelSumOut.textContent = `${out} EUR`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((accumulate, movement) => accumulate + movement, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};

calcDisplaySummary(account1.movements);

let currentAccount;

// Login
btnLogin.addEventListener('click', e => {
  e.preventDefault(); // Prevents form from submiting and refreshing page
  console.log('LOGIN');
  accounts.find(acc => acc.owner === inputLoginUsername.value);

  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log('MOVEMENTS:\n', movements);
console.log('DEPOSITS(FILTER):\n', deposits);

const depositFor = [];
const withdrawals = [];
for (const mov of movements) {
  if (mov > 0) depositFor.push(mov);
  else if (mov == 0) continue;
  else withdrawals.push(mov);
}
console.log('DEPOSITS(for of):\n', depositFor);
console.log('WITHDRAWALS(for of):\n', withdrawals);

const balance = movements.reduce(function (accumalator, current, i, array) {
  console.log(`Iteration ${i}: ${accumalator}`);
  return accumalator + current;
}, 0); // <- the zero is the initial value of the accumalator

console.log('BALANCE:\n', balance);

const max = movements.reduce((accumulator, movement) => {
  if (accumulator > movement) return accumulator;
  else return movement;
}, movements[0]);

movements.find(mov => mov < 0); // returns the first element that is true
