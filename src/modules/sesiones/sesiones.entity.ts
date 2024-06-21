// src/sesiones/sesion.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from '../reservas/reservas.entity';

@Entity()
export class Sesion {
  @PrimaryGeneratedColumn()
  SesionID: number;

  @Column('timestamp')
  FechaInicio: Date;

  @Column('timestamp')
  FechaFin: Date;

  @OneToMany(() => Reserva, reserva => reserva.sesion)
  reservas: Reserva[];
}
