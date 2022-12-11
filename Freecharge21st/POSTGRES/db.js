const {Pool}=require("pg");



const pool=new Pool({
    user:"postgres",
    database:"TestDB",
    password:"Gunther123",
    port:5432,
    host:"localhost",
});


module.exports={pool};