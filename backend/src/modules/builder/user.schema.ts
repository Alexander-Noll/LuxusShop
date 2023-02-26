import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class User {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;
  
  @Prop({ required: true })
  adress: string;

  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  password: string;


}

export const UeserSchema = SchemaFactory.createForClass(User);
