require('dotenv').config()
const postgres = require("postgres")

console.log(process.env.HOST)
const sql = postgres({
    host: process.env.HOST,
    port: process.env.DB_PORT,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: false,
    connection           : {
        application_name   : 'postgres.js', // Default application_name
      }
})
module.exports = sql;