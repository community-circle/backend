import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShelterDocument = Shelter & Document

@Schema()
export class Shelter {
  @Prop()
  name: string;

  // @Prop()
  // address: string;

  @Prop()
  unit_type: string;

  @Prop()
  number_of_units: number;

  @Prop()
  number_of_available: number;

  @Prop()
  tags: string[];

  @Prop({ default: Date.now })
  date_added: Date;
}


export const ShelterSchema = SchemaFactory.createForClass(Shelter)