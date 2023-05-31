import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactUsDocument =   HydratedDocument<ContactUS>;

@Schema()
export class ContactUS {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  telefone: string;
  
  @Prop()
  duvida: string;
}

export const ContactUsSchema = SchemaFactory.createForClass(ContactUS);