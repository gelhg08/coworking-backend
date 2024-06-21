import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './modules/users/users.module';
import { ReservasModule } from './modules/reservas/reservas.module';
import { SalasModule } from './modules/salas/salas.module';
import { SesionesModule } from './modules/sesiones/sesiones.module';
import { EspaciosModule } from './modules/espacios/espacios.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.POSTGRESQL_ADDON_HOST,
        port: parseInt(process.env.POSTGRESQL_ADDON_PORT, 10) || 5432,
        username: process.env.POSTGRESQL_ADDON_USER,
        password: process.env.POSTGRESQL_ADDON_PASSWORD,
        database: process.env.POSTGRESQL_ADDON_DB,
        autoLoadEntities: true,
        synchronize: true,
        ssl: {
          rejectUnauthorized: false, 
        },
      }),
      UsersModule,
      ReservasModule,
      SalasModule,
      SesionesModule,
      EspaciosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
