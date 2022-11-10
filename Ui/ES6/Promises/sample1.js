function getUsers(){ //API or Access DB : will have a delay
    let users=[];
    // return[
    //     {username :'Hola',email:'Hola@yahoo.com'},
    //     {username :'Dola',email:'DolaDola@yahoo.com'},
    // ]
    setTimeout(()=>{
        users=[
            {username :'Hola',email:'Hola@yahoo.com'},
            {username :'Dola',email:'DolaDola@yahoo.com'},
        ];
    },1000);
    console.log(users);
    return users
}
function findUser(username){ //Synchronous and blocking
    const users = getUsers();
    const user = users.find((user)=>user.username === username);
    console.log(user);
    return user;
}
console.log(findUser('Hola'));
console.log(findUser('Dola'));
//undefined