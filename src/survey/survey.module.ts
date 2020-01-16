import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveyRepository } from './data/survey.repository';
import { CommandHandlers } from './command/handlers';
import { EventHandlers } from './events/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [SurveyController],
  providers: [
    SurveyService,
    SurveyRepository,
    ...CommandHandlers,
    ...EventHandlers
  ]

})
export class SurveyModule{}