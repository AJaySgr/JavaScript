const mongoose=require('mongoose');
let blogSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String

})

module.exports=mongoose.model('Blog',blogSchema,'Blog');