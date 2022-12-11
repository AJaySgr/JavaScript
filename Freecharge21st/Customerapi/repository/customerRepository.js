
const { resolve } = require('path');
const Customer=require('../models/cutomer');

function GetAllCustomer(){
    return new Promise((resolve,reject)=>{
        Customer.find({},(err,data)=>{
            if(!err){
                resolve(data);   
            }else{
                reject(err);
            }
        })
    })
}
function AddCustomer(customerBody){
    return new Promise((resolve,reject)=>{
        new Customer({
            _id:customerBody.id,
            firstname:customerBody.firstname,
            lastname:customerBody.lastname,
            email:customerBody.email,
            city:customerBody.city
        }).save((err)=>{
            if(!err){
                resolve();
            }else{
                reject(err);
            }
        })
    })
}
function GetCustomerById(id){
    return new Promise((resolve,reject)=>{
        Customer.findById(id,(err,data)=>{
            if(!err){
                resolve(data);
            }else{
                reject(err);
            }
        })
    })

}

function UpdateCustomerById(id,customerBody){
    return new Promise((resolve,reject)=>{
        Customer.findByIdAndUpdate(id,{
            _id: customerBody.id,
            firstname: customerBody.firstname,
            lastname: customerBody.lastname,
            email: customerBody.email,
            city: customerBody.city
        },(err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
}

function DeleteCustomerById(id){
    return new Promise((resolve,reject)=>{
            Customer.deleteOne({_id:id},(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
    })
        
    }


module.exports = { GetAllCustomer,AddCustomer,GetCustomerById,UpdateCustomerById,DeleteCustomerById};