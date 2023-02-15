import { Body, Injectable } from '@nestjs/common';
import { BuilderService } from './modules/builder/builder.service';

@Injectable()
export class AppService {
  async handleProduct(params: any) {
    return await this.modelBuilderService.store(params);
  }

  async handleGetProduct(key: any) {
    return await this.modelBuilderService.getProduct(key);
  }

  //product/watch
  //product/bracelt
  //product/ring
  //product/earring
  //product/chain
  
  async handleQuery(key: string) {
    if (key.startsWith('delete-')) {
      const name = key.substring('delete-'.length);
      return await this.modelBuilderService.deleteProduct(name);
    }
  
    if (key.startsWith('product-')) {
      const name = key.substring('product-'.length);
      return await this.modelBuilderService.getProduct(name);
    }

    if (key=== 'watch') {
      return await this.modelBuilderService.getProduct(key);
    }
    if (key=== 'bracelet') {
      return await this.modelBuilderService.getProduct(key);
    }
    if (key=== 'chain'){
      return await this.modelBuilderService.getProduct(key);
    }
    if (key==='earring') {
      return await this.modelBuilderService.getProduct(key);
    }
    if (key==='ring') {
      return await this.modelBuilderService.getProduct(key);
    }
    if(key === 'hallo'){
      return "hallo";
    }
  }
  async deleteProduct(key: any) {
    return await this.modelBuilderService.deleteProduct(key);
  }
  getHello(): string {
    return 'Hello World!';
  }

  constructor(private readonly modelBuilderService: BuilderService) {}
}
