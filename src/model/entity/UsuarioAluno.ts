
import { Usuario } from './Usuario'

export class UsuarioAluno extends Usuario {
  matricula?: string
  curso?: string
  periodo?: number


  constructor(id: number, nome: string, email: string, cpf: string, cidade: string, dataNascimento: Date, telefone: string, matricula?: string, curso?: string, periodo?: number,) {
    super(id, nome, email, cpf, cidade, dataNascimento, telefone)

    this.matricula = matricula
    this.curso = curso
    this.periodo = periodo
  }

  validate(): void {
    super.validate()
    if (this.matricula) {
      if (!this.curso) throw new Error('Curso não informado')
      if (!this.periodo || this.periodo <= 0) throw new Error('Período inválido ou não informado')
    }
  }

}