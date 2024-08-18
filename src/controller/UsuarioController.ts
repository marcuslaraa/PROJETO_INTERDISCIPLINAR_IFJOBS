/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { UsuarioService } from '../service/UsuarioService'

const usuarioService = new UsuarioService()

export const criarUsuario = async (req: Request, res: Response) => {
  try {
    const novoUsuario = await usuarioService.inserirUsuario(req.body)
    res.status(201).json({
      mensagem: 'Novo usuário adicionado com sucesso!',
      usuario: novoUsuario
    })
  } catch (err: any) {
    res.status(400).json({ mensagem: err.message })
  }
}

export const consultarUsuarioPorId = async (req: Request, res: Response) => {
  try {
    const consultarUsuario = await usuarioService.consultarUsuarioPorId(req.params.id)
    res.status(200).json({ mensagem: 'Usuário encontrado com sucesso.', consultarUsuario })
  } catch (err: any) {
    res.status(404).json({ mensagem: err.message })
  }
}

export const deletarUsuarioPorId = async (req: Request, res: Response) => {
  try {
    const deletarUsuario = await usuarioService.deletarUsuarioPorId(req.params.id)
    res.status(200).json({ mensagem: 'Usuário delatado com sucesso.', deletarUsuario })
  } catch (err: any) {
    res.status(404).json({ mensagem: err.message })
  }
}

export const atualizarUsuarioPorId = async (req: Request, res: Response) => {
  try {
    const atualizarUsuario = await usuarioService.atualizarUsuarioPorId(req.body, req.params.id)
    res.status(201).json({ mensagem: 'Usuário atualizado com sucesso.', atualizarUsuario })
  } catch (err: any) {
    res.status(400).json({ mensagem: err.message })
  }
}

export const listarUsuarios = async (req: Request, res: Response) => {
  try {
    const listarUsuarios = await usuarioService.listarUsuarios()
    res.status(201).json({ mensagem: 'Usuário encontardos com sucesso.', listarUsuarios })
  } catch (err: any) {
    res.status(400).json({ mensagem: err.message })
  }
}