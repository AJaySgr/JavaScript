// const person = ({age : 20});

// person.age=35; //changing the value of its property
// console.log("Age of thr person :"+person.age);

// =============================================

const person = Object.freeze({age : 20});
person.age=34;//Re-assining
console.log(person.age);