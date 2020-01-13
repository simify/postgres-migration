exports.up = function(knex) {
  return knex("foo")
    .withSchema("api")
    .insert({ name: "Foo" })
    .insert({ name: "Bar" })
    .insert({ name: "Baz" });
};

exports.down = function(knex) {};
