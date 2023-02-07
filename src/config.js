import { config } from "dotenv";

config()
//con esto ya se estan leyendo las variables de entorno

export const PORT = process.env.PORT || 3000

export const BD_USER = process.env.BD_USER || 'root'
export const BD_PASSWORD = process.env.BD_PASSWORD || 'root'
export const BD_HOST = process.env.BD_HOST || 'localhost'
export const BD_DATABASE = process.env.BD_DATABASE || 'companydb'
export const DB_PORT = process.env.DB_PORT || 3306

