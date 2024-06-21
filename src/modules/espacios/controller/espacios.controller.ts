import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EspaciosDeTrabajoService } from '../services/espacios.service';
import { CreateEspacioDeTrabajoDto } from '../dtos/create-espacios.dto';
import { EspacioDeTrabajo } from '../espacios.entity';;

@Controller('espacios')
export class EspaciosController {
    constructor(private readonly espaciosDeTrabajoService: EspaciosDeTrabajoService) {}

  @Post()
  create(@Body() createEspacioDeTrabajoDto: CreateEspacioDeTrabajoDto): Promise<EspacioDeTrabajo> {
    return this.espaciosDeTrabajoService.create(createEspacioDeTrabajoDto);
  }

  @Get()
  findAll(): Promise<EspacioDeTrabajo[]> {
    return this.espaciosDeTrabajoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<EspacioDeTrabajo> {
    return this.espaciosDeTrabajoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.espaciosDeTrabajoService.remove(+id);
  }

  @Get('disponibles/:salaId/:sesionId')
  findAvailableBySalaAndSesion(
    @Param('salaId') salaId: string,
    @Param('sesionId') sesionId: string,
  ): Promise<EspacioDeTrabajo[]> {
    return this.espaciosDeTrabajoService.findAvailableBySalaAndSesion(+salaId, +sesionId);
  }

  @Get('ocupados/:salaId/:sesionId')
  findOccupiedBySalaAndSesion(
    @Param('salaId') salaId: string,
    @Param('sesionId') sesionId: string,
  ): Promise<EspacioDeTrabajo[]> {
    return this.espaciosDeTrabajoService.findOccupiedBySalaAndSesion(+salaId, +sesionId);
  }
}
