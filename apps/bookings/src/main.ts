import { NestFactory } from '@nestjs/core';
import { BookingsModule } from './bookings.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { RABBITMQ_BOOKINGS_QUEUE } from 'constant';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BookingsModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: RABBITMQ_BOOKINGS_QUEUE,
      },
    },
  );
  await app.listen();
}
bootstrap();
