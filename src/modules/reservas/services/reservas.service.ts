import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from '../reservas.entity';
import { CreateReservaDto } from '../dtos/create-reservas.dto';
import { UpdateReservaDto } from '../dtos/update-reservas.dto';

@Injectable()
export class ReservasService {
  constructor(
    @InjectRepository(Reserva)
    private reservasRepository: Repository<Reserva>,
  ) {}

  create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    const reserva = this.reservasRepository.create(createReservaDto);
    return this.reservasRepository.save(reserva);
  }

  findAll(): Promise<Reserva[]> {
    return this.reservasRepository.find({ relations: ['espacioDeTrabajo', 'sesion', 'usuario'] });
  }

  async findOne(id: number): Promise<Reserva> {
    const reserva = await this.reservasRepository.findOne({ where: { ReservaID: id }, relations: ['espacioDeTrabajo', 'sesion', 'usuario'] });
    if (!reserva) {
      throw new NotFoundException(`Reserva con ID "${id}" no encontrada`);
    }
    return reserva;
  }

  async update(id: number, updateReservaDto: UpdateReservaDto): Promise<Reserva> {
    await this.reservasRepository.update(id, updateReservaDto);
    const updatedReserva = await this.reservasRepository.findOne({ where: { ReservaID: id } });
    if (!updatedReserva) {
      throw new NotFoundException(`Reserva con ID "${id}" no encontrada`);
    }
    return updatedReserva;
  }

  async findByEspacio(espacioId: number): Promise<Reserva[]> {
    return this.reservasRepository.find({ where: { espacioDeTrabajo: { EspacioID: espacioId } }, relations: ['espacioDeTrabajo'] });
  }

  async findBySesion(sesionId: number): Promise<Reserva[]> {
    return this.reservasRepository.find({ where: { sesion: { SesionID: sesionId } }, relations: ['sesion'] });
  }

  async findByUsuario(usuarioId: number): Promise<Reserva[]> {
    return this.reservasRepository.find({ where: { usuario: { UsuarioID: usuarioId } }, relations: ['usuario'] });
  }

  async remove(id: number): Promise<void> {
    const result = await this.reservasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Reserva con ID "${id}" no encontrada`);
    }
  }
}
