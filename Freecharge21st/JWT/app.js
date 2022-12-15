const e = require('express');
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const Blog=require('./models/Blog');
const logger=require('./middleware/logger');

app.use(express.json());
app.use(logger);

mongoose.connect('mongodb+srv://AjayAdmin:xLIZDqBucpnwd9gF@cluster0.rm3pzgv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useNewUrlParser:true,
    useUnifiedTopology:true,}
);
mongoose.connection.once('open',(err)=>{
    if(!err){
        console.log('Connected to DataBase ');
    }else {throw err;}})

    
//pswrd[xLIZDqBucpnwd9gF]
// mongoose.connect(
//     'mongodb+srv://gunther:<gunther123>@cluster0.nzj9bie.mongodb.net/Blog?retryWrites=true&w=majority',
//     'strictQuery', true
// )
// .then(
//     ()=>console.log("Contacted to DB and listening the port 5000")
//     ).catch((err)=>console.log(err));
app.get('/',(req,res)=>{
    res.end("Ki haal h!!!!");
})
app.get('/data',(req,res)=>{
    return new Promise((resolve,reject)=>{
        Blog.find({},(err,data)=>{
            if(!err){
                resolve(data);
            }else{
                reject(err);
            }
        });
    }).then(data=>{
        res.status(200).send(data);
    })
})
app.post('/register',(req,res)=>{
    console.warn(req.body);
    res.end('Holla');
})
let port = 5000||process.env.port;
app.listen(port,()=>{
    console.warn('Server is ruuning at port :',port);
})