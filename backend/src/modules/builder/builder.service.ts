import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './items.schema';
import { Product } from './product.schema';
import { User } from './user.schema';

@Injectable()
export class BuilderService implements OnModuleInit {
  constructor(
    private httpService: HttpService,
    @InjectModel('items') private itemEventModel: Model<Item>,
    @InjectModel('user') private userModel: Model<User>,
  ) {}

  async getAllProducts(){
    const response = await this.itemEventModel.find().exec()
    return response; 
  }


  async handleFilterRequest(brands: string[], types: string[]){

    if(brands.length === 0){
      const response = await this.itemEventModel.find({type: { $in: types  }}).exec()
      return response;
    }
    if(types.length === 0){
      const response = await this.itemEventModel.find({brand: { $in: brands  }}).exec()
      return response;
    }
    else{
      const response = await this.itemEventModel.find({ brand: { $in: brands },type: { $in: types  }}).exec()
      return response;
    }
  }


  async handleUserRequest(data: any){
    const filter = { email: data.email };
    const response = await this.userModel.findOneAndUpdate(filter, data, {upsert: true}).exec()
      return response;
  }
  async getProduct(key: string) {
    console.log(key)
    return await this.itemEventModel.find({ type: key }).exec();
  }

  async deleteProduct(id: string) {
    return await this.itemEventModel.findOneAndDelete({ productId: id }).exec();
  }
  async store(event: Item) {
    // filter searched for id if id is found it updates parameters
    const filter = { productId: event.productId };

    await this.itemEventModel
      .findOneAndUpdate(filter, event, { upsert: true })
      .exec();
    return 'stored';
  }

  async GetUserByEmail(email : string){
    return await this.userModel.findOne({email : email}).exec();
  }
  async getProducts() {
    return await this.itemEventModel.find({}).select('productId').exec();
  }


  async findAllByBrandAndType(brands: string[], types: string[]): Promise<Product[]> {
    return this.itemEventModel.find({
      brand: { $in: brands },
      type: { $in: types }
    }).exec();
  }
  async onModuleInit() {
    this.store({
      productId: 'A24B23C22',
      name: 'B01 42 Six Nations Italy ',
      type: 'Watch',
      model: 'Chronomat ',
      brand: 'Breitling',
      isSale: true,
      imgId: './assets/products/1000.png',
      description:
        'The Chronomat B01 42 Six Nations Italy is a luxury wristwatch from the Swiss brand Breitling. It is part of the Six Nations collection, which is inspired by international rugby, and is designed to pay tribute to the Italian national team. The watch features a 42mm case made of stainless steel and is powered by the Breitling in-house B01 movement, which is known for its accuracy and reliability. The watch also features a black dial with a 6-hour chronograph function, as well as a date display and a tachymeter scale. The watch is finished with a brown leather strap, which complements the overall design of the watch and gives it a classic, sophisticated look.',
      amount: 1,
      price: '8.800$',
    });
  }
}
