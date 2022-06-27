import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  //ok
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  //test b
  //toan
})
export class AppModule {}
