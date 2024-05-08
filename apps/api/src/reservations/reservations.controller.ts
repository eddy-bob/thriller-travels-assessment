import { Controller, Post, Body } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/reservation.dto';

@Controller('reservation')
export class AuthController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  createReservation(@Body() data: CreateReservationDto) {
    return this.reservationsService.createReservation(data);
  }
}
