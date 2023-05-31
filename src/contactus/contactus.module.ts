import { Module } from '@nestjs/common';
import { ContactusService } from './contactus.service';
import { ContactusController } from './contactus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactUsSchema,ContactUS } from './entities/contactus.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: ContactUS.name, schema: ContactUsSchema }])],
  controllers: [ContactusController],
  providers: [ContactusService]
})
export class ContactusModule {}
