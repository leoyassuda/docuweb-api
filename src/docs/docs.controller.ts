import { Body, Controller, Get, Post } from '@nestjs/common';
import { DocDTO } from './doc-dto';

@Controller('docs')
export class DocsController {

    @Post('/')
    getDocs(@Body() doc: DocDTO) {
        return doc;
    }
}
