var fs=require("fs");
console.log("Writiing into a file!!!");
fs.writeFile("info.txt","Writing into a file 2",function(er){
    if(er){
        return console.error(er);
    }
    console.log("done writing");
}
    )