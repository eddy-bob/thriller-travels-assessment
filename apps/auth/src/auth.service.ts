import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../type';
import { SuccessResponse } from 'utils/response';

import { JwtPayload } from '../../../guards/jwt.strategy';


@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  private async postSignin(user: User) {
    const payload: JwtPayload = { sub: user.id };
    user.password && delete user.password;
    return {
      user,
      accessToken: this.jwtService.sign(payload),
    };
  }

  async login(user: User): Promise<SuccessResponse> {
    const data = await this.postSignin(user);
    return new SuccessResponse(data, 'Signin successful');
  }
}
