import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RABBITMQ_USER_SERVICE } from 'constant';
import { CreateUserDto } from './dto/user.dto';
import { UpdateUserDto } from 'apps/user/src/dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(RABBITMQ_USER_SERVICE)
    private userClient: ClientProxy,
  ) {}

  findAllUsers() {
    return this.userClient.send({ cmd: 'get-all-users' }, {});
  }
  register(data: CreateUserDto) {
    return this.userClient.send({ cmd: 'register' }, data);
  }
  findOneUser(id: string) {
    return this.userClient.send({ cmd: 'find-user' }, id);
  }
  removeUser(id: string) {
    return this.userClient.send({ cmd: 'remove-user' }, id);
  }
  updateUser(id: string, data: UpdateUserDto) {
    return this.userClient.send({ cmd: 'update-user' }, { id, data });
  }
}
