//const readline = require("readline");
//import {rl} from "readline";
import * as rl from "readline";
const r1 = rl.createInterface({
    input:process.stdin,
    output: process.stdout,
});

let userInput="";

r1.question("What is your Name\n",function(string){
    userInput=string;
    console.log("your Name is : "+userInput);
    r1.close();
});