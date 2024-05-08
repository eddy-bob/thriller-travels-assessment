import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import configuration from 'config/configuration';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorsInterceptor } from 'interceptor/error.interceptor';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { JwtStrategy } from 'guards/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [configuration],
    }),

    JwtModule.register({
      secret: configuration().jwt.secret,
      signOptions: { expiresIn: configuration().jwt.expiresIn },
    }),
  ],

  controllers: [UserController],
  providers: [
    UserService,
    JwtStrategy,
  ],
})
export class UserModule {}
