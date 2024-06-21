// src/espacios_de_trabajo/espacio_de_trabajo.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Sala } from '../salas/salas.entity';
import { Reserva } from '../reservas/reservas.entity';

@Entity()
export class EspacioDeTrabajo {
  @PrimaryGeneratedColumn()
  EspacioID: number;

  @ManyToOne(() => Sala, sala => sala.espaciosDeTrabajo)
  sala: Sala;

  @Column('int')
  Fila: number;

  @Column('int')
  Columna: number;

  @OneToMany(() => Reserva, reserva => reserva.espacioDeTrabajo)
  reservas: Reserva[];
}
