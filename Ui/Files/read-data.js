var fs=require("fs");
console.log("Reading from a file!!!");

fs.readFile("info.txt",function(er,data){
    if(er){
        return console.error(er);
    }
    console.log("done Read is "+ data.toString());
}
    );