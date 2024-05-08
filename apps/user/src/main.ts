import { NestFactory } from '@nestjs/core';

import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RABBITMQ_USER_QUEUE } from 'constant';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: RABBITMQ_USER_QUEUE,
      },
    },
  );
  await app.listen();
}
bootstrap();
