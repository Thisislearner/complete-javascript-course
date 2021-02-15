'use strict';

//secret number created number using math random and 1 is added so that it starts from 1 and ends at 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const check = document.querySelector('.check');

//function for writing the text message;
const message = function (inputMessage) {
  return (document.querySelector('.message').textContent = inputMessage);
};

// function for checking the guessed number.
const guessCheck = function () {
  console.log('hello world');
};

//giving the check command for check function;
check.addEventListener('click', guessCheck);
