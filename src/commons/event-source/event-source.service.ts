import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

@Injectable()
export class EventSourceService {
  constructor(
    private eventBus: EventBus,
  ){
    this.eventBus.subscribe(event => {
      console.log(event);
    });
  }
}