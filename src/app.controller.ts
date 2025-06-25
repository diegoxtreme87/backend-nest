import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { DbManagerService } from './db-manager/db-manager.service';

@Controller() // localhost:3000/
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbManager: DbManagerService,
  ) {}

  // localhost:3000/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('user')
  getUser(@Query('id') id: number) {
    return this.dbManager.getUser(id);
  }
}
