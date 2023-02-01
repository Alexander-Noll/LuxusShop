import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class items {
  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  product: string;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  id: string;
}

export const ItemsSchema = SchemaFactory.createForClass(items);
