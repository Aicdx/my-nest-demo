import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaException } from './AaaException';
import { AaaGuard } from './aaa.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseFilters(AaaFilter)
  @UseGuards(AaaGuard)
  getHello(): string {
    throw new AaaException('aaa', 'bbb');
    return this.appService.getHello();
  }
}
