'use strict';
/*
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
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.accelerate = speed;
  this.company = make;
};

Car.prototype.pressAcc = function () {
  this.accelerate += 10;
  console.log(`${this.company} is going at ${this.accelerate} km/h`);
};

Car.prototype.pressBrake = function () {
  this.accelerate -= 5;
  console.log(`${this.company} is going at ${this.accelerate} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.pressAcc();
mercedes.pressAcc();
bmw.pressAcc();
mercedes.pressBrake();
mercedes.pressAcc();
mercedes.pressBrake();
bmw.pressAcc();
mercedes.pressAcc();
*/

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // This pattern here is important to understand whenever we set a property that already exist
  // using for validation
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // adding underscore is just a convention and not a js feature
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age); // using get method

console.log(jessica.__proto__ === PersonCl.prototype);

// We can still add a new metod to the prototype

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };

jessica.greet();

const walter = new PersonCl('Walter White', 1965);

const account = {
  owner: 'Nitheesh',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
// This is how getters and setters works for any regular object in javaScript
