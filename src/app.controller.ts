import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';
import { Shelter } from './shelter.models';
import { ShelterUpdateDto } from './shelterUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/shelters/create')
  async createShelter(@Body() userDto: Shelter){
    return this.appService.createShelter(userDto)
  }

  @Get('/shelters/')
  readShelter(){
    return this.appService.readShelter()
  }

  @Put('/shelters:id')
  async updateShelter(
    @Param('id') id:string ,@Body() updateData:ShelterUpdateDto
    ):Promise<Shelter>{
    return this.appService.updateShelter(id,updateData)
  }

  @Delete(':id')
  async deleteShelter(@Param('id') id:string){
    return this.appService.deleteShelter(id)
  }
}
