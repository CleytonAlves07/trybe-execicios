const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mysql_container',
});

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'sua_senha',
//   database: 'model_example'});

module.exports = connection;