'use strict';

//secret number created number using math random and 1 is added so that it starts from 1 and ends at 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//function for writing the text message;
const message = function (inputMessage) {
  return (document.querySelector('.message').textContent = inputMessage);
};

// function for checking the guessed number.
const check = document.querySelector('.check');

const guessCheck = function () {
  //variables for the function
  const guess = Number(document.querySelector('.guess').value);
  let playerScore = document.querySelector('.playerScore');

  //if else conditional statement guess comparision;
  if (!guess || guess < 1 || guess > 20) {
    score--;
    if (score <= 0) {
      message('😱🤦‍♀️😢You have failed to guess the Number..');
      playerScore.textContent = 0;
      console.log(score);
    } else {
      message('❌enter number between 1 and 20❌');
      playerScore.textContent = score;
      console.log(score);
    }
  } else if (guess === secretNumber) {
    if (score <= 0) {
      message('😱🤦‍♀️😢You have failed to guess the Number..');
      playerScore.textContent = 0;
      console.log(score);
    } else {
      message('🎉🎉Congratulations..!!');
      playerScore.textContent = score;
      console.log(score);
      document.querySelector('body').style.backgroundColor = 'green';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('.number').textContent = guess;
      }
    }
  } else if (guess != secretNumber) {
    score--;
    if (score <= 0) {
      message('😱🤦‍♀️😢You have failed to guess the Number..');
      playerScore.textContent = 0;
      console.log(score);
    } else {
      guess > secretNumber
        ? message('📈Higher Guess')
        : message('📉Lower Guess');
      playerScore.textContent = score;
      console.log(score);
    }
  }
};

//giving the check command for check function;
check.addEventListener('click', guessCheck);

//again button function;
const again = document.querySelector('.again');

//again button function command;
const againButton = function () {
  message(`Starting Guessing..`);
  score = 20;
  document.querySelector('.playerScore').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
};

//again click command;
again.addEventListener('click', againButton);
