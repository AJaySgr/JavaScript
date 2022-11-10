let add = function(x,y){
    return x+y;
}

console.log(add(23,45));


// Arrow function

let addition = (x,y)=>{
    return x+y;
}

console.log(addition(45,56));
console.log(typeof addition);
console.log(addition instanceof Function);