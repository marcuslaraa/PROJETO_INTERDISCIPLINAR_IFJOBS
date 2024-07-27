import { ExperienciaProfissional } from './ExperienciaProfissional'

export class Usuario {
  id_usuario: number
  name: string
  endereco: string
  cep: string
  telefone: string
  cpf: string
  exp_profisional: ExperienciaProfissional[]

  constructor(id_usuario: number, name: string, endereco: string, cep: string,telefone: string, cpf: string, exp_profisional: ExperienciaProfissional[]) {

    this.id_usuario = id_usuario || 0
    this.name = name
    this.endereco = endereco
    this.cep = cep
    this.telefone = telefone
    this.cpf = cpf
    this.exp_profisional = exp_profisional
  }

}