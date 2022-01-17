import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { JoiPipeModule } from 'nestjs-joi';
import { postSchema } from 'src/models/posts.schema';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports:[JoiPipeModule,
    MongooseModule.forFeature([
    { name: 'Post', schema: postSchema },
]),],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
