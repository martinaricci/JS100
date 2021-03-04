// Given a list of numbers, write some code to find and display the largest numeric value in the list.

// FIRST WAY
let array1 = [1, 6, 3, 2]
let array2 = [-1, -6, -3, -2]
let array3 = [2, 2]

console.log(Math.max(...array1));
console.log(Math.max(...array2));
console.log(Math.max(...array3));


// SECOND WAY
var max = array1.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max);

var max2 = array2.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max2);

var max3 = array3.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max3);
