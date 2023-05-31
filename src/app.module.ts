import { Module } from '@nestjs/common';
import { ContactusModule } from './contactus/contactus.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:vtradmin123@vtrdatabase.m67palb.mongodb.net/',),ContactusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
