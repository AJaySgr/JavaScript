function greet(name){
    //Inner function
    function displayName(){
        console.log('Hi '+" "+name);
    }
    return displayName;
}

const g1=greet('Hola');
console.log(g1); //returns function defination
g1(); //calling the function
