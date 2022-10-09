const http = require("http");
const fs=require("fs").promises;

const host = "localhost";
const port =5000;


const requestListner=function(req,res){
    fs.readFile(__dirname+"/index.html")
    .then(contents=>{
        res.setHeader("Content-type","text/html");
    res.writeHead(200);
    res.end(contents);

    });
    
};

const server = http.createServer(requestListner);

server.listen(port,host,()=>{
    console.log(`Server is running on http:/${host}:${port}`)
})