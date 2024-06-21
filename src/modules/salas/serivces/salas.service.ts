import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sala } from '../salas.entity';
import { CreateSalaDto } from '../dtos/create-salas-dto';
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
    
      findOne(id: number): Promise<Sala> {
        return this.salasRepository.findOne(id, { relations: ['espaciosDeTrabajo'] });
      }
    
      async remove(id: number): Promise<void> {
        const result = await this.salasRepository.delete(id);
        if (result.affected === 0) {
          throw new NotFoundException(`Sala con ID "${id}" no encontrada`);
        }
      }
}
