import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { SurveyCreatedEvent } from '../impl/survey-created.event';

@EventsHandler(SurveyCreatedEvent)
export class SurveyCreatedHandler implements IEventHandler<SurveyCreatedEvent>{
  handle(event: SurveyCreatedEvent){
    console.log(`Survey ${event.title} created event happened just now`);
  }
}