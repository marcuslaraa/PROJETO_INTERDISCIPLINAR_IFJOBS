import { Body, Controller, Delete, Get, Post, Put, Res, Route, Tags, TsoaResponse } from 'tsoa'
import { BasicResponseDto } from '../model/dto/BasicResponseDto'
import { ExperienciaProfissionalRequestDto } from '../model/dto/ExperienciaProfissionalRequestDto'
import { ExperienciaProfissionalService } from '../service/ExperienciaProfissionalService'

@Route("experienciaProfissional")
@Tags("Experiencia Profissional")
export class ExperienciaProfissionalController extends Controller {

  experienciaProfissionalService = new ExperienciaProfissionalService()

  @Post()
  async inserirExperiencia(
    @Body() dto: ExperienciaProfissionalRequestDto,
    @Res() fail: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<201, BasicResponseDto>
  ) {
    try {
      const novaExperiencia = await this.experienciaProfissionalService.inserirExperiencia(dto)
      return success(201, new BasicResponseDto("Experiencia inserida com sucesso", novaExperiencia))
    } catch (err: any) {
      return fail(400, new BasicResponseDto(err.message, undefined))
    }
  }

  @Get('{id}')
  async consultarExperienciaPorId(
    id: number,
    @Res() fail: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>) {
    try {
      const consultarExperiencia = await this.experienciaProfissionalService.consultarExperienciaPorId(id)
      return success(200, new BasicResponseDto("Experiencia encontrado com sucesso", consultarExperiencia))
    } catch (err: any) {
      return fail(400, new BasicResponseDto(err.message, undefined))
    }
  }

  @Delete('{id}')
  async deletarExperienciaPorId(
    id: number,
    @Res() fail: TsoaResponse<404, BasicResponseDto>,
    @Res() success: TsoaResponse<201, BasicResponseDto>) {
    try {
      const deletarExperiencia = await this.experienciaProfissionalService.deletarExperienciaPorId(id)
      return success(201, new BasicResponseDto("Experiecia deletado com sucesso", deletarExperiencia))
    } catch (err: any) {
      return fail(404, new BasicResponseDto(err.message, undefined))
    }
  }

  @Put('{id}')
  async atualizarExperienciaPorId(
    id: number,
    @Body() dto: ExperienciaProfissionalRequestDto,
    @Res() fail: TsoaResponse<400, BasicResponseDto>,
    @Res() success: TsoaResponse<201, BasicResponseDto>
  ) {
    try {
      const atualizarExperiencia = await this.experienciaProfissionalService.atualizarExperienciaPorId(dto, id)
      return success(201, new BasicResponseDto("Experiencia atualizado com sucesso", atualizarExperiencia))
    } catch (err: any) {
      return fail(400, new BasicResponseDto(err.message, undefined))
    }
  }

  @Get()
  async listarExperiencias(
    @Res() fail: TsoaResponse<404, BasicResponseDto>,
    @Res() success: TsoaResponse<200, BasicResponseDto>) {
    try {
      const listarTodasExperiencias = await this.experienciaProfissionalService.listarUsuarios()
      return success(200, new BasicResponseDto("Experiencia encontrados com sucesso", listarTodasExperiencias))
    } catch (err: any) {
      return fail(404, new BasicResponseDto(err.message, undefined))
    }
  }

}