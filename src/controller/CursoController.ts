import { Body, Controller, Delete, Get, Post, Put, Res, Route, Tags, TsoaResponse } from 'tsoa'
import { BasicResponseDto } from '../model/dto/BasicResponseDto'
import { CursoService } from '../service/CursoService'
import { CursoRequestDto } from '../model/dto/CursoRequestDto'

@Route("curso")
@Tags("Curso")
export class CursoController extends Controller {

  cursoService = new CursoService()

  @Post()
  async inserirCurso(
    @Body() dto: CursoRequestDto,
    @Res() fail: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<201, BasicResponseDto>
  ) {
    try {
      const novaCurso = await this.cursoService.inserirCurso(dto)
      return success(201, new BasicResponseDto("Curso inserido com sucesso", novaCurso))
    } catch (err: any) {
      return fail(400, new BasicResponseDto(err.message, undefined))
    }
  }

  @Get('{id}')
  async consultarCursoPorId(
    id: number,
    @Res() fail: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>) {
    try {
      const consultarCurso = await this.cursoService.consultarCursoPorId(id)
      return success(200, new BasicResponseDto("Curso encontrado com sucesso", consultarCurso))
    } catch (err: any) {
      return fail(400, new BasicResponseDto(err.message, undefined))
    }
  }

  @Delete('{id}')
  async deletarCursoPorId(
    id: number,
    @Res() fail: TsoaResponse<404, BasicResponseDto>,
    @Res() success: TsoaResponse<201, BasicResponseDto>) {
    try {
      const deletarCurso = await this.cursoService.deletarCursoPorId(id)
      return success(201, new BasicResponseDto("Curso deletado com sucesso", deletarCurso))
    } catch (err: any) {
      return fail(404, new BasicResponseDto(err.message, undefined))
    }
  }

  @Put('{id}')
  async atualizarCursoPorId(
    id: number,
    @Body() dto: CursoRequestDto,
    @Res() fail: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<201, BasicResponseDto>
  ) {
    try {
      const atualizarExperiencia = await this.cursoService.atualizarCursoPorId(dto, id)
      return success(201, new BasicResponseDto("Curso atualizado com sucesso", atualizarExperiencia))
    } catch (err: any) {
      return fail(400, new BasicResponseDto(err.message, undefined))
    }
  }

  @Get()
  async listarCursos(
    @Res() fail: TsoaResponse<404, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>) {
    try {
      const listarTodasExperiencias = await this.cursoService.listarCursos()
      return success(200, new BasicResponseDto("Cursos encontrados com sucesso", listarTodasExperiencias))
    } catch (err: any) {
      return fail(404, new BasicResponseDto(err.message, undefined))
    }
  }

}