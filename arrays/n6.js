let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

let elementLengths = arr.map(element => element.length);
let oddLengths = elementLengths.filter(elementLength => elementLength % 2 === 1);