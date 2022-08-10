const mysql = require('mysql2/promise');

async function main() { 
  const [rows] = await connection.execute('SELECT * FROM customer');

  console.table(rows);
}

main();