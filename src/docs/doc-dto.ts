import { ApiProperty } from "@nestjs/swagger";

export class DocDTO {

    @ApiProperty({ example: 'imeru@mail.com', description: 'The email' })
    email: string;

    @ApiProperty({ example: 'namae', description: 'The name' })
    name: string;
}
