import { IsNotEmpty, IsDateString, IsUUID } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  flightId: string;

  @IsNotEmpty()
  @IsDateString()
  departureDate: string;

  @IsNotEmpty()
  @IsDateString()
  returnDate: string;

  // Additional fields like hotelId, roomType, etc. can be added as needed
}

export class UpdateBookingsDto extends PartialType(CreateBookingDto) {

}
