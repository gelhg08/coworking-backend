import { Module } from '@nestjs/common';
import { SesionesController } from './controller/sesiones.controller';
import { SesionesService } from './services/sesiones.service';
import { Sesion } from './sesiones.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Sesion])],
  controllers: [SesionesController],
  providers: [SesionesService]
})
export class SesionesModule {}
