const express = require('express');

const app=express();

app.set('views',__dirname+'/public/views');
//app.set('view engine','jade');
app.engine('html',require('ejs').renderFile)
app.set('view engine','html');


// / root
// routes
// app.use('/home',(req,res)=>{
//     res.send("Welcome to expressJs")
// })
// app.use('/contacts',(req,res)=>{
//     res.send("Hola Contact to your admin");
// })
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about',{username:"Hokum khambha ghari"});
})
app.listen(8000,()=>{
    console.log("Sever is running at port 8000");
})