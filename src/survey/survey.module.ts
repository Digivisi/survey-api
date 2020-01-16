import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveyRepository } from './data/survey.repository';
import { CommandHandlers } from './command/handlers';
import { EventHandlers } from './events/handlers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([SurveyRepository])],
  controllers: [SurveyController],
  providers: [
    SurveyService,
    ...CommandHandlers,
    ...EventHandlers
  ],
  exports: []
})
export class SurveyModule{}