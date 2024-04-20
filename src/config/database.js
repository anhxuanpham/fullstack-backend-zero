const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.HOST_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  
  });

module.exports = connection;