require('dotenv/config')

const database = {
    client: process.env.DB_CLIENT,
    connection: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT),
    }
}

module.exports = { database }