function addOne(){
    return Array.from(arguments,x=>x+11);
}

//let addOne =()=>{return Array.from(arguments,x=>x+1)}; //Won't work Cause arrow fucntion never have arguments object
console.log(addOne(1,2,3,4));