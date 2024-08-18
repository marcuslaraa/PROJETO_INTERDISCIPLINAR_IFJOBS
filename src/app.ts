import express from 'express'
import { atualizarUsuarioPorId, consultarUsuarioPorId, criarUsuario, deletarUsuarioPorId, listarUsuarios } from './controller/UsuarioController'
import { atualizarExperienciaPorId, consultarExperienciaPorId, criarExperiencia, deletarExperienciaPorId, listarExperiencias } from './controller/ExperienciaProfissionalController'
import { atualizarCursoPorId, consultarCursoPorId, criarCurso, deletarCursoPorId, listarCursos } from './controller/CursoController'

const app = express()
const PORT = 3000

app.use(express.json())

app.post('/usuario', criarUsuario)
app.get('/usuario/:id', consultarUsuarioPorId)
app.delete('/usuario/:id', deletarUsuarioPorId)
app.put('/usuario/:id', atualizarUsuarioPorId)
app.get('/usuario/', listarUsuarios)

app.post('/experiencia', criarExperiencia)
app.get('/experiencia/:id', consultarExperienciaPorId)
app.delete('/experiencia/:id', deletarExperienciaPorId)
app.put('/experiencia/:id', atualizarExperienciaPorId)
app.get('/experiencia/', listarExperiencias)

app.post('/curso', criarCurso)
app.get('/curso/:id', consultarCursoPorId)
app.delete('/curso/:id', deletarCursoPorId)
app.put('/curso/:id', atualizarCursoPorId)
app.get('/curso/', listarCursos)

app.listen(PORT, () => { console.log('API rodando na porta 3000') })
