//Question :- Write a program that will print three elements in an array whose sum is equal to a given number.
let arraySol=(ar, n, res)=>
{
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (ar[i] + ar[j] + ar[k] == res) {
                    console.log(ar[i]+ " "
                        + ar[j] + " "
                        + ar[k] + " ");
                }
            }
        }
    }
}

let ar1 = [ 0, 1, 4, -1, 3, 5, 6, -4];
let len = ar1.length;
let givenNumber=12
arraySol(ar1, len, givenNumber);



// Output
//1 5 6 
//4 3 5
