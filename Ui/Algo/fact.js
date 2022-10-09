function fact(n){
    let num=n;

    if(num==0) return 1;

    for(let i=0;i<n;i++){
        num = n*(n-1);
    }
    return num;
}

const t0= performance.now();
fact(1);
fact(2);
fact(3);
console.log(fact(9));

const t1= performance.now();
console.log("total time "+(t1-t0)+"MS");