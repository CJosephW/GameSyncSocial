import 'dotenv/config'
import postgres from "postgres";

const sql = postgres({
    host: process.env.HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
     ssl: { rejectUnauthorized: false } 
  })
export default sql;