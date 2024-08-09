
import { Usuario } from './Usuario'

export class CandidatoAluno extends Usuario {
  matricula: number
  id_usuario: number

  constructor(matricula: number, id_usuario: number, name: string, endereco: string, cep: string,telefone: string, cpf: string ) {
    super(name, endereco, cep, telefone, cpf )

    this.matricula = matricula
    this.id_usuario = id_usuario
}

}