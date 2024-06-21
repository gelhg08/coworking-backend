import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../user.entity';
import { CreateUsuarioDto } from '../dtos/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.usuariosRepository.create(createUsuarioDto);
    return this.usuariosRepository.save(usuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  findOne(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOne(id, { relations: ['reservas'] });
  }

  async remove(id: number): Promise<void> {
    const result = await this.usuariosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado`);
    }
  }

  findWorkspacesByUser(id: number): Promise<any[]> {
    return this.usuariosRepository.query(
      `
          SELECT et.* FROM coworking."Espacios_de_Trabajo" et
          JOIN coworking."Reservas" r ON et."EspacioID" = r."EspacioID"
          WHERE r."UsuarioID" = $1
        `,
      [id],
    );
  }
}
