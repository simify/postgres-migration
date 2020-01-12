exports.up = function(knex) {
  return knex.schema
    .raw("CREATE SCHEMA IF NOT EXISTS api")
    .raw("CREATE SCHEMA IF NOT EXISTS protected");
};

exports.down = function(knex) {
  return knex.schema
    .raw("DROP EXTENSION IF EXISTS 'pgcrypto'")
    .raw("DROP SCHEMA IF EXISTS protected");
};
