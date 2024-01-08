'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // if the if statement contains only a single line of code, we can omit the curly braces
if (hasDriversLicense) console.log('I can drive :D'); // if the if statement contains only a single line of code, we can omit the curly braces

// const interface = 'Audio';  // reserved words
// const private = 534; // reserved words */

// Functions

/* function logger() {
    console.log('My name is Nitheesh');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) { // here fruitProcessor is a function declaration and apples and oranges are parameters
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); //arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4); // arguments
console.log(appleOrangeJuice);

const num = Number('23'); // Number is a function and '23' is an argument which is converted to a number

// additional example for functions(made up by me)
function nithe(optiona, optionb) {
    console.log('brother', 'friend');
    const other = 'bestfriend';
    const relation = `Jijin is ${optiona} of Nitheesh and Abish is ${optionb} of Nitheesh and both are ${other} of Nitheesh`
    return relation;
}
const relationship = nithe('brother', 'friend')
console.log(relationship); */

// Function Declarations vs. Expressions

// Function declaration
/* const age1 = calcAge1(1991); // we can call the function before declaring it
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) { // In function expression the function is stored in a variable.
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2); */

// Arrow functions

const calcAge3 = birthYear => 2037 - birthYear; // arrow function // if there is only one parameter we can omit the parenthesis and the return keyword
/* const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => { // arrow function since there is more than one parameter we cannot omit the parenthesis and return keyword
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2000, 'Nitheesh'));
console.log(yearsUntilRetirement(1999, 'Jijin')); */

// Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) { // here fruitProcessor is a function declaration and apples and oranges are parameters
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples); // calling another function inside a function
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
