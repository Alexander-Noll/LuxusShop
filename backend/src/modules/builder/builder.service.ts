import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import {  InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './items.schema';

@Injectable()
export class BuilderService implements OnModuleInit {
  constructor(
    private httpService: HttpService,
    @InjectModel('items') private buildEventModel: Model<Item>,
  ) {
    this.store({
      price: '222',
      product: 'Uhr',
      amount: 1,
      id: '100220',
    });
  }

  async getProduct(id: string){
    return  await this.buildEventModel.find({ tags: id }).exec();
  }
  async store(event: Item) {
    // filter searched for id if id is found it updates parameters
    const filter = { id: event.id };
    return this.buildEventModel.findOneAndUpdate(filter, event, { upsert: true });
  }
  async onModuleInit() {}
}
