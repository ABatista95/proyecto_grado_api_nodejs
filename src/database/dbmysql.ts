import mysql from 'mysql2/promise';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "../config";

export async function connectMysql() {
  console.log("Pru: ",{ DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME });

  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    port: Number(DB_PORT),
    database: DB_DATABASE,
  });

  return connection;
}