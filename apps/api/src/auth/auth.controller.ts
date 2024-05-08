import { Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'guards/local-auth.guard';
import { CurrentUser } from 'decorators/user.decorator';

import { User } from './type';
import { Public } from 'decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  signin(@CurrentUser() user: User) {
    return this.authService.login(user);
  }
}
