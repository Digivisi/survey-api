import { Controller, Post, Body } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { CreateSurveyDto } from './data/create-survey.dto';

@Controller('survey')
export class SurveyController {
  constructor(
    private readonly surveyService: SurveyService
  ){}

  @Post()
  async createSurvey(@Body() createSurveyDto: CreateSurveyDto){
    console.log(createSurveyDto);
    console.log("====");
    const {title} = createSurveyDto;
    this.surveyService.createSurvey({title});
  }
  
}