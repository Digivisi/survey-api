import { Repository, EntityRepository } from 'typeorm';
import { Survey } from './survey.entity';

@EntityRepository(Survey)
export class SurveyRepository extends Repository<Survey>{
  
  findExistingTitle(pTitle: string) {
    return this.findOne({where: {title: pTitle}});
  }
  
}