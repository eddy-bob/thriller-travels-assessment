import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  RABBITMQ_USER_QUEUE,
  RABBITMQ_AUTH_QUEUE,
  RABBITMQ_BOOKINGS_QUEUE,
  RABBITMQ_RESERVATIONS_QUEUE,
  RABBITMQ_RESERVATIONS_SERVICE,
  RABBITMQ_USER_SERVICE,
  RABBITMQ_AUTH_SERVICE,
  RABBITMQ_BOOKINGS_SERVICE,
} from 'constant';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: RABBITMQ_USER_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: RABBITMQ_USER_QUEUE, // Queue name for user service
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: RABBITMQ_AUTH_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: RABBITMQ_AUTH_QUEUE, // Queue name for auth  service
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: RABBITMQ_RESERVATIONS_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: RABBITMQ_RESERVATIONS_QUEUE, // Queue name for reservations booking service
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: RABBITMQ_BOOKINGS_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: RABBITMQ_BOOKINGS_QUEUE, // Queue name for bookings booking service
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class RabbitmqModule {}
