// src/salas/sala.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { EspacioDeTrabajo } from '../espacios/espacios.entity';

@Entity()
export class Sala {
  @PrimaryGeneratedColumn()
  SalaID: number;

  @Column({ length: 100 })
  Nombre: string;

  @Column({ length: 100, nullable: true })
  Ubicacion: string;

  @Column('int')
  Filas: number;

  @Column('int')
  Columnas: number;

  @OneToMany(() => EspacioDeTrabajo, espacio => espacio.sala)
  espaciosDeTrabajo: EspacioDeTrabajo[];
}
