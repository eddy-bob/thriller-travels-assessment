import { Module } from '@nestjs/common';
import { ReservationController } from './reservations.controller';
import { ReservationService } from './reservations.service';
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
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationsModule {}
