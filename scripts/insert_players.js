'use strict';
import players from '../utils/datasets/players';
const Knex = require('knex');
const knexConfig = require('../knex/knexfile');

const { Model } = require('objection');
import  Player  from '../models/player';
console.log(Player)
// Initialize knex.
const knex = Knex(knexConfig);

// Bind all Models to the knex instance. You only
// need to do this once before you use any of
// your model classes.
Model.knex(knex);

async function main() {
  console.log(players);
  // Delete all persons from the db.
  const playerList = await Player.query();
  console.log(playerList);
  await Player.query().delete();
  for (const player of players) {
    await Player.query().insert({
      nombre: player.nombre,
      apodo: player.apodo,
      numero: player.id,
      posiciones: JSON.stringify(player.posiciones),
      ataque:  player.stats.attack,
      defensa: player.stats.deffense
    })
  }
  /*

  // Insert one row to the database.
  await Person.query().insert({
    firstName: 'Jennifer',
    lastName: 'Aniston',
  });

  // Read all rows from the db.
  const people = await Person.query();

  console.log(people); */
}


main()
  .then(() => knex.destroy())
  .catch((err) => {
    console.error(err);
    return knex.destroy();
  });