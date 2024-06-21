import { Module } from '@nestjs/common';
import { UsuariosController } from './controller/users.controller';
import { UsuarioService } from './services/users.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuarioService]
})
export class UsersModule {}
