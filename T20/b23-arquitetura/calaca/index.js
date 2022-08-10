const express = require('express');
const router = require('./routers/index');
const rescue = require('express-rescue');
// const helmet = require("helmet");
// const morgan = require("morgan");

const app = express();

app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));
app.use('/characters', rescue(router.charactersRouter))

app.listen(process.env.APP_PORT, () => {
  console.log(`Running on ${process.env.APP_PORT}`);
});