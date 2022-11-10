function arrayFromArgs(){
    return Array.from(arguments);
}

var fruits = arrayFromArgs("Apple","Pieanpple","berry");
console.log(fruits);

//ES6 introduces Array.from() that creates a new instance aof the array-like literable Object.
//Syntax : Array.From(target[,mapFn[,thisArg]])