import { Controller,Get, Post, Body, Param, Delete  } from '@nestjs/common';
import { SesionesService } from '../services/sesiones.service';
import { CreateSesionDto } from '../dtos/create-sesiones.dto';
import { Sesion } from '../sesiones.entity';


@Controller('sesiones')
export class SesionesController {
    constructor(private readonly sesionesService: SesionesService) {}

  @Post()
  create(@Body() createSesionDto: CreateSesionDto): Promise<Sesion> {
    return this.sesionesService.create(createSesionDto);
  }

  @Get()
  findAll(): Promise<Sesion[]> {
    return this.sesionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Sesion> {
    return this.sesionesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.sesionesService.remove(+id);
  }

  @Get('ocupadas')
  findMostOccupied(): Promise<Sesion[]> {
    return this.sesionesService.findMostOccupied();
  }

  @Get('disponibles')
  findMostAvailable(): Promise<Sesion[]> {
    return this.sesionesService.findMostAvailable();
  }
}
