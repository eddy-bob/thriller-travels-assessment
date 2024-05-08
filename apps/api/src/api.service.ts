import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  constructor() {}

  getHello(): string {
    console.log('hiii');
    return 'Hello World!';
  }
}
