import mysql, { Connection } from "mysql2"
import dotenv from 'dotenv'

dotenv.config()

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
}

const mysqlConnection: Connection = mysql.createConnection(dbConfig)

mysqlConnection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err)
    throw err
  }

  console.log("Conexão bem sucedida com o banco de dados MySQL")
})

export const executaComandoSQL = (
  query: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valores: any[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(query, valores, (err, resultado) => {
      if (err) {
        console.error("Erro ao executar a query", err)
        reject(err)
        return
      }
      resolve(resultado)
    })
  })
}
