import {Request, Response} from 'express'
import { UsuarioService } from '../service/UsuarioService'

const usuarioService = new UsuarioService()

export const criarUsuario = async (req: Request, res: Response) => {
  try {
    const novoUsuario = await usuarioService.insertUser(req.body)
    res.status(201).json({
      mensagem: 'Novo usuário adicionado com sucesso!',
      usuario: novoUsuario
    })
  } catch(error: any) {
    res.status(400).json({mensagem: error.message})
  }
}