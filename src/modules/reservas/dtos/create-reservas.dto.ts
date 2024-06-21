import { IsInt, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDto {
  @IsInt()
  readonly EspacioID: number;

  @IsInt()
  readonly SesionID: number;

  @IsInt()
  readonly UsuarioID: number;

  @IsDate()
  @ApiProperty({description: 'Fecha de la reserva'})
  readonly FechaReserva: Date;

  @IsDate()
  @ApiProperty({description: 'Fecha de inicio de la reserva'})
  readonly FechaInicio: Date;

  @ApiProperty({description: 'Fecha de fin de la reserva'})
  @IsDate()
  readonly FechaFin: Date;
}
