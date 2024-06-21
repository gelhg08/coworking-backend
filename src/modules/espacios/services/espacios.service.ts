import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EspacioDeTrabajo } from '../espacios.entity';
import { CreateEspacioDeTrabajoDto } from '../dtos/create-espacios.dto';


@Injectable()
export class EspaciosDeTrabajoService {

    constructor(
        @InjectRepository(EspacioDeTrabajo)
        private espaciosDeTrabajoRepository: Repository<EspacioDeTrabajo>,
      ) {}
    
      create(createEspacioDeTrabajoDto: CreateEspacioDeTrabajoDto): Promise<EspacioDeTrabajo> {
        const espacioDeTrabajo = this.espaciosDeTrabajoRepository.create(createEspacioDeTrabajoDto);
        return this.espaciosDeTrabajoRepository.save(espacioDeTrabajo);
      }
    
      findAll(): Promise<EspacioDeTrabajo[]> {
        return this.espaciosDeTrabajoRepository.find({ relations: ['sala', 'reservas'] });
      }
    
      findOne(id: number): Promise<EspacioDeTrabajo> {
        return this.espaciosDeTrabajoRepository.findOne(id, { relations: ['sala', 'reservas'] });
      }
    
      async findAvailableBySalaAndSesion(salaId: number, sesionId: number): Promise<EspacioDeTrabajo[]> {
        return this.espaciosDeTrabajoRepository.query(`
          SELECT * FROM coworking."Espacios_de_Trabajo" et
          LEFT JOIN coworking."Reservas" r ON et."EspacioID" = r."EspacioID" AND r."SesionID" = $1
          WHERE et."SalaID" = $2 AND r."ReservaID" IS NULL
        `, [sesionId, salaId]);
      }
    
      async findOccupiedBySalaAndSesion(salaId: number, sesionId: number): Promise<EspacioDeTrabajo[]> {
        return this.espaciosDeTrabajoRepository.query(`
          SELECT et.* FROM coworking."Espacios_de_Trabajo" et
          JOIN coworking."Reservas" r ON et."EspacioID" = r."EspacioID"
          WHERE et."SalaID" = $1 AND r."SesionID" = $2
        `, [salaId, sesionId]);
      }
    
      async remove(id: number): Promise<void> {
        const result = await this.espaciosDeTrabajoRepository.delete(id);
        if (result.affected === 0) {
          throw new NotFoundException(`Espacio de Trabajo con ID "${id}" no encontrado`);
        }
      }
}
