let success = true;  //false

function getUsers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(success){
                resolve([
            {username :'Hola',email:'Hola@yahoo.com'},
            {username :'Bonjur',email:'bonjur@google.com'},
            {username :'Ramu',email:'ramu@outlook.com'},
            {username :'Dola',email:'DolaDola@gmail.com.com'}
                ]);
            }else{
                reject('Failed to List Users!!');
            }
        },1000);
    })
}
// const promise=getUsers();
// promise.then((users)=>{
//     console.log(users);
// },(error)=>{
//     console.log(error);
// })

getUsers().then((users)=>{
    console.log(users);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('Msg from finally Hoolllaaaa');
})
