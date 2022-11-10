async function getUser(userId){
        await Promise.reject(new Error('Invalid user ID'));

}

getUser().catch(err =>{
    console.log(err);
})