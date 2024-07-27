import { ExperienciaProfissional } from './ExperienciaProfissional'
import { Usuario } from './Usuario'

export class CandidatoAluno extends Usuario {
  matricula: number

  constructor(matricula: number, id_usuario: number, name: string, endereco: string, cep: string,telefone: string, cpf: string, exp_profisional: ExperienciaProfissional[] ) {
    super(id_usuario, name, endereco, cep, telefone, cpf, exp_profisional )

    this.matricula = matricula
}

}