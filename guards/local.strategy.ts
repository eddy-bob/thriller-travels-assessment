import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { RABBITMQ_USER_SERVICE } from 'constant';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(RABBITMQ_USER_SERVICE) private rabbitClient: ClientProxy,
  ) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    let user: any;
    user = this.rabbitClient.send(
      { cmd: 'validate-user' },
      { email, password },
    );
    console.log(user);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }
}
