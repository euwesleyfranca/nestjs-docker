import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  //    transport: Transport.KAFKA,
  //    options: {
  //      client: {
  //        brokers: ['localhost:9092'],
  //      }
  //    }
  //  });
  await app.listen(3000);
}
bootstrap();
