'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

//removing hidden class
const openModal = function(){
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//adding the hidden class
const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//the for loop to select the different buttons
for(let i = 0; i<btnOpenModal.length; i++)
btnOpenModal[i].addEventListener('click', openModal);

 btnCloseModal.addEventListener('click',closeModal);
 overlay.addEventListener('click', closeModal);

//function for the Escape key.
let escapekey = function(e){
  if(e.key === 'Escape' && !modal.classList.contains('hidden'))
  closeModal();
}

document.addEventListener('keydown', escapekey);
