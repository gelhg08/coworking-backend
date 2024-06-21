import { Module } from '@nestjs/common';
import { EspaciosController } from './controller/espacios.controller';
import { EspaciosService } from './services/espacios.service';

@Module({
  controllers: [EspaciosController],
  providers: [EspaciosService]
})
export class EspaciosModule {}
