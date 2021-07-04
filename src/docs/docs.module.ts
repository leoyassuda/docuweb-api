import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DocsController } from './docs.controller';
import { DocsService } from './docs.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'DOCS_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: 'docs_queue',
                    queueOptions: {
                        durable: false
                    },
                },
            },
        ]),
    ],
    controllers: [DocsController],
    providers: [DocsService]
})
export class DocsModule { }
