function sum(...args){
    return args
     .filter(function(e){
        return typeof e === 'string';
    })
     .reduce(function(prev,curr){
        return prev + curr;
    })
}

let res=sum(12,'welCome',null,undefined,30,'jhon');
console.log(res);

strr =(...args)=>{
    return args
        .filter(function(e){
            return typeof e ==='number'
        })
        .reduce(function(prev,curr){
            return prev +curr;
        })
}

let j = strr(12,'hi',12,'jhon',null);
console.log(j);