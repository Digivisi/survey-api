import { SurveyRdbmsStorage } from './storages/survey-rdbms.storage';
import { Injectable } from '@nestjs/common';
import { SurveyCacheStorage } from './storages/survey-cache.storage';
import { SurveyViewStorage } from './storages/survey-view.storage';

@Injectable()
export class SurveyRepository {
  constructor(
    private readonly rdbmsStorage: SurveyRdbmsStorage,
    private readonly cacheStorage: SurveyCacheStorage,
    private readonly viewStorage: SurveyViewStorage,
  ) { }

  create() {
    return this.rdbmsStorage.create();
  }

  save(survey) {
    this.rdbmsStorage.save(survey);
    return true;
  }

  findExistingTitle(pTitle: string) {
    return this.rdbmsStorage.findOne({ where: { title: pTitle } });
  }

}