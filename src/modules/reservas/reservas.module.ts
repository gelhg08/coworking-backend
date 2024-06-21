import { Module } from '@nestjs/common';
import { ReservasController } from './controller/reservas.controller';
import { ReservasService } from './services/reservas.service';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './reservas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva])],
  controllers: [ReservasController],
  providers: [ReservasService]
})
export class ReservasModule {}
