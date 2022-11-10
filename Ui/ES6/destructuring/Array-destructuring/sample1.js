getScore =()=>{
    return [12,23,22,34,35];
}

let [x,y,...args]=getScore();
console.log(x);
console.log(y);
console.log(args);
args.push(444);
console.log(args);
