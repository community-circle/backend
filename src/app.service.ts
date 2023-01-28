import { Injectable } from '@nestjs/common';
import { Shelter, ShelterDocument } from './shelter.models';
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('shelters') private readonly shelterModel: Model<ShelterDocument>
  ){}

  //  creating a user 
  async createShelter(shelter: Shelter): Promise<Shelter>{
     const newShelter = new this.shelterModel(shelter)
     return newShelter.save()
  }

  //  reading the user collection 
  async readShelter(){
    return this.shelterModel.find({})
    .then((user)=>{return user})
    .catch((err)=>console.log(err))
  }

  // upadting the data
  async updateShelter(id,data):Promise<Shelter>{
    return this.shelterModel.findByIdAndUpdate(id,data,{new:true})
  }

  // deleting the data 
  async deleteShelter(id){
    return this.shelterModel.findByIdAndRemove(id)
  }
}
