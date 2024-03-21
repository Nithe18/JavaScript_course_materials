// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM: 1
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of themperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/*const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// What is temp amplitude? Answer: difference between highest and lowest temp
// How to compute max and min temperature?
// What's a sensor error? And what to do?

// 2) Breaking up into sub-problems?
// How to ignore errors?
// Find max value in temp array
// Find min value in temp array
// Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i]; // here the condition checks if the number in the first place (temps[0] which is first number in the array) is higher if not proceed to the next until it reaches the highest number
    if (temps[i] < min) min = temps[i]; // same here but lower
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temps

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([5, 10, 100], [100, 3, 7]);
console.log(amplitudeNew);*/

// Coding challenge #1
/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "...17C in 1 days... 21C in 2 days ... 23C in 3 days ..."

create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console..

Use the problem-solving fremework: Understand the problem and break it up into sub-problems!

Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4]
*/
// 1) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Trasform each element to string with 'C'
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console.
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days...`;
  }
  console.log('...' + str);
};
printForecast(data1);
