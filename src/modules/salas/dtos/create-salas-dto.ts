import { IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';



export class CreateSalaDto {
  @IsString()
  @ApiProperty({description: 'Nombre de la sala'})
  readonly Nombre: string;

  @IsOptional()
  @IsString()
  @ApiProperty({description: 'Ubicacion de la sala'})
  readonly Ubicacion?: string;

  @IsInt()
  @ApiProperty({description: 'Filas de la sala'})
  readonly Filas: number;

  @IsInt()
  @ApiProperty({description: 'Columnas de la sala'})
  readonly Columnas: number;
}
