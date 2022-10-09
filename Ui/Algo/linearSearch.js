function linearSearch(arr,target){
    for(let i in arr){
        if(arr[i] === target)
            return i;
    }
    return -1;
}

var ar=[11,2,41,34,4,55,63,5];
console.log(linearSearch(ar,55));