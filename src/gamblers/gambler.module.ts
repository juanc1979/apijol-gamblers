import { Module } from '@nestjs/common';
import { GamblerController } from './gambler.controller';
import { GamblerService } from './gambler.service';

@Module({
  controllers: [GamblerController],
  providers: [GamblerService],
})
export class GamblerModule {}
