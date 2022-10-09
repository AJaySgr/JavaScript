const http = require("http");
const host = "localhost";
const port =5000;


const requestListner=function(req,res){
    res.setHeader("Content-type","application/json");
    res.writeHead(200);
    res.end(`{"message":"This is a json response"}`);
};

const server = http.createServer(requestListner);

server.listen(port,host,()=>{
    console.log(`Server is running on http:/${host}:${port}`)
})