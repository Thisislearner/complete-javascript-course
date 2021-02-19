'use strict';

//button variables;
const show_modal = document.querySelectorAll('.show-modal');
const close_modal = document.querySelector('.close-modal');

//function to the popup
const show_modalFunc = function () {
  const hiddenClass = document.querySelector('.modal').classList;
  hiddenClass.remove('hidden');
  console.log(hiddenClass);
};

//click command to show popup;
for (let i = 0; i < show_modal.length; i++)
  show_modal[i].addEventListener('click', show_modalFunc);

//function to close the popup using the cross button.
const close_modalFunc = function () {
  const hiddenClass = document.querySelector('.modal').classList;
  hiddenClass.add('hidden');
  console.log(hiddenClass);
};

//click command to close popup using cross button
close_modal.addEventListener('click', close_modalFunc);
