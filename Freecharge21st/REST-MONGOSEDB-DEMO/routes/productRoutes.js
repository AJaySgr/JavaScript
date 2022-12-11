const express =require('express');
const controller = require('../controllers/productController');
const router=express.Router();


router.get('/products',controller.GetAllProducts);
router.get('/products/:id',controller.GetProductById);
router.post('/products/',controller.AddProduct);
router.put('/products/:id', controller.UpdateProduct);
router.delete('/products/:id', controller.DeleteProductById);

module.exports=router;


