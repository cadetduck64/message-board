envVariable = process.env
console.log(envVariable.USER)

require('dotenv').config()
const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: envVariable.HOST, // or wherever the db is hosted
  user: envVariable.USER,
  database: envVariable.DATABASE,
  password: envVariable.PASSWORD,
  port: envVariable.PORT // The default port
});

