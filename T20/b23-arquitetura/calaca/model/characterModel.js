const connection = require('../helpers/connection');

const getAll = async () => {
  const [rows] = await connection.execute(
    'SELECT * FROM live_lecture_23_1.characters'
  );

  return rows;
};

const getById = async (id) => {
  const [rows] = await connection.execute(
    `SELECT * FROM live_lecture_23_1.characters
    WHERE id = ?`,
    [id]
  );
  return rows;
};

const add = async (name, cartoon) => {
  const [
    row,
  ] = await connection.execute(
    'INSERT INTO live_lecture_23_1.characters (name, cartoon) VALUES (?, ?)',
    [name, cartoon]
  );
  const result = {
    id: row.insertId,
    name,
    cartoon,
  };
  return result;
};

const update = async (id, name, cartoon) => {
  const [result] = await connection.execute(
    `UPDATE live_lecture_23_1.characters
      SET name = ?, cartoon = ?
      WHERE id = ?`,
    [name, cartoon, id]
  );
  //const result = { id, name, cartoon };

  return result.affectedRows;
};

const exclude = async (id) =>
  connection.execute(
    `DELETE FROM live_lecture_23_1.characters
    WHERE id = ?`,
    [id]
  );

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
};