export class ExperienciaProfissional {
  id: number
  usuarioId: number
  dataInicio: Date
  dataSaida: Date
  cargo: string
  empresa: string

  constructor(id: number, usuarioId: number, dataInicio: Date, dataSaida: Date, cargo: string, empresa: string) {
    this.id = id || 0
    this.usuarioId = usuarioId
    this.dataInicio = dataInicio
    this.dataSaida = dataSaida || undefined
    this.cargo = cargo
    this.empresa = empresa

    this.validade()
  }

  validade() {
    if (!this.usuarioId) throw new Error('Id do usuario não informado.')
    if (!this.dataInicio) throw new Error('Data de inicio não informada.')
    if (!this.cargo) throw new Error('Cargo não informado.')
    if (!this.empresa) throw new Error('Empresa não informado.')
  }
}