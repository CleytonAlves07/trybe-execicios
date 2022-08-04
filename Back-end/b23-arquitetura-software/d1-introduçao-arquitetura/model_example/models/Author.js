const connection = require('./connection');

const getAll = async () => {
  const result = await connection.execute('SELECT * FROM authors');

  return result;
}

module.exports = {
  getAll,
}