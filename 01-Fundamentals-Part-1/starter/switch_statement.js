const day = 'monday';

switch (day) {
    case 'monday':
        console.log(`monday is for the protype creation day.
we are creating the data for the most part of the sytem.`);
        break;
    case 'tuesday':
        cosole.log(`Today is tuesday.
we are working for the performance improvement
of the system. To the core issue`);
        break;

    case 'wednesday':
    case 'thrusday':
        console.log(`this is ${day} and this day
we work for the improvement of the body.`);
        break;

    case 'friday':
        console.log(`this is the ${day} TouchEvent
the most section of the socity are discussed`);
        break;

    case 'saturday':
    case 'sunday':
        console.log(`this is ${day} is holiday of the people.`);
        break;

    default:
        console.log(`what you entered is not week day.
Make sure to enter days without space in the begenning or at the end
All the letters must be small alphabets..`);
        break;
}


if (day === 'monday') {
    console.log(`monday is for the protype creation day.
we are creating the data for the most part of the sytem.`);

} else if (day === 'tuesday') {
    cosole.log(`Today is tuesday.
we are working for the performance improvement
of the system. To the core issue`)

} else if (day === 'wednesday' || day === 'thrusday') {
    console.log(`this is ${day} and this day
we work for the improvement of the body.`)

} else if (day === 'friday') {
    console.log(`this is the ${day} TouchEvent
the most section of the socity are discussed`);

} else if (day === 'saturday' || day === 'sunday') {
    console.log(`this is ${day} is holiday of the people.`);

} else {
    console.log(`what you entered is not week day.
Make sure to enter days without space in the begenning or at the end
All the letters must be small alphabets..`);
}
