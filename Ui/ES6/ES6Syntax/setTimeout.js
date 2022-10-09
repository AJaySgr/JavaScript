for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i),1000
    });
}

console.log(new Date());
// function get(){
// console.log(new Date().toLocaleString());}

// setInterval(get,1000);

console.log("==========================")

for(var i=0;i<5;i++){
    (function(j){   //creating another scope so that each callback fucntion refference a new verion
        setTimeout(function(){
            console.log(j);
        },1000);
    
    })(i);
}