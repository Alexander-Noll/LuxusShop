import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class User {
 
  @Prop({ required: true })
  email: string;


  @Prop({ required: true })
  password: string;

  
  @Prop({ required: true, type: MongooseSchema.Types.Mixed })
  data: any;


}

export const UserSchema = SchemaFactory.createForClass(User);
