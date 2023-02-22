import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShelterSchema } from './shelter.models';
import { QuizSchema } from './shelter.models';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://qqadmin:qqadmin@cluster0.dvyfv8p.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'shelters',schema:ShelterSchema}, {name:'quizzes',schema:QuizSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
