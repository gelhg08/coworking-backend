import { Module } from '@nestjs/common';
import { SesionesController } from './controller/sesiones.controller';
import { SesionesService } from './services/sesiones.service';

@Module({
  controllers: [SesionesController],
  providers: [SesionesService]
})
export class SesionesModule {}
