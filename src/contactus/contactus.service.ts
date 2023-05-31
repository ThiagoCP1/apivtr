import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ContactUS, ContactUsDocument } from './entities/contactus.entity';

@Injectable()
export class ContactusService {
  constructor(@InjectModel(ContactUS.name) private contactUsModel: Model<ContactUsDocument>) {}
  create(createContactusDto: CreateContactusDto) {
   const contactUs = new this.contactUsModel(createContactusDto)
   return contactUs.save()
  }

  findAll() {
    return this.contactUsModel.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} contactus`;
  }

  update(id: number, updateContactusDto: UpdateContactusDto) {
    return `This action updates a #${id} contactus`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactus`;
  }
}
