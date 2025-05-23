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
