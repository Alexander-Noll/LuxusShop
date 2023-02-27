
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Product {
  @Prop({ required: true })
  productId: string;

 

}

export const ProductSchema = SchemaFactory.createForClass(Product);
