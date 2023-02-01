import { HttpService } from '@nestjs/axios';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { identity } from 'rxjs';
import { urlToHttpOptions } from 'url';
import { BuildEvent } from './build-even.schema';
import { items } from './items.schema';

@Injectable()
export class BuilderService implements OnModuleInit {
  constructor(
    private httpService: HttpService,
    @InjectModel('items') private buildEventModel: Model<items>,
  ) {
    this.store({
      price: '222',
      product: 'Uhr',
      amount: 1,
      id: '100220',
    });
  }

  async store(event: items) {
    // filter searched for id if id is found it updates parameters
    const filter = { id: event.id };
    return this.buildEventModel.findOneAndUpdate(filter, event, { upsert: true });
  }
  async onModuleInit() {}
}
