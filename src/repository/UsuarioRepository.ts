import { executaComandoSQL } from '../database/mysql'

export class UsuarioRepository {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS candidatos.conta (
                id INT AUTO_INCREMENT PRIMARY KEY,
                numeroConta VARCHAR(20) NOT NULL,
                saldo DECIMAL(10,2) NOT NULL,
                tipoConta BIGINT NOT NULL
            )`;
        try {
            const resultado = await executaComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }
}