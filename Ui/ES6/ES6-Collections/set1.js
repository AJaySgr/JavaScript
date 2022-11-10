let roles = new Set();
roles.add("Subscriber")
     .add("admin")
     .add("Editor");

for(let s of roles){
    console.log(s);
}

const [...ar]=roles;
console.log(ar);

for(const [key,values] of roles.entries()){
    console.log(key === values);
}

roles.forEach(role=>console.log(role.toUpperCase()));