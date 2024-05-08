import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../type';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @MessagePattern({ cmd: 'register' })
  createUser(@Payload() createUserDto: CreateUserDto): User {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  @MessagePattern({ cmd: 'get-all-users' })
  findAllUsers(): User[] {
    return this.userService.findAll();
  }

  @MessagePattern({ cmd: 'get-user' })
  findOneUser(@Payload() userId: string): User {
    return this.userService.findOne(userId);
  }

  @MessagePattern({ cmd: 'validate-user' })
  @Get()
  validateUser(@Payload() payload: { email: string; password: string }) {
    this.userService.validateUser(payload);
  }
  @Put()
  @MessagePattern({ cmd: 'update-user' })
  updateUser(@Payload() payload: { id: string; data: UpdateUserDto }): User {
    return this.userService.updateUser(payload.id, payload.data);
  }

  @Delete()
  @MessagePattern({ cmd: 'delete-user' })
  removeUser(@Payload() id: string): User {
    return this.userService.remove(id);
  }
}
