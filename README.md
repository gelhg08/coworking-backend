<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Gestión de asientos para sistema de coworking - Backend
Este proyecto implementa una API desarrollada en NestJS para la gestión de espacios de trabajo en un sistema de coworking. Permite a los usuarios reservar espacios para sesiones específicas, facilitando la gestión de ocupación de espacios y mejorando la experiencia del usuario.


## Features

Características y Funcionalidades del Proyecto
Framework y Patrón de Diseño:

Utilización de NestJS con TypeScript.
Implementación del patrón de diseño MVC (Modelo-Vista-Controlador) o similar, siguiendo las convenciones de NestJS.
Integración con la Base de Datos:

Conexión con la base de datos existente según el modelo especificado en la historia de usuario.
Uso del ORM TypeORM para facilitar la interacción con la base de datos.
Endpoints de la API:

Espacios de trabajo:
Listar espacios disponibles de una sala en una sesión específica.
Listar espacios ocupados de una sala en una sesión específica.
Sesiones:
Listar sesiones ordenadas por las más ocupadas.
Listar sesiones ordenadas por las más disponibles.
Usuarios:
Listar espacios de trabajo asignados a un usuario.
Asignaciones:
Listar espacios de trabajo asignados a una sesión.
Validación de Datos:

Implementación de validación de datos en las solicitudes de la API utilizando class-validator y class-transformer.
Manejo adecuado de errores, devolviendo respuestas HTTP apropiadas con códigos de estado y mensajes descriptivos.

## Tecnologias Usadas

-- **NestJS**: Framework de Node.js para construir aplicaciones eficientes y escalables en el lado del servidor.

-- **TypeScript**: Lenguaje de programación que añade tipado estático opcional a JavaScript, facilitando el desarrollo y la detección temprana de errores.

-- **TypeORM**: ORM (Object-Relational Mapping) para la interacción con la base de datos, facilitando la gestión de entidades y relaciones en una base de datos relacional.

-- **PostgreSQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar y gestionar los datos del sistema de coworking.

-- **Swagger/OpenAPI**: Especificación utilizada para describir y documentar APIs RESTful. Se utiliza para generar documentación interactiva de los endpoints de la API.

-- **GitFlow**: Metodología de trabajo que facilita la gestión de ramas y versiones del código en un repositorio Git, asegurando un flujo de desarrollo ordenado y controlado.

**Postman**: Herramienta utilizada para probar y documentar APIs. Se emplea para realizar pruebas funcionales de los endpoints y asegurar su correcto funcionamiento.

## Local Setup

To run the project locally, clone the repository and set up the necessary environment variables for the database and JWT.

1. Clone the repository:
   ```
   git clone https://github.com/gelhg08/coworking-backend.git
   ```
2. Install necessary dependencies:
   ```
   npm install
   ```
3. Copy the `.env.example` file to a new `.env` file and configure the necessary environment variables:
   ```
   cp .env.example .env
   ```
4. Edit the `.env` file and configure the following values:
   ```
  POSTGRESQL_ADDON_HOST= tu host
  POSTGRESQL_ADDON_DB= tu database name 
  POSTGRESQL_ADDON_USER= tu usuario
  POSTGRESQL_ADDON_PORT= tu puerto
  POSTGRESQL_ADDON_PASSWORD= tu contraseña 


These steps ensure that you have all the necessary configuration to run the project locally, adjusting the environment variables according to your development environment needs.

## Development Commands

To start the server in development mode, use:

```
npm run start:dev
```

## Production Deployment

To start the server in production mode, use:

```
npm run build
npm start
```

## Documentación de la API con Swagger
La API está documentada utilizando Swagger/OpenAPI para proporcionar una referencia interactiva de los endpoints disponibles. Para acceder a la documentación:

Despliegue en la Nube:

El Swagger del backend está desplegado en la nube. Puedes acceder a él usando el siguiente enlace:
https://tu-url-de-swagger
Asegúrate de tener las credenciales necesarias para acceder si es requerido.


Ejecución Local:
Si estás ejecutando el proyecto localmente, puedes generar la documentación Swagger ejecutando el servidor y visitando la siguiente URL en tu navegador:

http://localhost:puerto/swagger
Reemplaza puerto con el número de puerto en el que está corriendo tu servidor local.

## Git Flow estrategia
Este proyecto implementa la estrategia de ramificación Gitflow, la cual es un modelo escalable y robusto para gestionar el desarrollo de software. A continuación, una breve descripción de cómo se organizan las ramas y su propósito dentro del flujo de trabajo del proyecto:

**main**: La rama principal que contiene el código listo para producción, donde el código alcanza su estado más estable después de ser probado en otras ramas.
**dev**: La rama de desarrollo donde se fusionan todas las características, correcciones y mejoras antes de ser desplegadas a producción. Esta rama contiene el estado más reciente del próximo lanzamiento.
**feat/nuevafuncionalidad**: Ramas de características donde se desarrollan nuevas funcionalidades,
El trabajo se fusiona en dev para pruebas de integración. Una vez que dev es estable y está listo para ser lanzado, se fusiona en main.

Para contribuir al proyecto, crea una rama desde dev siguiendo el prefijo correspondiente (feat/ o fix/) dependiendo del tipo de trabajo. Después de completar el trabajo y las pruebas, crea una Pull Request hacia dev.

Adoptar Gitflow permite una gestión organizada de versiones, proporcionando claridad y un proceso establecido para la colaboración y el despliegue de software.

¡Disfruta usando este sistema de coworking!

Desarrollado por: Angélica Hernández.