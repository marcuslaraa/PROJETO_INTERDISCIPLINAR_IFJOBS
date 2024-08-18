import { ExperienciaProfissional } from '../model/entity/ExperienciaProfissional'
import { UsuarioAluno } from '../model/entity/UsuarioAluno'
import { ExperienciaProfissionalRepository } from '../repository/ExperienciaProfissionalRepository'
import { stringParaData, verificaFormatoData } from '../utils/DataUtil'

export class ExperienciaProfissionalService {
  experienciaProfissionalRepository = new ExperienciaProfissionalRepository()

  async inserirExperiencia(novaXp: any) {

    const criarExperiencia: ExperienciaProfissional = new ExperienciaProfissional(novaXp.id, novaXp.usuarioId, novaXp.dataInicio, novaXp.dataSaida, novaXp.cargo, novaXp.empresa)
    const inserirExperiencia = await this.experienciaProfissionalRepository.inserirExperiencia(criarExperiencia)

    return inserirExperiencia
  }

  async consultarExperienciaPorId(id: any): Promise<ExperienciaProfissional> {
    const consultaUsuario = await this.experienciaProfissionalRepository.consultarExperienciaPorId(id)
    if (!consultaUsuario) throw new Error('Não existe experiencia com esse Id')
    return consultaUsuario
  }

  async deletarExperienciaPorId(id: any): Promise<ExperienciaProfissional> {
    const consultarExperiencia = await this.experienciaProfissionalRepository.consultarExperienciaPorId(id)
    if (!consultarExperiencia) throw new Error('Não existe experiencia com esse id')
    const deletarExperiencia = await this.experienciaProfissionalRepository.deletarExperienciaPorId(id)
    return deletarExperiencia
  }

  async atualizarExperienciaPorId(novaXp: any, id: any): Promise<ExperienciaProfissional | null> {
    const existeUsuario = await this.experienciaProfissionalRepository.consultarExperienciaPorId(id)
    if (!existeUsuario) throw new Error('Não existe experiencia com este id.')


    let dataNascimentoFormatted

    if (verificaFormatoData(novaXp.dataNascimento)) {
      dataNascimentoFormatted = stringParaData(novaXp.dataNascimento)
    } else {
      throw new Error('Datas não estão no formato correto.')
    }
    const experiencia = new ExperienciaProfissional(novaXp.id, novaXp.usuarioId, novaXp.dataInicio, novaXp.dataSaida, novaXp.cargo, novaXp.empresa)
    const novoUsuarioAdicionado = await this.experienciaProfissionalRepository.atualizarExperienciaPorId(experiencia, id)
    return novoUsuarioAdicionado

  }

  async listarUsuarios(): Promise<ExperienciaProfissional | null> {
    const consultarLista = await this.experienciaProfissionalRepository.listarExperiencias()
    if (!consultarLista) throw new Error('Não existem usuarios.')
    return consultarLista
  }
}

