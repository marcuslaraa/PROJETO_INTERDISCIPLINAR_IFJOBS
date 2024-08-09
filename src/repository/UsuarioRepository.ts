import { executaComandoSQL } from '../database/mysql'
import { Usuario } from '../model/Usuario'

export class UsuarioRepository {

    // constructor() {
    //     this.createTable();
    // }

     async createTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS candidatos.usuario (
                _id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(50) NOT NULL,
                endereco VARCHAR(100) NOT NULL,
                cep VARCHAR(20) NOT NULL,
                telefone VARCHAR(15) NOT NULL,
                cpf VARCHAR(15) NOT NULL
            )`;
        try {
            const resultado = await executaComandoSQL(query, []);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertUser(novoUsuario: Usuario) {
        const query = `
            INSERT INTO candidatos.usuario (nome, endereco, cep, telefone, cpf)
            VALUES (?, ?, ?, ?, ?)`;
        const values = [novoUsuario.nome, novoUsuario.endereco, novoUsuario.cep, novoUsuario.telefone, novoUsuario.cpf];
        try {
            const resultado = await executaComandoSQL(query, values);
            console.log('Usuário inserido com sucesso:', resultado);
            return resultado
        } catch (err) {
            console.error('Erro ao inserir o usuário:', err);
        }
    }


}