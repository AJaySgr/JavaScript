let emp ={
    id : 1001,
    emp_name :{
        firstName: 'Shona',
        lastName:'Pal'
    }
}

let {
    id,
    emp_name:{
        firstName,
        lastName
    }
}=emp;

console.log(id+" "+firstName+" "+lastName);