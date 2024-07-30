import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const PORT = 3000

app.use(express.json())

app.listen(PORT, () => {console.log('API rodando na porta 3000')})
