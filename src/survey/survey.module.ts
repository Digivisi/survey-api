import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveyRepository } from './data/survey.repository';
import { SurveyRdbmsStorage } from './data/storages/survey-rdbms.storage';
import { SurveyCacheStorage } from './data/storages/survey-cache.storage';
import { SurveyViewStorage } from './data/storages/survey-view.storage';
import { CommandHandlers } from './command/handlers';
import { EventHandlers } from './events/handlers';
import { FirebaseModule } from '../commons/vendors/firebase/firebase.module';

@Module({
  imports: [
    CqrsModule, 
    TypeOrmModule.forFeature([SurveyRdbmsStorage]),
    FirebaseModule.forRoot({
      serviceAccountJsonFile: 'service-account.json'
    })
  ],
  controllers: [SurveyController],
  providers: [
    SurveyCacheStorage,
    SurveyViewStorage,
    SurveyRepository,
    SurveyService,
    ...CommandHandlers,
    ...EventHandlers
  ],
  exports: []
})
export class SurveyModule{}