module.exports = {
    client: "sqlite3",
    connection: {
        filename: "./data/database.db3"
    },
    useNullAsDefault: true,
    pool: {
    afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done)
    },
    },
    migrations: {
    directory: "./data/migrations",
    },
    seeds: {
    directory: "./data/seeds",
    },
}