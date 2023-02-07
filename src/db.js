import { createPool } from "mysql2/promise";
import {  
    BD_USER,
    BD_HOST,
    BD_DATABASE,
    DB_PORT
} from "./config.js";

export const pool=createPool({
    host: BD_HOST,
    user: BD_USER,
    port: DB_PORT,
    database:BD_DATABASE
})

