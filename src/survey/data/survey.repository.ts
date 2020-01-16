import { SurveyModel } from './survey.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SurveyRepository {
  findOneById(id: string): SurveyModel{
    return new SurveyModel();
  }
}