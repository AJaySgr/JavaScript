var x=10;
let y=13;
if(x===10){
    var x=20;
    let y=12;
    console.log("Within blocked "+x);
    console.log("blocked Scope of let : "+y);
}
console.log("Outside blocked "+x);
console.log("y "+y);


var a=10;
console.log(window.a);

let b=20;     // let variable is not attached to  the global object as a property
console.log(window.b);