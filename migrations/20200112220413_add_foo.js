exports.up = function(knex) {
  return knex.schema.withSchema("api").createTable("foo", function(table) {
    table.increments();
    table.string("name");
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.withSchema("api").dropTableIfExists("foo");
};
