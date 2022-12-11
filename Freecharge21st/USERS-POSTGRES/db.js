const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  database: 'usersdb',
  password: 'Gunther123',
  port: 5432,
  host:"localhost",
})

module.exports={pool};