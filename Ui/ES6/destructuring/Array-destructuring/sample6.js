stat=(a,b)=>{
    return[
        a+b,
        (a+b)/2,
        a-b
    ]
}
let [sum,avg,diff]=stat(12,34);
console.log(sum,avg,diff);