import  Player  from '../../models/player';
const Knex = require('knex');
const knexConfig = require('../../knex/knexfile');

const { Model } = require('objection');
console.log(Player)
// Initialize knex.
const knex = Knex(knexConfig);
Model.knex(knex);

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "DELETE") {
    const numDeleted = await Player.query().deleteById(id);
    res.json({num: numDeleted});
  }
}