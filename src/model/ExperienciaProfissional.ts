export class ExperienciaProfissional {
  id: number
  cargo: string
  dataInicial: Date
  dataFinal: Date
  empresa: string

  constructor (id: number, cargo: string, dataInicial: Date, dataFinal: Date, empresa: string ){
    this.id = id || 0
    this.cargo = cargo
    this.dataInicial = dataInicial
    this.dataFinal = dataFinal || undefined
    this.empresa = empresa

    this.validade()
  }

  validade() {
    if (!this.cargo) throw new Error('Cargo não informado')
    if (!this.dataInicial) throw new Error('Data inicial não informada')
    if (!this.empresa) throw new Error('Empresa não informado')
  }
}