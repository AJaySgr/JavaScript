const repo=require('../repository/customerRepository');
const service=require('../services/customerService');
// function GetAllCustomers(req,res){
//     //res.status(200).send(repo.GetAllCustomers);

//     repo.GetAllCustomers().then(data=>{
//         res.status(200).send(data);
//     })
// }

function GetAllCustomer(req, res) {
    service.GetAllCustomer().then(data => {
        res.status(200).send(data);
    })
}

function AddCustomer(req,res){
    repo.AddCustomer(req.body).then(data=>{
        res.status(201).send({Status :201,Message :`Customer details saved successfully`})
    })
}

function GetCustomerById(req,res){
    service.GetCustomerById(req.params.id).then(data=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(404).send({ status: 404, message: err.message});
    })
}

function UpdateCustomerById(req,res){
    repo.UpdateCustomerById(req.params.id,req.body).then(data=>{
        res.status(200).send({status : 200,Mesaage:`Customer details Updated successfuly`})
    })
}

function DeleteCustomerById(req,res){
    repo.DeleteCustomerById(req.params.id).then(data=>{
        res.status(200).send({ status: 200, message: 'Customer Details Deleted Successfully' });
    })
}

module.exports={GetAllCustomer,AddCustomer,GetCustomerById,UpdateCustomerById,DeleteCustomerById}