import {CommandBus} from '@nestjs/cqrs';
import { CreateSurveyCommand } from './command/impl/create-survey.command';
import { CreateSurveyDto } from './data/create-survey.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SurveyService {
  constructor(
    private readonly commandBus: CommandBus
  ){}

  createSurvey(createSurveyDto: CreateSurveyDto){
    const {title} = createSurveyDto;
    return this.commandBus.execute(new CreateSurveyCommand(title));
  }
  updateSurvey(){}
  deleteSurvey(){}
}