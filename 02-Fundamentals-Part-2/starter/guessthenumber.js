"use strict";

let systemguess;
let humanguess;
let i;
// let try;

systemguess = Math.floor(Math.random() * 20) + 1;
// console.log(systemguess);

humanguess = prompt("please enter a number between 1 and 20");

for (i = 5; i > 0; i--) {
  if (humanguess <= 0 || humanguess > 20) {
    console.log(`I said BETWEEN 1 and 20.`);
  } else if (humanguess > systemguess) {
    console.log(`your guess ${humanguess} is higher than my guess`);
  } else if (humanguess < systemguess) {
    console.log(`you guess ${humanguess} is lower than my guess`);
  } else {
    console.log(`${humanguess} you guessed it!`);
    break;
  }

  i > 1
    ? console.log(`you have ${i - 1} tires left\n`)
    : console.log(`you have 1 try left\n`);
  humanguess = prompt("please enter a number between 1 and 20");
}
