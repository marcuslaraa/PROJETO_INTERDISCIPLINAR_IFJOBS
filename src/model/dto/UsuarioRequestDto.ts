import { stringParaData, verificaFormatoData } from '../../utils/DataUtil'

export class UsuarioRequestDto {
  nome: string
  email: string
  cpf: string
  cidade: string
  telefone: string
  dataNascimento: Date
  matricula?: string
  curso?: string
  periodo?: number


  constructor(nome: string, email: string, cpf: string, cidade: string, telefone: string,dataNascimento: Date, matricula?: string, curso?: string, periodo?: number) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.cidade = cidade
    this.telefone = telefone
    this.dataNascimento = dataNascimento
    this.matricula = matricula
    this.curso = curso
    this.periodo = periodo
  }

}