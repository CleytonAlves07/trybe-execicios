const mysql = require('mysql2/promise');

// O createPool cria uma conexão e a mantém para as 
// próximas requisições ganhando performace
const connection = mysql.createPool({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;