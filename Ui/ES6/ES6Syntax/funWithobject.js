let server ={
    name:"server",
    // restart : function(){
    //     console.log("The " +this.name +" is restarting....");
    // }
    restart(){
        console.log("The " +this.name +" is restarting....");
    },
    'starting up'(){ //concise method Syntax
        console.log("The " +this.name +" is restarting....");
    }
}

server.restart();
server['starting up']();
//syntax: obj_name['property name']();