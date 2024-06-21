import { Module } from '@nestjs/common';
import { SalasController } from './controller/salas.controller';
import { SalasService } from './serivces/salas.service';

@Module({
  controllers: [SalasController],
  providers: [SalasService]
})
export class SalasModule {}
