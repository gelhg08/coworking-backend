import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from '../reservas.entity';
import { CreateReservaDto } from '../dtos/create-reservas.dto';

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
    return this.reservasRepository.find({
      relations: ['espacioDeTrabajo', 'sesion', 'usuario'],
    });
  }

  findOne(id: number): Promise<Reserva> {
    return this.reservasRepository.findOne(id, {
      relations: ['espacioDeTrabajo', 'sesion', 'usuario'],
    });
  }

  async findByEspacio(espacioId: number): Promise<Reserva[]> {
    return this.reservasRepository.find({
      where: { espacioDeTrabajo: espacioId },
      relations: ['espacioDeTrabajo'],
    });
  }

  async findBySesion(sesionId: number): Promise<Reserva[]> {
    return this.reservasRepository.find({
      where: { sesion: sesionId },
      relations: ['sesion'],
    });
  }

  async findByUsuario(usuarioId: number): Promise<Reserva[]> {
    return this.reservasRepository.find({
      where: { usuario: usuarioId },
      relations: ['usuario'],
    });
  }

  async remove(id: number): Promise<void> {
    const result = await this.reservasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Reserva con ID "${id}" no encontrada`);
    }
  }
}
