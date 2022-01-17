import { Type } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import {IsNumber} from 'class-validator'
import *as Joi from "joi";
import { JoiSchema } from "nestjs-joi";

export  class GetPostsDto{
    @ApiProperty()
    @JoiSchema(Joi.number().required())
    page: Number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    size: Number;
}
