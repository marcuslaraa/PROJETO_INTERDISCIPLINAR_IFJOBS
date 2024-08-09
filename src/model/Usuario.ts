import { ExperienciaProfissional } from './ExperienciaProfissional'


export class Usuario {
  id: number
  nome: string
  endereco: string
  cep: string
  telefone: string
  cpf: string
  expProfissional: ExperienciaProfissional

  constructor(id: number, nome: string, endereco: string, cep: string,telefone: string, cpf: string,  expProfissional: ExperienciaProfissional) {
    this.id = id || 0
    this.nome = nome
    this.endereco = endereco
    this.cep = cep
    this.telefone = telefone
    this.cpf = cpf
    this.expProfissional = expProfissional

    this.validade()
  }
  validade() {
    if (!this.nome) throw new Error('Nome não informado')
    if (!this.endereco) throw new Error('Endereco não informado')
    if (!this.cep) throw new Error('CEP não informado')
    if (!this.telefone) throw new Error('Telefone não informado')
    if (!this.cpf) throw new Error('CPF não informado')
  }

}