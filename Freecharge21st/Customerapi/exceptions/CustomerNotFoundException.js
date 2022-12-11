class CustomerNotFoundException extends Error{
    constructor(id){
        super(`Customer with specified ID ${id} does not exist!!`);
    }
}


module.exports=CustomerNotFoundException;