import { UsuarioAluno } from '../model/entity/UsuarioAluno'
import { ExperienciaProfissionalRepository } from '../repository/ExperienciaProfissionalRepository'
import { UsuarioRepository } from '../repository/UsuarioRepository'
import { stringParaData, verificaFormatoData } from '../utils/DataUtil'

export class UsuarioService {
  usuarioRepository = new UsuarioRepository()
  experienciaProfissionalRepository = new ExperienciaProfissionalRepository()

  async inserirUsuario(novoUsuario: any) {

    const existeEmail = await this.usuarioRepository.consultarUsuarioPorEmail(novoUsuario.email)
    if (existeEmail) throw new Error('Email informado já esta sendo usado por outro usuário.')

    let dataNascimentoFormatted

    if (verificaFormatoData(novoUsuario.dataNascimento)) {
      dataNascimentoFormatted = stringParaData(novoUsuario.dataNascimento)
    } else {
      throw new Error('Datas não estão no formato correto.')
    }

    const criarUsuario: UsuarioAluno = new UsuarioAluno(novoUsuario.id, novoUsuario.nome, novoUsuario.email, novoUsuario.cpf, novoUsuario.cidade, dataNascimentoFormatted, novoUsuario.telefone, novoUsuario?.matricula, novoUsuario?.curso, novoUsuario?.periodo)
    const inserirUsuario = await this.usuarioRepository.inserirUsuario(criarUsuario)

    return inserirUsuario
  }

  async consultarUsuarioPorId(id: any): Promise<UsuarioAluno> {
    const consultaUsuario = await this.usuarioRepository.consultarUsuarioPorId(id)
    if (!consultaUsuario) throw new Error('Não existe usuario com esse Id')
    return consultaUsuario
  }

  async deletarUsuarioPorId(id: any): Promise<UsuarioAluno> {
    const consultarUsuario = await this.usuarioRepository.consultarUsuarioPorId(id)
    if (!consultarUsuario) throw new Error('Não existe usuario com esse id')
    const deletarPessoa = await this.usuarioRepository.deletarUsuarioPorId(id)
    return deletarPessoa
  }

  async atualizarUsuarioPorId(novoUsuario: any, id: any): Promise<UsuarioAluno | null> {
    const existeUsuario = await this.usuarioRepository.consultarUsuarioPorId(id)
    if (!existeUsuario) throw new Error('Não existe usuario com este id.')


    let dataNascimentoFormatted

    if (verificaFormatoData(novoUsuario.dataNascimento)) {
      dataNascimentoFormatted = stringParaData(novoUsuario.dataNascimento)
    } else {
      throw new Error('Datas não estão no formato correto.')
    }
    const usuario = new UsuarioAluno(novoUsuario.id, novoUsuario.nome, novoUsuario.email, novoUsuario.cpf, novoUsuario.cidade, dataNascimentoFormatted, novoUsuario.telefone, novoUsuario?.matricula, novoUsuario?.curso, novoUsuario?.periodo)
    const novoUsuarioAdicionado = await this.usuarioRepository.atualizarUsuarioPorId(usuario, id)
    const existeEmailCadastrado = await this.usuarioRepository.consultarUsuarioPorEmail(novoUsuarioAdicionado.email)
    if (existeEmailCadastrado) throw new Error('Email informado já esta sendo usado por outro usuário.')
    return novoUsuarioAdicionado

  }

  async listarUsuarios(): Promise<UsuarioAluno | null> {
    const consultarLista = await this.usuarioRepository.listarUsuarios()
    if (!consultarLista) throw new Error('Não existem usuarios.')
    return consultarLista
  }
}

