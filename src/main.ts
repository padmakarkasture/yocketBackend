import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('mongoConnnectionString: ', process.env.MONGO_CONNECTION_STRING)

  //swagger config
  const swaggerConfig = new DocumentBuilder()
      .addServer(process.env.SWAGGER_BASEPATH)
      .setTitle(process.env.SWAGGER_TITLE)
      .setDescription(process.env.SWAGGER_DESC)
      .setVersion(process.env.SWAGGER_VERSION)
      .addTag(process.env.SWAGGER_TAG)
      .addBearerAuth()
      .build()

  const document = SwaggerModule.createDocument(app, swaggerConfig)



      SwaggerModule.setup(process.env.SWAGGER_DOC_PATH, app, document)


  await app.listen(process.env.PORT);

}
bootstrap();
