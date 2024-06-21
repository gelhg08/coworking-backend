import { Controller, Param, Get, Post, Delete, Body, Put } from '@nestjs/common';
import { SalasService } from '../serivces/salas.service';
import { CreateSalaDto } from '../dtos/create-salas-dto';
import { Sala } from '../salas.entity';
import { ApiTags } from '@nestjs/swagger';
import { UpdateSalaDto } from '../dtos/update-salas.dto';

@ApiTags('salas')
@Controller('salas')
export class SalasController {
    constructor(private readonly salasService: SalasService) {}

    @Post()
    create(@Body() createSalaDto: CreateSalaDto): Promise<Sala> {
      return this.salasService.create(createSalaDto);
    }
  
    @Get()
    findAll(): Promise<Sala[]> {
      return this.salasService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Sala> {
      return this.salasService.findOne(+id);
    }

    @Put(':id')
  update(@Param('id') id: string, @Body() updateSalaDto: UpdateSalaDto): Promise<Sala> {
    return this.salasService.update(+id, updateSalaDto);
  }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.salasService.remove(+id);
    }
}
