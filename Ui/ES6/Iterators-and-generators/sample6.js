class bag{
    constructor(){
        this.elements=[];
    }
    idEmpty(){
        this.elements.length===0;
    }
    add(element){
        this.elements.push(element);
    }
    *[Symbol.iterator](){
        for(let ele of this.elements){
            yield ele;
        }
    }
}
let bg=new bag();
    bg.add(12);
    bg.add(2);
    bg.add(21);
    bg.add(133);
    
console.log(bg);