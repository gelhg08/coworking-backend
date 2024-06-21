import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm'

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
