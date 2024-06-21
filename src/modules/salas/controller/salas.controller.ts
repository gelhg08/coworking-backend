import { Controller, Param, Get, Post, Delete, Body } from '@nestjs/common';
import { SalasService } from '../serivces/salas.service';
import { CreateSalaDto } from '../dtos/create-salas-dto';
import { Sala } from '../salas.entity';
import { ApiTags } from '@nestjs/swagger';

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
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.salasService.remove(+id);
    }
}
