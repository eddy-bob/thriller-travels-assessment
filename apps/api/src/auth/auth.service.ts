import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RABBITMQ_AUTH_SERVICE } from 'constant';
import { User } from './type';

@Injectable()
export class AuthService {
  constructor(@Inject(RABBITMQ_AUTH_SERVICE) private authClient: ClientProxy) {}

  login(user: User) {
    return this.authClient.send({ cmd: 'login' }, user);
  }
}
