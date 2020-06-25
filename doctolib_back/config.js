const mysql = require("mysql2");
const { DB_NAME, DB_PASS, DB_USER } = process.env;

const connection = mysql.createConnection({
  host: "localhost", 
  user: DB_USER, 
  password: DB_PASS, 
  database: DB_NAME, 
});

module.exports = connection;
