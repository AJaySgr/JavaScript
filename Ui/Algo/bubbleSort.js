function bubbleSort(arr){
    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                    // swap
                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
            
        }
    }
    return arr;
}

// console.log(bubbleSort([4,5,6,7,1,2]));
const t0 = performance.now();
console.log(bubbleSort([1,2,3,9]));
const t1 = performance.now();
console.log(t1-t0);