import { Usuario } from '../model/Usuario'
import { UsuarioRepository } from '../repository/UsuarioRepository'

export class UsuarioService {
  usuarioRepository = new UsuarioRepository()

  async insertUser(usuario: Usuario) {
   const {nome, endereco, cpf, cep, telefone} = usuario

   const criaEValidaUsuario: Usuario = new Usuario(nome,endereco,cep,telefone,cpf)
   const inserirUsuario = await this.usuarioRepository.insertUser(criaEValidaUsuario)
   console.log(inserirUsuario)
   return usuario
  }
}