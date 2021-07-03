import { Module } from '@nestjs/common';
import { DocsController } from './docs/docs.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DOC_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['ampq://localhost:5672'],
          queue: 'docs_queue',
          queueOptions: {
            durable: false
          }
        }
      }
    ])
  ],
  controllers: [DocsController],
  providers: [],
})
export class AppModule { }
