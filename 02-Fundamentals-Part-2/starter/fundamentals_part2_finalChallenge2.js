'use strict';
const arr = [1,2,3,4,5,6,7,8,9,10,11,12];


// calcAverage = function(arr){
//
// }
let sum = 0;
for(let i=0; i<arr.length; i++)
{
  sum +=arr[i];
}
console.log(sum/arr.length);
