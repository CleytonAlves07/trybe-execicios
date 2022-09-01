require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.MSQL_USERNAME,
    "password": process.env.MSQL_PASSWORD,
    "database": process.env.MSQL_DB,
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MSQL_USERNAME,
    "password": process.env.MSQL_PASSWORD,
    "database": process.env.MSQL_DB,
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MSQL_USERNAME,
    "password": process.env.MSQL_PASSWORD,
    "database": process.env.MSQL_DB,
    "host": process.env.HOSTNAME,
    "dialect": "mysql"
  }
}
