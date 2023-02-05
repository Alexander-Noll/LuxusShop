import { Controller, Get, Post , Param} from '@nestjs/common';
import { Body, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/product/add')
  handleProduct(@Body() params: any){
    return this.appService.handleProduct(params);
  }

  @Get('product/:id')
  handleGetProduct(@Param('id') key: string) {
    return this.appService.handleGetProduct(key);
  }
  
  @Get('product/delete/:id')
  deleteProduct(@Param('id') key: string){
    return this.appService.deleteProduct(key);
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
