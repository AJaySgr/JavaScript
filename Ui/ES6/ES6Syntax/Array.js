const col = ['black'];
col.push('green');
console.log(col);

//FOr loop

let scores = [12,14,31,33,44];
for(let score of scores){
    console.log(score +" "+(score + 1))
}
console.log("==================================================")
for(const score of scores){
    console.log(score +" "+(score + 1))
}

for(const i=0; i<scores.length;i++){ //imperative loop execute once
    console.log(scores[i]);
}
