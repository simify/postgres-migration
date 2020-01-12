module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "postgres",
      host: "192.168.178.38",
      user: "postgres",
      password: "secret"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
