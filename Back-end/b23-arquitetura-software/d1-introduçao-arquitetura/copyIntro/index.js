const express = require('express');
const router = require('./routers/characterRouter');
const rescue = require('express-rescue');
const helmet = require("helmet");
const morgan = require("morgan");


const app = express();
const PORT = 3008;

app.use(express.json());
app.use(helmet()); //para segurança
app.use(morgan("common"));
app.use('/characters', rescue(router))

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}!`);
});