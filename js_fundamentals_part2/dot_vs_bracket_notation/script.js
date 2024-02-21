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

/*const calcAge3 = birthYear => 2037 - birthYear; // arrow function // if there is only one parameter we can omit the parenthesis and the return keyword
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

/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) { // here fruitProcessor is a function declaration and apples and oranges are parameters
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples); // calling another function inside a function
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3)); */


// Reviewing Functions

/*const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
        console.log(`${firstName} has already retired`); // this line of code will not be executed because the return statement will exit the function
    }
}
console.log(yearsUntilRetirement(2000, 'Nitheesh'));
console.log(yearsUntilRetirement(1950, 'Mike')); */

// Coding Challenge #1

/*const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(4, 4, 3);

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

// Test 1
function checkWinner(avgDolphins, avgKoalas) {
    if (scoreDolphins >= 2 * scoreKoalas) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas); */

// Introduction to Arrays

/*const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; // array literal syntax
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); // array constructor syntax (other way of creating arrays, not used often)

console.log(friends[0]); // arrays are zero based
console.log(friends[2]);
console.log(friends.length); // shows the number of elements in the array, its not zero based
console.log(friends[friends.length - 1]); // arrays can not just numbers they can also have expressions. here  the expression is friends.length - 1 which is total length of the array(3) - 1 = 2. so the last element at the index 2 is printed

friends[2] = 'Jay'; // mutating an array(we can change the elements in an array even though it is a const variable)
console.log(friends);


const firstName = 'Nitheesh';
const nitheesh = [firstName, 'Vikraman', 2037 - 2000, 'student', friends]; // arrays can contain different data types like strings, numbers, boolean, arrays, objects etc.
console.log(nitheesh);
console.log(nitheesh.length);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years1 = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years1)); // this will not work because calcAge function expects a single value but we are passing an array
const age1 = calcAge(years1[0]); // we can pass an array element to the function
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[years1.length - 1])]; // we can also pass an array element to the function directly inside the array
console.log(ages); */

// Basic Array Operations(Methods)

// Add elements
/*const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // push method adds an element to the end of the array and returns the new length of the array
console.log(friends);
console.log(newLength);

friends.unshift('John'); // unshift method adds an element to the beginning of the array
console.log(friends);

// Remove elements
const popped = friends.pop(); // pop method removes the last element of the array and returns the removed element
console.log(friends);
console.log(popped);

friends.shift(); // shift method removes the first element of the array
console.log(friends);

console.log(friends.indexOf('Steven')); // indexOf method returns the index of the element in the array
console.log(friends.indexOf('Bob')); // if the element is not in the array it returns -1

friends.push(23);
console.log(friends.includes('Steven')); // includes method returns a boolean value if the element is present in the array
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); // includes method does not do type coercion so it will return false
console.log(friends.includes(23)); // includes method does not do type coercion so it will return true

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
} */

// Coding Challenge #2

/*const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * .15 : bills * .20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]),];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);*/

//Dot vs. Bracket Notation

const nitheesh = {
    firstName: 'Nitheesh',
    lastName: 'Vikraman',
    age: 2037 - 2000,
    job: 'student',
    friends: ['Shrey', 'Dileep', 'Shubham']
};
console.log(nitheesh);

console.log(nitheesh.lastName); // dot notation
console.log(nitheesh['lastName']); // bracket notation the property name should be a string

const nameKey = 'Name'; // we can use variables to access the properties of an object

console.log(nitheesh['first' + nameKey]); // this will not work on dot notation
console.log(nitheesh['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Nitheesh? Choose between firstName, lastName, age, job, and friends'); // this would be confusing while lerarning for the next time

if (nitheesh[interestedIn]) {
    console.log(nitheesh[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
// we can also use dot and bracket notation to add new properties to the object
nitheesh.location = 'India'; // adding new properties to the object
nitheesh['twitter'] = '@nitheeshvikraman'; // adding new properties to the object
console.log(nitheesh);

// Challenge
// "Nitheesh has 3 friends, and his best friend is called Michael" log this in console
console.log(`${nitheesh.firstName} has ${nitheesh.friends.length} friends, and his best friend is called ${nitheesh.friends[0]}`);

