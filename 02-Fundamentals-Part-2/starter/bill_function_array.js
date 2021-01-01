'use strict';

function calTip(input){

  if(input>=15 && input<=200){
    return input*0.15;
  }
  else{
    return input*0.20;
  }
}

const bills = [125, 555, 45];

const outt = calTip(bills[2]);
console.log(outt +"\n \n\n");
