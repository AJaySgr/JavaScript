class Node{
constructor(element){
    this.element=element;
    this.next=null;
}
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    add(element){
        var node = new Node(element)
        var current;
        if(this.head==null){
            this.head=node;
        }else{
            current=this.head;

            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }

    traversh(){
        var cur =this.head;
        var str="";
        while(cur){
            str+=cur.element +" ";
            cur = cur.next;
        }
        console.log(str);
    }
}

var llist = new LinkedList();
llist.add(23);
llist.add(67);
llist.add(53);
llist.add(2);
console.log("Display");
llist.traversh();