import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/*
  (node:3620) MaxListenersExceededWarning:
  Possible EventEmitter memory leak detected. 
  11 disconnect listeners added to [Socket]. 
  Use emitter.setMaxListeners() to increase limit
*/
require('events').EventEmitter.prototype._maxListeners = 0

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
