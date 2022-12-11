const {pool}=require("./db");


async function insertData(){

    const [userid,username,password]=[106,"Toy","122112"];
    const res=pool.query(
    "INSERT INTO users VALUES($1,$2,$3)",[userid,username,password]
          );
            console.log(`inserted Records Successfully.....${userid}`);
            
}

    

 
    

insertData();



