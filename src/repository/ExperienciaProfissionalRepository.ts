import { executaComandoSQL } from '../database/mysql'

export class ExperienciaProfissionalRepository {
  constructor() {
    this.createTable()
  }
  async createTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS candidatos.exp_profissional (
            id_exp_profissional INT AUTO_INCREMENT PRIMARY KEY,
            cargo VARCHAR(20) NOT NULL,
            data_inicio Date NOT NULL,
            data_final Date NOT NULL,
            empresa VARCHAR(30) NOT NULL,
            id_usuario INT,
            CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES candidatos.usuario(_id)
        )`;
    try {
        const resultado = await executaComandoSQL(query, []);
        console.log('Query executada com sucesso:', resultado);
    } catch (err) {
        console.error('Error');
    }
}

}