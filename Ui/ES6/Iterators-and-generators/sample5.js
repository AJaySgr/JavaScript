function* forever(){
    let index = 0;
    while(1){
        yield index++;
    }
}

let f = forever();

console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
