import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  try {
    await app.listen(PORT, () => {
      console.log(`Api gateway is running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
