const express = require('express');
const router = require('./routes/productroutes');
const logger=require('./middleware/logger');
//const logger = require('morgan');
const app=express();

app.use(express.json());
app.use(logger);
app.use('/api/v1',router);


app.use(logger);  //middleware




app.listen(3000,()=>{
    console.log("Server running the at port 3000");
})