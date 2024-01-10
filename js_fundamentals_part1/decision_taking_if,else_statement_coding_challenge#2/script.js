// String and template literals
/* const firstName = 'Nitheesh';
const job = 'Student';
const birthYear = 2000;
const year = 2050;

const nitheesh = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(nitheesh);

const nitheeshNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(nitheeshNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`); */

//Taking decisions: if/else statements
/* const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Nitheesh can start driving license 🚗');
} */

const age = 15;

if (age >= 18) {
    console.log('Nitheesh can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Nitheesh is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2000;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Coding challenge #2
const MarkWeight = 78;
const MarkHeight = 1.69;
const JohnWeight = 92;
const JohnHeight = 1.95;

const MarkBMI = MarkWeight / MarkHeight ** 2;
const JohnBMI = JohnWeight / JohnHeight ** 2;
console.log(MarkBMI, JohnBMI);

if (MarkBMI > JohnBMI) {
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
} else {
    console.log(`John's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})!`);
}

