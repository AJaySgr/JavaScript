//Object.is() <= To check the if two values are the same.

let amount= +0,
    vol= -0;

console.log(vol===amount);
console.log(Object.is(amount, vol));