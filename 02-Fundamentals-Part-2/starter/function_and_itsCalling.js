function cutFruitPeices(fruits) {
    return fruits * 4;

}

function fruitProcessor(oranges, apple) {
    const applePeices = cutFruitPeices(apple);
    const orangePeices = cutFruitPeices(oranges);

    const juice = `juice is made of ${applePeices} peices of apple and ${orangePeices} peices of oranges`;
    return juice;
}

console.log(fruitProcessor(3, 4));
