/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("players", table => {
    table.increments("id").primary();
    table.string("nombre");
    table.string("apodo");
    table.string("numero");
    table.string("posiciones");
    table.integer("ataque");
    table.integer("defensa");
});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("players");
};
