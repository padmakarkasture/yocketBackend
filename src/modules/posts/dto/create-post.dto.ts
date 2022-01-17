
import { ApiProperty } from '@nestjs/swagger'
import { CREATE, JoiSchema, JoiSchemaOptions, UPDATE } from 'nestjs-joi';
import * as Joi from 'joi';
@JoiSchemaOptions({
    allowUnknown: false,
  })
export class CreatePostDto {
    @ApiProperty()
    @JoiSchema(Joi.string().required())
    @JoiSchema([CREATE], Joi.string().required())
    @JoiSchema([UPDATE], Joi.string().optional())
    title: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    @JoiSchema([CREATE], Joi.string().required())
    @JoiSchema([UPDATE], Joi.string().optional())
    content: string;
}


