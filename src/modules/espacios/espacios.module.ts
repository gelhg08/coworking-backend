import { Module } from '@nestjs/common';
import { EspaciosController } from './espacios.controller';
import { EspaciosService } from './services/espacios.service';

@Module({
  controllers: [EspaciosController],
  providers: [EspaciosService]
})
export class EspaciosModule {}
