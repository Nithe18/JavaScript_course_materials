'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModel = document.querySelectorAll('.show-modal');
const btncloseModel = document.querySelector('.close-modal');

console.log(btnsOpenModel);

for (let i = 0; i < btnsOpenModel.length; i++)
  console.log(btnsOpenModel[i].textContent);
