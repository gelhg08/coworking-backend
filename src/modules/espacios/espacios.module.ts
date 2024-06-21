import { Module } from '@nestjs/common';
import { EspaciosController } from './controller/espacios.controller';
import { EspaciosDeTrabajoService } from './services/espacios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EspacioDeTrabajo } from './espacios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EspacioDeTrabajo])],
  controllers: [EspaciosController],
  providers: [EspaciosDeTrabajoService]
})
export class EspaciosModule {}
