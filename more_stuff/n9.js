let value = -0;
// Object.is(value, 0)
// false

// Object.is(value, -0)
// true

function isSameValue(val) {
    console.log(val);
    if (val / 0 === NaN) {
        
    }
    let myVal = val / 0;
    console.log(myVal);
    console.log(myVal === value);
}

isSameValue(-0);