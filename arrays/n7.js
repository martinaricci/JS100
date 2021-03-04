let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83

function sumOfSquares(array) {
    let squares = array.map(num => num * num);
    const reducer = (accumulator, square) => accumulator + square;
    console.log(squares.reduce(reducer));
}

sumOfSquares(array);