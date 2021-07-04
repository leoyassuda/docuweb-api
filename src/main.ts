
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            logger: true
        })
    );

    const configSwagger = new DocumentBuilder()
        .setTitle('Docuweb API')
        .setDescription('The API for usage docuweb')
        .setVersion('1.0')
        .addTag('docuweb')
        .build();

    const document = SwaggerModule.createDocument(app, configSwagger);
    SwaggerModule.setup('api', app, document)

    app.setGlobalPrefix('api');
    app.listen(3000);
}
bootstrap();
