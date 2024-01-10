//Operatoor Precedence
const now = 2037;
const ageNith = now - 1991;
const ageSwetha = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageNith + ageSwetha) / 2; // Paranthese has the higher Precedence so the script will execute the operation inside the Paranthese first
console.log(ageNith, ageSwetha, averageAge);