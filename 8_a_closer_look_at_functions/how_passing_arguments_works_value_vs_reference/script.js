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
