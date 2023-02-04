import { Controller, Get, Post , Param} from '@nestjs/common';
import { Body, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/product')
  handleProduct(@Body() params: any){
    return this.appService.handleProduct(params);
  }


  @Get('product/:id')
  handleGetProduct(@Param('id') key: string): Promise<any> {
    return this.appService.handleGetProduct(key);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
