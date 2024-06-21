// src/usuarios/usuario.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from '../reservas/reservas.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  UsuarioID: number;

  @Column({ length: 100 })
  Nombre: string;

  @Column({ length: 100, unique: true })
  Email: string;

  @Column({ length: 15, nullable: true })
  Telefono: string;

  @OneToMany(() => Reserva, reserva => reserva.usuario)
  reservas: Reserva[];
}
