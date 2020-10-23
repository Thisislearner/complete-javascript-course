/********************************************************************
the if else statement is the conditional statement that runs the code if the condition if fullfilled.
*******************************************************************/

const age = 8;

if (age > 18) {

    console.log(`This is the code to be printed ${age}
this is the only code of the function.`);
} else {
    console.log(`This is the else statement code. ${age}`);
}


//This is the Bmi tast with If else statement.

const johnW = 98;
const johnH = 1.98;

const markW = 89;
const markH = 1.34;

const johnBMI = johnW / (johnH ** 2);
const markBMI = markW / (markH ** 2);

if (johnBMI > markBMI) {
    console.log(`john's BMI ${johnBMI} is more that mark's BMI ${markBMI}`);

} else {
    console.log(`mark's BMI is ${markBMI} is higher that john's BMI ${johnBMI}`);
}
