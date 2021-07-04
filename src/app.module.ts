import { Module } from '@nestjs/common';
import { DocsController } from './docs/docs.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { DocsModule } from './docs/docs.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        DocsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
