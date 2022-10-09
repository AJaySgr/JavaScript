class Queue{
    constructor(){
    this.item=[];
}
enque(element){
    this.item.push(element);
}
front(){
    return this.item[0];
}
deque(){
    return this.item.shift();

}

display(){
    var data=" ";
        for(var i=0;i<this.item.length;i++){
            data += this.item[i] + " ";
            
        }
        //console.log("hello");
        return data;
        }

}


var que = new Queue();
console.log(que.front());
que.enque(12);
que.enque(2);
que.enque(312);
que.enque(42);

console.log(que.front());

console.log(que.display());
console.log("Deletion\n");
que.deque();
console.log(que.display());