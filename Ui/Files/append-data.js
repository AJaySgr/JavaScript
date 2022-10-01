var fs=require("fs");

console.log("Writiing into a file!!!");

fs.appendFile("info.txt","\nThis is my new line!!!!",function(er){
    if(er){
        return console.error(er);
    }
    console.log("done Appending into a file");
}
    )