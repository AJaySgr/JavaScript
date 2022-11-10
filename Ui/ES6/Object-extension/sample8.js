async function sayHi(){
    //return 'Hi';
    return Promise.resolve('Hi');
}

sayHi().then(console.log);