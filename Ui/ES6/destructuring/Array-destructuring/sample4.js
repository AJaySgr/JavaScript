getProfile=()=>{
    return [
        'Alex',
        'alex@gmail.com',
        ['C','C++','JavaScript']
    ];
}

let [
    uname,
    email,
    [
        skill1,
        skill2,
        skill3
    ]
]=getProfile();

console.log(uname,email);
console.log(skill1,skill2,skill3);