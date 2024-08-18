import { executaComandoSQL } from "../database/mysql"
import { ExperienciaProfissional } from '../model/entity/ExperienciaProfissional'


export class ExperienciaProfissionalRepository {
    constructor() {
        this.createTable()
    }

    async createTable() {
        const query = `
  CREATE TABLE IF NOT EXISTS empregos.exp_profissional (
    _id INT AUTO_INCREMENT PRIMARY KEY,
    usuarioId INT NOT NULL,
    data_inicio DATE NOT NULL,
    data_final DATE,
    cargo VARCHAR(30) NOT NULL,
    empresa VARCHAR(15),
    CONSTRAINT fk_usuario FOREIGN KEY (usuarioId) REFERENCES empregos.usuario(_id)
);
`
        try {
            const resultado = await executaComandoSQL(query, [])
            console.log("Query executada com sucesso:", resultado)
        } catch (err) {
            console.error("Error")
        }
    }

    async inserirExperiencia(novaXp: ExperienciaProfissional): Promise<ExperienciaProfissional> {
        const query = `
        INSERT INTO empregos.exp_profissional (usuarioId, data_inicio, data_final, cargo, empresa)
        VALUES (?, ?, ?, ?, ?)`

        const values = [novaXp.usuarioId, novaXp.dataInicio, novaXp?.dataSaida, novaXp.cargo, novaXp.empresa]
        try {
            const resultado = await executaComandoSQL(query, values)
            novaXp.id = resultado.insertId
            return new Promise<ExperienciaProfissional>((resolve) => {
                resolve(novaXp)
            })
        } catch (err) {
            console.error("Erro ao inserir Usuario:", err)
            throw err
        }
    }

    async consultarExperienciaPorId(id: number): Promise<ExperienciaProfissional | null> {
        const query = 'SELECT * FROM empregos.exp_profissional WHERE _id = ?'
        try {
            const resultado = await executaComandoSQL(query, [id])
            if (resultado.length === 0) {
                return null
            }
            return new Promise<ExperienciaProfissional>((resolve) => {
                resolve(resultado)
            })
        } catch (err) {
            console.error('Falha na busca.')
            throw err
        }
    }

    async deletarExperienciaPorId(id: number): Promise<ExperienciaProfissional> {
        const query = 'DELETE FROM empregos.exp_profissional WHERE _id = ?'
        try {
            const resultado = await executaComandoSQL(query, [id])
            return new Promise<ExperienciaProfissional>((resolve) => {
                resolve(resultado)
            })
        } catch (err) {
            console.error('Falha ao deletar.')
            throw err
        }
    }

    async atualizarExperienciaPorId(novaXp: ExperienciaProfissional, id: number): Promise<ExperienciaProfissional> {
        const query = 'UPDATE empregos.exp_profissional SET usuarioId = ?, data_inicio = ?, data_final = ?, cargo = ?, empresa = ? WHERE _id = ?'
        try {
            const resultado = await executaComandoSQL(query, [novaXp.usuarioId, novaXp.dataInicio, novaXp?.dataSaida, novaXp.cargo, novaXp.empresa, id])
            return new Promise<ExperienciaProfissional>((resolve) => {
                resolve(resultado)
            })
        } catch (err) {
            console.error('Falha ao atualizar.')
            throw err
        }
    }

    async listarExperiencias(): Promise<ExperienciaProfissional | null> {
        const query = 'SELECT * FROM empregos.exp_profissional'
        try {
            const resultado = await executaComandoSQL(query)
            if (resultado.length === 0) {
                return null
            }
            return new Promise<ExperienciaProfissional>((resolve) => {
                resolve(resultado)
            })
        } catch (err) {
            console.error('Falha na busca.')
            throw err
        }
    }
}
