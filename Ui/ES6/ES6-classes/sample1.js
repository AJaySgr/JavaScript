function person(name){
    this.name=name;
}

person.prototype.getName=function(){
    return this.name;
}

var p = new person("hola Bonjour");
console.log(p.getName());

//don't use arrow function
//event Handlers
//object method
//prototype methods
//Functions that use the argument object
