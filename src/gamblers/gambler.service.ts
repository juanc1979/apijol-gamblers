import { Injectable, Logger } from '@nestjs/common';
import { GamblerDto } from './dtos/gambler.dto';

@Injectable()
export class GamblerService {
  private readonly logger = new Logger(GamblerService.name);

  getGambler(gamblerData: GamblerDto): GamblerDto {
    return gamblerData;
  }
}
