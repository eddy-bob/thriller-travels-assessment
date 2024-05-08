import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateBookingDto } from './dto/bookings.dto';

interface Booking {
  id: string;
  userId: string;

  flightId: string;

  departureDate: string;

  returnDate: string;
}

@Injectable()
export class BookingsService {
  private readonly bookings: Booking[] = []; // Assuming User is a model/interface representing bookings data
  createBooking(data: CreateBookingDto) {
    const newBooking: Booking = {
      id: uuidv4(), // Assuming you're using UUIDs for user IDs
      ...data,
    };
    this.bookings.push(newBooking);
    return newBooking;
  }
  getAllBookings() {
    return this.bookings;
  }
}
