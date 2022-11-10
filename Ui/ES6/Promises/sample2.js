function getUsers(callback){
    setTimeout(()=>{
        callback([
            {username :'Hola',email:'Hola@yahoo.com'},
            {username :'Bonjur',email:'bonjur@google.com'},
            {username :'Ramu',email:'ramu@outlook.com'},
            {username :'Dola',email:'DolaDola@gmail.com.com'}
        ]);
    },1000);
}

function findUser(username,callback){
    getUsers((resp)=>{
        const user=resp.find((user)=>user.username===username);
        callback(user);
    });
}

findUser('Dola',console.log);
findUser('  ',console.log);