import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../type';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  signin(@Payload() data: User) {
    return this.authService.login(data);
  }
  
}
