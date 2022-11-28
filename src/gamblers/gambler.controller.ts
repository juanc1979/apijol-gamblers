import { UseGuards } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { GamblerDto } from './dtos/gambler.dto';
import { GamblerService } from './gambler.service';

@Controller('gamblers')
@ApiTags('gamblers')
export class GamblerController {
  constructor(private gamblerService: GamblerService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('/validated')
  async get(@Body() request: GamblerDto): Promise<GamblerDto> {
    try {
      return await this.gamblerService.getGambler(request);
    } catch (error) {
      throw new HttpException(error.data, error.status);
    }
  }
}
