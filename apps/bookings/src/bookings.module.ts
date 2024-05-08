import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import configuration from 'config/configuration';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from 'interceptor/error.interceptor';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [configuration],
    }),
  ],
  controllers: [BookingsController],
  providers: [
    BookingsService,
   
  ],
})
export class BookingsModule {}
