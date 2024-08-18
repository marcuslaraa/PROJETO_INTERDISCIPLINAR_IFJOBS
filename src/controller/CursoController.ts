/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { CursoService } from '../service/CursoService'

const cursoService = new CursoService()

export const criarCurso = async (req: Request, res: Response) => {
  try {
    const novoCurso = await cursoService.inserirCurso(req.body)
    res.status(201).json({
      mensagem: 'Novo curso adicionado com sucesso!',
      usuario: novoCurso
    })
  } catch (err: any) {
    res.status(400).json({ mensagem: err.message })
  }
}

export const consultarCursoPorId = async (req: Request, res: Response) => {
  try {
    const consultarCurso = await cursoService.consultarCursoPorId(req.params.id)
    res.status(200).json({ mensagem: 'Curso encontrado com sucesso.', consultarCurso })
  } catch (err: any) {
    res.status(404).json({ mensagem: err.message })
  }
}

export const deletarCursoPorId = async (req: Request, res: Response) => {
  try {
    const deletarCurso = await cursoService.deletarCursoPorId(req.params.id)
    res.status(200).json({ mensagem: 'Curso delatado com sucesso.', deletarCurso })
  } catch (err: any) {
    res.status(404).json({ mensagem: err.message })
  }
}

export const atualizarCursoPorId = async (req: Request, res: Response) => {
  try {
    const atualizarCurso = await cursoService.atualizarCursoPorId(req.body, req.params.id)
    res.status(201).json({ mensagem: 'Curso atualizado com sucesso.', atualizarCurso })
  } catch (err: any) {
    res.status(400).json({ mensagem: err.message })
  }
}

export const listarCursos = async (req: Request, res: Response) => {
  try {
    const listarCursos = await cursoService.listarCursos()
    res.status(201).json({ mensagem: 'Cursos encontardos com sucesso.', listarCursos })
  } catch (err: any) {
    res.status(400).json({ mensagem: err.message })
  }
}