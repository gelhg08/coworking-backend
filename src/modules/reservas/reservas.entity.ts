// src/reservas/reserva.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { EspacioDeTrabajo } from '../espacios/espacios.entity';
import { Sesion } from '../sesiones/sesiones.entity';
import { Usuario } from '../users/user.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  ReservaID: number;

  @ManyToOne(() => EspacioDeTrabajo, espacio => espacio.reservas)
  espacioDeTrabajo: EspacioDeTrabajo;

  @ManyToOne(() => Sesion, sesion => sesion.reservas)
  sesion: Sesion;

  @ManyToOne(() => Usuario, usuario => usuario.reservas)
  usuario: Usuario;

  @Column('timestamp')
  FechaReserva: Date;

  @Column('timestamp')
  FechaInicio: Date;

  @Column('timestamp')
  FechaFin: Date;
}
