import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { DocDTO } from './doc-dto';

@Injectable()
export class DocsService {

    constructor(
        @Inject('DOCS_SERVICE') private readonly client: ClientProxy
    ) { }

    emit(doc: DocDTO): void {
        this.client.emit('new_doc', doc);
    }
}
