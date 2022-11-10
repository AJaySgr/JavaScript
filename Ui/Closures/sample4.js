//closure example

calculate=(x)=>{
    multiply=(y)=>{
        return x*y;
    }

    return multiply;
}

const multiply3=calculate(3);
const multiply4=calculate(4);

console.log(multiply3);
console.log(multiply3());

console.log(multiply3(6)); // 18
console.log(multiply4(2)); //8