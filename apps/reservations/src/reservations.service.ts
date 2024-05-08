// hotel-reservation-service/src/services/reservation.service.ts

import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/reservation.dto';
import { Reservation } from './type';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ReservationService {
  private readonly reservations: Reservation[] = []; // Array to store reservations

  async createReservation(reservationDto: CreateReservationDto): Promise<Reservation> {
    // Generate a unique ID for the reservation
    const reservationId = uuidv4();

    // Create a new reservation object using the DTO and generated ID
    const reservation: Reservation = {
      id: reservationId,
      ...reservationDto
    };

  
    this.reservations.push(reservation);

    // Return the created reservation
    return reservation;
  }

  // Additional methods for retrieving, updating, or deleting reservations can be added here
}
