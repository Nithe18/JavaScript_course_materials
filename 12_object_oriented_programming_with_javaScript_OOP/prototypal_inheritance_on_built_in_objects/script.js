'use strict';

const Person = function (firstName, birthYear) {
  (this.Name = firstName), (this.year = birthYear);

  //Never do this
  //   this.calcAge = function () {
  //     console.log(2025 - this.birthYear);
  //   };
};

const nith = new Person('Nitheesh', 2000);
console.log(nith);

// what the new keyword does?
// 1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

// and now we can create as many object as we want based on the constructor function

const sam = new Person('Samantha', 1997);
const john = new Person('Johnny', 2001);

console.log(sam, john);

// we can say nith, sam, and john are still instance of Person

//checking that

console.log(nith instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.year);
};

nith.calcAge();
sam.calcAge();
john.calcAge();

console.log(nith.__proto__);
console.log(sam.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(nith));
console.log(Person.prototype.isPrototypeOf(sam));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(nith.species, sam.species);

console.log(nith.hasOwnProperty('Name'));
console.log(nith.hasOwnProperty('species'));

console.log(nith.__proto__);
console.log(nith.__proto__.__proto__);
console.log(nith.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
}; // adding a new method of our wish to the prototype

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1); // checking the prototype of funciton
