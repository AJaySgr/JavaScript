let ranks =['A','B','C','D'];

for(let i=0;i<ranks.length;i++){
    console.log(ranks[i]);
}

//for...of   <- new loop construct in ES6

for(let rank of ranks){
    console.log(rank);
}