const express = require('express');
const router = require('./routers/characterRouter');
const rescue = require('express-rescue');
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(helmet()); //para segurança
app.use(morgan("common"));
app.use('/characters', rescue(router))

app.listen(process.env.APP_PORT, () => {
  console.log('Ouvindo a porta 3000!');
});