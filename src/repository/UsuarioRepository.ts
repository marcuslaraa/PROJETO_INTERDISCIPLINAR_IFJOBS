import { executaComandoSQL } from "../database/mysql"
import { Usuario } from "../model/entity/Usuario"
import { UsuarioAluno } from "../model/entity/UsuarioAluno"

export class UsuarioRepository {
    constructor() {
        this.createTable()
    }

    async createTable() {
        const query = `
    CREATE TABLE IF NOT EXISTS empregos.usuario (
      _id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      cpf VARCHAR(11) NOT NULL,
      cidade VARCHAR(30) NOT NULL,
      data_nascimento Date NOT NULL,
      telefone VARCHAR(15) NOT NULL,
      matricula VARCHAR(15),
      curso VARCHAR(50),
      periodo int
);
`
        try {
            const resultado = await executaComandoSQL(query, [])
            console.log("Query executada com sucesso:", resultado)
        } catch (err) {
            console.error("Error")
        }
    }

    async inserirUsuario(novoUsuario: UsuarioAluno): Promise<Usuario | UsuarioAluno> {
        const query = `
        INSERT INTO empregos.usuario (nome, email, cpf, cidade, data_nascimento, telefone, matricula, curso, periodo )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`

        const values = [novoUsuario.nome, novoUsuario.email, novoUsuario.cpf, novoUsuario.cidade, novoUsuario.dataNascimento, novoUsuario.telefone, novoUsuario?.matricula, novoUsuario?.curso, novoUsuario?.periodo]
        try {
            const resultado = await executaComandoSQL(query, values)
            novoUsuario.id = resultado.insertId
            return new Promise<UsuarioAluno>((resolve) => {
                resolve(novoUsuario)
            })
        } catch (err) {
            console.error("Erro ao inserir Usuario:", err)
            throw err
        }
    }

    async consultarUsuarioPorEmail(email: string) {
        const query = 'SELECT * FROM empregos.usuario WHERE email = ?'
        try {
            const resultado = await executaComandoSQL(query, [email])
            if (resultado.length === 0) {
                return null
            }
            return new Promise<UsuarioAluno>((resolve) => {
                resolve(resultado)
            })
        } catch (err) {
            console.error('Falha na busca.')
            throw err
        }
    }

    async consultarUsuarioPorId(id: number): Promise<Usuario | null> {
        const query = 'SELECT * FROM empregos.usuario WHERE _id = ?'
        try {
            const resultado = await executaComandoSQL(query, [id])
            if (resultado.length === 0) {
                return null
            }
            return new Promise<UsuarioAluno>((resolve) => {
                resolve(resultado)
            })
        } catch (err) {
            console.error('Falha na busca.')
            throw err
        }
    }

    async deletarUsuarioPorId(id: number): Promise<Usuario> {
        const query = 'DELETE FROM empregos.usuario WHERE _id = ?'
        try {
            const resultado = await executaComandoSQL(query, [id])
            return new Promise<UsuarioAluno>((resolve) => {
                resolve(resultado)
            })
        } catch (err) {
            console.error('Falha ao deletar.')
            throw err
        }
    }

    async atualizarUsuarioPorId(novoUsuario: UsuarioAluno, id: number): Promise<Usuario | UsuarioAluno> {
        const query = 'UPDATE empregos.usuario SET nome = ?, email = ?, cpf = ?, cidade = ?, data_nascimento = ?, telefone = ?, matricula = ?, curso = ?, periodo = ? WHERE _id = ?'
        try {
            const resultado = await executaComandoSQL(query, [novoUsuario.nome, novoUsuario.email, novoUsuario.cpf, novoUsuario.cidade, novoUsuario.dataNascimento, novoUsuario.telefone, novoUsuario?.matricula, novoUsuario?.curso, novoUsuario?.periodo, id])
            return new Promise<UsuarioAluno>((resolve) => {
                resolve(resultado)
            })
        } catch (err) {
            console.error('Falha ao atualizar.')
            throw err
        }
    }

    async listarUsuarios(): Promise<UsuarioAluno | null> {
        const query = 'SELECT * FROM empregos.usuario'
        try {
            const resultado = await executaComandoSQL(query)
            if (resultado.length === 0) {
                return null
            }
            return new Promise<UsuarioAluno>((resolve) => {
                resolve(resultado)
            })
        } catch (err) {
            console.error('Falha na busca.')
            throw err
        }
    }
}
