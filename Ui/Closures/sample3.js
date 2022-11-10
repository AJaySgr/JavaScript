//JS  closure provides access to outer scope of a fucntion from the inner function,
//even after outer function has closed

//outer funtion
function greet(){
    let name = 'john';
    //inner function
    function displayName(){
        return 'hi'+' '+name;
    }

    return displayName;
}

const g1=greet();
console.log(g1);
console.log(g1());