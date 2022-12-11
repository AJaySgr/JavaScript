const http=require('http');
const fs=require('fs');
let server = http.createServer((req,res)=>{
    //res.end('welcome to nodejs!!!');
    fs.readFile('cities.csv',(err,data)=>{
        if(!err){
            var array = data.toString().split("\n");
            var result = [];
            var headers = array[0].split(", ");
            for (let i = 1; i < array.length; i++) {
                var obj = {}
            
                var properties = array[i].split(',')
            
            for(var j=0;j<headers.length;j++){
                obj[headers[j]]=properties[j];
            }
                result.push(obj);
            }
            console.log(result);
            let json = JSON.stringify(result);

            res.setHeader('Content-type','application/json');
            res.end(json);
        }
    });
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000 ')
})