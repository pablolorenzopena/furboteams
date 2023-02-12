const { loadEnvConfig } = require('@next/env')

const dev = process.env.NODE_ENV !== 'production'
const path = require('path');
console.log(path.resolve('./mydb.sqlite'));
module.exports = {
  client: 'sqlite3', // or 'better-sqlite3'
  useNullAsDefault: true,
  connection: {
    filename: path.resolve('./mydb.sqlite')
  },
  migrations: {
    directory: './knex/migrations',
  },
  seeds: {
    directory: './knex/seeds',
  },
}