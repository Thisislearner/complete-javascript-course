'use strict';
function age(birthyear){
  const input = 2023;
  return input-birthyear;
}

function retirementReport(name, birthyear){
  const retirementAge = 65;
  const ages = age(birthyear);
  const yearToRetirement = retirementAge- ages;

  if(yearToRetirement> 0){
    return `${name} birth year:- ${birthyear} has ${yearToRetirement} years left before retirement. `;
  }
  else if(yearToRetirement<0){
    return `${name} birth year:- ${birthyear} has been in retirement since ${yearToRetirement/(-1)} years. `;
  }
  else{
    return `${name} birth year:- ${birthyear} will retire this year. this person has:- ${yearToRetirement} years till to retirement. `;
  }
}


const output = retirementReport("bhishe", 1940);
console.log(output);
