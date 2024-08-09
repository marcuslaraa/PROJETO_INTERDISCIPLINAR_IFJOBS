import { ExperienciaProfissional } from '../model/ExperienciaProfissional'
import { Usuario } from '../model/Usuario'
import { ExperienciaProfissionalRepository } from '../repository/ExperienciaProfissionalRepository'
import { UsuarioRepository } from '../repository/UsuarioRepository'

export class UsuarioService {
  usuarioRepository = new UsuarioRepository()
  experienciaProfissionalRepository = new ExperienciaProfissionalRepository()

  async insertUser(usuario: Usuario) {
   const {id, nome, endereco, cpf, cep, telefone, expProfissional} = usuario


   const criaEValidaExpProfissional = new ExperienciaProfissional(expProfissional.id, expProfissional.cargo, expProfissional.dataInicial, expProfissional.dataFinal, expProfissional.empresa)

   const inserirExpProfissional = await this.experienciaProfissionalRepository.insertExpProfissional(criaEValidaExpProfissional)
   console.log(inserirExpProfissional)

   const criaEValidaUsuario: Usuario = new Usuario(id,nome,endereco,cep,telefone,cpf, expProfissional)
   const inserirUsuario = await this.usuarioRepository.insertUser(criaEValidaUsuario)

   return inserirUsuario
  }
}