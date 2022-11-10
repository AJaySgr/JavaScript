// let str=`template literal in ES6`; //template litrals
// let msg = "hola"
// console.log(str);
// console.log(msg);

// //String Formate
// let fname='ramu',lname='shambhu';
// let greeting =`Hi ${fname},${lname}`

// console.log(greeting);


//literal Substitutions

function format(literals,...Substitutions){
    let result='';

    for(let i=0;i<Substitutions.length;i++){
        result+=literals[i];
        result+=Substitutions[i];
       // console.log("inside ",result+=literals[i]);
    }
    result+=literals[literals.length-1];
    //console.log("outside ",result);
    return result;
}

let quantity=9,
    priceEach=8.99;
    result=format`${quantity} items cost $ ${(quantity*priceEach).toFixed(2)}.`;

console.log(result);    