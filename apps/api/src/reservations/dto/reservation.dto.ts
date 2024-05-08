import { IsNotEmpty, IsDateString, IsUUID } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';


export class CreateReservationDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  hotelId: string;

    @IsNotEmpty()
  @IsUUID()
  roomId: string;

  @IsNotEmpty()
  @IsDateString()
  checkInDate: string;

  @IsNotEmpty()
  @IsDateString()
  checkOutDate: string;

  // Additional fields like roomType, numberOfGuests, etc. can be added as needed
}
export class UpdateBookingsDto extends PartialType(CreateReservationDto) {

}
