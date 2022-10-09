class Stack{
    constructor(){
        this.items=[];
        
    }   
    push(element){
        this.items.push(element);
        
    }

    pop(){
        return this.items.pop();
       
    }
    peek(){
        return this.items[this.items.length-1];
    }

    display(){
        var str = "";
        for(var i=this.items.length -1 ;i>=0;i--){
            str += this.items[i] + " ";
            
        }
        return str;
    }

}
var Stk = new Stack();
Stk.push(123);
Stk.push(3);
Stk.push(23);
Stk.push(45);
console.log("========Display======");
console.log(Stk.display());
console.log("========Peek======");
console.log(" PEEK "+Stk.peek());
console.log("========pop======"+Stk.pop());
console.log(Stk.display());



