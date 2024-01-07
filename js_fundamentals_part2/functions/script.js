'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // if the if statement contains only a single line of code, we can omit the curly braces
if (hasDriversLicense) console.log('I can drive :D'); // if the if statement contains only a single line of code, we can omit the curly braces

// const interface = 'Audio';  // reserved words
// const private = 534; // reserved words */

// Functions

function logger() {
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
