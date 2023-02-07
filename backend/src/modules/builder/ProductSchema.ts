import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HexColorString } from 'discord.js';

@Schema()
export class Product {
  @Prop({ required: true })
  productId: string;

 

}

export const ProductSchema = SchemaFactory.createForClass(Product);
