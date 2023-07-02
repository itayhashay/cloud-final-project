const mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createPool({
  host: process.env.AWSHOST,
  user: process.env.USERDB,
  password: process.env.PASSWORDDB,
  database: process.env.DB
});

module.exports = connection;
