Add=(a,b)=>{
    return a+b;
}

fact=(a)=>{

    let fact=1;
    for(let i=1;i<=a;i++){
        fact*=i;
    }
    return fact;
}

module.exports={Add,fact};