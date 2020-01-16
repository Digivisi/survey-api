import { AggregateRoot, IEvent } from '@nestjs/cqrs';
import { SurveyCreatedEvent } from '../events/impl/survey-created.event';

export class SurveyModel extends AggregateRoot {
  private fId: string;
  private fTitle: string;


  get id(){
    return this.fId;
  }
  
  setTitle(value) {
    this.fTitle = value;
    return this;
  }

  get title(){
    return this.fTitle;
  }

  async save(){
    console.log('Survey Model created!');
    this.apply(new SurveyCreatedEvent(this.title));
    return this;
  }

  async update(){
    console.log('Survey Model updated');
  }
}