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
