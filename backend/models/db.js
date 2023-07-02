const mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB
});

module.exports = connection;