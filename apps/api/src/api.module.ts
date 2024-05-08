import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { RabbitmqModule } from './rabbitmq.module';
import configuration from 'config/configuration';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from 'interceptor/error.interceptor';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { ReservationController } from 'apps/reservations/src/reservations.controller';

import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { BookingsController } from './bookings/bookings.controller';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { BookingsService } from './bookings/bookings.service';
import { ReservationService } from 'apps/reservations/src/reservations.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'guards/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [configuration],
    }),
    RabbitmqModule,
    JwtModule.register({
      secret: configuration().jwt.secret,
      signOptions: { expiresIn: configuration().jwt.expiresIn },
    }),
  ],
  controllers: [
    ApiController,
    ReservationController,
    UserController,
    AuthController,
    BookingsController,
  ],
  providers: [
    ApiService,
    UserService,
    AuthService,
    BookingsService,
    ReservationService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
  ],
})
export class ApiModule {}
