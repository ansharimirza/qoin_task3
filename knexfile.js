require('dotenv').config();

module.exports = {
    local: {
        client: "mysql2",
        connection: {
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            // port: process.env.DB_PORT,
            host: process.env.DB_HOST
        },
        migrations: {
            directory: './src/frameworks/database/migrations'
        },
        seeds: {
            directory: './src/frameworks/database/seeds'
        },
    }
};