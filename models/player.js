'use strict';

const { Model } = require('objection');

class Players extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'players';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nombre', 'apodo', 'nombre', 'posiciones','ataque', 'defensa'],
      properties: {
        id: { type: 'integer' },
        nombre: { type: 'string', minLength: 1, maxLength: 255 },
        apodo: { type: 'string', minLength: 1, maxLength: 255 },
        posiciones: { type: 'string', minLength: 1, maxLength: 500 },
        numero: { type: 'number' },
        ataque: { type: 'number' },
        defensa: { type: 'number' }
      }
    };
  }
  
}
export default Players;