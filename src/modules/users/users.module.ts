import { Module } from '@nestjs/common';
import { UsuariosController } from './controller/users.controller';
import { UsuarioService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuarioService]
})
export class UsersModule {}
