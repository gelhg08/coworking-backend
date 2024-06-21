import { IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateSesionDto {
  @IsDate()
  @ApiProperty({description: 'Fecha de inicio de la sesion'})
  readonly FechaInicio: Date;

  @IsDate()
  @ApiProperty({description: 'Fecha de fin de la sesion'})
  readonly FechaFin: Date;
}
