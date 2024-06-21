import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEspacioDeTrabajoDto {
  @IsInt()
  readonly SalaID: number;

  @IsInt()
  @ApiProperty({description: 'Fila del espacio de trabajo'})
  readonly Fila: number;

  @IsInt()
  @ApiProperty({description: 'Columnas de espacio de trabajo'})
  readonly Columna: number;
}
