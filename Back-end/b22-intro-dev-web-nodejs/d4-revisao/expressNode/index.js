const express = require('express');
require('dotenv/config');
const fs = require('./helpers');

const { PORT } = process.env; 

// get, post, put, patch, delete

const app = express();

app.use(express.json()); 

app.get('/users', async (req, res) => {
  try {
    const users = await fs.read();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err.message);
  }
}); 

app.post('/users', async (req, res) => {
  try {
    const { name, estado } = req.body;

    const newUser = {
      name,
      estado,
    };

    const currUsers = await fs.read();

    newUser.id = currUsers.length + 1;

    const updUsers = [...currUsers, newUser];

    await fs.write(updUsers);

    return res.status(201).json(newUser);
  } catch (err) {
    console.log(e.message)
  }
})

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`))
 