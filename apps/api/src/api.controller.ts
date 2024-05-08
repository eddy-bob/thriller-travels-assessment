import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { Public } from 'decorators/public.decorator';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) { }
  
  @Public()
  @Get()
  getHello(): string {
    return this.apiService.getHello();
  }
}
