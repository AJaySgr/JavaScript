const express=require('express');
const bodyParser = require('body-parser')
const router=require('./routes/router')
const app = express();



app.use(express.json());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/api/q1',(req,res)=>{
    res.end('HOLA');
})

app.use('/api',router);

let port=process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`Server is runing at port ${port}`);
})