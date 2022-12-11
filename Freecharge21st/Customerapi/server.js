const express=require('express');
const  mongoose=require('mongoose');
const routes=require('./routes/customerRoutes');
const app=express();

mongoose.connect('mongodb://127.0.0.1/CustomerDB');
mongoose.connection.once('open',(err)=>{
    if(!err){
        console.log("Application is connected to MongoDB");
    }
})


app.use(express.json());
app.use('/api/v1',routes);



let port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})