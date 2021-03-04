let myArray = {
    name : 'Martina',
    age : 27,
    nationality: 'italian'
};

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

for (let prop in myArray) {
  console.log(myArray[prop]);
}