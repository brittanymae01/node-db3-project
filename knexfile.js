// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "joins",
      user: "postgres",
      password: "password",
      host: "127.0.0.1"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
    // add the following
    // pool: {
    //   afterCreate: (conn, done) => {
    //     // runs after a connection is made to the sqlite engine
    //     conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
    //   }
    // }
  }
};
