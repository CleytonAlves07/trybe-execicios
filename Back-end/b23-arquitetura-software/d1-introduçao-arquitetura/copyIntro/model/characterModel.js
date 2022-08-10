const { expectCt } = require('helmet');
const connection = require('../helpers/connection');

const getAll = async () => {
  const [rows] = await connection.execute(
    'SELECT * FROM teste_B_23_1'
  );
  return rows;
};

const getById = async (id) => {
  const [rows] = await connection.execute(
    `SELECT * FROM teste_B_23_1
    WHERE id = ?`,
    [id]
  );
  return rows;
};

const add = async (name, cartoon) => {
  const [
    row,
  ] = await connection.execute(
    'INSERT INTO teste_B_23_1 (name, cartoon) VALUES (?, ?)',
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
  await connection.execute(
    `UPDATE teste_B_23_1 
      SET name = ?, cartoon = ?
      WHERE id = ?'`,
    [name, cartoon, id]
  );
  const result = { id, name, cartoon };

  return result;
};

const exclude = async (id) => {
  connection.execute(
    `DELETE FROM teste_B_23_1 
    WHERE id = ?`,
    [id]
  );
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  exclude,
};

// const db = require('./db'); // Arquivo "fictício" que representa a conexão com o banco

// async function getUser (username) {
// 	return db.findOne({ username })
// 	.then(result => result || null);
// }

// Exemplo de como utilizar o model
// const readline = require('readline-sync');
// const userModel = require('./userModel');

// async function start() {
// 	const username = readline.question('Digite seu nome de usuário');
// 	const user = await userModel.getUser(username);

// 	if (!user) {
// 		return console.log('Usuário não encontrado');
// 	}

// 	console.log('Aqui estão os dados do usuário:');
// 	console.log(user);
// }

// start();

//Utilizando em um middleware

// const userModel = require('./userModel');

// function getUserMiddleware (req, res, next) {
// 	const { username } = req.body;

// 	try {
// 		const user = await userModel.getUser(username);

// 		if (!user) {
// 			return res.status(404).json({ message: 'user não encontrado' });
// 		}

// 		return res.status(200).json(user);
// 	}catch(e){
// 		res.status(500).json({message: `Algo deu errado :(`});
// 	}
// }