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
    const response = await this.appService.handleFilterRequest(filters.brand,filters.product);
    return response;
  }

  @Post('/signUp')
  async handleUserRequest(@Body() user: any) {
    const response = await this.appService.handleUserRequest( user);
    console.log(user)
    return response;
  }
  @Get("/test")
  async test() {
    console.log(await this.appService.handleGetProduct("Watch"));
   return ;
  }

  @Get("/all")
  async getAllProducts() {
    return await this.appService.getAllProducts();

  }
}
