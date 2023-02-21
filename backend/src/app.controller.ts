import { Controller, Get, Post , Param} from '@nestjs/common';
import { Body, Injectable } from '@nestjs/common';
import { filter } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/add')
  handleProduct(@Body() params: any){
    return this.appService.handleProduct(params);
  }


 @Post('/filter')
  async handleFilterRequest(@Body() filters: any) {
    console.log(this.appService.handleFilterRequest(filters.brand,filters.product));
   
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
