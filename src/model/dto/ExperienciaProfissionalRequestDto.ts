export class ExperienciaProfissionalRequestDto {
  usuarioId: number
  dataInicio: Date
  dataSaida: Date
  cargo: string
  empresa: string

  constructor(usuarioId: number, dataInicio: Date, dataSaida: Date, cargo: string, empresa: string) {
    this.usuarioId = usuarioId
    this.dataInicio = dataInicio
    this.dataSaida = dataSaida || undefined
    this.cargo = cargo
    this.empresa = empresa
  }
}