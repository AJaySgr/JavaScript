//Array findIndex()

//findIndex(testFn(element[, index[, array]])[, thisArg])

//testFn <- element : current element
//index <- index of current element
//array <- array that the findIndex() was call upon.

let ranks=[1,2,7,4,5,6,7];
          //index start from 0

let index = ranks.findIndex(rank=>rank===7);
console.log(index);//2

let index1=ranks.findIndex((rank,index)=>rank===7&& index>2);
console.log(index1);
