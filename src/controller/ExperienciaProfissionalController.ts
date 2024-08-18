/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { ExperienciaProfissionalService } from '../service/ExperienciaProfissionalService'

const experienciaProfissionalService = new ExperienciaProfissionalService()

export const criarExperiencia = async (req: Request, res: Response) => {
  try {
    const novoExperiencia = await experienciaProfissionalService.inserirExperiencia(req.body)
    res.status(201).json({
      mensagem: 'Nova experiencia adicionada com sucesso!',
      usuario: novoExperiencia
    })
  } catch (err: any) {
    res.status(400).json({ mensagem: err.message })
  }
}

export const consultarExperienciaPorId = async (req: Request, res: Response) => {
  try {
    const consultarExperiencia = await experienciaProfissionalService.consultarExperienciaPorId(req.params.id)
    res.status(200).json({ mensagem: 'Experiencia encontrada com sucesso.', consultarExperiencia })
  } catch (err: any) {
    res.status(404).json({ mensagem: err.message })
  }
}

export const deletarExperienciaPorId = async (req: Request, res: Response) => {
  try {
    const deletarExperiencia = await experienciaProfissionalService.deletarExperienciaPorId(req.params.id)
    res.status(200).json({ mensagem: 'Experiencia deletada com sucesso.', deletarExperiencia })
  } catch (err: any) {
    res.status(404).json({ mensagem: err.message })
  }
}

export const atualizarExperienciaPorId = async (req: Request, res: Response) => {
  try {
    const atualizarExperiencia = await experienciaProfissionalService.atualizarExperienciaPorId(req.body, req.params.id)
    res.status(201).json({ mensagem: 'Experiencia atualizada com sucesso.', atualizarExperiencia })
  } catch (err: any) {
    res.status(400).json({ mensagem: err.message })
  }
}

export const listarExperiencias = async (req: Request, res: Response) => {
  try {
    const listarExperiencias = await experienciaProfissionalService.listarUsuarios()
    res.status(201).json({ mensagem: 'Experiencias encontradas com sucesso.', listarExperiencias })
  } catch (err: any) {
    res.status(400).json({ mensagem: err.message })
  }
}