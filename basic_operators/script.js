//Math operators
const now = 2037;
const ageNith = now - 1991;
const ageSwetha = now - 2018;
console.log(ageNith, ageSwetha);

console.log(ageNith * 2, ageNith / 2, 2 ** 4); // 2**4 is 2 to the power 4 which is  2*2*2*2

//Assignment operator
const firstName = 'Nitheesh';
const lastName = 'Vikraman';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; //15
x += 10; // x = x + 10
x *= 4;
x++; // x = x + 1
console.log(x);

// Comparison operators
console.log(ageNith > ageSwetha); // we also have other comparison operators like <, >, <=, >=
console.log(ageNith >= 18);

console.log(now - 1991 > now - 2018);