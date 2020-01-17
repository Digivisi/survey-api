import { SurveyRdbmsStorage } from './storages/survey-rdbms.storage';
import { Injectable } from '@nestjs/common';
import { SurveyCacheStorage } from './storages/survey-cache.storage';

@Injectable()
export class SurveyRepository {
  constructor(
    private readonly rdbmsStorage: SurveyRdbmsStorage,
    private readonly cacheStorage: SurveyCacheStorage
  ){}

  create() {
    return this.rdbmsStorage.create();
  }

  save(survey) {
    return this.rdbmsStorage.save(survey);
  }
  
  findExistingTitle(pTitle: string) {
    return this.rdbmsStorage.findOne({where: {title: pTitle}});
  }
  
}