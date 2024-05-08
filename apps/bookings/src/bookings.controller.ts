import { Controller, Post, Body, Get } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/bookings.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  @MessagePattern({ cmd: 'create-booking' })
  createBooking(@Body() payload: CreateBookingDto) {
    this.bookingsService.createBooking(payload);
  }
  @Get()
  @MessagePattern({ cmd: 'get-all-booking' })
  getAllBookings() {
    this.bookingsService.getAllBookings();
  }
}
