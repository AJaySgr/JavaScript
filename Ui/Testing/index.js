var Chef = function(){
    this.dishes = ['Dosa','tea','Samosa'];
}

Chef.prototype.checkMenu=function(){
    let dish = this.dishes[Math.floor(Math.random()*this.dishes.length)];
    console.log("i would like to have ",dish);
    return dish;
}

let chef =new Chef();

module.exports=chef;