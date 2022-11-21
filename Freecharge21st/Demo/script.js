//OS
// const os =require('os');
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.homedir());

//fileSystem

//const fs = require('fs');

// fs.writeFile('demo.txt','How you doing!!!',(err)=>{
//     if(!err){
//         console.log('1111111');
//         console.log('File written successfully');
//     }
// })

// fs.appendFile('demo.txt','\nI am doing great',(err)=>{
//     if(!err){
//         console.log('222222');
//         console.log("Data has been added into the file");
//     }
// })

// fs.readFile('demo.txt',(err,data)=>{
//     console.log(data.toString());
// })

// const http=require('http');
// const fs=require('fs');
// let server = http.createServer((req,res)=>{
//     //res.end('welcome to nodejs!!!');
//     fs.readFile('index.html',(err,data)=>{
//         if(!err){
//             res.setHeader('Content-type','text/html');
//             res.end(data);
//         }
//     });
// });

// server.listen(3000,()=>{
//     console.log('Server is running on port 3000 ')
// })




const lodash=require('lodash');
console.log(lodash.capitalize('hello world'));

const addition = require('./cal');
console.log(addition.Add(23,34));

console.log("Factorial : "+addition.fact(6));


































