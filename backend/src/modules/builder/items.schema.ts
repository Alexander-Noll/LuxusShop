import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HexColorString } from 'discord.js';

@Schema()
export class Item {
  @Prop({ required: true })
  productId: string;
  //product name
  @Prop({ required: true })
  name: string;
  //filter type {watch}
  @Prop({ required: true })
  type: string;
  //model
  @Prop({ required: true })
  model: string;
  // brand
  @Prop({ required: true })
  brand: string;
  // if sale
  @Prop({ required: true })
  isSale: boolean;
  // to add the correspsonding img
  @Prop({ required: true })
  imgId: number;
  // description
  @Prop({ required: true })
  description: string;
  //amount
  @Prop({ required: true })
  amount: number;
  //price
  @Prop({ required: true })
  price: number;

}

export const ItemsSchema = SchemaFactory.createForClass(Item);
