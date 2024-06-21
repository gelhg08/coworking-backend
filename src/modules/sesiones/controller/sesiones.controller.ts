import { Controller,Get, Post, Body, Param, Delete, Put  } from '@nestjs/common';
import { SesionesService } from '../services/sesiones.service';
import { CreateSesionDto } from '../dtos/create-sesiones.dto';
import { Sesion } from '../sesiones.entity';
import { UpdateSesionDto } from '../dtos/update-sesiones.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('sesiones')
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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSesionDto: UpdateSesionDto): Promise<Sesion> {
    return this.sesionesService.update(+id, updateSesionDto);
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
