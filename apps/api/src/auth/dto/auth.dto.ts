import { IsEmail, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}


