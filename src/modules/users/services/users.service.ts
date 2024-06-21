import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../user.entity';
import { CreateUsuarioDto } from '../dtos/create-usuario.dto';
import { UpdateUsuarioDto } from '../dtos/update-usuario.dto';

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

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOne({ where: { UsuarioID: id }, relations: ['reservas'] });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado`);
    }
    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    await this.usuariosRepository.update(id, updateUsuarioDto);
    const updatedUsuario = await this.usuariosRepository.findOne({ where: { UsuarioID: id } });
    if (!updatedUsuario) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado`);
    }
    return updatedUsuario;
  }

  async remove(id: number): Promise<void> {
    const result = await this.usuariosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuario con ID "${id}" no encontrado`);
    }
  }

  findWorkspacesByUser(id: number): Promise<any[]> {
    return this.usuariosRepository.query(`
      SELECT et.* FROM coworking."Espacios_de_Trabajo" et
      JOIN coworking."Reservas" r ON et."EspacioID" = r."EspacioID"
      WHERE r."UsuarioID" = $1
    `, [id]);
  }
}
