import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsuarioService } from './services/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsuarioService]
})
export class UsersModule {}
