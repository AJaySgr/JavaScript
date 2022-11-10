//Promises

function getUsers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([
            {username :'Hola',email:'Hola@yahoo.com'},
            {username :'Bonjur',email:'bonjur@google.com'},
            {username :'Ramu',email:'ramu@outlook.com'},
            {username :'Dola',email:'DolaDola@gmail.com.com'}
            ]);
        },1000)
    });
}
const promise=getUsers();
promise.then((user)=>{
    console.log(user);
});