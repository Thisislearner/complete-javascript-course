const loopArray = [`this is one`, 123, 345, `section`, true, `bad`, 1234];
let anotherArray = [];

console.log(loopArray.length);
let i;
for(i = loopArray.length-1; i>=0; i--){
  console.log(i, loopArray[i]);
}

// console.log(anotherArray.push([loopArray[i]]));

i= loopArray.length;
while(i>0){
  i--;
  console.log(loopArray[i], i);
  console.log(typeof anotherArray.push(typeof loopArray[i]));
}
