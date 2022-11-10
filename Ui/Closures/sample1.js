//Nested function example
//Outer function

function greet(name){
    //Inner function
    function displayName(){
        console.log('Hi '+" "+name);
    }
    displayName();
}

greet('John');