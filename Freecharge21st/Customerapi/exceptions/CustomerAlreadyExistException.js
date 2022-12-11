class CustomerAlreadyExistException extends Error{
    constructor(id){
        super(`Customer with specified ID ${id} is already exist!!`);
    }
}

module.exports=CustomerAlreadyExistException;