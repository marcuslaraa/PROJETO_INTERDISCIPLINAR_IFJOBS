import { executaComandoSQL } from '../database/mysql'
import { ExperienciaProfissional } from '../model/ExperienciaProfissional'

export class ExperienciaProfissionalRepository {
//   constructor() {
//     this.createTable()
//   }
  async createTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS candidatos.exp_profissional (
            id_exp_profissional INT AUTO_INCREMENT PRIMARY KEY,
            cargo VARCHAR(20) NOT NULL,
            data_inicial VARCHAR(20) NOT NULL,
            data_final VARCHAR(20),
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

async insertExpProfissional(novoExpProfissional: ExperienciaProfissional): Promise<ExperienciaProfissional> {
    const query = `
        INSERT INTO candidatos.exp_profissional (cargo, data_inicial, data_final, empresa)
        VALUES (?, ?, ?, ?)`;
    const values = [novoExpProfissional.cargo, novoExpProfissional.dataInicial,novoExpProfissional.dataFinal, novoExpProfissional.empresa];
    try {
        const resultado = await executaComandoSQL(query, values);
        novoExpProfissional.id = resultado.insertId
        return new Promise<ExperienciaProfissional>((resolve) => {
            resolve(novoExpProfissional)
        })
    } catch (err) {
        console.error('Erro ao inserir o usuário:', err);
        throw err
    }
}

}