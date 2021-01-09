var jonasFriends = {
  birthYear: 1987,
  drivingLicense: true,
  friends: [`micheal`, 'james', `ninja`],
  calAge: function(){
    this.age = 2040 - this.birthYear;
    return this.age;
  }
}

const nameEntry = prompt(`enter first Name.`);
jonasFriends.firstName = nameEntry;

console.log(`${jonasFriends.firstName} has age ${jonasFriends.calAge()} years`);
