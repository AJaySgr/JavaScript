const express = require('express');
const router=require('./routes/routes');
const app=express();

// use to use add midddleware
app.use('/',router);

app.set('views',__dirname+'/public/views');
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');


app.listen(3000,()=>{
    console.log("Welcome to the server");
})