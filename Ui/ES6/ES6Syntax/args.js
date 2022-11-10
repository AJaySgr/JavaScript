
//rest parameters
sum = (...args)=>{
    let total=0;
    for(const a of args){
        total+= a;
    }
    return total;
}

var res = sum(12,12,12,12);
console.log(res);