// to convert a number into a string use String in console.log and to convert the string in number use the Number in console.log

/*************************************************************************************
example of the function given below
**************************************************************************************/

const numberInString = '223';
const numberForString = 234;

console.log(Number(numberInString));
console.log(String(numberForString));


//remember that while using a prompt the numbered entered becomes a string.
//to make it a number use the Number function before the prompt function.

const promptAsNumber = Number(prompt('enter a number.'));

console.log(promptAsNumber);


if (promptAsNumber === 45) {
    console.log(`the promptAsNumber that your entered ${promptAsNumber} is a number equal to 45.`);

} else {
    console.log(`the promptAsNumber that your entered is not ${promptAsNumber} is not equal to the final number entered.`);

}
