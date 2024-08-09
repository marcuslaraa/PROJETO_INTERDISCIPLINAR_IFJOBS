export class ExperienciaProfissional {
  id_exp_profissoinal: number
  cargo: string
  startDate: Date
  endDate: Date
  empresa: string

  constructor (id_exp_profissoinal: number,cargo: string, startDate: Date, endDate: Date, empresa: string ){
    this.id_exp_profissoinal = id_exp_profissoinal || 0
    this.cargo = cargo
    this.startDate = startDate
    this.endDate = endDate || undefined
    this.empresa = empresa
  }
}