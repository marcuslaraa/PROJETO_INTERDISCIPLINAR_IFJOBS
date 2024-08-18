import { stringParaData, verificaFormatoData } from '../../utils/DataUtil'

export class UsuarioRequestDto {
  nome: string
  email: string
  cpf: string
  cidade: string
  telefone: string
  dataNascimento: Date

  constructor(nome: string, email: string, cpf: string, cidade: string, dataNascimento: Date, telefone: string) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.cidade = cidade
    this.dataNascimento = dataNascimento
    this.telefone = telefone
  }

}