const mongoose=require('mongoose');

let productSchema=mongoose.Schema({
    _id:String,
    name:String,
    brand:String,
    quantity:Number,
    price:Number
})

module.exports=mongoose.model('Products',productSchema,'Products');