import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  const config: ConfigService = app.get(ConfigService);
  console.log(config);
  const PORT: number = config.get<number>('port');
  console.log(PORT);

  await app.listen(PORT);
}
bootstrap();
