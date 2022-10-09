function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
            let lowest=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                    lowest=j;
            }
        }
        if(lowest !== i){
            // Swap
            [arr[i],arr[lowest]]=[arr[lowest],arr[i]]
        }
    }
    return arr;
}
const t0 = performance.now();
// console.log(selectionSort([3,4,5,1,2,9]));
console.log(selectionSort([1,2,3,9]));
const t1 = performance.now();
console.log(t1-t0);