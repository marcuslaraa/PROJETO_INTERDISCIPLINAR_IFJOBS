export class Curso {
  id: number
  nome: string
  duracaoMeses: number
  usuarioId: number
  nivelAcademico: string

  constructor(id: number, nome: string, duracaoMeses: number, usuarioId: number, nivelAcademico: string) {
    this.id = id || 0
    this.nome = nome
    this.duracaoMeses = duracaoMeses
    this.usuarioId = usuarioId
    this.nivelAcademico = nivelAcademico

    this.validate()
  }
  validate(): void {
    if (!this.nome) throw new Error('Nome não informado.')
    if (!this.duracaoMeses) throw new Error('Duração não informado.')
    if (!this.usuarioId) throw new Error('Id do usuario não informado.')
    if (!this.nivelAcademico) throw new Error('Nivel acadêmico não informado.')
  }

}