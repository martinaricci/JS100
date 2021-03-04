// Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.

// for (let i = 1; i <= 100; i++) {
//     console.log(i * 2);
// }

// let array = [1, 2, 3, 4];
// let index = 0;

// while (array.length > index) {
//     console.log(array[index]);
//     index++;
// }

// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// for (let i = 0; i < cities.length; i ++) {
//     if (cities[i] === null) {
//         continue;
//     }
//     console.log(cities[i].length);
// }

// for (let i = 0; ; i += 1) {
//   console.log("and on");
//   break
// }

// Write a while loop that logs all odd natural numbers between 1 and 40.

// let i = 1;

// while (40 > i) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
//     i++;
// }

// Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

// let fish = ['Dory', 'Nemo', 'Marlin', 'Gill', 'Bruce'];
// let i = 0;
// while (fish.length > i) {
//     if (fish[i] === "Nemo") {
//         console.log(fish[i]);
//         break;
//     }
//     console.log(fish[i])
//     i++;
// }

// for (let i = 0; i < fish.length; i += 1) {
//   console.log(fish[i]);

//   if (fish[i] === 'Nemo') {
//     break;
//   }
// }


// let counter = 0;

// while (counter > 0) {
//   console.log('Woooot!');
//   counter -= 1;
// }

// do {
//   console.log('Woooot!');
//   counter -= 1;
// } while (counter > 0);

// let randomNumber = Math.round(Math.random());

// if (randomNumber === 1) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// randomNumber === 1 ? console.log('Yes') : console.log('No');

// let weather = 'sunny';

// console.log(weather === 'sunny' ? 'It\'s a beautiful day!' 
//          : weather === 'rainy' ? "Grab your umbrella."
//          : "Let's stay inside");


// switch(weather) {
//   case 'sunny':
//     console.log('It\'s a beautiful day!')
//     break;
//   case 'rainy':
//     console.log("Grab your umbrella.")
//     break;
//   default:
//     console.log("Let's stay inside");
// }

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(22, 10);

// function brendanEichQuote() {
//     console.log('Always bet on JavaScript.')
// }

// brendanEichQuote();


// function cite(str1, str2) {
//     console.log(`${str1} said: "${str2}".`)
// }
// cite('Brendan Eich', 'Always bet on JavaScript.');

// function squaredNumber(num) {
//     console.log(num * num);
// }; 
// squaredNumber(3); 

// function compareByLength(str1, str2) {
//     if (str1.length === str2.length) {
//         console.log(0);
//     } else if (str1.length > str2.length) {
//         console.log(1);
//     } else {
//         console.log(-1);
//     }
// };

// compareByLength('patience', 'perseverance');
// compareByLength('strength', 'dignity');
// compareByLength('humor', 'grace');

// let str = 'Captain Ruby';

// let splittedStr = str.split(' ');
// let anotherCaptain = splittedStr[1] = "Javascript";
// console.log(splittedStr);
// let newStr = splittedStr.join(' ');
// console.log(newStr);

// function extractRegion(locale) {
//     console.log(locale.split('.')[0].split('_')[1]);
// }

// extractRegion('en_US.UTF-8');  // 'US'
// extractRegion('en_GB.UTF-8');  // 'GB'
// extractRegion('ko_KR.UTF-16');

// var str = "These aren't the droids you're looking for.";
// console.log(str.length);

// function repeat(times, str) {
//     var repeatedStr = '';
//     while (times > 0) {
//         repeatedStr += str
//         times--;
//     }
//     console.log(repeatedStr); 
// }
// repeat(3, 'ha');

// var str = "A pirate I was meant to be!\nTrim the sails and roam the sea!"
// console.log(str);

// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';

// console.log(string1.toLowerCase() === string2.toLowerCase());

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// let check = byteSequence.includes('x');
// console.log(check);


// function isBlank(str) {
//     if (str === "") {
//         return true;
//     } else {
//         return false;
//     }
// }

// isBlank('mars');
// isBlank('  ');
// isBlank('');


// function isBlank(str) {
//     if (!str.trim()) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isBlank('mars');
// isBlank('  ');
// isBlank('');

// function last(arr) {
//     console.log(arr[arr.length -1]);
// }

// last(['Earth', 'Moon', 'Mars']);

// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// for (let i = 0; i < vocabulary.length; i++) {
//     let vocabularyArr = vocabulary[i];
//     for (let j = 0; j < vocabularyArr.length; j++) {
//         let vocabularyArrElement = vocabulary[i][j];
//         console.log(vocabularyArrElement);
//     }
// }

// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];

//   function isIncluded(arr, value) {
//       if (arr.indexOf(value) >= 0) {
//         console.log(true);
//       } else {
//           console.log(false);
//       }
//   }

//   isIncluded(destinations, 'Rome');

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// passcode.join('-')

// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// function removeFromList(element) {
//     for ( var i = 0; i < groceryList.length; i++) { 
//         if ( groceryList[i] === element) { 
//             groceryList.splice(i, 1); 
//         }
//     }
// }

// removeFromList('broccoli');

// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// function greet() {
//     console.log(`${greeting()}, ${recipient()}`);
// }

// greet();

// bmi = weightInKilograms / heightInMeters**2;
// 1 meter is equivalent to 100 centimeters

// function calculateBMI(height, weightInKilograms) {
//     let heightInMeters = height / 100;
//     console.log(heightInMeters);

//     let bmi = weightInKilograms / heightInMeters**2;

//     console.log(bmi.toFixed(2))
// }

// calculateBMI(180, 80);

// function removeLastChar(str) {
//     console.log(str.slice(0, -1));
// }

// removeLastChar('martina');

// const template = 'I VERB NOUN.';

// let sentence = (verb, noun) =>
//   template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);

// console.log(sentence('like', 'birds'));

// let initGame = () => ({
// //   return {
//     level: 1,
//     score: 0
// //   }
// });

// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);

// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

// console.log(student['courses']);


// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };

// console.log(jane.location.country);

// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// fido['age'] = '';
// fido['favorite food'] = '';
// console.log(fido['age']);
// console.log(fido['favorite food']);

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet : function() {
//     return 'Hej, ' + this.firstName;
//   }
// };

// console.log(jane.greet('Bobby'));

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// console.log(Object.entries(person));

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// console.log(Object.fromEntries(nestedArray));

// function clone(obj) {
//     return Object.assign({}, obj);
// }

// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };

// let clonedPerson = clone(person);
// person.age = 34;

// console.log(person.age);       // 34
// console.log(clonedPerson.age); // 33
