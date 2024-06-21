import { Module } from '@nestjs/common';
import { SalasController } from './controller/salas.controller';
import { SalasService } from './serivces/salas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sala } from './salas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sala])],
  controllers: [SalasController],
  providers: [SalasService]
})
export class SalasModule {}
