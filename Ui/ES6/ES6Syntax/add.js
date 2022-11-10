// Defaults function
// add =(a=10,b=12,c=23)=>{
//     return a+b+c;
// }
// console.log(add());
// console.log(add(2));
// console.log(add(2,3));
// console.log(add(2,5,6));

class add{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    getInfo = ()=>{
        console.log("Addition of a and b "+(this.a+this.b));
    }
    // constructor(a,b,c){
    //     this.a=a;
    //     this.b=b;
    //     this.c=c;
    //     return a+b+c;
    // }
    // constructor(a,b,c,d){
    //     this.a=a;
    //     this.b=b;
    //     this.c=c;
    //     this.d=d;
    //     return a+b+c+d;
    // }

}

let sum = new add(12,13);
sum.getInfo();