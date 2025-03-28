'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1, // setting default parameters
  price = 199 * numPassengers // expressions can be used while setting default parameters
) {
  // This is the old way of setting default parameters ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/
/*
const flight = 'LH234';
const nith = {
  name: 'Nitheesh Vikraman',
  passport: 1830570,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH288';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1830570) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

//checkIn(flight, nith);
//console.log(flight);
//console.log(nith);

// Is same as doing...
//const flightNum = flight;
//const passenger = nith;

const newPasssport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPasssport(nith);
checkIn(flight, nith);
*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋🏼');
};
document.body.addEventListener('click', high5);
['Nitheesh', 'Vikraman', 'Nith'].forEach(high5);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greethey = greet('Hey');
greethey('Nitheesh');
greethey('Adam');

greet('Hey')('Nitheesh');

// using arrow function
const greetaro = greeting => name => console.log(`${greeting} ${name}`);

greetaro('Hi')('Nitheesh');
*/
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Nitheesh Vikraman');
lufthansa.book(922, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [553, 'George Cooper'];
book.apply(swiss, flightData);
book.apply(swiss, [574, 'Thangoni']);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
//book.call(lufthansa, 239, 'Mary Cooper');

const bookEW = book.bind(eurowings);
const bookLF = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLF(18, 'Belshaw India');
bookSW(18, 'Einstein Robert');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Nitheesh Vikraman');
bookEW23('Subisha dany');

// With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

//lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // here in the bind method lufthansa is used because the this keyword points to the button if used inside a query selector function

// Partial application
const addTax = (rate, value) => value + (value * rate) / 100;
console.log(addTax(10, 200));

const addVAT = addTax.bind(null, 23); //Since arrow function doesn’t use this keyword, we don’t need to set a specific context. But bind requires a first argument for this, even if it’s not used. So, you just pass null as a placeholder.
// same as 👇
// addVAT = value => value + value * 23
console.log(addVAT(100));
console.log(addVAT(23));

// using function returning other function
const addTaxRate = function (rate) {
  return function (value) {
    return value + (value * rate) / 100;
  };
};

const addVAT2 = addTaxRate(23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

////////////////////////////////////////
// Coding Challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]
*/

////////////////////////////
// Immediately Invoked Function Expressions

// Normally we write function like this
/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This Will never run again');
})();

(() => console.log('This will never run again'))();
*/

////////////////////////////////
// Closures
/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker); // colsole.dir is used to inspect the booker function in detail
*/

// More Closure Examples

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f); // at this point the closure contains the value a

// Re-assigning f function
h();
f();
console.dir(f); // at this point the closure contains the value b, old closure disappears

// Example 2 using timer
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 100; // The closure has priority over the scope chain so it won't choose this
boardPassengers(189, 3);
