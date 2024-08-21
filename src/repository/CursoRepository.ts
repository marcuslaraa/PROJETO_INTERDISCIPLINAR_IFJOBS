import { executaComandoSQL } from "../database/mysql"
import { Curso } from '../model/entity/Curso'

export class CursoRepository {
  constructor() {
    this.createTable()
  }

  async createTable() {
    const query = `
    CREATE TABLE IF NOT EXISTS empregos.curso (
    _id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    duracao_meses INT NOT NULL,
    usuarioId INT NOT NULL,
    nivel_academico VARCHAR(20),
    CONSTRAINT fk_usuario_curso FOREIGN KEY (usuarioId) REFERENCES empregos.usuario(_id)
);
`
    try {
      const resultado = await executaComandoSQL(query, [])
      console.log("Query executada com sucesso:", resultado)
    } catch (err) {
      console.error("Error")
    }
  }

  async inserirCurso(novoCurso: Curso): Promise<Curso> {
    const query = `
        INSERT INTO empregos.curso (nome, duracao_meses, usuarioId, nivel_academico )
        VALUES (?, ?, ?, ?)`

    const values = [novoCurso.nome, novoCurso.duracaoMeses, novoCurso.usuarioId, novoCurso.nivelAcademico]
    try {
      const resultado = await executaComandoSQL(query, values)
      novoCurso.id = resultado.insertId
      return new Promise<Curso>((resolve) => {
        resolve(novoCurso)
      })
    } catch (err) {
      console.error("Erro ao inserir curso:", err)
      throw err
    }
  }

  async consultarCursoPorId(id: number): Promise<Curso | null> {
    const query = 'SELECT * FROM empregos.curso WHERE _id = ?'
    try {
      const resultado = await executaComandoSQL(query, [id])
      if (resultado.length === 0) {
        return null
      }
      return new Promise<Curso>((resolve) => {
        resolve(resultado)
      })
    } catch (err) {
      console.error('Falha na busca.')
      throw err
    }
  }

  async deletarCursoPorId(id: number): Promise<Curso> {
    const query = 'DELETE FROM empregos.curso WHERE _id = ?'
    try {
      const resultado = await executaComandoSQL(query, [id])
      return new Promise<Curso>((resolve) => {
        resolve(resultado)
      })
    } catch (err) {
      console.error('Falha ao deletar.')
      throw err
    }
  }

  async atualizarCursoPorId(novoCurso: Curso, id: number): Promise<Curso> {
    const query = 'UPDATE empregos.curso SET nome = ?, duracao_meses = ?, usuarioId = ?, nivel_academico = ?  WHERE _id = ?'
    try {
      const resultado = await executaComandoSQL(query, [novoCurso.nome, novoCurso.duracaoMeses, novoCurso.usuarioId, novoCurso.nivelAcademico, id])
      return new Promise<Curso>((resolve) => {
        resolve(resultado)
      })
    } catch (err) {
      console.error('Falha ao atualizar.')
      throw err
    }
  }

  async listarCursos(): Promise<Curso | null> {
    const query = 'SELECT * FROM empregos.curso'
    try {
      const resultado = await executaComandoSQL(query)
      if (resultado.length === 0) {
        return null
      }
      return new Promise<Curso>((resolve) => {
        resolve(resultado)
      })
    } catch (err) {
      console.error('Falha na busca.')
      throw err
    }
  }
}
