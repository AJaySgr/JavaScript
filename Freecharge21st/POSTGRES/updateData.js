const {pool} = require('./db');

async function updateData(){
    const [userid,username,password]=[102,"Home","123123"];
    const res=await pool.query(
        "UPDATE  users SET userid=$1 WHERE username=$2",[userid,username]
    );
    console.log(`Updated Records Successfully.....${userid}`);
};

updateData();









