import { Body, Injectable } from '@nestjs/common';
import { AnyARecord } from 'dns';
import { BuilderService } from './modules/builder/builder.service';

@Injectable()
export class AppService {
  async handleProduct(params: any) {
    return await this.modelBuilderService.store(params);
  }

  async handleGetProduct(key: any) {
    return await this.modelBuilderService.getProduct(key);
  }

  async handleUserRequest( data: any){
  
    return await this.modelBuilderService.handleUserRequest(data);
  }

 async handleFilterRequest(brands: string[], types: string[])  {
  return await this.modelBuilderService.handleFilterRequest(brands,types);
  
 }
 async getAllProducts(){
  return await this.modelBuilderService.getAllProducts();
 }
  getHello(): string {
    return 'Hello World!';
  }

  constructor(private readonly modelBuilderService: BuilderService) {}
}
