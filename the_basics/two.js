let number = 4936;
console.log(number);

let ones = number % 10;
console.log(ones);

number = (number - ones) / 10;
console.log(number);

let tens = number % 10;
console.log(tens);

number = (number - tens) / 10;
console.log(number);

let hundreds = number % 10;
console.log(hundreds);

number = (number - hundreds) / 10;
console.log(number);