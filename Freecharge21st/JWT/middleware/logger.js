const Logger=(req,res,next)=>{
    console.log(`${req.method} request made to url - ${req.url}`);
    next();
}

module.exports=Logger;