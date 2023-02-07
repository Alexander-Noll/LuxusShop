import { Controller, Get, Post , Param} from '@nestjs/common';
import { Body, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/add')
  handleProduct(@Body() params: any){
    return this.appService.handleProduct(params);
  }

  @Get('query/:id')
  handleQuery(@Param('id') key: string){
    return this.appService.handleQuery(key);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
