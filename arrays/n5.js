let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 

const findIntegers = things.filter(thing => Number.isInteger(thing));
console.log(findIntegers);
