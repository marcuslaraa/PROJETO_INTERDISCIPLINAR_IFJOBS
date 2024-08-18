import { stringParaData, verificaFormatoData } from '../../utils/DataUtil'

export class Usuario {
  id: number
  nome: string
  email: string
  cpf: string
  cidade: string
  telefone: string
  dataNascimento: Date

  constructor(id: number, nome: string, email: string, cpf: string, cidade: string, dataNascimento: Date, telefone: string) {
    this.id = id || 0
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.cidade = cidade
    this.dataNascimento = dataNascimento
    this.telefone = telefone

    this.validate()
  }
  validate(): void {
    if (!this.nome) throw new Error('Nome não informado')
    if (!this.email) throw new Error('Email não informado')
    if (!this.cpf) throw new Error('Cpf não informada')
    if (!this.cidade) throw new Error('Cidade não informada')
    if (!this.telefone) throw new Error('Telefone não informado')
    if (!this.dataNascimento) throw new Error('Data de nascimento não informada')
  }

}