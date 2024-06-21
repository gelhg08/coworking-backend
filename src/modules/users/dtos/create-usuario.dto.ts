import { IsString, IsEmail, IsOptional, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateUsuarioDto {
  @IsString()
  @ApiProperty({description: 'Nombre del Usuario'})
  readonly Nombre: string;

  @ApiProperty({description: 'Email del Usuario'})
  @IsEmail()
  readonly Email: string;

  @ApiProperty({description: 'Telefono del Usuario'})
  @IsOptional()
  @IsString()
  readonly Telefono?: string;
}
