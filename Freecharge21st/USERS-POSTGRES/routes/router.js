const express=require('express');
const qry=require('../queries/queriesUser');

const router=express.Router();

router.get('/users',qry.getUsers);
router.get('/users/:user_id',qry.getUsersById);
router.post('/users/create',qry.AddUserData);
router.put("/users/update/:user_id",qry.UpdateUserData);
router.delete('/users/delete/:user_id',qry.DeleteUserById);


module.exports=router;


