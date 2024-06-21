import { Controller, Body, Param, Post, Get, Delete} from '@nestjs/common';
import { ReservasService } from '../services/reservas.service';
import { CreateReservaDto } from '../dtos/create-reservas.dto';
import { Reserva } from '../reservas.entity';


@Controller('reservas')
export class ReservasController {
    constructor(private readonly reservasService: ReservasService) {}

  @Post()
  create(@Body() createReservaDto: CreateReservaDto): Promise<Reserva> {
    return this.reservasService.create(createReservaDto);
  }

  @Get()
  findAll(): Promise<Reserva[]> {
    return this.reservasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Reserva> {
    return this.reservasService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.reservasService.remove(+id);
  }

  @Get('espacio/:espacioId')
  findByEspacio(@Param('espacioId') espacioId: string): Promise<Reserva[]> {
    return this.reservasService.findByEspacio(+espacioId);
  }

  @Get('sesion/:sesionId')
  findBySesion(@Param('sesionId') sesionId: string): Promise<Reserva[]> {
    return this.reservasService.findBySesion(+sesionId);
  }

  @Get('usuario/:usuarioId')
  findByUsuario(@Param('usuarioId') usuarioId: string): Promise<Reserva[]> {
    return this.reservasService.findByUsuario(+usuarioId);
  }
}
