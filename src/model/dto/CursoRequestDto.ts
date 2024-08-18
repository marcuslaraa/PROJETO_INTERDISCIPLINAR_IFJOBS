export class CursoRequestDto {
  nome: string
  duracaoMeses: number
  usuarioId: number
  nivelAcademico: string

  constructor(nome: string, duracaoMeses: number, usuarioId: number, nivelAcademico: string) {
    this.nome = nome
    this.duracaoMeses = duracaoMeses
    this.usuarioId = usuarioId
    this.nivelAcademico = nivelAcademico

  }
}