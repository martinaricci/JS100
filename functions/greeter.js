let add = (firstName, lastName) => firstName + " " + lastName;
let getName = (text) => {
  let input = prompt(text);
  return input;
};

let firstNameInput = getName("Enter your first name: ");
let lastNameInput = getName("Enter your last name: ");
console.log(add(firstNameInput, lastNameInput));