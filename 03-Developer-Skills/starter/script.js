const tempOne = [1, 2, 3, 4, 5, 6, "string", "error", false, 22];
const tempTwo = [-1, 23, 45, -0.2, "hello world", "file", 45, 23, 11];

let mergedTemps = tempOne.concat(tempTwo);
// console.log(mergedTemps);

const calcAmplitude = function (temp) {
  let i = 0;

  let max = mergedTemps[i];
  let min = mergedTemps[i];

  for (; i < mergedTemps.length; i++) {
    if (typeof mergedTemps[i] !== "number") continue;

    if (mergedTemps[i] > max) max = mergedTemps[i];
    if (mergedTemps[i] < min) min = mergedTemps[i];
  }

  console.log(max, min);
  return max - min;
};

const amplitude = calcAmplitude(mergedTemps);
console.log(amplitude);

let arrayForPush = ["pratima", "sheo", "atul"];

const pushedItem = arrayForPush.push("abhishek");
console.log(pushedItem);
console.log(arrayForPush);
console.log(arrayForPush.push("lallu"));
console.log(arrayForPush);

//merging array inside function.

const mergingArray = function (inputOne, inputTwo) {
  const singleInput = inputOne.concat(inputTwo);

  return singleInput;
};

const funInput = mergingArray([1, 3, "abhishek"], [4, 5, "vikas"]);
console.log(funInput);
