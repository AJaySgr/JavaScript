const express=require('express');
const {GetAllCustomer,AddCustomer,GetCustomerById, UpdateCustomerById,DeleteCustomerById}=require('../controllers/customerContoller');

const router=express.Router();
 

router.get('/Customer',GetAllCustomer);
router.post('/Customer',AddCustomer);
router.get('/Customer/:id',GetCustomerById);
router.put('/Customer/:id',UpdateCustomerById);
router.delete('/Customer/:id',DeleteCustomerById);


module.exports=router;