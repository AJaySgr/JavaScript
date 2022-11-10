class Animal{
    constructor(leg){
    this.leg=leg}

    walk(){
        console.log("walking on "+this.leg+" legs");

    }
}
    class Bird extends Animal{
        constructor(legs){
            super(legs);
        }
        fly(){
            console.log('Flying');
        }
    }

let bird = new Bird(2);
bird.walk();
bird.fly();