class Greeter{
    async sayHi(){
        return 'Hola From Greeter';
    }
}

let msg = new Greeter();
msg.sayHi().then(console.log);