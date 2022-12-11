const product = require('../models/product');
const {v4:uuidv4}=require('uuid');

function GetAllProducts(req,res){
    product.find({},(err,docs)=>{
        if(!err){
            res.status(200).send(docs);
        }else{
            res.send(err);
        }
    });
}

function GetProductById(req,res){
    product.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.status(200).send(docs);
        }else{
            res.send(err);
        }
    });
}

function AddProduct(req,res){
    let newProduct=new product({
        _id: uuidv4(),
        name: req.body.name,
        brand: req.body.brand,
        quantity: req.body.quantity,
        price: req.body.price
 
    });
    newProduct.save((err)=>{
        if(!err){
            res.status(201).send({message :`Product Added Successfully`});
        }else{
            throw err;
        }
    })
}


function UpdateProduct(req, res) {
    product.findById(req.params.id, (err, docs) => {
        if (!err) {
            if (docs == null) {
                res.status(404).send({ message: `Product with specified id: ${req.params.id} does not exists` });
            } else {
                product.updateOne({ _id: req.params.id }, {
                    name: req.body.name,
                    brand: req.body.brand,
                    quantity: req.body.quantity,
                    price: req.body.price
                }, (err, docs) => {
                    if (!err) {
                        res.status(200).send({ message: 'Product Updated Successfully' });
                    } else {
                        throw err;
                    }
                });
            }
        } else {
            res.send(err);
        }
    });
}

function DeleteProductById(req, res) {
    product.deleteOne({ _id: req.params.id }, (err, docs) => {
        if (!err) {
            res.status(200).send({ message: 'Product Deleted Successfully' });
        } else {
            throw err;
        }
    });
}




module.exports={GetAllProducts,GetProductById,AddProduct,UpdateProduct, DeleteProductById}