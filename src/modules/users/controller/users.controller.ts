import { Controller, Get, Post, Body, Delete, Param, Put} from '@nestjs/common';
import { UsuarioService } from '../services/users.service';
import { CreateUsuarioDto } from '../dtos/create-usuario.dto';
import { Usuario } from '../user.entity'
import { ApiTags } from '@nestjs/swagger';
import { UpdateUsuarioDto } from '../dtos/update-usuario.dto';

@ApiTags('usuarios')
@Controller('usuarios')
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

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    return this.usuariosService.update(+id, updateUsuarioDto);
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
