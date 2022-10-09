function evenOdd(n){
    if(n%2==1){
        return "ODD "+n;
    }else{
        return "EVEN "+n;
    }
}

var a = [
    1,
    2,
    4,
    6,
    1,
    100,
    0,
    10000,
    3
];

a.sort(function (a, b) {
    return b - a;
});

console.log("Array :"+a);

// console.log('a,', a);
// console.log(evenOdd(3));
// console.log(evenOdd(2));