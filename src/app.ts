import express from 'express'
import { UsuarioRepository } from './repository/UsuarioRepository'
import { CandidatoAlunoRepository } from './repository/CandidatoAlunoRepository'
import { ExperienciaProfissionalRepository } from './repository/ExperienciaProfissionalRepository'
import { criarUsuario } from './controller/UsuarioController'

const cria = new UsuarioRepository()
const cria2 = new CandidatoAlunoRepository()
const cria3 = new ExperienciaProfissionalRepository()

cria.createTable()
cria2.createTable()
cria3.createTable()

const app = express()
const PORT = 3000

app.use(express.json())

app.post('/api/usuario', criarUsuario)

app.listen(PORT, () => {console.log('API rodando na porta 3000')})
