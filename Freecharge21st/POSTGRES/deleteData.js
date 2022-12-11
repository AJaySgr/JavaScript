const {pool} = require('./db');

async function deleteData(){
    const [userid,username,password]=[105,"Home","123123"];
    const res=await pool.query(
        "DELETE from users where userid = $1",[userid]
    );
    console.log(`Deleted Records Successfully.....${userid}`);
};

deleteData();