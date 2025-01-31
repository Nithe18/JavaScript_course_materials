'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Nitheesh Vikraman',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-05-08T14:11:59.604Z',
    '2025-01-24T17:01:17.194Z',
    '2025-01-29T23:36:17.929Z',
    '2025-01-30T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'ta-IN',
};

const account2 = {
  owner: 'Philomena Cunk',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2024-01-25T14:18:46.235Z',
    '2024-02-05T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2025-01-26T12:01:20.894Z',
  ],
  currency: 'GBP',
  locale: 'en-UK',
};

const accounts = [account1, account2];

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

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0); // padStart is used to add a 0 at the beginning of the date
  // const month = `${date.getMonth() + 1}`.padStart(2, 0); // +1 is used as the months in JavaScript is 0 based
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));

  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  combinedMovsDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(movementDate); // using the index as we are looping over 2 arrays ate the same time

    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${movement.toFixed(2)}₹</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculating display balance and showing it in the UI
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}₹`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}₹`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}₹`; // Math.abs to remove the -(minus) sign

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}₹`;
};

// Computing User names
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

// Faking the interface to always logged in (only while implementing the dates)
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 1;

btnLogin.addEventListener('click', function (e) {
  // prevent from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  //console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const locale = navigator.language; // this is used to get the local language from the navigator apii
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0); // padStart is used to add a 0 at the beginning of the date
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); // +1 is used as the months in JavaScript is 0 based
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //update UI
    updateUI(currentAccount);
  } else {
    labelWelcome.textContent = 'Username or PIN entered was incorrect';
    containerApp.style.opacity = 0;
    // alert('Wrong username password, Please try again');
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Ad transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    //update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //Add movement
    currentAccount.movements.push(amount);

    //Add Loan Date
    currentAccount.movementsDates.push(new Date().toISOString());

    //update UI
    updateUI(currentAccount);
  } else {
    alert('sorry invalid loan amount');
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // logging to the console to check if the index is deleted
    console.log(index);

    //Delete sccount
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Login to get started';
  }
  //Clear input field
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
console.log(23 === 23.0);

//Base 10 - 0 to 9, 1/10 = 0.1, 3/10 = 3.333333
//Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//conversion
console.log(Number('23'));
console.log(+'23'); // converting just by adding a + symbol that using the word 'Number', can have spaces that would not affect

//Parsing
console.log(Number.parseInt('30px', 10)); // pasing Integer
console.log(Number.parseInt('e23', 10)); // should only start with a number

console.log(Number.parseFloat('2.5rem')); // parsing floating point number

// console.log(parseFloat('  2.5rem  ')); // can call without the Number too

// checking if value is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0)); // any number divide by 0 is infinity

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/
/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); // same findng squre root but without using the sqrt() function
console.log(8 ** (1 / 3)); // cube root

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2)); // logs NaN as max function don't parse

console.log(Math.min(5, 8, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2); // area of a circle

console.log(Math.trunc(Math.random() * 6) + 1); // generate a random number between 1 to 6 for dice roll

// A funciton to create a random number between a minimum value and a maximum value, can be used in the future

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));
console.log(randomInt(1, 3));

// Rounding Integers
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.celi(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding Decimal
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.347).toFixed(2));
console.log(+(2.347).toFixed(3)); // if we want to convert it to a number from string
*/
/*
// The remainder operator

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8  = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

// Creating a function to check if a number is even
const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// using the same operator to change every 2nd and 3rd row of the movements

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';

    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
*/
/*
// Numeric Separators

// 287,460,000,000

const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415; // can't do like 3_.1415
console.log(PI);

console.log(Number('2300_000')); // numeric separators cannot be used in numbers which are strings
console.log(parseInt('230_000')); // if parseInt is used it logs the numbers till the underscore and everything else will be ignored
*/
/*
//Working with BigInt
// JavaScript's default max safe number
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

// using the bigint
console.log(430920287548888892759827n);
console.log(BigInt(48384302));

//Operations
console.log(1000n + 1000n);
console.log(124978524715950714527529574254296n * 2945724562895n);
// console.log(Math.sqrt(16n)); //Math operator wont work with BigInt

const huge = 202583571087544597574n;
const num = 23;
console.log(huge * BigInt(num)); //console.log(huge * num); won't work as bigInt and normal number cannot be mixed

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);

console.log(huge + 'is REALLY BIG!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
*/
/*
// Create a Date

const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with Dates

const futuree = new Date(2037, 10, 19, 15, 23);
console.log(futuree);
console.log(futuree.getFullYear());
console.log(futuree.getMonth());
console.log(futuree.getDate());
console.log(futuree.getDay());
console.log(futuree.getHours());
console.log(futuree.getMinutes());
console.log(futuree.getSeconds());
console.log(futuree.toISOString());
console.log(futuree.getTime()); // to get the timestamp

console.log(new Date(2142256980000));

console.log(Date.now());

futuree.setFullYear(2040);
console.log(futuree);
*/

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); //converting the time stamp to number

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); // (1000 * 60 * 60 * 24) - for converting the time stamp to number of days, Math.abs to remove any symbols like -(minus) and return only the number

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
