// const fs=require('fs');
// csv = fs.readFileSync("cities.csv");
// let arr=csv.toString().split("\r");
// let result=[];
// let headers = arr[0].split(", ");
// for(let i=0;i<arr.length;i++){
//     let obj={}

//     let str=arr[i];
//     let s='';

//     let flag;
//     for(let ch of str){
//         if(ch==='"' && flag===0){
//             flag=1
//         }else if(ch==='"' && flag===1)flag=0
//             if(ch===', '&& flag===0)ch='|'
//             if(ch!=='"')s+=ch;
//     }
//     console.log("Hola",s);
//     let properties=s.split("|");
//     console.log(properties);

//     for(let k in headers){
//         if(properties[k]){
//             obj[headers[k]]=properties[k].split(", ").map(item=>item.trim())

//         }else{
//             obj[headers[k]]=properties[k];
//         }
    
//     }
// result.push(obj);
//     }



// console.log("Array :",result);
// let jsonfile = JSON.stringify(result);
// fs.writeFileSync('output.json',jsonfile);












const http=require('http');
const fs=require('fs');
let server = http.createServer((req,res)=>{
    //res.end('welcome to nodejs!!!');
    fs.readFile('cities.csv',(err,data)=>{
        if(!err){
            res.setHeader('Content-type','application/json');
            res.end(data);
        }
    });
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000 ')
})