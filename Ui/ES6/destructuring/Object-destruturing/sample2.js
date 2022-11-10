let person ={
    firstName :'Baby',
    lastName :'Lal',
    middleName:'C.',
    currentAge:24
}

let {firstName,lastName,middleName,currentAge:age=19}=person;
console.log(firstName);
console.log(middleName);
console.log(age);