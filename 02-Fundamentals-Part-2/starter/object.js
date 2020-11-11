'use strict';
console.log(`hello world `);

//we are going to create an object here.

const theObject = {
    firstName: `abhishek`,
    lastName: `kumar`
}
//use the bracket notation when you have to compute the name of the object.
//for eg. while using the prompt we can use the bracket notation.
console.log(theObject[`first` + `Name`]);

const forBracketNotation = {
    firstName: `Abhishek`,
    lastName: `kumar`,
    age: 32,
    school: 'Army Public School',
    profession: `teaching`,
    marrried: false
}
console.log(`try to find firstName lastName age school profession married`);

const outPutBrackets = prompt(`find out firstName lastName age school profession married`);
if (forBracketNotation[outPutBrackets]) {
    console.log(forBracketNotation[outPutBrackets]);

} else {
    console.log(`wrong request we cannot disclose the following resultsView
please enter correct input.`);
}

//adding the methods in the object.

forBracketNotation.locationS = `indiana`;
forBracketNotation[`hobby`] = `none`;
forBracketNotation[`friends`] = [`firstFriend`, `secondFriend`, `thirdFriend`, `forthFriend`];
console.log(forBracketNotation);

//best firend is thirdFriend
