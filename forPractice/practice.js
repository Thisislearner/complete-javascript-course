"use strict";
const percentValue = 5;
const taxes = (value) => {
  return (value / 100) * (100 + percentValue);
};

console.log(taxes(45));
