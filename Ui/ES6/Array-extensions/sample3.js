function arrayFromArgs(){
    var result = [];
    for(var i=0;i<arguments.length;i++){
        result.push(arguments[i]);    //argument is object
    }
    return result;
}

let fruits = arrayFromArgs("Apple","Orange","Gauvava");
console.log(fruits);
console.log("Type of Fruits :",typeof fruits);

//ES6 introduces Array.from() that creates a new instance aof the array-like literable Object.
//Syntax : Array.From(target[,mapFn[,thisArg]])