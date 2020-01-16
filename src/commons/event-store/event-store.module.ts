import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventStoreService } from './event-store.service';

@Module({
  imports: [CqrsModule],
  providers: [EventStoreService]
})
export class EventStoreModule {}