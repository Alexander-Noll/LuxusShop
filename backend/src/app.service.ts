import { Body, Injectable } from '@nestjs/common';
import { BuilderService } from './modules/builder/builder.service';


@Injectable()
export class AppService {
  async handleProduct(params: any){
    return await this.modelBuilderService.store(params)
  }
async handleGetProduct(key: string){
  return await this.modelBuilderService.getProduct(key);
}
  getHello(): string {
    return 'Hello World!';
  }


  constructor(private readonly modelBuilderService: BuilderService) {}

}
