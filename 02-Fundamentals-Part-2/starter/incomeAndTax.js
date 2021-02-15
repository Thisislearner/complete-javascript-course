// please mention the output only once.
// eg:- the console.log statement only once for the income and for the taxes

const noWork = 0;
const normalHours = 40;
const normalWage = 10;

const overtimeWage = normalWage * 1.5;

let regularIncome;
let overtimeIncome;
let totalIncome;

let hoursInput = prompt(`enter the number of hours worked:`);

let overtimeHours = hoursInput - normalHours;

if (hoursInput <= noWork) {
  regularIncome = 0;
  overtimeIncome = 0;
  totalIncome = regularIncome + overtimeIncome;
  console.log(
    `the EMPLOYEE has not worked at all!\n employee will be fined for not working.\n\n`
  );
} else if (hoursInput > noWork && hoursInput <= normalHours) {
  regularIncome = hoursInput * normalWage;
  overtimeIncome = 0;
  totalIncome = regularIncome + overtimeIncome;
} else {
  regularIncome = normalHours * normalWage;
  overtimeIncome = overtimeHours * overtimeWage;
  totalIncome = regularIncome + overtimeIncome;
}

console.log(
  `INCOME OF EMPLOYEE\n\nRegular Income::::::::::$ ${regularIncome}\nOver-Time Income::::::::$ ${overtimeIncome}\nTotal Income::::::::::::$ ${totalIncome}\n\n`
);

//tax calcualtion..
console.log(`CALCULATION OF TAXES BEGINS HERE.\n\n`);

const noTaxIncome = 150;

const firstSlab = 250;
const firstSlabRate = 0.1;
let firstSlabIncome;
let firstSlabTax;

const secondSlab = 400;
const secondSlabRate = 0.15;
let secondSlabIncome;
let secondSlabTax;

const thirdSlabRate = 0.2;
let thirdSlabIncome;
let thirdSlabTax;

let totalTax;
let iat;

if (totalIncome > 0 && totalIncome <= noTaxIncome) {
  console.log(
    `Total income ::::::::::$ ${totalIncome}\nthis income is not taxable...\n\n`
  );
} else if (totalIncome > noTaxIncome && totalIncome <= firstSlab) {
  firstSlabIncome = totalIncome - noTaxIncome;
  firstSlabTax = firstSlabIncome * firstSlabRate;

  totalTax = firstSlabTax;

  iat = totalIncome - totalTax;
} else if (totalIncome > firstSlab && totalIncome <= secondSlab) {
  firstSlabIncome = 100;
  firstSlabTax = firstSlabIncome * firstSlabRate;

  secondSlabIncome = totalIncome - firstSlab;
  secondSlabTax = secondSlabIncome * secondSlabRate;

  totalTax = firstSlabTax + secondSlabTax;

  iat = totalIncome - totalTax;
} else if (totalIncome > secondSlab) {
  firstSlabIncome = 100;
  firstSlabTax = firstSlabIncome * firstSlabRate;

  secondSlabIncome = 250;
  secondSlabTax = secondSlabIncome * secondSlabRate;

  thirdSlabIncome = totalIncome - secondSlab;
  thirdSlabTax = thirdSlabIncome * thirdSlabRate;

  totalTax = firstSlabTax + secondSlabTax + thirdSlabTax;

  iat = totalIncome - totalTax;
}

console.log(`Income under no tax slab:::::::::::::$ ${noTaxIncome}\n`);
console.log(`FIRST SLAB CALCULATION\n`);
console.log(`income under first slab::::::::::::::$ ${firstSlabIncome}\n`);
console.log(`income under first slab::::::::::::::: ${firstSlabRate}\n`);
console.log(`tax on firstSlab income::::::::::::::$ ${firstSlabTax}\n`);
console.log(`SECOND SLAB CALCULATION\n`);
console.log(`income under second slab:::::::::::::$ ${secondSlabIncome}\n`);
console.log(`income under second slab:::::::::::::: ${secondSlabRate}\n`);
console.log(`tax on secondSlab income:::::::::::::$ ${secondSlabTax}\n`);
console.log(`THIRD SLAB CALCULATION\n`);
console.log(`income under third slab::::::::::::::$ ${thirdSlabIncome}\n`);
console.log(`income under third slab::::::::::::::: ${thirdSlabRate}\n`);
console.log(`tax on thirdSlab income::::::::::::::$ ${thirdSlabTax}\n`);
console.log(`TOTAL INCOME\n`);
console.log(`total income:::::::::::::::::::::::::$ ${totalIncome}\n`);
console.log(`TOTAL TAXES\n`);
console.log(`total tax::::::::::::::::::::::::::::$ ${totalTax}\n`);
console.log(`TOTAL INCOME AFTER TAX\n`);
console.log(`income after taxes:::::::::::::::::::$ ${iat}\n\n`);
