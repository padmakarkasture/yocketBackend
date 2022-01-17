import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { PostsModule } from './modules/posts/posts.module';

const ENV = `.env.${process.env.NODE_ENV}`
console.log(`using ${ENV} environment`)
@Module({
  imports: [PostsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV,

    }),MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
