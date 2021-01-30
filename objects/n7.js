let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;
// console.log(myObj);

// The first snippet will log the myObj key 'qux' only, not the prototype keys.

// The second snippet will log all the keys, including those from the prototype.
