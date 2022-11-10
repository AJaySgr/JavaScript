function getScore() {
    return [70,9,87];
}

//prior to ES6
let score =getScore();
console.log(score[2]);

//from ES6
let [x,y,z]=getScore();

console.log(x,y,z);