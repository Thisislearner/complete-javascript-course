'use strict';

const bills = [23, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

let calTip = function(bill){

  if(bill>15 && bill<150)
  {
    return bill*0.15;
  }
  else{
    return bill*0.20;
  }

}
console.log(calTip(bills[2])+"\n\n\n\n\n\n");

for(let i = 0; i<bills.length; i++){
  calTip(bills[i]);
  tips.push(calTip(bills[i]));
  // totals.push(bills[i]+tips.push(calTip(bills[i])));
}
console.log(bills);
console.log(tips);

for(let i=0; i<bills.length; i++){
  totals.push(bills[i]+tips[i]);
}
console.log(totals);
