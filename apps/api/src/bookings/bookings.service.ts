import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RABBITMQ_BOOKINGS_SERVICE } from 'constant';
import { CreateBookingDto } from './dto/bookings.dto';

@Injectable()
export class BookingsService {
  constructor(
    @Inject(RABBITMQ_BOOKINGS_SERVICE) private bookingClient: ClientProxy,
  ) {}

  createBooking(data: CreateBookingDto) {
    this.bookingClient.send({ cmd: 'create-booking' }, data);
  }
  getAllBookings() {
    this.bookingClient.send({ cmd: 'get-all-booking' }, {});
  }
}
