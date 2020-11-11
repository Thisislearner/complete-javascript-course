'use strict';
//the push function is used to push an element at end of the array in a javascript.

const theArray = [`zeroth `, `first`, 1234, 2235, `forth`, `fifth`];

theArray.push(`second entry`);
theArray.push(`thrid entry`);

//pop is used to delete item from the array.
theArray.pop(2);
console.log(theArray);


//here we are using the pop method of an Array which is used to delete an element from the end. here we don't have to pass any argument in the pop. eg:- arrayName.pop();

theArray.pop();
console.log(theArray);

//.pop in an array .
const popped = theArray.pop();

console.log(popped);
console.log(theArray);

//unshift is used to add an element in front of the array.
theArray.unshift(`one before zero`);
theArray.unshift(`second before zeroth`);

console.log(theArray);

//shift is used to remove an item form the front of the array.

theArray.shift();
console.log(theArray);

//using array as an const
const theShifter = theArray.shift();
console.log(theShifter);


//.indexOf method tells the index number of the item in the array.
console.log(theArray.indexOf(`zeroth `));
console.log(theArray.indexOf(`1234`));

//.indexOf as a const
const indexOfConst = theArray.indexOf(1234);
console.log(indexOfConst);


//.include is another method in the array it tells wether the item mentioned in the arry exits or not using true and false.

console.log(theArray.includes(1234));
console.log(theArray.includes(`1234`))

const includeConst = theArray.includes(1234);
console.log(includeConst);


//calculator creation.
//15% tip between 50-300
//20% above and below the 50-300 range.

const amountOfGoods = 100;

function claTip(amountOfGoods) {
    var tip;
    if (amountOfGoods > 50 || amountOfGoods <= 300) {
        tip = 0.15;
    } else {
        tip = 0.2;
    }
    return amountOfGoods * tip;
}

console.log(`total cost of items consumed--${amountOfGoods}
tip percentage--------------NaN
total tip------------${claTip(amountOfGoods)}
total amount payable-----${amountOfGoods+ claTip(amountOfGoods)}`);



//calculator function with an array.
const bills = new Array(125, 555, 44);
const tips = [0.15, 0.2];

console.log(`additional values to check the preview`);
console.log(`this is on line 87`);

function billsArray() {
    var tip;
    if (bills > 50 || bills <= 300) {
        tip = tips[0];
        return bills[bills.length] * tip;
    } else {
        tip = tips[1];
        return bills[bills.length] * tip;
    }
}

console.log(billsArray());


//jonas answer to the calculator question
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const billss = [123, 555, 44];
const tipss = [calcTip(billss[0]), calcTip(billss[1]), calcTip(billss[2])];
console.log(billss, tipss);
