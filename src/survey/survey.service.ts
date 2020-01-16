import { Injectable } from '@nestjs/common';
import { SurveyRepository } from './data/survey.repository';

@Injectable()
export class SurveyService {
  constructor(
    private readonly repository: SurveyRepository
  ){}

  async createNewSurvey({title}) {
    const exist = await this.repository.findExistingTitle(title);
    if (!exist) {
      const survey = this.repository.create();
      survey.setTitle(title);
      this.repository.save(survey);
    } else {
      throw new Error('Survey with the same title already exist!');
    }
  }
  
}