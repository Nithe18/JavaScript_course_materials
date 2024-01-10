// String and template literals
const firstName = 'Nitheesh';
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
lines`);
