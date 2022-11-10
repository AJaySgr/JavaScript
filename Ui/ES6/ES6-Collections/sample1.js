let john ={name :'John'},
    lily ={name:'lily'},
    peter={name:'peter'};


let userRoles =new Map();

console.log(typeof userRoles); //object
console.log("Comparison "+userRoles instanceof Map);  //false

userRoles.set(john,"Admin");
userRoles.set(lily,'Editor');
userRoles.set(peter,'Follower');

console.log(userRoles.get(john)); //Admin
console.log(userRoles.has(lily)); //Editor
//console.writeln(userRoles)

console.log(userRoles.entries());
//Output
// [Map Entries] {
//     [ { name: 'John' }, 'Admin' ],
//     [ { name: 'lily' }, 'Editor' ],
//     [ { name: 'peter' }, 'Follower' ]
//   }
console.log(userRoles.size); //3

console.log("================");

for(const user of userRoles.keys()){
    console.log(user.name);
}

console.log("================");

for(const role of userRoles.values()){
    console.log(role);
}

console.log("================");

for(const role of userRoles.values()){
    console.log(role);
}


console.log("================");

for(const ent of userRoles.entries()){
    console.log(`${ent[0].name}:${ent[1]}`);
}
//or
console.log("===============================")
for(let [user,role] of userRoles.entries()){
    console.log(`${user.name}:${role}`);
}
//or
console.log("===============================");
userRoles.forEach((role,user)=>console.log(`${user.name}:${role}`));


//map into Array

let roles=[...userRoles.values(),...userRoles.keys(),...userRoles.entries()];
console.log(roles);

//clear the map

console.log("Before",userRoles.size); //3
userRoles.clear();
console.log("After",userRoles.size);//0

// sqr 
const arr=[4,9,16];
const newArr = arr.map(Math.sqrt);
console.log(newArr);

