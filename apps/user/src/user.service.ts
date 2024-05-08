import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from '../type';

@Injectable()
export class UserService {
  private readonly users: User[] = []; // Assuming User is a model/interface representing user data

  async validateUser(payload: { email: string; password: string }) {
    const isUser: User = this.users.find((user: User) => {
      return user.email === payload.email;
    });
    if (!isUser) return;
    if (isUser.password !== payload.password) return;
    return isUser;
  }
  createUser(createUserDto: CreateUserDto): User {
    // Logic to create a new user
    const newUser: User = {
      id: uuidv4(), // Assuming you're using UUIDs for user IDs
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    // Logic to fetch all users
    return this.users;
  }

  findOne(id: string): User {
    // Logic to find a user by ID
    return this.users.find((user: User) => {
      user.id = id;
    });
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): User {
    // Logic to update a user
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updateUserDto,
    };
    return this.users[userIndex];
  }

  remove(id: string): User {
    // Logic to remove a user
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException('User not found');
    }
    const deletedUser = this.users.splice(userIndex, 1)[0];
    return deletedUser;
  }
}
