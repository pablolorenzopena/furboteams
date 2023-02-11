import  Player  from '../../models/player';
const Knex = require('knex');
const knexConfig = require('../../knexfile');

const { Model } = require('objection');
console.log(Player)
// Initialize knex.
const knex = Knex(knexConfig);
Model.knex(knex);

export default async function handler(req, res) {
  const players = await Player.query();
  console.log(players);
  res.status(200).json({ players });
}
