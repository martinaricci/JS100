let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let copyObj = (originalObj, keysArray) => {
    let newObj = {};
    
    if (keysArray) {
        keysArray.forEach(function(key) {
            newObj[key] = originalObj[key];
        });
        return newObj;
    } else {
        return Object.assign(newObj, originalObj);
    }
};