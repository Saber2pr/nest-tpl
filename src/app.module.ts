import { WinstonModule } from 'nest-winston';

import { MiddlewareConsumer, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { winstonOptions } from './config';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HelloService } from './modules/hello/hello.service';
import { HelloController } from './modules/hello/hello.controller';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [WinstonModule.forRoot(winstonOptions), HelloModule],
  controllers: [AppController, HelloController],
  providers: [HelloService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
