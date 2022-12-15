const mongoose=require('mongoose');

let flightSchema=mongoose.Schema({
    _id:String,
    FlightNumber:Number,
    FlightName:String,
    FlightSource:String,
    FlightDestination:String,
    FlightDateTime:String,
})

module.exports=mongoose.model('FlightData',flightSchema,'FlightData');