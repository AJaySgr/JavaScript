// //async/await

// //three task

// function getUser(userId,callback){
//     console.log('Get user From DB : ');
//     setTimeout(()=>{
//         callback({
//             userId:userId,
//             username:'John'
//         });
//     },1000);

// }

// function getServices(user,callback){
//     console.log(`Get services of ${user.username} from API `);

//     setTimeout(()=>{
//         callback(['Email','VPN','CON']);
//     },2*1000);
// }

// function getServicesCost(services,callback){
//     console.log(`Calculate service costs of ${services}.`);

//     setTimeout(()=>{
//         callback(services.length * 100);
//     },3*1000);
// }


// // getUser(100,(user)=>{
// //     getServices(user,(services)=>{
// //         getServicesCost(services,(cost)=>{
// //             console.log(`The service cost is ${cost}`);
// //         })
// //     })
// // });


// //chain the promises

// getUser(100)
//     .then(getServices)
//     .then(getServicesCost)
//     .then(console.log);


let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },3*100);
});

p.then((result)=>{
    console.log(result);  //10
    return result * 2;
}).then((result)=>{
    console.log(result);  //20
    return result * 3;
}).then((result)=>{
    console.log(result);  //60
    return result * 4;
})