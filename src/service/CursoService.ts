import { Curso } from '../model/entity/Curso'
import { CursoRepository } from '../repository/CursoRepository'

export class CursoService {
  cursoService = new CursoRepository()

  async inserirCurso(novoCurso: Curso): Promise<Curso> {

    const criarCurso: Curso = new Curso(novoCurso.id, novoCurso.nome, novoCurso.duracaoMeses, novoCurso.usuarioId, novoCurso.nivelAcademico)
    const inserirCurso = await this.cursoService.inserirCurso(criarCurso)

    return inserirCurso
  }

  async consultarCursoPorId(id: any): Promise<Curso> {
    const consultaCurso = await this.cursoService.consultarCursoPorId(id)
    if (!consultaCurso) throw new Error('Não existe curso com esse Id')
    return consultaCurso
  }

  async deletarCursoPorId(id: any): Promise<Curso> {
    const consultarUsuario = await this.cursoService.consultarCursoPorId(id)
    if (!consultarUsuario) throw new Error('Não existe curso com esse id')
    const deletarCurso = await this.cursoService.deletarCursoPorId(id)
    return deletarCurso
  }

  async atualizarCursoPorId(novoCurso: any, id: any): Promise<Curso | null> {
    const existeUsuario = await this.cursoService.consultarCursoPorId(id)
    if (!existeUsuario) throw new Error('Não existe curso com este id.')

    const curso = new Curso(novoCurso.id, novoCurso.nome, novoCurso.duracaoMeses, novoCurso.usuarioId, novoCurso.nivelAcademico)
    const novoCursoAdicionado = await this.cursoService.atualizarCursoPorId(curso, id)
    return novoCursoAdicionado

  }

  async listarCursos(): Promise<Curso | null> {
    const consultarLista = await this.cursoService.listarCursos()
    if (!consultarLista) throw new Error('Não existem cursos.')
    return consultarLista
  }
}

