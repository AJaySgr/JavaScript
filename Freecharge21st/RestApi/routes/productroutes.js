// const express = require('express');
// const {v4:uuid4}=require('uuid');
// const router = express.Router();


// let products=[
//     {id:uuid4(),name:'laptop',brand:'dell',price:48900}
// ]

// router.get('/products',(req,res)=>{
//     res.send(products);
// })
// router.get('/products/:id', (req, res) => {
//     let result = products.find(item => item.id == req.params.id)
//     res.send(result)
// })


// router.post('/products',(req,res)=>{
//     products.push({...req.body,id: uuidv4()});
//     res.status(201).send({msg:'products added successfully'});
// })

// module.exports=router;

const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();


let products = [
    { id: uuidv4(), name: 'Laptop', brand: 'Dell', price: 48000 }
]

router.get('/products', (req, res) => {
    res.send(products);
})

router.get('/products/:id', (req, res) => {
    let result = products.find(item => item.id == req.params.id)
    res.send(result)
})

router.post('/products', (req, res) => {
    products.push({ ...req.body, id: uuidv4() })
    res.status(201).send({ msg: 'Product Added Successfully' })
})

router.put('/products/:id', (req, res) => {
    let data = products.find(x => x.id == req.params.id)
    let index = products.indexOf(data);
    products[index] = req.body;
    res.status(200).send({ msg: 'Product Updated Successfully' })
})

router.delete('/products/:id', (req, res) => {
    let data = products.find(x => x.id == req.params.id)
    let index = products.indexOf(data);
    products.splice(index, 1)
    res.status(200).send({ msg: 'Product Deleted Successfully' })
})


module.exports = router;
