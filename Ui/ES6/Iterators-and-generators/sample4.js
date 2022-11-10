//ES6 introduces a new kind of function that ais diff. from regulara : function generator or Generator

function* genrate(){ //* denote that the generate() is a generator,Not a normal function
    console.log("Invoked first!!!");
    yield 1; // this statement returns a value and pauses the exection of the funtion.

    console.log("Inviked second!!!! ");
    yield 2;
}

let gen = genrate();

// for(const g of gen){
//     console.log(g);
// }
//console.log("hello world");
 console.log(gen);
console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
