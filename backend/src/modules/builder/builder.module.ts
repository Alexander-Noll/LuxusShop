import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BuilderService } from './builder.service';
import { ItemsSchema } from './items.schema';
import { ProductSchema } from './product.schema';
import { UserSchema } from './user.schema';


@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: 'items', schema: ItemsSchema },
 
      { name: 'user', schema: UserSchema },
    ]),
  ],

  providers: [BuilderService],
  exports: [BuilderService],
})
export class BuilderModule {}
