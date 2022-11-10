let f = Symbol('foo'); // primitive type

console.log(typeof f);

console.log(f);

let firstName=Symbol('First Name'),
    lastName = Symbol('Last Name');

console.log(firstName,lastName);  



console.log("=================================================");

let statuses = {
    OPEN: Symbol( 'Open'),
    IN_PROGRESS: Symbol( 'In progress'),
    COMPLETED: Symbol( 'Completed'),
    HOLD: Symbol( 'On hold' ) ,
    CANCELED: Symbol( 'Canceled')
    }
console.log( statuses.COMPLETED) ;
let status = Symbol( 'status');
let tasks ={
    [status]:statuses.OPEN,
    description: ' Learning ESS Symbol'
}

console.log (tasks) ;
console.log(Object.keys(tasks));
console.log(Object.getOwnPropertyNames(tasks));
