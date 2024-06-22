const mysql = require("mysql2");

// create a connection pool

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ganesh@1498",
  port: 3306,
  database: "mystore",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
