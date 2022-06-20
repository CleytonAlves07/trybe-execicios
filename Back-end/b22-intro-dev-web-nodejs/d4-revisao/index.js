const express = require('express');
const utils = require('./utils');

const app = express();

//express.json() e bodyParser são a mesma coisa sendo o primeiro o mais atual

app.use(express.json());

// get = buscar arquivos no server
// post = inserir arquivos
// put = atualizar
// patch = atualizar partes de uma entidade
// delete = deletar dados 

app.get('/spell', async (_req, res) => {
  try {
    const mySpells = await utils.leitura();
    return res.status(200).json(mySpells)
  } catch (error) {
    console.log(error.message)
   }
}); 

app.listen(3000, () => console.log('rodando na porta 3000')) 