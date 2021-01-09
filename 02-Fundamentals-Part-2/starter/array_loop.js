const oneArray = [`Abhishek`, 123, `pratima`, true, `akash`, `vikas`, false, `mahindra`, `nirmala`];
types = [];

for(let counting = 0; counting<oneArray.length; counting++)
{
  console.log(`${typeof oneArray[counting]}`);
  types.push(typeof oneArray[counting]);
}
console.log(types);
console.log(`----------------STARTING COUNTINUE AND BREAK----------------`);
