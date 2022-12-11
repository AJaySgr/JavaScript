const flight=require('../models/flight');
const {v4:uuidv4}=require('uuid');

function GetAllFlights(req,res){
    flight.find({},(err,docs)=>{
        if(!err){
            res.status(200).send(docs);
        }else{
            res.send(err);
        }
    });
}
function GetFlightSourceAndDestination(req,res){
    flights.find({$and: [{FlightSource : req.query.source}, {FlightDestination : req.query.dest}]},(err,docs)=>{
    if(!err){
            res.status(200).send(docs);
        }else{
            
            res.send(err);
        }
    })
    console.log("Source ",req.query.FlightSource);
    console.log("Destination :",req.query.FlightDestination);
    console.log(req);
}
function GetFlightsBydate(req, res) {
    flight.find({flightSource:req.params.FlightDateTime}, (err, docs) => {
        if (!err) {
            res.status(200).send(docs);
        } else {
            res.send(err);
        }
    });
    
}
function GetFlightByFlightNumber(req,res){
   
flight.find({'FlightNumber':req.params.FlightNumber},(err,docs)=>{
    if(!err){
            res.status(200).send(docs);
        }else{
            
            res.send(err);
        }
    })
}

function AddFlight(req,res){
    let newFlight=new flight({
        _id:uuidv4(),
        FlightNumber:req.body.FlightNumber,
        FlightName:req.body.FlightName,
        FlightSource:req.body.FlightSource,
        FlightDestination:req.body.FlightDestination,
        FlightDateTime:req.body.FlightDateTime
    });
    newFlight.save((err)=>{
        if(!err){
            res.status(201).send({messages:'Flight deatails Added Successfully '});
        }else{
            throw err;
        }
    })
}


function UpdateFlight(req,res){
    flight.findById(req.params.id,(err,docs)=>{
        if(!err){
            if(docs==null){
                res.status(404).send({message:`Flight with specified Flight Number : ${req.params.id} does not exist `});
            }else{
                flight.updateOne({_id:req.params.id},{
                    FlightNumber:req.body.FlightNumber,
                    FlightName:req.body.FlightName,
                    FlightSource:req.body.FlightSource,
                    FlightDestination:req.body.FlightDestination,
                },(err,docs)=>{
                    if(!err){
                        res.status(200).send({message:`Flight details updated successfully `});
                    }else{
                        throw err;
                    }
                });
            }
        }else{
            res.send(err);
        }
    });
}

function DeleteFlight(req,res){
    flight.deleteOne({_id:req.params.id},(err,docs)=>{
        if(!err){
            res.status(404).send({message:`Flight Details Deleted successfully`});
        }else{
            throw err;
        }
    })
}

module.exports={GetAllFlights,AddFlight,UpdateFlight,DeleteFlight,GetFlightSourceAndDestination,GetFlightsBydate,GetFlightByFlightNumber};