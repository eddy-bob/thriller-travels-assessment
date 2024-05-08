import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RABBITMQ_RESERVATIONS_SERVICE } from 'constant';
import { CreateReservationDto } from './dto/reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @Inject(RABBITMQ_RESERVATIONS_SERVICE)
    private reservationClient: ClientProxy,
  ) {}

  createReservation(data: CreateReservationDto) {
    return this.reservationClient.send({ cmd: 'create-reservation' }, data);
  }
}
