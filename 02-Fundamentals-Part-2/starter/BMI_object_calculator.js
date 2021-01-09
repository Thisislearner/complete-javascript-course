/////////////////////////////////////////
//james simth's BMI claculator stars here
////////////////////////////////////////
const jamesSmith = {

  bmiCalculator: function(){

    this.name= `James Smith`;
    this.height= 1.65; //this is in meters.
    this.weight= 78; //this is in kgs.
    this.BMIValue = this.weight/(this.height**2); //this is BMI claculator.

    return `${this.name} has BMI ${this.BMIValue}.`;
  }

}
console.log(`${jamesSmith.bmiCalculator()}`);
/////////////////////////////////////////
//james simth's BMI claculator ends here
////////////////////////////////////////


/////////////////////////////////////////
//mike miller's BMI claculator starts here
////////////////////////////////////////
const mikeMiller = {

  bmiCalculator: function(){

    this.name= `Mike Miller`;
    this.height= 1.96; //this is in meters.
    this.weight= 98; //this is in kgs.
    this.BMIValue = this.weight/(this.height**2); //this is BMI claculator.

    return `${this.name} has BMI ${this.BMIValue}.`;
  }

}
console.log(`${mikeMiller.bmiCalculator()}

`);
/////////////////////////////////////////
//mike Miller's BMI claculator ends here
////////////////////////////////////////

if(mikeMiller.bmiCalculator()>jamesSmith.bmiCalculator())
{
  console.log(`${mikeMiller.bmiCalculator()} has BMI HIGER THAN ${jamesSmith.bmiCalculator()}`);
}
else if(jamesMiller.bmiCalculator()>mikeMiller.bmiCalculator())
{
  console.log(`${mikeMiller.bmiCalculator()} has BMI HIGER THAN ${jamesSmith.bmiCalculator()}`);
}
else
{
  console.log(`${mikeMiller.bmiCalculator()} has BMI sames as ${jamesSmith.bmiCalculator()}`);
}
