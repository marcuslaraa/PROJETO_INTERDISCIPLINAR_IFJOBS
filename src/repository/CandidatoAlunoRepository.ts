import { executaComandoSQL } from '../database/mysql'

export class CandidatoAlunoRepository {
  constructor() {
    this.createTable()
  }

  async createTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS candidatos.usuario_aluno (
            _id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(50) NOT NULL,
            endereco VARCHAR(20) NOT NULL,
            cep VARCHAR(20) NOT NULL,
            telefone VARCHAR(15) NOT NULL,
            cpf VARCHAR(15) NOT NULL,
            matricula VARCHAR(20)
        )`;
    try {
        const resultado = await executaComandoSQL(query, []);
        console.log('Query executada com sucesso:', resultado);
    } catch (err) {
        console.error('Error');
    }
}
}