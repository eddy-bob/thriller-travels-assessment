// hotel-reservation-service/src/controllers/reservation.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { ReservationService } from './reservations.service';
import { CreateReservationDto } from './dto/reservation.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @MessagePattern({ cmd: 'create-reservation' })
  async createReservation(@Payload() data: CreateReservationDto) {
    const reservation = await this.reservationService.createReservation(data);
    return { reservation }; // Return the created reservation
  }
}
