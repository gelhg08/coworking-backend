import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UsuarioService } from '../services/users.service';
import { CreateUsuarioDto } from '../dtos/create-usuario.dto';
import { Usuario } from '../user.entity'

@Controller('users')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuario> {
    return this.usuariosService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usuariosService.remove(+id);
  }

  @Get(':id/workspaces')
  findWorkspacesByUser(@Param('id') id: string): Promise<any[]> {
    return this.usuariosService.findWorkspacesByUser(+id);
  }
}
