import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RABBITMQ_RESERVATIONS_QUEUE } from 'constant';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ReservationsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: RABBITMQ_RESERVATIONS_QUEUE,
      },
    },
  );
  await app.listen();
}
bootstrap();
