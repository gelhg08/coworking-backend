import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sala } from '../salas.entity';
import { CreateSalaDto } from '../dtos/create-salas-dto';
import { UpdateSalaDto } from '../dtos/update-salas.dto';
@Injectable()
export class SalasService {
  constructor(
    @InjectRepository(Sala)
    private salasRepository: Repository<Sala>,
  ) {}

  create(createSalaDto: CreateSalaDto): Promise<Sala> {
    const sala = this.salasRepository.create(createSalaDto);
    return this.salasRepository.save(sala);
  }

  findAll(): Promise<Sala[]> {
    return this.salasRepository.find({ relations: ['espaciosDeTrabajo'] });
  }

  async findOne(id: number): Promise<Sala> {
    const sala = await this.salasRepository.findOne({ where: { SalaID: id }, relations: ['espaciosDeTrabajo'] });
    if (!sala) {
      throw new NotFoundException(`Sala con ID "${id}" no encontrada`);
    }
    return sala;
  }

  async update(id: number, updateSalaDto: UpdateSalaDto): Promise<Sala> {
    await this.salasRepository.update(id, updateSalaDto);
    const updatedSala = await this.salasRepository.findOne({ where: { SalaID: id } });
    if (!updatedSala) {
      throw new NotFoundException(`Sala con ID "${id}" no encontrada`);
    }
    return updatedSala;
  }

  async remove(id: number): Promise<void> {
    const result = await this.salasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Sala con ID "${id}" no encontrada`);
    }
  }
}
