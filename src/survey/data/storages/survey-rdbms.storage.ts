import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { Survey } from '../survey.entity';

@EntityRepository(Survey)
@Injectable()
export class SurveyRdbmsStorage extends Repository<Survey> {}