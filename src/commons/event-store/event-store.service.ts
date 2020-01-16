import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

@Injectable()
export class EventStoreService {
  constructor(
    private eventBus: EventBus,
  ){
    this.eventBus.subscribe(event => {
      // can put some logic here
    });
  }
}