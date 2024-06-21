import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .setTitle('Gestión de asientos para sistema de coworking - Backend')
    .setDescription('API para sistema de coworking: los usuarios puedan reservar espacios de trabajo en un coworking para una sesión específica y así facilitar la gestión de ocupación de espacios y mejorar la experiencia de los usuarios.')
    .setVersion('1.0')
    .addTag('coworking')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port)
}
bootstrap();