let numbers = Array.of(3);

console.log(numbers.length);
console.log(numbers[0]);

numbers.push(12);
numbers.push(23);
console.log(numbers)

let chars = Array.of('A',"B",'C',"W");
let [...ar]= chars;
console.log(typeof Array);
console.log(ar[2]);