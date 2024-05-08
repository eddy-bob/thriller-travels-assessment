import { Controller, Get, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateBookingDto } from './dto/bookings.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  createBooking(@Payload() data: CreateBookingDto) {
    return this.bookingsService.createBooking(data);
  }
  @Get()
  getAllBookings() {
    return this.bookingsService.getAllBookings();
  }
}
