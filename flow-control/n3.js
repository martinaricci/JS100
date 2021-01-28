let evenOrOdd = num => 
num % 2 == 0 && Number.isInteger(num) 
? console.log(num + ' is even')
: !Number.isInteger(num) 
? console.log(num + ' is non a number')
: console.log(num + ' is odd')

evenOrOdd('3');