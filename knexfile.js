module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "postgres",
      host: "0.0.0.0",
      port: "5432",
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
