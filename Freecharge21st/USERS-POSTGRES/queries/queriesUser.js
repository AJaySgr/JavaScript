const {pool}=require('../db');

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
     if (error) {
      throw error
     }
     response.status(200).json(results.rows)
    })
   }
const getUsersById=(req,res)=>{
    const id = req.params.user_id;
    pool.query('SELECT * FROM users WHERE user_id=$1', [id], (error, results) => {
        if(error){
            throw error;
        }   
        res.status(200).json(results.rows);
    })
}
const AddUserData = (request, response) => {
    const { user_id,user_password,user_dob,
            user_phone,user_street,user_area,
            user_pincode,user_state,user_country,
            user_name
         } = request.body
  
    pool.query('INSERT INTO users VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
         [user_id,user_password,user_dob,user_phone,user_street,user_area,user_pincode,user_state,user_country,user_name], 
         (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User Information added successfulluy:)`);
    })
  }
const DeleteUserById = (request, response) => {
    const id = request.params.user_id;
   // console.log("UUUU",id);
  
    pool.query('DELETE  from users where user_id=$1',[id], 
         (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User Information Deleted successfulluy:)`);
    })
  }

const UpdateUserData = (request, response) => {
    const id = request.params.user_id;
   // console.log(id);
    const {user_id, 
        user_password,user_dob,
        user_phone,user_street,user_area,
        user_pincode,user_state,user_country,
        user_name
     } = request.body;
    pool.query(
      'UPDATE users SET user_password=$2,user_dob=$3,user_phone=$4,user_street=$5,user_area=$6,user_pincode=$7,user_state=$8,user_country=$9,user_name=$10 WHERE user_id = $1',
      [user_id,user_password,user_dob,user_phone,user_street,user_area,user_pincode,user_state,user_country,user_name], 
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`);
      }
    )
  }
  



module.exports={getUsers,getUsersById,AddUserData,DeleteUserById,UpdateUserData};
