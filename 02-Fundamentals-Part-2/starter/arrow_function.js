'use strict';

/************************************************************
the arrow function was introduced in ES6 this is called a arrw function because it uses the => arrow it does not require the curly brackets {} and it does not require the return command.
*************************************************************/
let birthYear;

const age = birthYear => 2034 - birthYear;
console.log(age(1997));



//in multiple lines of arrow function the return function is required.

const retirementAge = (currentYear, birthYear, firstName) => {
    const age = currentYear - birthYear;
    const retirementYears = 65 - age;

    return `${firstName}'s age is ${age} and has
${retirementYears} years left before retirement.`;
}

console.log(retirementAge(2045, 1991, `krishna`));
