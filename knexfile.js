const { loadEnvConfig } = require('@next/env')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  client: 'sqlite3', // or 'better-sqlite3'
  useNullAsDefault: true,
  connection: {
    filename: "./mydb.sqlite"
  },
  migrations: {
    directory: './knex/migrations',
  },
  seeds: {
    directory: './knex/seeds',
  },
}