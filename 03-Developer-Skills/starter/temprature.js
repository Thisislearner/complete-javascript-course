//this is the temprature program.

/*********************************************
 solution given by abhishek starts here. 
**********************************************/
let printForcast = function (arr) {
  let temLength = arr.length;

  let i = 0;
  let output = "";

  for (; i < temLength; i++) {
    output += `...${arr[i]}°C on ${i + 1} day `;
  }
  return output;
};

const temArrayOne = [15, 34, 12, 9];
const temArrayTwo = [1, -5, 17, 12];
let arr = temArrayOne.concat(temArrayTwo);
console.log(printForcast(arr));

console.log(`\n\n\n\n`);
/*********************************************
 solution given by abhishek ends here. 
**********************************************/

/*********************************************
 solution given by Jonas starts here. 
**********************************************/
const data1 = [12, 34, 4, 5];
const data2 = [34, 45, 12, 32];

const printfForcastInfo = function (arr) {
  let str = " ";

  for (let i = 0; i < arr.length; i++) {
    str = str + `...${arr[i]}°C on day ${i}.`;
  }
  return str;
};

arr = data1.concat(data2);

console.log(printfForcastInfo(arr));
/*********************************************
 solution given by Jonas starts here. 
**********************************************/
