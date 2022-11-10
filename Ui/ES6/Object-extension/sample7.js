//async/await

//three task

function getUser(userId,callback){
    console.log('Get user From DB : ');
    setTimeout(()=>{
        callback({
            userId:userId,
            username:'John'
        });
    },1000);

}

function getServices(user,callback){
    console.log(`Get services of ${user.username} from API `);

    setTimeout(()=>{
        callback(['Email','VPN','CON']);
    },2*1000);
}

function getServicesCost(services,callback){
    console.log(`Calculate service costs of ${services}.`);

    setTimeout(()=>{
        callback(services.length * 100);
    },3*1000);
}




// //chain the promises

// getUser(100)
//     .then(getServices)
//     .then(getServicesCost)
//     .then(console.log);


async function showServicesCost(){
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServicesCost(services);
    console.log(`The service cost is ${cost}. `);
}

showServicesCost();