require('dotenv').config()
envVariable = process.env
console.log('logged in as: ' + envVariable.USER)
console.log('database: ' + envVariable.DATABASE)
console.log('pool port: ' + envVariable.PORT)

const { Pool } = require("pg");

// All of the following properties should be read from environment variables
module.exports = new Pool({
  host: envVariable.HOST,
  user: envVariable.USER,
  database: envVariable.DATABASE,
  password: envVariable.PASSWORD,
  port: envVariable.PORT
});
