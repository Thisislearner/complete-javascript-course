/******************************************
bill tip example with terenary operator. terenary operators are called the terenary operators because it is the only oprator that takes three inputs.

input data
15% tip value if the bill size is between 50 to 300
if the bill is between 0 to 50  than the tip is 20%.
*******************************************/



//this is my answer
const bill = 2000;
const tip = bill * 0.15;
const totalBill = bill + tip;

var consoleElement =
    bill >= 50 && bill <= 300 ? console.log(`bill before tip: ${bill}
tip precentage 15%
total tip on bill ${tip}
total payable amount ${totalBill}`) : console.log(`bill before tip: ${bill}
tip precentage 20%
total tip on bill ${bill*0.2}
total payable amount ${bill+bill*0.2}`);


// this is jonas answer
const jonasBill = 276;
const jonasTip = jonasBill <= 300 && jonasBill >= 50 ? jonasBill * 0.15 : jonasBill * 0.2;
console.log(`bill amount ${jonasBill} tip amount ${jonasTip}  total amount payable is ${jonasBill+jonasTip}`);
