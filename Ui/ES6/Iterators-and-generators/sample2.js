class seq{
    constructor(start = 0, end = Infinity, interval=1){
        this.start=start;
        this.end=end;
        this.interval=interval;
    }

    [Symbol.iterator](){
        let counter=0;
        let nextIndex=this.start;

        return{
            next:()=>{
                if(nextIndex<=this.end){
                    let result = {value:nextIndex,done:false}
                    nextIndex+=this.interval;
                    counter++;
                    return result;
                }
                return{value:counter,done:true};
            }
        }
    }

}

let evenNum=new seq(2,20,2);
for(const num of evenNum ){
    console.log(num);
}