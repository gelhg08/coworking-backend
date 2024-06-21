import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sesion } from '../sesiones.entity';
import { CreateSesionDto } from '../dtos/create-sesiones.dto';
import { UpdateSesionDto } from '../dtos/update-sesiones.dto';


@Injectable()
export class SesionesService {
  constructor(
    @InjectRepository(Sesion)
    private sesionesRepository: Repository<Sesion>,
  ) {}

  create(createSesionDto: CreateSesionDto): Promise<Sesion> {
    const sesion = this.sesionesRepository.create(createSesionDto);
    return this.sesionesRepository.save(sesion);
  }

  findAll(): Promise<Sesion[]> {
    return this.sesionesRepository.find({ relations: ['reservas'] });
  }

  async findOne(id: number): Promise<Sesion> {
    const sesion = await this.sesionesRepository.findOne({ where: { SesionID: id }, relations: ['reservas'] });
    if (!sesion) {
      throw new NotFoundException(`Sesión con ID "${id}" no encontrada`);
    }
    return sesion;
  }

  async update(id: number, updateSesionDto: UpdateSesionDto): Promise<Sesion> {
    await this.sesionesRepository.update(id, updateSesionDto);
    const updatedSesion = await this.sesionesRepository.findOne({ where: { SesionID: id } });
    if (!updatedSesion) {
      throw new NotFoundException(`Sesión con ID "${id}" no encontrada`);
    }
    return updatedSesion;
  }

  async findMostOccupied(): Promise<Sesion[]> {
    return this.sesionesRepository.query(`
      SELECT s.*, COUNT(r."ReservaID") as ocupacion
      FROM coworking."Sesiones" s
      JOIN coworking."Reservas" r ON s."SesionID" = r."SesionID"
      GROUP BY s."SesionID"
      ORDER BY ocupacion DESC
    `);
  }

  async findMostAvailable(): Promise<Sesion[]> {
    return this.sesionesRepository.query(`
      SELECT s.*, COUNT(r."ReservaID") as ocupacion
      FROM coworking."Sesiones" s
      LEFT JOIN coworking."Reservas" r ON s."SesionID" = r."SesionID"
      GROUP BY s."SesionID"
      ORDER BY ocupacion ASC
    `);
  }

  async remove(id: number): Promise<void> {
    const result = await this.sesionesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Sesión con ID "${id}" no encontrada`);
    }
  }
}
