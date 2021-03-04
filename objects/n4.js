let obj = {
    b: 2,
    a: 1,
    c: 3,
};

let newObj = Object.assign({}, obj);
let objKeys = Object.keys(newObj);
let upperCaseKeys = objKeys.map(key => key.toUpperCase());
console.log(upperCaseKeys);
console.log(obj);