const repo=require('../repository/customerRepository');
const CustomerNotFoundException =require('../exceptions/CustomerNotFoundException');
const CustomerAlreadyExistException=require('../exceptions/CustomerAlreadyExistException');
const { resolve } = require('path');
const { rejects } = require('assert');

function GetAllCustomer(){
    return new Promise((resolve,reject)=>{
        repo.GetAllCustomer().then(data=>{
            resolve(data);
        })
    });
}
function GetCustomerById(id) {
    return new Promise((resolve, reject) => {
        repo.GetCustomerById(id).then(data => {
            if (data == null) {
                reject(new CustomerNotFoundException(id));
            }else{
                resolve(data);
            }
        })
    })
}

function AddCustomer(id){
    return new Promise((resolve,reject)=>{
        repo.GetCustomerById(id).then(data => {
            if (data == null) {
                reject(new CustomerNotFoundException(id));
            }else{
                resolve(data);
            }
        })
    })
}

function AddCustomer(customerBody) {
    return new Promise((resolve, reject) => {
        repo.GetCustomerById(customerBody.id).then(data => {
            if (data == null) {
                repo.AddCustomer(customerBody).then(data => {
                    resolve();
                })
            } else {
                reject(new CustomerAlreadyExistsException(customerBody.id));
            }
        })
    })
}

function UpdateCustomerById(id, customerBody) {
    return new Promise((resolve, reject) => {
        repo.GetCustomerById(id).then(data => {
            if (data != null) {
                repo.UpdateCustomerById(id, customerBody).then(data => {
                    resolve(data);
                })
            } else {
                reject(new CustomerNotFoundException(id));
            }
        })
    })
}

function DeleteCustomerById(id) {
    return new Promise((resolve, reject) => {
        repo.GetCustomerById(id).then(data => {
            if (data != null) {
                repo.DeleteCustomerById(id).then(data => {
                    resolve(data);
                })
            } else {
                reject(new CustomerNotFoundException(id));
            }
        })
    })
}


module.exports = { GetAllCustomer, GetCustomerById, AddCustomer, UpdateCustomerById, DeleteCustomerById }
