import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesController } from './services/services.controller';
import { ServicesService } from './services/services.service';

@Module({
  imports: [],
  controllers: [AppController, ServicesController],
  providers: [AppService, ServicesService],
})
export class AppModule {}
