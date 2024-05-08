import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { nanoid } from 'nanoid';
import { Observable, tap } from 'rxjs';
import { WinstonLoggerService } from '../logger/winston-logger/winston-logger.service';

@Injectable()
export class RequestLoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: WinstonLoggerService) {
    this.logger.setContext(RequestLoggingInterceptor.name);
  }


  handleHTTPRequest(req: any, next: CallHandler): Observable<any> {
    const now = Date.now();

    const { method, url, body, ip, query } = req;

    const requestHash = nanoid();

    this.logger.log(`HTTP request ${requestHash}`, {
      method,
      url,
      body,
      ip,
      query,
    });
    return next
      .handle()
      .pipe(
        tap((responseBody) =>
          this.logger.log(
            `HTTP response ${requestHash} +${Date.now() - now}ms`,
            responseBody,
          ),
        ),
      );
  }
}
