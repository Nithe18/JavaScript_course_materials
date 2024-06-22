'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2000) {
      var millenial = true;
      // Creating new variable with same name as outer scope's variable
      const firstName = 'Aswin';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(millenial);
    //console.log(add(2,3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Nitheesh';
calcAge(2000);
//console.log(age);
// printAge();
