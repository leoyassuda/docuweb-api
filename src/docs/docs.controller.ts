import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DocDTO } from './doc-dto';
import { DocsService } from './docs.service';

@ApiTags('docs')
@Controller('docs')
export class DocsController {

    constructor(
        private readonly docsService: DocsService
    ) { }

    @Get('/')
    getDocs() {
        return {
            status: 'UP'
        };
    }

    @Post('/')
    @ApiOperation({ summary: 'Create Doc' })
    //@ApiResponse({ status: 403, description: 'Forbidden.' })
    postDocs(@Body() doc: DocDTO) {
        this.docsService.emit(doc);
        return doc;
    }

}
