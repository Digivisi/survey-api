import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveyRepository } from './data/survey.repository';
import { SurveyRdbmsStorage } from './data/storages/survey-rdbms.storage';
import { CommandHandlers } from './command/handlers';
import { EventHandlers } from './events/handlers';
import { SurveyCacheStorage } from './data/storages/survey-cache.storage';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([SurveyRdbmsStorage])],
  controllers: [SurveyController],
  providers: [
    SurveyRepository,
    SurveyCacheStorage,
    SurveyService,
    ...CommandHandlers,
    ...EventHandlers
  ],
  exports: []
})
export class SurveyModule{}