createUser = (name,age)=>{
    // return{
    //     name:name,
    //     age:age
    // };
    return{
        name,
        age
    };
}

var cr=createUser('helloDuniya',13);
console.log(cr.name+" "+cr.age);