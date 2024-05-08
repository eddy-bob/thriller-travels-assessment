import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RABBITMQ_USER_SERVICE } from 'constant';
import { ClientProxy } from '@nestjs/microservices';

export interface JwtPayload {
  sub: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    @Inject(RABBITMQ_USER_SERVICE) private rabbitClient: ClientProxy,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.secret'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    let user: any;

    try {
      user = this.rabbitClient.send({ cmd: 'get-user' }, payload.sub);
      console.log(user);
    } catch (error) {
      throw new UnauthorizedException('Unauthorized');
    }

    return user;
  }
}
