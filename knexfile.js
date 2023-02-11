const { loadEnvConfig } = require('@next/env')

const dev = process.env.NODE_ENV !== 'production'
const path = require('path');
console.log(path.resolve(__dirname, '../../../'));
module.exports = {
  client: 'sqlite3', // or 'better-sqlite3'
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, '../../../mydb.sqlite')
  },
  migrations: {
    directory: './knex/migrations',
  },
  seeds: {
    directory: './knex/seeds',
  },
}