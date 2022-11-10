getItem =()=>{
    return [20,10];
}

let item = getItem();
console.log(item[2]);
let thirdItem = item[2]!= undefined?item[2]:56;
console.log(thirdItem);
console.log("Array : ",getItem());